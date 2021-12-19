import { AxiosRequestConfig } from "axios";
import useAxios from "axios-hooks";

const usePostCheckout = () => {
  const queryConfig: AxiosRequestConfig = {
    method: "post",
    url: "http://localhost:3000/create-checkout-session",
  };

  const [{ data, loading, error }, fetch] = useAxios(queryConfig, {
    manual: true,
  });

  return { data, loading, error, fetch };
};

export default usePostCheckout;
