import React from "react";
import { Outlet, Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom"

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
                        <Link to="/Project">Project</Link>
                    </li>
                    <li>
                        <Link to="/AboutMe">About Me</Link>
                    </li>
                    <li>
                        <Link to="/Contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
        <AnimatePresence initial={false}>
            <Outlet key={location.pathname}/>
        </AnimatePresence>

      </>
    )
}

export default NavigationTab;