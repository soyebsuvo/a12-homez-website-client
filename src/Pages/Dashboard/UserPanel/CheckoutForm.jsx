import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import usePropertyBought from "../../../Hooks/usePropertyBought";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";
import moment from "moment";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function CheckoutForm() {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [clientSecret, setClientSecret] = useState('');
    const axiosSecure = useAxiosSecure();
    const [propertyBought] = usePropertyBought();
    const totalPrice = propertyBought?.reduce((total, item) => total + parseInt(item.offeredPrice), 0)
    const stripe = useStripe();
    const elements = useElements();
    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price: totalPrice })
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            })
    }, [axiosSecure, totalPrice])
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
            type: 'card',
            card
        })
        if (error) {
            console.log("payment error", error)
        }
        else {
            console.log("payement method", paymentMethod)
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.displayName,
                    email: user?.email
                }
            }
        })
        if (confirmError) {
            console.log("confirm error", confirmError)
        } else {
            console.log("Payment Intent", paymentIntent)
        }
        if (paymentIntent.status === "succeeded") {
            console.log("Transection Id :", paymentIntent.id)
            const paymentInfo = {
                email: user?.email,
                name: user?.displayName,
                price: totalPrice,
                transectionId: paymentIntent.id,
                date: moment().format("L"),
                propertyBoughtIds: propertyBought?.map(item => item?._id),
                status: "pending"
            }
            const res = await axiosSecure.post('/payments', paymentInfo);
            console.log(res.data)
            if (res.data.insertedId) {
                Swal.fire(
                    "Payment Done",
                    "Thanks for the payments",
                    "success"
                )
                navigate("/")
            }
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            {clientSecret && <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                            
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            ></CardElement>}
            <button className="bg-[#EB6753] my-5 px-3 py-1 rounded-lg border" type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>
    )
}
