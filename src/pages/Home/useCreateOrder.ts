import type { UserFormData } from "../../components/Forms/FormOrder/types";

import { useUserCreateOrder } from "../../hooks/useUserAuthentication";

export const useCreateOrder = () => {
  const { isError, isLoading, mutate } = useUserCreateOrder();

  const userCreateOrder = (data: UserFormData): void => {
    mutate(data);
  };

  return { isError, isLoading, userCreateOrder };
};
