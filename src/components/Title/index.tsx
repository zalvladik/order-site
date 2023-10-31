import { TitleStyles } from "./styles";
import { TitleProps } from "./types";

const Title = ({ sx, children }: TitleProps): JSX.Element => {
  return <TitleStyles sx={{ ...sx }}>{children}</TitleStyles>;
};

export default Title;
