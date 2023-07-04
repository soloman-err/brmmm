import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../../hooks/useCart";
import CheckoutForm from "./CheckoutForm";
import './Payment.scss';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
    const [cart]= useCart();
    const total = cart.reduce((sum, product)=> sum + parseFloat(product.price), 0);
    const price = total.toFixed(2);

    return (
        <div id='payment-form'>
            <h2>Payment Details</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm cart={cart} price={price}/>
            </Elements>
        </div>
    );
};

export default Payment;