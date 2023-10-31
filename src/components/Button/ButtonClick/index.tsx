import { ButtonStyled } from "./styles";
import { ButtonProps } from "./types";

const Button = ({ bgcolor, sx, children }: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled
      href="#order_form"
      variant="contained"
      type="button"
      bgcolor={bgcolor}
      sx={{ ...sx }}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
