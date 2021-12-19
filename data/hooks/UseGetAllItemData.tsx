import { AxiosRequestConfig } from "axios";
import useAxios from "axios-hooks";

const useGetAllProductsData = () => {
  const queryConfig: AxiosRequestConfig = {
    method: "get",
    url: "http://localhost:3000/stripe-products",
  };

  const [{ data, loading, error }, refetch] = useAxios(queryConfig);

  return { data, loading, error, refetch };
};

export default useGetAllProductsData;
