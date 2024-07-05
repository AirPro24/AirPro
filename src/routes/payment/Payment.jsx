//******************************************* */
import React, { useState, useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import "./payment.css";

function Message({ content }) {
  return <p>{content}</p>;
}

function Payment() {
  const initialOptions = {
    "client-id":
      "AZqDfSE4IOFyIIDnWlgMJU5e6bK1-HDhHVitJFD4QmOgWVlWnoMWmdj0NzT6snnzPnHg5wBlKfVbjRrd",
    "enable-funding": "venmo",
    "disable-funding": "",
    country: "US",
    currency: "USD",
    "data-page-type": "product-details",
    components: "buttons",
    "data-sdk-integration-source": "developer-studio",
  };

  const [message, setMessage] = useState("");
  const [amount, setAmount] = useState(1);

  const handleAmountChange = (event) => {
    console.log("event" + event.target.value);
    console.log("amount" + amount);
    setAmount(event.target.value);
  };

  // const handleAmountChange = (event) => {
  //   console.log("Current input value:", event.target.value);
  //   const value = parseFloat(event.target.value);
  //   console.log("Parsed value:", value);
  //   setAmount(isNaN(value) ? 0 : value);
  // };

  useEffect(() => {
    console.log("Amount state updated:", amount);
  }, [amount]);

  return (
    <div className="payment">
      <h2 className="payment-title">Pay with PayPal</h2>
      <label className="payment-label">
        Amount (USD):
        <input
          type="number"
          value={amount}
          onChange={handleAmountChange}
          placeholder="Enter amount"
          className="payment-input"
        />
      </label>
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons
          className="paypal-buttons"
          style={{
            shape: "rect",
            layout: "vertical",
            color: "gold",
            label: "paypal",
          }}
          createOrder={async () => {
            try {
              const response = await fetch("http://localhost:3000/api/orders", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  amount: amount,
                }),
              });

              const orderData = await response.json();

              if (orderData.status === "PAYER_ACTION_REQUIRED") {
                const payerActionLink = orderData.links.find(
                  (link) => link.rel === "payer-action"
                );
                if (payerActionLink) {
                  window.location.href = payerActionLink.href;
                } else {
                  throw new Error(
                    "Payer action link not found in the response."
                  );
                }
              } else if (orderData.id) {
                return orderData.id;
              } else {
                const errorDetail = orderData?.details?.[0];
                const errorMessage = errorDetail
                  ? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
                  : JSON.stringify(orderData);

                throw new Error(errorMessage);
              }
            } catch (error) {
              console.error(error);
              setMessage(`Could not initiate PayPal Checkout...${error}`);
            }
          }}
          onApprove={async (data, actions) => {
            try {
              const response = await fetch(
                `/api/orders/${data.orderID}/capture`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              );

              const orderData = await response.json();
              const errorDetail = orderData?.details?.[0];

              if (errorDetail?.issue === "INSTRUMENT_DECLINED") {
                return actions.restart();
              } else if (errorDetail) {
                throw new Error(
                  `${errorDetail.description} (${orderData.debug_id})`
                );
              } else {
                const transaction =
                  orderData.purchase_units[0].payments.captures[0];
                setMessage(
                  `Transaction ${transaction.status}: ${transaction.id}. See console for all available details`
                );
                console.log(
                  "Capture result",
                  orderData,
                  JSON.stringify(orderData, null, 2)
                );
              }
            } catch (error) {
              console.error(error);
              setMessage(
                `Sorry, your transaction could not be processed...${error}`
              );
            }
          }}
        />
      </PayPalScriptProvider>
      <Message content={message} />
    </div>
  );
}

export default Payment;
