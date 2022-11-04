import { motion } from "framer-motion"
import './Project.scss'
import ProjectBTN from "../../MyProject/buttons/button";
import ProfileCard from "../../MyProject/profileCard/profile";
import Weather from "../../MyProject/weather/weather";
import Text from "../../Text/text";

import {Col,Row,Card} from 'react-bootstrap'
const Projects = () => {
    return (
      <motion.div
        initial={{ y: "100%"}}
        animate={{ y: "0%"}}
        transition={{duration: 0.75, ease: "easeOut"}}
        exit={{opacity: 1}}
        className="project-bg"
      >
        <div className="Project-Container">
          <motion.h1 animate={{y:"0%"}} initial={{y: "100%"}} transition={{delay: 0.5, duration:0.5}}>
            <div className="Project-items">
              <Row>
                <Col>
                  <ProjectBTN />
                  <Text/>
                </Col>
                <Col>
                  <Weather />
                </Col>
                <Col>
                  <ProfileCard/>
                </Col>
              </Row>
            </div>
          </motion.h1>
        </div>
        
      </motion.div>
    )
  };
  
  export default Projects;