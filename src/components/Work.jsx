
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


import pk from "../assets/Along.jpg";
import ik from "../assets/struggul.jpg";


const Work = () => {

  return (

   
    <div id="work">
       <h2>Work</h2>
       <section>
        <article>
      <Carousel
       infiniteLoop
        autoPlay 
         showStatus={false}
         showArrows={false}
         interval={1000} >
    <div>

          <img src={pk} alt="Along" />
        </div>
        
        <div>
          <img src={ik} alt="struggul" />

        </div>
        
      </Carousel>
      </article>
      </section>
       </div>
  );
};

export default Work;
