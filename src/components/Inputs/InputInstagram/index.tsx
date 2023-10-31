import { useState } from "react";
import { TextInput } from "./styles";

const InputInstagram = () => {
  const [value, setValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  return (
    <TextInput
      autoComplete="off"
      name="InputInstagram"
      type="text"
      label="Інстаграм"
      value={value}
      onChange={handleInputChange}
    />
  );
};

export default InputInstagram;
