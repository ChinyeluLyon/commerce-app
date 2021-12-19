import { useRouter } from "next/router";
import * as S from "./newItem.styles";

type ItemProps = { itemObj: Price };

const NewItem = ({ itemObj }: ItemProps) => {
  const { product } = itemObj;

  return (
    <S.ItemWrapper>
      <S.ItemImg src={product.images?.[0]} />
    </S.ItemWrapper>
  );
};

export default NewItem;
