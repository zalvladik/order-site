import { useState } from "react";
import { MenuItem } from "@mui/material";
import { TextInput } from "./styles";

const InputRadioColor = () => {
  const [value, setValue] = useState("");
  return (
    <TextInput
      autoComplete="off"
      id="standard-select-currency"
      name="InputRadioColor"
      select
      label="Колір товару"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    >
      <MenuItem sx={{ color: "#2b2b2b", fontSize: "20px" }} value={"Рожевий"}>
        Рожевий
      </MenuItem>
      <MenuItem sx={{ color: "#2b2b2b", fontSize: "20px" }} value={"Синій"}>
        Синій
      </MenuItem>
    </TextInput>
  );
};

export default InputRadioColor;
