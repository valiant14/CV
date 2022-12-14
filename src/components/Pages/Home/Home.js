import { motion } from "framer-motion"
import valiant from '../../../assets/valiant.jpg'
import {Link } from "react-router-dom";
import { Code, Tool, Share2, Server } from "react-feather";

import Icons from "../../Home/SocialMedia/social";

const Home = () => {


    return (
        <>
        <motion.div
                initial={{ y: "100%"}}
                animate={{ y: "0%"}}
                transition={{duration: 0.75, ease: "easeOut"}}
                exit={{opacity: 1}}
                className="home-bg"
            >
            {/* <div className="Home-Container">
                <motion.h1 animate={{y:"0%"}} initial={{y: "100%"}} transition={{delay: 0.5, duration:0.5}}>
                    Home
                </motion.h1>
            </div> */}
            <div className="Home-Container">
                    <motion.div animate={{opacity: 1}} initial={{opacity: 0}} transition={{delay: 1, duration:0.5,ease: "easeOut"}} className="MyImage">
                        <img src={valiant}></img>
                    </motion.div>
                    <motion.div animate={{y:"0%"}} initial={{y: "100%"}} transition={{delay: 0.3, duration:0.5,ease: "easeOut"}} className="About-Me">
                        <h5>Frontend Engineer & IT Support Specialist</h5>
                        <h3>Valiant F. Ocampo</h3>
                        <p>Hi! I'm a Front-End Engineering.</p>
                        <p>Someone who is modest, hard-working and consistently sets firm goals
                            for myself.
                            <br></br>Also, can maximize my potentials as a productive and active
                            individual giving<br></br> quality performance at all times for the attainment of
                            the goal of the organization<br></br> I aim to be part of.</p>
                        <div className="button-contactMe">
                            <button className="btn-About">About Me</button>
                            <Link to="/Contact">
                                <button className="btn-Contact">Contact Me</button>
                            </Link>
                        </div>
                        <Icons />
                    </motion.div>
                    
            </div>
            <div className="WhatIDO">
                <h3>What I Do</h3>
                <div className="Expirience">
                    <div className="exp-container">
                        <div><Code className="exp-icon"/></div>
                        <div className="exp-items">
                            <h4>Web Developer</h4>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                            
                    </div>
                    <div className="exp-container">
                        <div><Tool className="exp-icon"/></div>
                        <div className="exp-items">
                            <h4>Technical Support</h4>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                    </div>
                </div>
                <div className="Expirience">
                    <div className="exp-container">
                        <div ><Server className="exp-icon"/></div>
                        <div className="exp-items">
                            <h4>System Administrator</h4>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                            
                    </div>
                    <div className="exp-container">
                        <div ><Share2 className="exp-icon"/></div>
                        <div className="exp-items">
                            <h4>Network Technician</h4>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Testimonials">
                <h3>Testimonials</h3>
                <div className="testimonials-container">
                    <div className="Tescard-container">
                        <div className="Tescard-icon"></div>
                        <div className="Tescard-items">
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>  
                            <div className="testCard-name">
                                <h3>William De Leon</h3>
                                <h5>IT Project Manager</h5>
                            </div>
                    </div>
                    <div className="Tescard-container">
                        <div className="Tescard-icon"></div>
                        <div className="Tescard-items">
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>  
                            <div className="testCard-name">
                                <h3>Bader Al Dosary</h3>
                                <h5>IT Manager</h5>
                            </div>
                    </div>
                </div>
            </div>
        </motion.div>
        </>
    )

  };
  
  export default Home;