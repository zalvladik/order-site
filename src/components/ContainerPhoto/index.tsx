import { Typography } from "@mui/material";

import ContainerBox from "src/components/ContainerBox";
import { Photo, PhotoCard, CardText } from "./styles";
import { ContainerPhotoProps } from "./types";

const ContainerPhoto = ({
  sx,
  url,
  title,
  text,
  children,
}: ContainerPhotoProps): JSX.Element => {
  return (
    <ContainerBox>
      <PhotoCard>
        <Photo sx={{ ...sx }} image={url} />
        {(title || text) && (
          <CardText>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color={"#FFF"}
            >
              {title}
            </Typography>

            <Typography variant="body1" color={"#FFF"}>
              {text}
            </Typography>
          </CardText>
        )}
      </PhotoCard>
      {children}
    </ContainerBox>
  );
};

export default ContainerPhoto;
