import { AxiosRequestConfig } from "axios";
import useAxios from "axios-hooks";

const useGetAllItemData = () => {
  const queryConfig: AxiosRequestConfig = {
    method: "get",
    url: "http://localhost:3000/items/all",
  };

  const [{ data, loading, error }, refetch] = useAxios(queryConfig);

  return { data, loading, error, refetch };
};

export default useGetAllItemData;
