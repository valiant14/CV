
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationTab from '../src/components/Navigation/navigation'
import Home from "../src/components/Pages/Home/Home";
import Project from "../src/components/Pages/Projects/Project";
import Contact from "../src/components/Pages/Contacts/Contact";
import AboutMe from "./components/Pages/AboutMe/AboutMe";
import NoPage from "../src/components/Pages/NoPage/Error404";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavigationTab />}>
          <Route index element={<Home />} />
          <Route path="Project" element={<Project />} />
          <Route path="AboutMe" element={<AboutMe />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
