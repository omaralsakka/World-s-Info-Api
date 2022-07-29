import { useState } from "react";

const useField = (type) => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value.toLowerCase());
  };
  return {
    type,
    value,
    onChange,
  };
};

export default useField;
