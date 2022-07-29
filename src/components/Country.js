import { useParams } from "react-router-dom";
import logo from "../media/init-white.png";
import { Card, ListGroup, Col, Row } from "react-bootstrap";
import Weather from "./Weather";

const Country = ({ countries }) => {
  const idName = useParams().id;
  const style = {
    rowStyle: {
      width: "100%",
    },
    flagImg: { height: 100, width: 100, minWidth: "180px" },
  };

  const countryArr = countries.filter(
    (country) => country.name.common === idName
  );
  if (countryArr.length) {
    const country = countryArr[0];
    let name, population, continent, area, languages, capital, flag, timezone;
    name = country.name.common;
    capital = country.capital[0];
    population = country.population;
    continent = country.continent;
    languages = Object.values(country.languages);
    flag = country.flags.svg;
    area = country.area;
    timezone = country.timezones[0];

    return (
      <div className="country-body" style={{ backgroundColor: "transparent" }}>
        <Card className="p-2 mt-2" style={{ backgroundColor: "transparent" }}>
          <Col>
            <Row>
              <div style={style.rowStyle}>
                <Card.Img variant="top" src={flag} style={style.flagImg} />
              </div>
            </Row>
            <Row>
              <Card.Body
                className="cards-shadow"
                style={{ backgroundColor: "transparent" }}
              >
                <ListGroup variant="flush" className="bg-dark">
                  <ListGroup.Item>
                    <span className="item">Name: </span>
                    {name}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span className="item">Capital: </span>
                    {capital}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span className="item">Continent: </span>
                    {continent}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span className="item">Area: </span>
                    {area}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span className="item">Population: </span>
                    {population}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span className="item">Timezone: </span>
                    {timezone}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span className="item">Languages: </span>
                    <ListGroup variant="flush">
                      {languages.map((lang) => (
                        <ListGroup.Item key={lang + 1}>{lang}</ListGroup.Item>
                      ))}
                    </ListGroup>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span className="item">Weather in {capital}: </span>
                    <Weather capital={capital} />
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Row>
          </Col>
        </Card>
      </div>
    );
  } else {
    return (
      <div className="loading-logo">
        <img alt="" src={logo} className="loading-logo-img" />
      </div>
    );
  }
};

export default Country;
