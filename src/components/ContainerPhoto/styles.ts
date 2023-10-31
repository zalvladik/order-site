import { CardMedia, styled, CardContent, Card } from "@mui/material";

export const Photo = styled(CardMedia)`
  background-size: contain;
  background-repeat: no-repeat;
  height: 460px;
  padding: 0px;
`;

export const PhotoCard = styled(Card)`
  border-radius: 10px;
`;

export const CardText = styled(CardContent)`
  background-color: #1daec4;
`;
