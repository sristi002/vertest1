import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="f-contact" data-aos="zoom-in-up" data-aos-offset="200">
        <div>
          <p>
            <span className="sseven">
              Connect with us for any queries or support.
              <br />
              We are dedicated to providing you with a hassle-free adoption process 24X7.
              Our only goal is to provide you with a pawsitive experience all the way.
            </span>
          </p>
          <i className="fa fa-whatsapp"></i>
          <i className="fa fa-instagram"></i>
          <i className="fa fa-telegram"></i>
          <i className="fa fa-twitter"></i>
        </div>

        <div>
          <h1>Contact</h1>
          <p>adoptme@gmail.com</p>
          <p>+91 9876543210</p>
          <p>Buliding No 123, Street xyz, Mumbai</p>
        </div>

        <div>
          <h1>Get Involved</h1>
          <p>Adopting Pets</p>
          <p>Shelter and Rescues</p>
          <p>As a Veterinarian</p>
          <p>As a Trainer</p>
          <p>As a Breeder</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
