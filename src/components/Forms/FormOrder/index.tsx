import { ThemeProvider, useTheme } from "@mui/material/styles";

import validateData from "./validationSchema";
import InputFirstName from "src/components/Inputs/InputFirstName";
import InputLastName from "src/components/Inputs/InputLastName";
import InputNumberPhone from "src/components/Inputs/InputNumberPhone";
import InputRadioColor from "src/components/Inputs/InputRadioColor";
import InputQuantity from "src/components/Inputs/InputQuantity";
import InputInstagram from "src/components/Inputs/InputInstagram";
import ContainerBox from "src/components/ContainerBox";
import Title from "src/components/Title";
import Button from "src/components/Button/ButtonSubmit";

import { UserFormData } from "./types";
import { FormUser, FormItem } from "./styles";
import postUserOrder from "src/services/api/postUserOrder";
import customTheme from "./config";

const FormOrder = (): JSX.Element => {
  const outerTheme = useTheme();

  const submitData = async (e: any) => {
    e.preventDefault();

    const { elements } = e.currentTarget;

    const data: UserFormData = {
      firstName: elements.InputFirstName.value,
      lastName: elements.InputLastName.value,
      numberPhone: elements.InputNumberPhone.value,
      color: elements.InputRadioColor.value,
      quantity: elements.InputQuantity.value,
      instagram: elements.InputInstagram.value,
    };

    if (!validateData(data)) {
      return;
    }

    await postUserOrder(data);
  };

  return (
    <ThemeProvider theme={customTheme(outerTheme)}>
      <ContainerBox
        id="order_form"
        sx={{
          width: "420px",
          paddingLeft: "20px",
          paddingRight: "20px",
          textAlign: "center",
        }}
      >
        <Title
          sx={{
            fontWeight: 700,
            fontSize: "35px",
            marginTop: "20px",
            marginBottom: "20px",
            color: "gold",
          }}
        >
          Заповніть інформацію
        </Title>
        <FormUser onSubmit={submitData}>
          <InputFirstName />
          <InputLastName />
          <InputNumberPhone />
          <FormItem>
            <InputRadioColor />
            <InputQuantity />
          </FormItem>
          <InputInstagram />
          <Button
            bgcolor={"gold"}
            sx={{
              width: "90%",
              padding: "20px",
              fontSize: "25px",
              fontWeight: 700,
              color: "#404040",
            }}
          >
            Замовити товар
          </Button>
        </FormUser>
      </ContainerBox>
    </ThemeProvider>
  );
};

export default FormOrder;
