import React from 'react';
import {motion } from "framer-motion";
import {AiFillIeCircle,AiFillAndroid,AiFillWindows} from "react-icons/ai";

const Services = () => {
  return (
    <div id="services">
        <h2>Services</h2>
        <section>
            <motion.div className="servicesBox1"> 
            <h3>1+</h3>
            <p>Years Experience</p>
            
            </motion.div>

            <motion.div className="servicesBox2"> 
            <AiFillIeCircle />
            <span>Web devlopment</span>
            
            </motion.div>
            <motion.div className="servicesBox3"> 
            <AiFillAndroid />
            <span>App Devlopment</span>
            </motion.div>

            <motion.div className="servicesBox4"> 
              <AiFillWindows />
              <span>Desktop Development</span>
            
            </motion.div>
        </section>
    </div>
  )
}

export default Services;
