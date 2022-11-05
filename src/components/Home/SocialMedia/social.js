import React from "react";
import './social.css'
import { Facebook, Instagram,GitHub,Linkedin } from "react-feather";

const Icons = () => {
    return (
        <div class="social-links">
            <a href="https://www.linkedin.com/in/valiant-ocampo-260839199/" target="_Blank"><i class="fab fa-facebook-f"><Linkedin /></i></a>
            <a href="https://github.com/valiant14/CV" target="_Blank"><i class="fab fa-github"><GitHub /></i></a>
            {/* <a href=""><i class="fab fa-linkedin-in"></i> <Linkedin /></a> */}
        </div>
    )
}

export default Icons