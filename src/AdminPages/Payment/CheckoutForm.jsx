import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useEffect } from "react";
import useCart from "../../Hooks/useCart";
import useAuth from "../../Hooks/useAuth";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'



const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState('')
    const [error, setError] = useState();
    const [transactionId, setTransactionId] = useState([])
    const axiosSecure = useAxiosSecure();
    const [cart, refetch] = useCart()
    const { user } = useAuth();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)



    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    console.log(res.data)
                    setClientSecret(res.data.clientSecret)
                })
        }

    }, [axiosSecure, totalPrice])

    const handlePaymentSubmit = async (event) => {
        event.preventDefault()
        console.log(event)
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }


        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('error', error);
            setError(error.message)

        }
        else {
            console.log('PaymentMethod', paymentMethod);
            setError('')
        }

        // Confirm Payment 
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || "Anonymous",
                    name: user?.displayName || "Anonymous"

                }
            }
        })
        if (confirmError) {
            console.log('confirm error')
        }
        else {
            console.log("payment Intent", paymentIntent)
            if (paymentIntent.status === "succeeded") {
                console.log(paymentIntent.id)
                setTransactionId(paymentIntent.id)

                // Set payment in the data base[***Have Q.***]
                const paymentInfo = {
                    email: user.email,
                    price: cart.price,
                    transactionId: paymentIntent.id,
                    date: new Date(),
                    cartIds: cart.map(item => item._id),
                    menuItemIds: cart.map(item => item.menuId),
                    status: 'pending'
                }

                // Sent Database
                const res = await axiosSecure.post('/payments', paymentInfo)

                console.log("Payment info from Frontend", res.data)
                refetch()
                if (res?.data?.PaymentResult?.insertedId) {
                    Swal.fire({
                        title: "Success",
                        text: `Thank you for your payment`,
                        icon: "success"
                    });

                }


            }
        }
    }
    return (
        <form onSubmit={handlePaymentSubmit}>
            <CardElement
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
            />
            <button className="btn btn-sm btn-primary my-4" type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <p className="text-red-500">{error}</p>
            {transactionId && <p className="text-green-600">Your transaction id:  {transactionId}</p>}
        </form>
    );
};

export default CheckoutForm;