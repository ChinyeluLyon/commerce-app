import { useRouter } from "next/router";
import React from "react";
import StripeConfirmation from "../../components/Stripe/StripeConfirmation";

const Confirmation = () => {
  const router = useRouter();
  const { priceId } = router.query;

  return <StripeConfirmation priceId={String(priceId)} />;
};

export default Confirmation;
