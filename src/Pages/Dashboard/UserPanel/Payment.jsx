import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js"
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_gateway_pk);
export default function Payment() {
  return (
    <div className='py-8 md:px-20'>
      <div className='mb-4'>
        <h2 className='text-4xl font-bold text-center'>Payment</h2>
      </div>
      <div>
        <Elements stripe={stripePromise}>
            <CheckoutForm></CheckoutForm>
        </Elements>
      </div>
    </div>
  )
}
