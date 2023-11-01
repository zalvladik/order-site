import { ButtonStyled } from "./styles";
import { StyledButtonProps } from "./types";

const Button = ({ bgcolor, sx, children }: StyledButtonProps): JSX.Element => {
  return (
    <ButtonStyled
      variant="contained"
      type="submit"
      bgcolor={bgcolor}
      sx={{
        ...sx,
      }}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
