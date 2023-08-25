import React from "react";

const Testimonial = () => {
  return (
    <section className="testimonial">
      <div className="testimonial-content">
        {/* Testimonial 1 */}
        <div className="testimonial-image">
          <img src="hk.jpg" alt="Helen Keller" />
        </div>
        <blockquote>
          "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence."
        </blockquote>
        <cite className="testimonial-name">- Helen Keller</cite>

        {/* Testimonial 2 */}
        <div className="testimonial-image">
          <img src="mm.jpeg" alt="Marlee Martin" />
        </div>
        <blockquote>
         "I believe in embracing my limitations and making them part of my strengths."
        </blockquote>
        <cite className="testimonial-name">- Marlee Martin</cite>

        {/* Testimonial 3 */}
        <div className="testimonial-image">
          <img src="kj.jpeg" alt="King Jordan" />
        </div>
        <blockquote>
        "I'm committed to sign in everything I communicate, but I also speak. I still believe that I reach more people when I do that. I bridge two different cultures and two different worlds, and I think that bridge still needs work.""
        </blockquote>
        <cite className="testimonial-name">- King Jordan</cite>
      </div>
    </section>
  );
};

export default Testimonial;