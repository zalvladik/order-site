import { useState } from "react";

import { TextInput } from "./styles";

const InputNumberPhone = () => {
  const [value, setValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value.replace(/[^\+380\d{9}$]/g, "");

    const truncatedValue = newValue.slice(0, 13);
    setValue(truncatedValue);
  };
  return (
    <TextInput
      autoComplete="off"
      name="InputNumberPhone"
      type="text"
      label="+380-XX-XXX-XX-XX"
      value={value}
      onChange={handleInputChange}
    />
  );
};

export default InputNumberPhone;
