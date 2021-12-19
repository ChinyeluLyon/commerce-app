import { useRouter } from "next/router";
import usePostCheckout from "../../data/hooks/UsePostCheckout";
import * as S from "./item.styles";

type ItemProps = { itemObj: Price };

const Item = ({ itemObj: priceObj }: ItemProps) => {
  const { product } = priceObj;

  const { fetch: postCheckout } = usePostCheckout();

  return (
    <S.ItemWrapper>
      <S.ItemImgWrapper>
        <S.ItemImg src={product.images[0]} alt={product.name} />
      </S.ItemImgWrapper>
      <S.DetailsWrapper>
        <div>
          <h3>{product.name}</h3>
        </div>
        <div>£ {priceObj.unit_amount / 100}</div>
        <div>{product.description}</div>
      </S.DetailsWrapper>
      <S.BuyButtonWrapper>
        <button
          onClick={() => {
            postCheckout();
          }}
        >
          buy
        </button>
      </S.BuyButtonWrapper>
    </S.ItemWrapper>
  );
};

export default Item;
