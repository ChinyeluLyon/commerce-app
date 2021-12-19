import { useRouter } from "next/router";
import * as S from "./newItem.styles";

type ItemProps = { itemObj: Price };

const NewItem = ({ itemObj }: ItemProps) => {
  const { product } = itemObj;
  const router = useRouter();
  return (
    <S.ItemWrapper>
      <S.BasicInfo>
        <h2>{product.name}</h2>
        <h3>£ {(itemObj.unit_amount / 100).toFixed(2)}</h3>
      </S.BasicInfo>
      <S.ItemImg src={product.images?.[0]} />
      <S.BuyButton
        onClick={() => {
          router.push(`/confirmation?priceId=${itemObj.id}`);
        }}
      >
        Buy Now
      </S.BuyButton>
    </S.ItemWrapper>
  );
};

export default NewItem;
