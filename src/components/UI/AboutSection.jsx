import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to car rent service</h2>
              <p className="section__description">
              Welcome to our premier car rental service, where the journey begins with convenience and ends
               with satisfaction. At our comapany, we take pride in providing a seamless and enjoyable rental 
               experience for our valued customers. Whether you're embarking on a business trip, family 
               vacation, or just need a reliable set of wheels for the day, we've got you covered. Our extensive
                fleet boasts a diverse range of vehicles, from sleek sedans to spacious SUVs, ensuring there's 
                a perfect match for every occasion. With a commitment to excellence, we prioritize customer 
                comfort and safety, offering well-maintained vehicles equipped with the latest amenities.
                At our company, we don't just offer cars; we deliver a hassle-free journey, allowing you to 
                focus on what matters most – the road ahead. Choose us for your next adventure, and let us 
                redefine your travel experience.
              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
