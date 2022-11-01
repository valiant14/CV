import { motion } from "framer-motion"
import valiant from '../../../assets/valiant.jpg'
import {Link } from "react-router-dom";

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
                        <p>I love to create beautiful products with delightful user experiences.</p>
                        <div className="button-contactMe">
                            <button className="btn-About">About Me</button>
                            <Link to="/Contact">
                                <button className="btn-Contact">Contact Me</button>
                            </Link>
                        </div>
                    </motion.div>
            </div>
            <div className="WhatIDO">
                <h3>What I Do</h3>
                <div className="Expirience">
                    <div className="exp-container">
                        <div className="exp-icon"></div>
                        <div className="exp-items">
                            <h4>Skill1</h4>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                            
                    </div>
                    <div className="exp-container">
                        <div className="exp-icon"></div>
                        <div className="exp-items">
                            <h4>Skill2</h4>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                    </div>
                </div>
                <div className="Expirience">
                    <div className="exp-container">
                        <div className="exp-icon"></div>
                        <div className="exp-items">
                            <h4>Skill1</h4>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                            
                    </div>
                    <div className="exp-container">
                        <div className="exp-icon"></div>
                        <div className="exp-items">
                            <h4>Skill2</h4>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
        </>
    )

  };
  
  export default Home;