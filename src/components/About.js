import { Card, Container } from "react-bootstrap";
import instagram from "../media/instagram.png";
import linkedin from "../media/linkedin.png";
import github from "../media/github.png";
import myimg from "../media/mypic.jpg";

const About = () => {
  return (
    <>
      <Container className="about-container">
        <Card className="p-2 mt-5">
          <Card.Body>
            <div className="about-me-row">
              <div className="about-me-img">
                <img className="my-img" alt="" src={myimg} />
              </div>
              <div className="about-me-text">
                <Card.Title>About me</Card.Title>
                <Card.Text>
                  My name is Omar Abdelfattah, <br />
                  Software developer student at Hive Helsinki. <br />
                  I've built this web app as a practice project for using React
                  and Bootstrap.
                  <br />
                  There will be additional modifications and new features added{" "}
                  every now and then, but if you stumbbled upon this app, feel
                  free to use it!
                  <br />
                </Card.Text>
              </div>
            </div>
            <hr />
            <Card.Title>Resources</Card.Title>
            <span style={{ fontWeight: "bold" }}>Country's info: </span>
            <a href="https://restcountries.com/" target="__blank">
              Rest Countries
            </a>{" "}
            <br />
            <span style={{ fontWeight: "bold" }}>Weather's info: </span>
            <a href="https://openweathermap.org/" target="__blank">
              OpenWeather
            </a>
            <hr />
            <Card.Title className="mb-3">Get in touch</Card.Title>
            <Container className="icons-container">
              <div className="icons">
                <a
                  href="https://www.instagram.com/omr.alsakka/"
                  target="__blank"
                >
                  <img className="icon-img" alt="" src={instagram} />
                </a>
              </div>
              <div className="icons">
                <a
                  href="https://www.linkedin.com/in/omar-abdelfattah-25bb1515b/"
                  target="__blank"
                >
                  <img className="icon-img" alt="" src={linkedin} />
                </a>
              </div>
              <div className="icons">
                <a href="https://github.com/omaralsakka" target="__blank">
                  <img className="icon-img" alt="" src={github} />
                </a>
              </div>
            </Container>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default About;
