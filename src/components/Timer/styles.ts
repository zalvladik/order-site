import { Box, List, ListItem, styled } from "@mui/material";

export const TimerContainer = styled(Box)`
  text-align: center;
  border: 1px solid #999999;
  border-radius: 5px;
  padding: 15px 0px 10px 0px;
`;

export const TimerValueContainer = styled(List)`
  display: inline-flex;
`;

export const TimerValueItem = styled(ListItem)`
  padding: 0px 0px;
  margin-right: 20px;
  color: #ffffffde;
  font-size: 30px;
  align-items: center;
  &:last-child {
    margin-right: 0px;
  }
`;

export const Value = styled("p")`
  margin: 0px 5px 0px 0px;
  font-size: 40px;
  font-weight: 500;
`;
