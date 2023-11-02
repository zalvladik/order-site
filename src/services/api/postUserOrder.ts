import { toast } from "react-toastify";

import type { UserFormData } from "src/components/Forms/FormOrder/types";
import { api } from "src/configs/ky";
import { FetchEndpoint } from "src/constants";

const postUserOrder = async (data: UserFormData) => {
  try {
    const response = await api.post(FetchEndpoint.TELEGRAM, {
      json: data,
    });

    toast.success("Успішне замовлення!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    return await response.json();
  } catch (error) {
    toast.error(
      `Виникла помилка з відправленням замовлення, будь ласка попробуйте ще раз`,
      {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      }
    );

    throw error;
  }
};

export default postUserOrder;
