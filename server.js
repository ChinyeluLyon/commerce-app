const next = require("next");
const express = require("express");
const stripe = require("stripe")(
  "sk_test_51K8Cq7IL1xv03LEHN2rcggnSRVBlvhpuA2rNPGklRZj87oeHXmwAlqLsDLJqyHFwX6JaJLIbMsv70o8wdwVteZEe001fQSUZ0w"
);

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const port = 3000;
const MY_DOMAIN = `http://localhost:${port}`;

app.prepare().then(() => {
  const server = express();

  server.get("/test", (req, res) => {
    res.json("hi");
  });

  server.post("/create-checkout-session", async (req, res) => {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: "price_1K8E6sIL1xv03LEH4ytwcS64",
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${MY_DOMAIN}/?success=true`,
      cancel_url: `${MY_DOMAIN}?canceled=true`,
    });

    res.redirect(303, session.url);
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    else console.log(`server a gwarn pon port ${port} 👌`);
  });
});