import * as react from "react";

export const useInput = (name) => {
  const [value, setValue] = react.useState("");

  const onChange = ({ target: { value } }) => setValue(value);

  return { value, onChange, name };
};