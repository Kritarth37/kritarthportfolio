import React from "react";
import image from "./editable-stuff/kj.png";
import { Jumbotron } from "./migration";
const aboutme = () => {
  return (
    <Jumbotron id="aboutme" smooth>
      <div className="container row m-0">
        <div className="col-5 d-none d-lg-block align-self-center">
          <img
            className="border border-secondary rounded-circle"
            src={image}
            alt="profilepicture"
            width="350px"
            height="350px"
          />
        </div>
        <div className="col-lg-7">
          <h2 className="display-4 mb-5 text-center">About Me</h2>
          <p className="lead text-center">
            With a passion for problem-solving and a solid foundation in
            programming languages and algorithms, I aim to collaborate with a
            dynamic team to create cutting-edge software applications that
            address real-world challenges. I strive to continuously learn and
            adapt to emerging technologies, while applying my creativity and
            analytical thinking to drive technological advancements and deliver
            high-quality software products.
          </p>
          <p className="lead text-center">
            <a
              className="btn btn-outline-dark btn-lg"
              href="https://drive.google.com/file/d/15dLsKXxsMNm9sUBbEf-Klt-7ZBzpZpqw/view?usp=sharing"
              target="_blank"
              rel="noreferrer noopener"
              role="button"
              aria-label="Resume/CV"
            >
              Resume
            </a>
          </p>
        </div>
      </div>
    </Jumbotron>
  );
};
export default aboutme;
