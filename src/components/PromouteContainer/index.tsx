import Button from "../Button/ButtonClick";
import CountdownTimer from "../../components/Timer";
import {
  PromouteContainerBox,
  PromoutePriceTypography,
  TextBox,
  PriceTypography,
  TextContainer,
} from "./styles";

const PromouteContainer = (): JSX.Element => {
  return (
    <PromouteContainerBox>
      <TextContainer>
        <TextBox>
          <PriceTypography>Звичайна ціна</PriceTypography>
          <PriceTypography>1299 грн</PriceTypography>
        </TextBox>
        <TextBox>
          <PromoutePriceTypography>Акційна ціна </PromoutePriceTypography>
          <PromoutePriceTypography>899 грн</PromoutePriceTypography>
        </TextBox>
      </TextContainer>
      <Button
        bgcolor={"gold"}
        sx={{
          marginTop: "20px",
          marginBottom: "20px",
          padding: "20px",
          fontSize: "25px",
          fontWeight: 700,
          color: "#404040",
          width: "100%",
        }}
      >
        Оформити замовлення
      </Button>
      <CountdownTimer />
    </PromouteContainerBox>
  );
};

export default PromouteContainer;
