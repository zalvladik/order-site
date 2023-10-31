import { Box, styled, Typography } from "@mui/material";

export const PromouteContainerBox = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 10px 0px 10px 0px;
`;

export const TextBox = styled(Box)`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  &:nth-child(1) {
    border-right: 1px solid #fff;
    border-color: #999999;
  }
`;

export const TextContainer = styled(Box)`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #fff;
  border-color: #999999;
`;

export const PriceTypography = styled(Typography)`
  &:nth-child(1) {
    margin-right: 5px;
    font-size: 20px;
    padding: 5px;
    font-weight: 700;
  }

  &:nth-child(2) {
    font-weight: 700;
    font-size: 35px;
    text-decoration: line-through;
    text-decoration-color: #e20000;
    color: #fff;
  }
`;

export const PromoutePriceTypography = styled(Typography)`
  &:nth-child(1) {
    margin-right: 5px;
    font-size: 20px;
    padding: 5px;
    border-radius: 5px;
    background-color: #e20000;
    font-weight: 700;
  }

  &:nth-child(2) {
    font-weight: 700;
    font-size: 35px;
    padding: 0px 5px;
    border-radius: 5px;
  }
`;
