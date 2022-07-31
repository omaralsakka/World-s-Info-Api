import { useEffect, useState } from "react";
import axios from "axios";
import { ListGroup } from "react-bootstrap";
import weather from "../media/weather.png";
const Weather = ({ capital }) => {
  const api_key = process.env.REACT_APP_API_KEY;
  const [lat, setLat] = useState("");
  const [lon, setLong] = useState("");
  const [countryData, setCountryData] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${capital}&limit=5&appid=${api_key}`
      )
      .then((res) => {
        setLat(res.data[0].lat);
        setLong(res.data[0].lon);
      });
  }, [capital, api_key]);

  useEffect(() => {
    if (lat) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`
        )
        .then((res) => {
          setCountryData(res.data);
        });
    }
  }, [lat, lon, api_key]);

  if (countryData) {
    const temp = parseInt(countryData.main.temp - 273.15);
    const desc = countryData.weather[0].description;
    return (
      <>
        <ListGroup variant="flush">
          <ListGroup.Item>
            {" "}
            <img
              alt=""
              src={weather}
              style={{ width: "3%", minWidth: "50px" }}
            />
          </ListGroup.Item>
          <ListGroup.Item>Temperature: {temp} Celcius</ListGroup.Item>
          <ListGroup.Item>State: {desc}</ListGroup.Item>
        </ListGroup>
      </>
    );
  }
  return <h1>weather</h1>;
};

export default Weather;
