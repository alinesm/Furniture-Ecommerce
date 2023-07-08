import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import BillingDetails from "./BillingDetails";
import { formatPrice } from "../assets/utils/helpers";
import styled from "styled-components";

const stripeTestPromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const CARD_OPTIONS = {
  style: {
    base: {
      color: "rgb(69,50,39)",
      fontWeight: 400,
      fontSize: "16px",
      fontSmoothing: "antialiased",
      backgroundColor: "rgb(241,245,248)",
      borderRadius: "30px",
      border: "none",
      letterSpacing: "var(--spacing)",
      "::placeholder": {
        color: "#CFD7DF",
        textTransform: "capitalize",
      },
    },
    invalid: {
      color: "#E25950",
    },
    change: {
      backgroundColor: "yellow",
      padding: "20px",
    },
  },
};

const CheckoutForm = ({ shipping_fee, setCart, cart, total_amount }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [success, setSuccess] = useState(false);
  const [paymentInfoDisable, setPaymentInfoDisable] = useState(true);

  const appearance = {
    theme: "stripe",

    variables: {
      colorPrimary: "#0570de",
      colorBackground: "#ffffff",
      colorText: "#30313d",
      colorDanger: "#df1b41",
      fontFamily: "Ideal Sans, system-ui, sans-serif",
      spacingUnit: "2px",
      borderRadius: "4px",
      // See all possible variables below
    },
  };

  const stripe = useStripe();
  const elements = useElements(appearance);

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    const billingDetails = {
      name: ev.target.name.value,
      email: ev.target.email.value,
      address: {
        city: ev.target.city.value,
        line1: ev.target.address.value,
        state: ev.target.state.value,
        postal_code: ev.target.zip.value,
      },
    };

    setIsProcessing(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: {
        number: elements.getElement(CardNumberElement).getElement(),
        exp_month: elements.getElement(CardExpiryElement).cardExpiry.month,
        exp_year: elements.getElement(CardExpiryElement).cardExpiry.year,
        cvc: elements.getElement(CardCvcElement).getElement(),
      },
      billing_details: billingDetails,
    });

    if (!error) {
      console.log("Stripe 23 | token generated!", paymentMethod);
      //send token to backend here
      try {
        const { id } = paymentMethod;
        const response = await axios.post("http://localhost:4000/payment", {
          amount: total_amount * 100,
          id,
        });

        if (response.data.success) {
          console.log("Successful payment");
          setSuccess(true);
        }
      } catch (error) {
        console.log("Error", error);
        setIsProcessing(false);
      }
    } else {
      console.log(error.message);
      setIsProcessing(false);
    }
  };

  return (
    <Wrapper isDisable={paymentInfoDisable}>
      {!success ? (
        <form
          onSubmit={handleSubmit}
          // className="paymentForm"
          // style={{ maxWidth: 400 }}
        >
          <BillingDetails />
          <div className="card">
            <label>Card Number</label>

            <CardNumberElement
              options={CARD_OPTIONS}
              className="StripeElement"
            />

            <label>Expiry Date</label>
            <CardExpiryElement options={CARD_OPTIONS} className="change" />
            <label>CVC code</label>
            <CardCvcElement options={CARD_OPTIONS} />
            <button
              className="btn"
              disabled={isProcessing || !stripe}
              onClick={() => setPaymentInfoDisable(false)}
            >
              {isProcessing
                ? "Processing..."
                : `Pay ${formatPrice(total_amount)}`}
            </button>
          </div>
        </form>
      ) : (
        <div className="succeded">
          <div>Congrats this is the best decision of you're life</div>
        </div>
      )}
    </Wrapper>
  );
};

function StripeCheckout({ shipping_fee, setCart, cart, total_amount }) {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm
        shipping_fee={shipping_fee}
        cart={cart}
        total_amount={total_amount}
        setCart={setCart}
      />
    </Elements>
  );
}

export default StripeCheckout;

const Wrapper = styled.div`
  width: 30%;
  background-color: ${(props) => (props.isDisable ? "white" : "gray")};
  pointer-events: ${(props) => (props.isDisable ? "" : "none")};
  border: 1.5px solid black;
  padding: 20px;
  border-radius: 10px;
  .btn {
    display: block;
    width: 148px;
    /* margin: 0 auto; */
    margin: 20px auto 0 auto;
    text-align: center;
  }
  input {
    background-color: ${(props) => (props.isDisable ? "white" : "green")};
  }
  label {
    color: var(--clr-primary-1);
  }
  /* 
  border: 1.5px solid black;
  padding: 20px;
  border-radius: 10px;
  /* .paymentForm {
    background: var(--clr-grey-10);
  } */
  /* input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
    &::placeholder {
      text-transform: capitalize;
    }
  } */
`;

// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import { loadStripe } from "@stripe/stripe-js";
// import {
//   CardElement,
//   useStripe,
//   Elements,
//   useElements,
// } from "@stripe/react-stripe-js";
// import axios from "axios";

// import { useNavigate } from "react-router-dom";
// import { formatPrice } from "../assets/utils/helpers";

// const promise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

// const CheckoutForm = ({ shipping_fee, setCart, cart, total_amount }) => {
//   // const { myUser } = useUserContext();
//   const navigate = useNavigate();
//   const [succeeded, setSucceeded] = useState(false);
//   const [error, setError] = useState(null);
//   const [processing, setProcessing] = useState("");
//   const [disabled, setDisabled] = useState(true);
//   const [clientSecret, setClientSecret] = useState("");
//   const stripe = useStripe();
//   const elements = useElements();

//   function clearCart() {
//     setCart([]);
//   }

//   const createPaymentIntent = async () => {
//     try {
//       const { data } = await axios.post(
//         "/.netlify/functions/create-payment-intent",

//         JSON.stringify({ cart, shipping_fee, total_amount })
//       );
//       setClientSecret(data.clientSecret);
//     } catch (error) {
//       // console.log(error.response)
//     }
//   };
//   useEffect(() => {
//     createPaymentIntent();
//     // eslint-disable-next-line
//   }, []);

//   const cardStyle = {
//     style: {
//       base: {
//         color: "#32325d",
//         fontFamily: "Arial, sans-serif",
//         fontSmoothing: "antialiased",
//         fontSize: "16px",
//         "::placeholder": {
//           color: "#32325d",
//         },
//       },
//       invalid: {
//         color: "#fa755a",
//         iconColor: "#fa755a",
//       },
//     },
//   };
//   const handleChange = async (event) => {
//     // Listen for changes in the CardElement
//     // and display any errors as the customer types their card details
//     setDisabled(event.empty);
//     setError(event.error ? event.error.message : "");
//   };
//   const handleSubmit = async (ev) => {
//     ev.preventDefault();
//     setProcessing(true);
//     const payload = await stripe.confirmCardPayment(clientSecret, {
//       payment_method: {
//         card: elements.getElement(CardElement),
//       },
//     });
//     if (payload.error) {
//       setError(`Payment failed ${payload.error.message}`);
//       setProcessing(false);
//     } else {
//       setError(null);
//       setProcessing(false);
//       setSucceeded(true);
//       setTimeout(() => {
//         clearCart();
//         navigate("/");
//       }, 10000);
//     }
//   };
//   return (
//     <div>
//       {succeeded ? (
//         <article>
//           <h4>Thank you</h4>
//           <h4>Your payment was successful!</h4>
//           <h4>Redirecting to home page shortly</h4>
//         </article>
//       ) : (
//         <article>
//           {/* <h4>Hello, {myUser && myUser.name}</h4> */}
//           <p>Your total is {formatPrice(total_amount)}</p>
//           <p>Test Card Number: 4242 4242 4242 4242</p>
//         </article>
//       )}
//       <form id="payment-form" onSubmit={handleSubmit}>
//         <CardElement
//           id="card-element"
//           options={cardStyle}
//           onChange={handleChange}
//         />
//         <button disabled={processing || disabled || succeeded} id="submit">
//           <span id="button-text">
//             {processing ? <div className="spinner" id="spinner"></div> : "Pay"}
//           </span>
//         </button>
//         {/* Show any error that happens when processing the payment */}
//         {error && (
//           <div className="card-error" role="alert">
//             {error}
//           </div>
//         )}
//         {/* Show a success message upon completion */}
//         <p className={succeeded ? "result-message" : "result-message hidden"}>
//           Payment succeeded, see the result in your
//           <a href={`https://dashboard.stripe.com/test/payments`}>
//             {" "}
//             Stripe dashboard.
//           </a>{" "}
//           Refresh the page to pay again.
//         </p>
//       </form>
//     </div>
//   );
// };

// const StripeCheckout = ({ shipping_fee, setCart, cart, total_amount }) => {
//   return (
//     <Wrapper>
//       <Elements stripe={promise}>
//         <CheckoutForm
//           shipping_fee={shipping_fee}
//           cart={cart}
//           total_amount={total_amount}
//           setCart={setCart}
//         />
//       </Elements>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   form {
//     width: 30vw;
//     align-self: center;
//     box-shadow: 0px 0px 0px 0.5px rgba(50, 50, 93, 0.1),
//       0px 2px 5px 0px rgba(50, 50, 93, 0.1),
//       0px 1px 1.5px 0px rgba(0, 0, 0, 0.07);
//     border-radius: 7px;
//     padding: 40px;
//   }
//   input {
//     border-radius: 6px;
//     margin-bottom: 6px;
//     padding: 12px;
//     border: 1px solid rgba(50, 50, 93, 0.1);
//     max-height: 44px;
//     font-size: 16px;
//     width: 100%;
//     background: white;
//     box-sizing: border-box;
//   }
//   .result-message {
//     line-height: 22px;
//     font-size: 16px;
//   }
//   .result-message a {
//     color: rgb(89, 111, 214);
//     font-weight: 600;
//     text-decoration: none;
//   }
//   .hidden {
//     display: none;
//   }
//   #card-error {
//     color: rgb(105, 115, 134);
//     font-size: 16px;
//     line-height: 20px;
//     margin-top: 12px;
//     text-align: center;
//   }
//   #card-element {
//     border-radius: 4px 4px 0 0;
//     padding: 12px;
//     border: 1px solid rgba(50, 50, 93, 0.1);
//     max-height: 44px;
//     width: 100%;
//     background: white;
//     box-sizing: border-box;
//   }
//   #payment-request-button {
//     margin-bottom: 32px;
//   }
//   /* Buttons and links */
//   button {
//     background: #5469d4;
//     font-family: Arial, sans-serif;
//     color: #ffffff;
//     border-radius: 0 0 4px 4px;
//     border: 0;
//     padding: 12px 16px;
//     font-size: 16px;
//     font-weight: 600;
//     cursor: pointer;
//     display: block;
//     transition: all 0.2s ease;
//     box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
//     width: 100%;
//   }
//   button:hover {
//     filter: contrast(115%);
//   }
//   button:disabled {
//     opacity: 0.5;
//     cursor: default;
//   }
//   /* spinner/processing state, errors */
//   .spinner,
//   .spinner:before,
//   .spinner:after {
//     border-radius: 50%;
//   }
//   .spinner {
//     color: #ffffff;
//     font-size: 22px;
//     text-indent: -99999px;
//     margin: 0px auto;
//     position: relative;
//     width: 20px;
//     height: 20px;
//     box-shadow: inset 0 0 0 2px;
//     -webkit-transform: translateZ(0);
//     -ms-transform: translateZ(0);
//     transform: translateZ(0);
//   }
//   .spinner:before,
//   .spinner:after {
//     position: absolute;
//     content: "";
//   }
//   .spinner:before {
//     width: 10.4px;
//     height: 20.4px;
//     background: #5469d4;
//     border-radius: 20.4px 0 0 20.4px;
//     top: -0.2px;
//     left: -0.2px;
//     -webkit-transform-origin: 10.4px 10.2px;
//     transform-origin: 10.4px 10.2px;
//     -webkit-animation: loading 2s infinite ease 1.5s;
//     animation: loading 2s infinite ease 1.5s;
//   }
//   .spinner:after {
//     width: 10.4px;
//     height: 10.2px;
//     background: #5469d4;
//     border-radius: 0 10.2px 10.2px 0;
//     top: -0.1px;
//     left: 10.2px;
//     -webkit-transform-origin: 0px 10.2px;
//     transform-origin: 0px 10.2px;
//     -webkit-animation: loading 2s infinite ease;
//     animation: loading 2s infinite ease;
//   }
//   @keyframes loading {
//     0% {
//       -webkit-transform: rotate(0deg);
//       transform: rotate(0deg);
//     }
//     100% {
//       -webkit-transform: rotate(360deg);
//       transform: rotate(360deg);
//     }
//   }
//   @media only screen and (max-width: 600px) {
//     form {
//       width: 80vw;
//     }
//   }
// `;

// export default StripeCheckout;
