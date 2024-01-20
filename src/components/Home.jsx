import React from 'react';
import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";

import ik from "../assets/irshad.png";

const Home = () => {

 const animations = {

    h1: {
        initial: {
            X: "-100%",
            opacity: 0,
        },
        whileInView: {
            x: 0,
            opacity: 1,
        },
    },
    button: {
        initial: {
            y: "-100%",
            opacity: 0,
        },
        whileInView: {
            y: 0,
            opacity: 1,
        },
    },
};
  return (

<div id="home">
<section>
    <div>
        <motion.h1 {...animations.h1}>
       Hi, I am <br/> Irshad Ali
        </motion.h1>

        <Typewriter
        options={{
            strings: ["Developer", "A  Ddsigner", " Programer"],
            autoStart: true,
            loop: true,
            cursor: "",
            wrapperClaassName: "typewriterpara",
        }}
        />

<div>
<a href="irshadik908@gmail.com"> Hire Me </a>
<a href="#work">
    Project <BsArrowUpRight />
</a>
</div>

<artical>
    <p>
      +<span>0</span>
    </p>
    <span> No Clients Wordwide</span>
</artical>


<aside>
<artical>
    <p>
      +<span>12</span>
    </p>
    <span>Project Complete </span>
</artical>

<artical data-special>
    <p>
      <span>Contact</span>
    </p>
    <span>Official.irshadik908@gmail.com</span>
</artical>
</aside>

    </div>
</section>

<section>

    <img src={ik} alt="Irshad" />

    <BsChevronDown />
</section>


</div>
  );
};

export default Home;
