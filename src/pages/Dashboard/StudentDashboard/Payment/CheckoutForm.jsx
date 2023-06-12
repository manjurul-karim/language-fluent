import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";

const CheckoutForm = ({ price }) => {
  const { user } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    console.log(price);
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price }), // Wrap the price in an object and stringify it
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.clientSecret);
        setClientSecret(data.clientSecret);
      });
  }, []); // Add 'price' as a dependency to trigger the effect on price change

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("Error", error);
      setCardError(error.message);
    } else {
      setCardError("");
      console.log("Payment Method", paymentMethod);
    }
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "anonymous",
            email: user?.email || "Unknown",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
    }
    console.log(paymentIntent);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="flex justify-center mt-12">
          <button
            className="btn btn-info btn-outline btn-xs"
            type="submit"
            disabled={!stripe || !clientSecret}
          >
            Pay
          </button>
        </div>
      </form>
      <p className="text-red-500">{cardError}</p>
    </>
  );
};

export default CheckoutForm;
