import { Typography, Box, styled, css } from "@mui/material";
import { HeaderTitleProps } from "./types";

export const HeaderContainer = styled(Box)`
  width: 460px;
  padding: 10px 0px;
  text-align: center;
`;

export const HeaderTitle = styled(Typography)<HeaderTitleProps>(
  ({ weight }) => css`
    font-weight: ${weight};
  `
);

export const Span = styled("span")`
  color: gold;
`;
