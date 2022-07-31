import { Card, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CountryCard = ({ country }) => {
  const name = country.name.common;
  const continent = country.continents[0];
  const capital = country.capital[0];
  const population = country.population;
  const flag = country.flags.svg;
  const style = {
    row: {
      height: "180px",
    },
    cardImage: {
      objectFit: "cover",
      height: "100%",
    },
  };
  return (
    <Card
      style={{ width: "18rem", padding: "5px" }}
      className="country-card cards-shadow"
    >
      <Col>
        <Row style={style.row}>
          <Card.Img variant="top" src={flag} style={style.cardImage} />
        </Row>
        <Row>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <hr />
            <Card.Text>
              {name} is located in {continent}. <br />
              It's capital is {capital} and <br /> with a population of{" "}
              {population}
            </Card.Text>
            <Link to={`country/${name}`}>
              <Button className="card-button">Read more</Button>
            </Link>
          </Card.Body>
        </Row>
      </Col>
    </Card>
  );
};

export default CountryCard;
