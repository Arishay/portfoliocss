import React from 'react';
import Image from 'next/image';
import heroimg from '../components/public/Group 2346.png';
import doodle from '../components/public/doodles mixed round.png';
import heroimg2 from '../components/public/Group 62.png';
import doodle2 from '../components/public/doodles mixed round.png';
import groplaast from '../components/public/grouplast-removebg-preview.png';

function Banner() {
  return (
    <div className="banner">
      <div className="hero-section">
        <div className="text-section">
          <h2>
            Creative UI <br />
            <span className="highlight">Designer</span>
          </h2>
          <div className="button-group">
            <button className="hire-button">Hire Me</button>
            <button className="resume-button">Resume</button>
          </div>
        </div>
        <div className="image-section">
        
          <Image src={heroimg} alt="Hero image" className="hero-img" />
        </div>
      </div>

      <section className="about-section">
        <div className="about-content">
          <h1>
            I'm Arisha <span className="name-highlight">Ghaffar</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat quas vel laboriosam commodi tempora, 
            molestiae tenetur dolore dolor sit quos provident ea laudantium, ipsum sequi culpa illo dicta? Iste, praesentium.
          </p>
        </div>
        <div className="about-image">
          <Image src={heroimg2} alt="Hero image" className="hero-img" />
        </div>
      </section>

      <section className="contact-section">
        <div className="project-prompt">
          <h1>
            Got a project in <span className="highlight">mind?</span>
          </h1>
          <Image src={groplaast} alt="Graphic" />
        </div>

        {/* Contact form */}
        <div className="contact-form">
          <form>
            <div className="input-group">
              <input type="text" placeholder="Enter your name" className="input-field" />
              <input type="email" placeholder="Enter your Email" className="input-field" />
            </div>
            <textarea placeholder="Type Your Message" className="message-field"></textarea>
            <button type="submit" className="send-button">Send Now</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Banner;
