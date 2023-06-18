import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
      <h2 className="display-4 pb-3 text-center">Get In Touch</h2>
      <p className="lead text-center pb-3">
      I'm currently looking for full-time Software Engineering or Web Development opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at <a href="mailto:kritarth37@gmail.com">kritarth37@gmail.com</a>.
      </p>
        <a
          rel="noopener"
          href="https://github.com/Kritarth37"
          aria-label="My GitHub"
        > <span className="badge bg-dark">
            Kritarth Jain
          </span>
        </a>
        <p>
          <small className="text-muted">
            Project code is open source. Feel free to fork and make your own
            version.
          </small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
