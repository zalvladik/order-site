import { ButtonStyled } from "./styles";
import { ButtonProps } from "./types";

const Button = ({ bgcolor, sx, children }: ButtonProps): JSX.Element => {
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
