import { motion } from "framer-motion"

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
            Project
          </motion.h1>
        </div>
        
      </motion.div>
    )
  };
  
  export default Projects;