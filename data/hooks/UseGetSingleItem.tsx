import { AxiosRequestConfig } from "axios";
import useAxios from "axios-hooks";

const useGetSingleItemData = (priceId: string) => {
  const queryConfig: AxiosRequestConfig = {
    method: "get",
    url: `http://localhost:3000/item?priceId=${priceId}`,
  };

  const [{ data, loading, error }, refetch] = useAxios(queryConfig);

  return { data, loading, error, refetch };
};

export default useGetSingleItemData;
