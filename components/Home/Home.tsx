import useGetAllItemData from "../../data/hooks/UseGetAllItemData";
import NewItem from "../newItem/newItem";
import * as S from "./Home.styles";

const Home = () => {
  const { data: itemData } = useGetAllItemData();

  if (!itemData) {
    return <h1>Loading...</h1>;
  }

  const items = itemData.data.map((prod) => {
    return <NewItem itemObj={prod} key={prod.id} />;
    // return <Item itemObj={prod} key={prod.id} />;
  });

  return (
    <div>
      <h1>Welcome to my store</h1>

      <h2>Products:</h2>
      <S.ItemsWrapper> {items}</S.ItemsWrapper>
    </div>
  );
};

export default Home;
