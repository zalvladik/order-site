import { useState, useEffect } from "react";

import { TextInput } from "./styles";

const InputQuantity = () => {
  const [value, setValue] = useState("");

  const [buff, setBuff] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value.replace(/[^\d]/g, "");
    const truncatedValue = newValue.slice(0, 2);
    setValue(truncatedValue);
  };

  useEffect(() => {
    const quantity = Number(value);

    switch (true) {
      case quantity > 30:
        setBuff("Макс. 30шт");
        break;
      case quantity <= 4:
        setBuff("");
        break;
      case quantity >= 5 && quantity <= 9:
        setBuff("Знижка 10%");
        break;
      case quantity >= 10 && quantity <= 14:
        setBuff("Знижка 15%");
        break;
      case quantity >= 15 && quantity <= 30:
        setBuff("Знижка 20%");
        break;
      default:
        break;
    }
  }, [value]);

  return (
    <TextInput
      autoComplete="off"
      name="InputQuantity"
      type="text"
      label="Кількість"
      value={value}
      onChange={handleInputChange}
      content={buff}
    />
  );
};

export default InputQuantity;
