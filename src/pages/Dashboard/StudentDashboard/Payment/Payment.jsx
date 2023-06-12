import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import CheckoutForm from "./CheckoutForm";
import useSelectCourse from "../../../../hooks/useSelectCourse";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
const [selectCourse] = useSelectCourse();

  return (
    <div>
      <h2 className="text-2xl text-green-800 font-semibold mb-12">
        My Payment Page
      </h2>
      <div className="border-2 border-cyan-500 w-[600px] mx-auto p-12 rounded-md">
        <Elements stripe={stripePromise}>
          <CheckoutForm  />
          {/* Pass the first element of the price array */}
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
