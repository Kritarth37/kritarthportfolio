
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Skeleton from 'react-loading-skeleton';
import  Row  from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import './css/cardanimation.css';
import { Jumbotron } from './migration';
const projectcard=()=> {
  return (
   <Jumbotron>
     <div className='py-1' id="project">
        <div className='py-2'>
    <Container className=" ">
        <h2 className="display-4 pb-5 text-center"><b>Recent Projects</b></h2>
        <Row>

    <Col  md={6}>
    <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
      <Card.Body>
        <Card.Title>Portfolio Website</Card.Title>
        <Card.Text>
          Website build using React to show all the information about my profile. 
          <br />
          <br />
          <h6>  
          <p>1.) Used Mern stack to build the website.</p>
          <p>2.) Used background animation to make website more attractive.</p>
          </h6>
       
        </Card.Text>
        <Skeleton count={3} />
        <Card.Link href="#" className='butt'><i className="fa fa-github fa-3x icons lx-3" aria-hidden="true"></i>Github link</Card.Link>
      </Card.Body>
    </Card>
    </Col>
  
    <Col  md={6}>
    <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
      <Card.Body>
        <Card.Title>Employment Portal</Card.Title>
        <Card.Text>
          Employment Portal build where job seeker can find the relevent jobs. 
          <br />
          <h6>  
          <p>1.) Used MERN stack to build the website.</p>
          <p>2.) Recruiter can post the jobs.</p>
          <p>3.) Job seeker can find the relevent job.</p>
          {/* <p>4.) Job seeker can Upload resume in Profile section.</p> */}
          </h6>
        </Card.Text>
        <Skeleton count={3} />
       <Card.Link className='butt' href="#"><i className="fa fa-github fa-3x icons lx-3" aria-hidden="true"></i> Github link</Card.Link>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>
    </div>
    </div>
   </Jumbotron>
  );
};

export default projectcard;