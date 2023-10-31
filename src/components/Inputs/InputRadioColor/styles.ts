import { TextField, styled } from "@mui/material";
import { GeneralTextInput } from "../styles";

export const TextInput = styled(TextField)`
  ${GeneralTextInput}
  margin-right: 30px;

  & .MuiSvgIcon-root {
    scale: 1.5;
    color: #fff;
  }
`;
