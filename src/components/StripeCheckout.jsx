import React, { useState } from 'react'
// import "./Stripe.css"
import styled from 'styled-components'
import { loadStripe } from '@stripe/stripe-js'
import {
  CardElement,
  useStripe,
  Elements,
  useElements
} from "@stripe/react-stripe-js"

import axios from 'axios'
import { useCartContext } from '../context/cart_context'
import { useUserContext } from '../context/user_context'
import { Navigate, redirect, Link } from 'react-router-dom'
import { formatPrice } from '../utils/helpers'
import { isDisabled } from '@testing-library/user-event/dist/utils'
import { useEffect } from 'react'

const promise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)

const CheckoutForm = () => {
  const { cart, total_amount, shipping_fee, clearCart } = useCartContext();
  const { myUser } = useUserContext();
  // STRIPE STUFF
  const [succeeded, setSucceeded] = useState(false)
  const [error, setError] = useState(null)
  const [processing, setProcessing] = useState('');
  const [disabled, setDisabled] = useState(true)
  const [clientSecret, setClientSecret] = useState('')
  const stripe = useStripe()
  const elements = useElements()

  const cardStyle = {
    style: {
      base: {
        color: '#32325d',
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#32325d',
        },
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    },
  };

  const createPaymentIntent = async () => {
    try {
      const { data } = await axios.post('/.netlify/functions/create-payment-intent',
        JSON.stringify({ cart, shipping_fee, total_amount })
      )
      setClientSecret(data.clientSecret)
    } catch (error) {
      console.log(error.response);
    }
  }

  useEffect(() => {
    createPaymentIntent();
    // eslint-disable-next-line

  }, [])

  const handleChanege = async (event) => {
    setDisabled(event.empty)
    setError(event.error ? event.error.message : "")
  }
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    })
    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`)
      setProcessing(false)
    } else {
      setError(null)
      setProcessing(false)
      setSucceeded(true)

    }
  }

  return <div className='flex flex-col gap-y-4 justify-center items-center mt-4'>
    {
      succeeded ? <div className='flex flex-col font-bold font-serif tracking-tight'>
        <h4>Thank you 💕</h4>
        <h4>Your payment was successful!</h4>
        <div className='flex gap-3 justify-center items-center'>
          <h4>Wanna view other products too?</h4>
          <Link to="/" className='bg-amber-800 text-white px-3 py-1 tracking-wider w-max  font-mono'>View All Products</Link>

        </div>
      </div> : <div>
        <h4 className='font-bold capitalize'>Hello, {myUser && myUser.name}</h4>
        <p>Your total: {formatPrice(shipping_fee + total_amount)}</p>
        <p>Test Card: 4242 4242 4242 4242</p>
      </div>
    }
    <form action="" id='payment-form' onSubmit={handleSubmit}>
      <CardElement id='card-element' options={cardStyle} onChange={handleChanege} />
      <button id='submit' disabled={processing || disabled || succeeded}>
        <span id="button-text" >
          {processing ? <div className='spinner' id='spinner'></div> : "Pay"}
        </span>
      </button>
      {/* Show any error that happens when processing the payment */}
      {error && <div className='card-error' role="alert">
        {error} </div>}
      {/* Show a success message upon payment completion */}
      <p className={succeeded ? 'result-message' : 'result-message hidden'}>
        Payment Succeded, see the result in your <a href={`https://dashboard.stripe.com/test/payments`} className="text-blue-600">
          Stripe Dashboard. &nbsp;
        </a>
        Refresh the page to pay again
      </p>
    </form>
  </div>
}

const StripeCheckout = () => {
  return (
    <Wrapper>
      <Elements stripe={promise}>
        <CheckoutForm />
      </Elements>
    </Wrapper>
  )
}

const Wrapper = styled.section`
form {
    width: 30vw;
    min-width: 500px;
    align-self: center;
    box-shadow: 0px 0px 0px 0.5px rgba(50, 50, 93, 0.1),
      0px 2px 5px 0px rgba(50, 50, 93, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.07);
    border-radius: 7px;
    padding: 40px;
  }
  h2{
    color:"red"
  }
  
  
  #payment-message {
    color: rgb(105, 115, 134);
    font-size: 16px;
    line-height: 20px;
    padding-top: 12px;
    text-align: center;
  }
  
  #payment-element {
    margin-bottom: 24px;
  }
  
  /* Buttons and links */
  button {
    background: #5469d4;
    font-family: Arial, sans-serif;
    color: #ffffff;
    border-radius: 4px;
    border: 0;
    padding: 12px 16px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    display: block;
    transition: all 0.2s ease;
    box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
    width: 100%;
  }
  
  button:hover {
    filter: contrast(115%);
  }
  
  button:disabled {
    opacity: 0.5;
    cursor: default;
  }
  
  /* spinner/processing state, errors */
  .spinner,
  .spinner:before,
  .spinner:after {
    border-radius: 50%;
  }
  
  .spinner {
    color: #ffffff;
    font-size: 22px;
    text-indent: -99999px;
    margin: 0px auto;
    position: relative;
    width: 20px;
    height: 20px;
    box-shadow: inset 0 0 0 2px;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
  }
  
  .spinner:before,
  .spinner:after {
    position: absolute;
    content: '';
  }
  
  .spinner:before {
    width: 10.4px;
    height: 20.4px;
    background: #5469d4;
    border-radius: 20.4px 0 0 20.4px;
    top: -0.2px;
    left: -0.2px;
    -webkit-transform-origin: 10.4px 10.2px;
    transform-origin: 10.4px 10.2px;
    -webkit-animation: loading 2s infinite ease 1.5s;
    animation: loading 2s infinite ease 1.5s;
  }
  
  .spinner:after {
    width: 10.4px;
    height: 10.2px;
    background: #5469d4;
    border-radius: 0 10.2px 10.2px 0;
    top: -0.1px;
    left: 10.2px;
    -webkit-transform-origin: 0px 10.2px;
    transform-origin: 0px 10.2px;
    -webkit-animation: loading 2s infinite ease;
    animation: loading 2s infinite ease;
  }
  
  @keyframes loading {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  
  @media only screen and (max-width: 600px) {
    form {
      width: 80vw;
      min-width: initial;
    }
  }
`

export default StripeCheckout

// form {
//   width: 30vw;
//   min-width: 500px;
//   align-self: center;
//   box-shadow: 0px 0px 0px 0.5px rgba(50, 50, 93, 0.1),
//     0px 2px 5px 0px rgba(50, 50, 93, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.07);
//   border-radius: 7px;
//   padding: 40px;
// }


// #payment-message {
//   color: rgb(105, 115, 134);
//   font-size: 16px;
//   line-height: 20px;
//   padding-top: 12px;
//   text-align: center;
// }

// #payment-element {
//   margin-bottom: 24px;
// }

// /* Buttons and links */
// button {
//   background: #5469d4;
//   font-family: Arial, sans-serif;
//   color: #ffffff;
//   border-radius: 4px;
//   border: 0;
//   padding: 12px 16px;
//   font-size: 16px;
//   font-weight: 600;
//   cursor: pointer;
//   display: block;
//   transition: all 0.2s ease;
//   box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
//   width: 100%;
// }

// button:hover {
//   filter: contrast(115%);
// }

// button:disabled {
//   opacity: 0.5;
//   cursor: default;
// }

// /* spinner/processing state, errors */
// .spinner,
// .spinner:before,
// .spinner:after {
//   border-radius: 50%;
// }

// .spinner {
//   color: #ffffff;
//   font-size: 22px;
//   text-indent: -99999px;
//   margin: 0px auto;
//   position: relative;
//   width: 20px;
//   height: 20px;
//   box-shadow: inset 0 0 0 2px;
//   -webkit-transform: translateZ(0);
//   -ms-transform: translateZ(0);
//   transform: translateZ(0);
// }

// .spinner:before,
// .spinner:after {
//   position: absolute;
//   content: '';
// }

// .spinner:before {
//   width: 10.4px;
//   height: 20.4px;
//   background: #5469d4;
//   border-radius: 20.4px 0 0 20.4px;
//   top: -0.2px;
//   left: -0.2px;
//   -webkit-transform-origin: 10.4px 10.2px;
//   transform-origin: 10.4px 10.2px;
//   -webkit-animation: loading 2s infinite ease 1.5s;
//   animation: loading 2s infinite ease 1.5s;
// }

// .spinner:after {
//   width: 10.4px;
//   height: 10.2px;
//   background: #5469d4;
//   border-radius: 0 10.2px 10.2px 0;
//   top: -0.1px;
//   left: 10.2px;
//   -webkit-transform-origin: 0px 10.2px;
//   transform-origin: 0px 10.2px;
//   -webkit-animation: loading 2s infinite ease;
//   animation: loading 2s infinite ease;
// }

// @keyframes loading {
//   0% {
//     -webkit-transform: rotate(0deg);
//     transform: rotate(0deg);
//   }
//   100% {
//     -webkit-transform: rotate(360deg);
//     transform: rotate(360deg);
//   }
// }

// @media only screen and (max-width: 600px) {
//   form {
//     width: 80vw;
//     min-width: initial;
//   }
// }