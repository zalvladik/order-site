import { TextField, styled, css } from "@mui/material";
import { GeneralTextInput } from "../styles";
import { TextInputProps } from "./types";

export const TextInput = styled(TextField)<TextInputProps>(
  ({ content }) => css`
    ${GeneralTextInput}
    position:resolved;

    &::after {
      position: absolute;
      right: 0%;
      top: 28px;
      color: #fff;
      transform: translate(-20%, -50%);
      content: "${content}";
      display: block;
    }
  `
);
