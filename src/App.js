import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./components/Home";
import axios from "axios";
import useField from "./components/useField";
import Navigation from "./components/NavBar";
import Country from "./components/Country";
import FooterBar from "./components/Footer";
import About from "./components/About";
import Video from "./components/Video";

const App = () => {
  const [countries, setCountries] = useState([]);
  const search = useField("text");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((resp) => {
      setCountries(resp.data);
    });
  }, []);

  return (
    <div>
      <Video />
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigation />}>
              <Route
                path="/"
                element={<Home search={search} countries={countries} />}
              />
              <Route
                path="country/:id"
                element={<Country countries={countries} />}
              />
              <Route path="/about" element={<About />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
        <FooterBar />
      </div>
    </div>
  );
};

export default App;
