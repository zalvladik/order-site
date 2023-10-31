import type { UserFormData } from "../../components/Forms/FormOrder/types";

import { api } from "../../configs/ky";
import { FetchEndpoint } from "../../constants";

const postUserOrder = async (data: UserFormData) => {
  return api
    .post(FetchEndpoint.TELEGRAM, {
      json: data,
    })
    .json();
};

export default postUserOrder;
