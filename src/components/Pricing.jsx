import React from "react";
import { PaystackButton } from "react-paystack";
import axios from "axios";

function Pricing() {
  const publicKey = "pk_test_d4edbf74516bb9ba8c2bc2ed6f32ddedf8be2e67"; // Replace with your Paystack public key

  const handlePayment = (amount, plan) => {
    const email = "Anmoldube15@gmail.com"; // Replace with customer's email
    const onSuccess = (reference) => {
      // Save the payment details to the backend
      axios
        .post("http://localhost:5000/api/payment", {
          email: email,
          amount: amount,
          reference: reference.reference,
          plan: plan, // Example plan
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error("There was an error saving the payment!", error);
        });
    };

    const onClose = () => {
      console.log("Payment closed");
    };

    return {
      email,
      amount,
      publicKey,
      text: "Get Started",
      onSuccess,
      onClose,
    };
  };

  return (
    <div className="bg-green-50 flex justify-center items-center min-h-screen">
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">
            Affordable Pricing Plan
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Special diet plans for you
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Iaculis pretium accumsan ultrices laoreet dis vehicula venenatis
            molestie.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Weight Loss Plan */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Weight Loss
            </h3>
            <p className="mt-2 text-base leading-6 text-gray-500">
              7 DAYS DIET PLANS
            </p>
            <p className="mt-4 text-xl font-bold text-gray-900">
              <span className="line-through">$129.99</span> $99.99
            </p>
            <ul className="mt-4 space-y-3 text-sm text-gray-700">
              <li>✔️ Urna proin ornare eu</li>
              <li>✔️ Sem habitant fermentum</li>
              <li>✔️ Eros tristique ultricies</li>
              <li>✔️ Vulputate mi erat taciti</li>
            </ul>
            <PaystackButton
              {...handlePayment(9999, "Weight Loss")}
              className="mt-6 px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md"
            />
            <p className="mt-2 text-sm text-gray-500">24/7 Consultation</p>
          </div>

          {/* Post Pregnancy Plan */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Post Pregnancy
            </h3>
            <p className="mt-2 text-base leading-6 text-gray-500">
              6 MONTHS DIET & EXERCISE
            </p>
            <p className="mt-4 text-xl font-bold text-gray-900">$179.99</p>
            <ul className="mt-4 space-y-3 text-sm text-gray-700">
              <li>✔️ Urna proin ornare eu</li>
              <li>✔️ Sem habitant fermentum</li>
              <li>✔️ Eros tristique ultricies</li>
              <li>✔️ Vulputate mi erat taciti</li>
            </ul>
            <PaystackButton
              {...handlePayment(17999, "Post Pregnancy")}
              className="mt-6 px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md"
            />
            <p className="mt-2 text-sm text-gray-500">24/7 Consultation</p>
          </div>

          {/* Body Sculpting Plan */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Body Sculpting
            </h3>
            <p className="mt-2 text-base leading-6 text-gray-500">
              4 WEEKS MEAL & GYM PLAN
            </p>
            <p className="mt-4 text-xl font-bold text-gray-900">$229.99</p>
            <ul className="mt-4 space-y-3 text-sm text-gray-700">
              <li>✔️ Urna proin ornare eu</li>
              <li>✔️ Sem habitant fermentum</li>
              <li>✔️ Eros tristique ultricies</li>
              <li>✔️ Vulputate mi erat taciti</li>
            </ul>
            <PaystackButton
              {...handlePayment(22999, "Body Sculpting")}
              className="mt-6 px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md"
            />
            <p className="mt-2 text-sm text-gray-500">24/7 Consultation</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
