import { HeaderTitle, HeaderContainer, Span } from "./styles";

const Header = (): JSX.Element => {
  return (
    <HeaderContainer>
      <HeaderTitle variant="h5" weight={900}>
        НЕОБХІДНА <Span>РІЧ</Span>
      </HeaderTitle>
      <HeaderTitle variant="h6" weight={500}>
        MINI-PRINTER JETIX
      </HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;
