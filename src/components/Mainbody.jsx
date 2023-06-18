import React from "react";
import MovingText from "./typing_data";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import "./css/mainbody.css";
const MainBody = React.forwardRef(({ gradient, title}, ref) => {
  return (
    <Jumbotron
      fluid
      id="bgstyle1"
      style={{
        background: `linear-gradient(136deg,${gradient})`,
        backgroundSize: "1200% 1200%",
      }}
      className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
    >
      <div id="stars"></div>
      <Container className="text-center">
        <h1 ref={ref} className="display-1"
      >
          {title}
        </h1>
        <div>
          <MovingText></MovingText>
        </div>
        <div className="p-5">
        {/* eslint-disable-next-line */}
        <a className="logos"rel="noopener noreferrer" href="https://github.com/Kritarth37"><i className="fa fa-github fa-3x socialicons lx-3" aria-hidden="true"></i></a>
        {/* eslint-disable-next-line */}
        <a className="logos"rel="noopener noreferrer" href="https://www.facebook.com/kritarth.jain.522"><i className="fa fa-facebook-official fa-3x socialicons" aria-hidden="true"></i></a>
        {/* eslint-disable-next-line */}
        <a className="logos"rel="noopener noreferrer" href="https://www.linkedin.com/in/kritarth-jain-520a4620a"><i className="fa fa-linkedin fa-3x socialicons" aria-hidden="true"></i></a>
        {/* eslint-disable-next-line */}
        <a className="logos" rel="noopener noreferrer" href="https://www.instagram.com/_kritarth_jain/"><i className="fa fa-instagram fa-3x socialicons" aria-hidden="true"></i></a>
        {/* eslint-disable-next-line */}
        <a className="logos" rel="noopener noreferrer" href="https://leetcode.com/kritarth-jain/"><i class="fa fa-code fa-3x socialicons"></i></a>
        </div>
        <div>
            <a className="btn btn-outline-light btn-lg " href={process.env.PUBLIC_URL + "/#aboutme"}>More About Me</a>
        </div>
    
      </Container>
    </Jumbotron>
  );
});
export default MainBody;
