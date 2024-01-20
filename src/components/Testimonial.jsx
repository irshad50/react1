import React from 'react';

const Testimonial = () => {
  return (
    <div id="testimonial">
    <h2>Testimonial</h2>

    <section>
        <TestimonialCard
        name={"Irshad"}
        feedback={"Your Thinking Skill are so good "}
        
        />
            <TestimonialCard
        name={"Irshad"}
        feedback={"Your Thinking Skill are so good "}
        
        />
            <TestimonialCard
        name={"Irshad"}
        feedback={"Your Thinking Skill are so good "}
        
        />
    </section>
    </div>
  );
};

const TestimonialCard=({name, feedback })=>(
    <article>
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
         alt="User" />
        <h4>{name}</h4>
        <p>{feedback}</p>
    </article>
)

export default Testimonial;
