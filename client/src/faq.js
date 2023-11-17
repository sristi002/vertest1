import React, { useEffect } from 'react';
import './faq.css';
import Nav from './nav'; 
import Footer from './footer'; 

const FAQ = () => {
  useEffect(() => {
      const accordions = document.querySelectorAll('.accordion-container .accordion');

      accordions.forEach(acco => {
          acco.onclick = () => {
              accordions.forEach(subAcco => {
                  subAcco.classList.remove('active');
              });
              acco.classList.add('active');
          };
      });
  }, []);

  const loadHTML = (url, containerId) => {
      fetch(url)
          .then(response => response.text())
          .then(html => {
              document.getElementById(containerId).innerHTML = html;
          })
          .catch(error => console.error(error));
  };

  

  useEffect(() => {
      const filterButtons = document.querySelectorAll('.filter-button');
      const accordions = document.querySelectorAll('.accordion');

      filterButtons.forEach(button => {
          button.addEventListener('click', () => {
              const selectedCategory = button.getAttribute('data-filter');
              filterAccordions(selectedCategory);
          });
      });

      const filterAccordions = category => {
          accordions.forEach(acco => {
              const accoCategory = acco.getAttribute('data-category');
              if (category === accoCategory) {
                  acco.style.display = 'block';
              } else {
                  acco.style.display = 'none';
              }
          });
      };

      const animalRescueButton = document.querySelector('.filter-button[data-filter="animal-rescue"]');
      animalRescueButton.click();
  }, []);
  return (
    <div>
      <Nav />

      <div id="faq-image">
        <h1 className="faq-heading">Frequently Asked Questions</h1>
      </div>

      <div className="filter-buttons">
        <button className="filter-button" data-filter="animal-rescue">Animal Rescue</button>
        <button className="filter-button" data-filter="animal-adoption">Animal Adoption</button>
        <button className="filter-button" data-filter="volunteering">Volunteering</button>
      </div>

      <div className="container">
        <div className="accordion-container">
          <div className="accordion active" data-category="animal-rescue">
            <div className="accordion-heading">
              <h3> How does the pet adoption process work?</h3>
              <i className="fas fa-angle-down"></i>
            </div>
            <p className="accordion-content">
              The pet adoption process typically involves filling out an application, meeting the pet, and undergoing an adoption interview. Once approved, you can finalize the adoption and take your new furry friend home.
            </p>
          </div>

          <div className="accordion" data-category="animal-rescue">
            <div className="accordion-heading">
              <h3>Are the pets up-to-date on vaccinations and spayed?</h3>
              <i className="fas fa-angle-down"></i>
            </div>
            <p className="accordion-content">
              Yes, our adopted pets are usually spayed/neutered, microchipped, and up-to-date on vaccinations. We prioritize the health and well-being of our animals before they find their forever homes.
            </p>
          </div>

          <div className="accordion" data-category="animal-rescue">
            <div className="accordion-heading">
              <h3>What if I can no longer care for my adopted pet?</h3>
              <i className="fas fa-angle-down"></i>
            </div>
            <p className="accordion-content">
              If unforeseen circumstances arise, we encourage adopters to contact us. We may provide support, resources, or assist in finding a suitable solution to ensure the well-being of the adopted pet.
            </p>
          </div>

          <div className="accordion" data-category="animal-rescue">
            <div className="accordion-heading">
              <h3> Can I adopt if I live in an apartment?</h3>
              <i className="fas fa-angle-down"></i>
            </div>
            <p className="accordion-content">
              Yes, many pets can adapt well to apartment living. However, certain breeds or sizes may be better suited for smaller spaces. Our adoption counselors can guide you in finding a pet that fits your living situation.
            </p>
          </div>

          <div className="accordion" data-category="animal-rescue">
            <div className="accordion-heading">
              <h3>How can I contribute to animal welfare even if I'm not ready to adopt?</h3>
              <i className="fas fa-angle-down"></i>
            </div>
            <p className="accordion-content">
              If you're not ready for adoption, there are various ways to contribute, such as volunteering at shelters, donating supplies, or supporting animal welfare organizations financially. These efforts play a crucial role in helping animals in need.
            </p>
          </div>

          <div className="accordion active" data-category="animal-adoption">
            <div className="accordion-heading">
              <h3>What criteria do I need to meet to adopt a pet?</h3>
              <i className="fas fa-angle-down"></i>
            </div>
            <p className="accordion-content">
              Adoption criteria may vary, but typically include factors such as age, living situation, and the ability to provide a safe and loving environment. Our goal is to ensure a good match between the adopter and the pet.
            </p>
          </div>

          <div className="accordion" data-category="animal-adoption">
            <div className="accordion-heading">
              <h3>Can I adopt a pet if I have other animals at home?</h3>
              <i className="fas fa-angle-down"></i>
            </div>
            <p className="accordion-content">
              Absolutely! We consider the compatibility of the new pet with existing animals during the adoption process. We may recommend a "meet and greet" to ensure harmony among pets in your household.
            </p>
          </div>

          <div className="accordion" data-category="animal-adoption">
            <div className="accordion-heading">
              <h3>Are there adoption fees, and what do they cover?</h3>
              <i className="fas fa-angle-down"></i>
            </div>
            <p className="accordion-content">
              Yes, adoption fees help cover the cost of vaccinations, spaying/neutering, microchipping, and other medical expenses. These fees contribute to the overall well-being of the pet and enable us to continue our rescue efforts.
            </p>
          </div>

          <div className="accordion" data-category="animal-adoption">
            <div className="accordion-heading">
              <h3>How can I prepare my home for a new pet?</h3>
              <i className="fas fa-angle-down"></i>
            </div>
            <p className="accordion-content">
              Preparing your home involves creating a safe and comfortable space for your new pet. This may include pet-proofing, setting up a cozy bed, and having necessary supplies. Our adoption counselors can provide guidance on creating a welcoming environment.
            </p>
          </div>

          <div className="accordion" data-category="animal-adoption">
            <div className="accordion-heading">
              <h3>What support is available after the adoption process?</h3>
              <i className="fas fa-angle-down"></i>
            </div>
            <p className="accordion-content">
              We are committed to supporting adopters even after the adoption is complete. Whether you have questions about pet care, behavior, or need assistance in unforeseen circumstances, our team is here to provide ongoing support and resources.
            </p>
          </div>

          <div className="accordion active" data-category="volunteering">
            <div className="accordion-heading">
              <h3>How can I become a volunteer at your pet adoption center?</h3>
              <i className="fas fa-angle-down"></i>
            </div>
            <p className="accordion-content">
              To become a volunteer, start by filling out our volunteer application form on our website. Once submitted, our volunteer coordinator will reach out to discuss opportunities and schedule an orientation.
            </p>
          </div>

          <div className="accordion" data-category="volunteering">
            <div className="accordion-heading">
              <h3>What types of volunteer roles are available?</h3>
              <i className="fas fa-angle-down"></i>
            </div>
            <p className="accordion-content">
              We offer a variety of volunteer roles, including animal care, adoption events, administrative support, and more. Based on your interests and skills, we'll find a role that aligns with your passion for helping animals.
            </p>
          </div>

          <div className="accordion" data-category="volunteering">
            <div className="accordion-heading">
              <h3> What training or orientation is provided for volunteers?</h3>
              <i className="fas fa-angle-down"></i>
            </div>
            <p className="accordion-content">
              All volunteers undergo a comprehensive orientation that covers our organization's mission, policies, and procedures. Depending on the role, additional training may be provided to ensure you feel confident and comfortable in your volunteer responsibilities.
            </p>
          </div>

          <div className="accordion" data-category="volunteering">
            <div className="accordion-heading">
              <h3>How much time commitment is expected from volunteers?</h3>
              <i className="fas fa-angle-down"></i>
            </div>
            <p className="accordion-content">
              We appreciate any time you can dedicate! The time commitment varies by role, and we work with our volunteers to establish a schedule that suits their availability. Whether you can volunteer weekly or monthly, every bit helps.
            </p>
          </div>

          <div className="accordion" data-category="volunteering">
            <div className="accordion-heading">
              <h3>What impact can volunteers make on the lives of the animals and the organization?</h3>
              <i className="fas fa-angle-down"></i>
            </div>
            <p className="accordion-content">
              Volunteers play a crucial role in the well-being of our animals and the overall success of our organization. From providing daily care and socialization to assisting with adoption events, volunteers contribute to creating positive outcomes for pets and their future families.
            </p>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default FAQ;
