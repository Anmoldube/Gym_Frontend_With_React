import React from "react";
import { PaystackButton } from "react-paystack";
import axios from "axios";

const PaymentButton = ({ amount, email, plan }) => {
  const publicKey = "sk_test_504fa14e9bb27abf2af2009e4d7ccb162fbfb511"; // Replace with your Paystack public key

  const onSuccess = async (reference) => {
    console.log(reference);
    alert("Payment Successful!");

    // Save payment details to the backend
    try {
      await axios.post("http://localhost:5000/api/payment", {
        email,
        amount,
        reference: reference.reference,
        plan,
      });
      alert("Payment saved successfully!");
    } catch (error) {
      console.error("Error saving payment:", error);
      alert("Failed to save payment.");
    }
  };

  const onClose = () => {
    alert("Payment closed");
  };

  const componentProps = {
    email,
    amount: amount * 100, // Paystack amount is in kobo
    metadata: {
      custom_fields: [
        {
          display_name: "Email",
          variable_name: "email",
          value: email,
        },
      ],
    },
    publicKey,
    text: "Pay Now",
    onSuccess,
    onClose,
  };

  return <PaystackButton {...componentProps} className="paystack-button" />;
};

export default PaymentButton;
