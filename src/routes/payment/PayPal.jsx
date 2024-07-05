import React, { useEffect, useRef } from "react";

const PayPal = () => {
  const paypal = useRef();
  useEffect(() => {
    window.paypal.Buttons({}).render(paypal.current);
  }, []);
  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
};

export default PayPal;
