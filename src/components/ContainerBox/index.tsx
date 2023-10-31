import { Container } from "./styles";
import { ContainerBoxProps } from "./types";

const ContainerBox = ({ id, children, sx }: ContainerBoxProps): JSX.Element => {
  return (
    <Container id={id} sx={{ ...sx }}>
      {children}
    </Container>
  );
};

export default ContainerBox;
