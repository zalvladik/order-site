import { Button, styled, css } from "@mui/material";
import { ButtonStyledProps } from "./types";

export const ButtonStyled = styled(Button)<ButtonStyledProps>(
  ({ bgcolor }) => css`
    background-color: ${bgcolor};
    font-size: 20px;
    cursor: pointer;
    border: 1px solid gold;
    &:hover {
      background-color: #404040;
      color: ${bgcolor};
    }
    &:focus {
      background-color: #404040;
      color: ${bgcolor};
    }
  `
);
