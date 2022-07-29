import Title from "./Title";
import SearchBar from "./SearchBar";
import DisplayCountries from "./DisplayCountries";
import logo from "../media/logo-white.png";

const Home = ({ search, countries }) => {
  return (
    <div className="container">
      <div className="mt-3 mx-auto" style={{ width: "30%", minWidth: "250px" }}>
        <img alt="" src={logo} style={{ width: "100%" }} />
      </div>
      <Title />
      <SearchBar search={search} />
      <DisplayCountries search={search} countries={countries} />
    </div>
  );
};

export default Home;
