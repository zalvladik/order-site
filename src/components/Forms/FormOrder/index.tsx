import { ThemeProvider, useTheme } from "@mui/material/styles";

import validateData from "./validationSchema";
import InputFirstName from "../../Inputs/InputFirstName";
import InputLastName from "../../Inputs/InputLastName";
import InputNumberPhone from "../../Inputs/InputNumberPhone";
import InputRadioColor from "../../Inputs/InputRadioColor";
import InputQuantity from "../../Inputs/InputQuantity";
import InputInstagram from "../../Inputs/InputInstagram";
import ContainerBox from "../../ContainerBox";
import Title from "../../Title";
import Button from "../../Button/ButtonSubmit";

import { UserFormData } from "./types";
import { FormUser, FormItem } from "./styles";
import postUserOrder from "../../../services/api/postUserOrder";
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

    const post = await postUserOrder(data);

    console.log(post);
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
