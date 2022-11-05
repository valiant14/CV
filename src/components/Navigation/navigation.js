import React from "react";
import { Outlet, Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom"
import Footer from "../Footer/Footer";

const NavigationTab = () => {
    const location = useLocation();

    return (
        <>
        <div className="Navigation-Container">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Component">Component</Link>
                    </li>
                    {/* <li>
                        <Link to="/AboutMe">About Me</Link>
                    </li> */}
                    {/* <li>
                        <Link to="/Contact">Contact</Link>
                    </li> */}
                </ul>
            </nav>
        </div>
        <AnimatePresence initial={false}>
            <Outlet key={location.pathname}/>
        </AnimatePresence>
        <Footer />
      </>
    )
}

export default NavigationTab;