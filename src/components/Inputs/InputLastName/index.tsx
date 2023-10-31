import { useState } from "react";

import { TextInput } from "./styles";

const InputLastName = () => {
  const [value, setValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value.replace(/[^а-яА-Яє-їЄ-ЇґҐ']+/g, "");
    setValue(newValue);
  };

  return (
    <TextInput
      autoComplete="off"
      name="InputLastName"
      type="text"
      label="Прізвище"
      value={value}
      onChange={handleInputChange}
    />
  );
};

export default InputLastName;
