import Item from "../components/item/item";
import useGetAllItemData from "../data/hooks/UseGetAllItemData";

const Home = () => {
  const { data: itemData } = useGetAllItemData();

  if (!itemData) {
    return <h1>Loading...</h1>;
  }

  const items = itemData.data.map((prod) => {
    return <Item itemObj={prod} key={prod.id} />;
  });

  return (
    <div>
      <h1>Welcome to my store</h1>

      <h2>Products:</h2>
      {items}
    </div>
  );
};

export default Home;
