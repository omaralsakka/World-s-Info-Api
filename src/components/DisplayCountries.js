import { Stack } from "react-bootstrap";
import CountryCard from "./CountryCard";
import Notification from "./Notification";

const DisplayCountries = ({ search, countries }) => {
  if (search.value) {
    const arr = countries.filter((country) =>
      country.name.common.toLowerCase().includes(search.value)
    );
    if (arr.length >= 6) {
      return <Notification message="Please write more specific name" />;
    } else if (!arr.length) {
      return <Notification message="No country found" />;
    } else {
      return (
        <Stack className=" stack-style mt-5" direction="horizontal" gap={5}>
          {arr.map((country) => {
            return <CountryCard key={country.name.common} country={country} />;
          })}
        </Stack>
      );
    }
  }
};

export default DisplayCountries;
