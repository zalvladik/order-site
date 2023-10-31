import { useMutation } from "react-query";
import { toast } from "react-toastify";

import postUserOrder from "../services/api/postUserOrder";

import { UserFormData } from "../components/Forms/FormOrder/types";

export const useUserCreateOrder = () => {
  const { mutate, isLoading, isError } = useMutation({
    mutationFn: (data: UserFormData) => postUserOrder(data),
    onSuccess: () => {
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
    },
    onError: (error: Error) => {
      console.log("helo");
      toast.error(`${(error.message, error.name)}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    },
  });

  return { mutate, isLoading, isError };
};
