import React from 'react';

import{
    AiFillGithub,
    AiFillYoutube,
    AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    
<footer>
    <div>
        <img
         src={"https://cdn.pixabay.com/photo/2017/05/28/20/23/golden-eagle-2352186_1280.jpg"}
         alt="Founder"
        />
        <h2>Irshad ali</h2>
        <p>Knodwlage is tha best way</p>
    </div>
    <aside>
<h2> Social Media</h2>

<article>
    <a href="https://www.youtube.com/@raexperimentshorts721" target={"blank"}>
        <AiFillYoutube />
    </a>
  
    <a href="https://github.com/irshad50/Amazon.clonee" target={"blank"}>
        <AiFillGithub />
    </a>


</article>

    </aside>
    <a href="#home">
        <AiOutlineArrowUp />
    </a>
</footer>

  )
};

export default Footer;
