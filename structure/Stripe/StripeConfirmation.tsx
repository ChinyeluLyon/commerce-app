import React, { useState, useEffect } from "react";
import useGetSingleItemData from "../../data/hooks/UseGetSingleItem";

type StripeConfirmationProps = {
  priceId: string;
};

type ProductDisplayProps = {
  itemData: Price;
};

const ProductDisplay = ({ itemData }: ProductDisplayProps) => (
  <section>
    <div className="product">
      <img
        width={100}
        src={itemData.product.images?.[0]}
        alt={itemData.product.name}
      />
      <div className="description">
        <h3>{itemData.product.name}</h3>
        <h5>£{itemData.unit_amount / 100}</h5>
      </div>
    </div>
    <form
      action={`/create-checkout-session?priceId=${itemData.id}`}
      method="POST"
    >
      <button type="submit">Checkout</button>
    </form>
  </section>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function StripeConfirmation({
  priceId,
}: StripeConfirmationProps) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  const { data } = useGetSingleItemData(priceId);
  console.log(data);

  if (!data) {
    return <h1>loading...</h1>;
  }

  return message ? (
    <Message message={message} />
  ) : (
    <ProductDisplay itemData={data} />
  );
}
