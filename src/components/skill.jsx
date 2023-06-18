import React from "react";
import { Jumbotron } from "./migration";
import { Container } from "react-bootstrap";
import "./css/skill.css";
const skills = () => {
  return (
   <Jumbotron id='skills'>
    <div className="py-2 m-0">
      
     <Container> 
      <h2 className="display-4 text-center"><b>Skills</b></h2>
        
     <section className="experience-section" id="about">
      <div className="cont">
        <div className="experience-items">

          <div className="experience-item">
            <div className="experience-info">
              <h4>C/C++</h4>
              <p>80%</p>
            </div>
            <div className="progress-line" data-percent="80%">
              <span style={{ width: "80%" }}></span>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-info">
              <h4>JAVA</h4>
              <p>60%</p>
            </div>
            <div className="progress-line" data-percent="60%">
              <span style={{ width: "60%" }}></span>
            </div>
          </div>
          <div className="experience-item">
            <div className="experience-info">
              <h4>Node.Js</h4>
              <p>80%</p>
            </div>
            <div className="progress-line" data-percent="80%">
              <span style={{ width: "80%" }}></span>
            </div>
          </div>
          <div className="experience-item">
            <div className="experience-info">
              <h4>Express.Js</h4>
              <p>90%</p>
            </div>
            <div className="progress-line" data-percent="90%">
              <span style={{ width: "90%" }}></span>
            </div>
          </div>
          <div className="experience-item">
            <div className="experience-info">
              <h4>MongoDB</h4>
              <p>85%</p>
            </div>
            <div className="progress-line" data-percent="85%">
              <span style={{ width: "85%" }}></span>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-info">
              <h4>ReactJs</h4>
              <p>80%</p>
            </div>
            <div className="progress-line" data-percent="80%">
              <span style={{ width: "80%" }}></span>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-info">
             <h4>Data Structure And Algorithms</h4> 
             <p>85%</p>
            </div>
            <div className="progress-line" data-percent="85%">
              <span style={{ width: "85%" }}></span>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-info">
              <h4>API</h4>
              <p>60%</p>
            </div>
            <div className="progress-line" data-percent="60%">
              <span style={{ width: "60%" }}></span>
            </div>
          </div>
        </div>
      </div>
    </section>
     </Container>
    </div>
   </Jumbotron>
  );
};
export default skills;
