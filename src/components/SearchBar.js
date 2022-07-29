import { Stack, InputGroup, Button, Form } from "react-bootstrap";

const SearchBar = ({ search }) => {
  return (
    <div className="search-bar-container">
      <Stack direction="horizontal" gap={3}>
        <InputGroup>
          <InputGroup.Text className="search-input">Search</InputGroup.Text>
          <Form.Control
            {...search}
            className="me-auto"
            placeholder="write a country's name"
          />
        </InputGroup>
        <Button
          variant="outline-danger"
          value=""
          onClick={(e) => {
            search.onChange(e);
          }}
        >
          Reset
        </Button>
      </Stack>
    </div>
  );
};

export default SearchBar;
