import Joi from "joi";
import { UserFormData } from "./types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const numberPattern = /^\+380\d{9}$/;
const quantityPattern = /^([1-9]|1[0-9]|2[0-9]|3[0])$/;
const letterPattern = /^[а-яА-Яє-їЄ-ЇґҐ']/;

const schema = Joi.object({
  instagram: Joi.string().min(0).max(40).messages({
    "string.max": "Ім'я задовге",
  }),
  firstName: Joi.string()
    .min(2)
    .max(20)
    .pattern(letterPattern)
    .required()
    .empty()
    .messages({
      "string.min": "Ім'я закоротке",
      "string.max": "Ім'я задовге",
      "string.pattern.base": `Введіть ім'я на українському`,
      "string.empty": "Введіть ім'я",
    }),
  lastName: Joi.string()
    .min(2)
    .max(20)
    .pattern(letterPattern)
    .required()
    .empty()
    .messages({
      "string.min": "Прізвище закоротке",
      "string.max": "Прізвище задовге",
      "string.pattern.base": `Введіть прізвище на українському`,
      "string.empty": "Введіть прізвище",
    }),
  numberPhone: Joi.string().pattern(numberPattern).required().empty().messages({
    "string.pattern.base": `Некоректний номер телефону`,
    "string.empty": "Введіть номер телефону",
  }),
  color: Joi.string().empty().required().messages({
    "string.empty": "Виберіть колір товару",
  }),
  quantity: Joi.string().pattern(quantityPattern).empty().required().messages({
    "string.empty": "Введіть кількість товару від 1шт до 30шт",
    "string.pattern.base": `Введіть кількість товару від 1шт до 30шт`,
  }),
});

const validateData = (data: UserFormData) => {
  const result = schema.validate(data);

  if (result.error) {
    toast.error(`${result.error.message}`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    return false;
  }
  return result;
};

export default validateData;
