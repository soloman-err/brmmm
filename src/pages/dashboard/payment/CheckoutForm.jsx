import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import './CheckoutForm.scss';

const CheckoutForm = ({ cart, price }) => {
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState('');
  const [cardError, setCardError] = useState('');
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post('/create-payment-intent', { price }).then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    // Use card element with other stripe APIs:
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    console.log(card);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });
    if (error) {
      console.log(error);
      setCardError(error.message);
    } else {
      setCardError('');
      console.log(paymentMethod);
    }

    setProcessing(true);

    // Payment Intent:
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || 'unknown',
            name: user?.displayName || 'anonymous',
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
    }
    console.log(paymentIntent);

    setProcessing(false);

    if (paymentIntent?.status === 'succeeded') {
      const transactionId = paymentIntent.id;
      setTransactionId(transactionId);

      const payment = {
        email: user?.email,
        transactionId: paymentIntent?.id,
        price,
        date: new Date(),
        quantity: cart?.length,
        cartProducts: cart.map((product) => product?._id),
        products: cart.map((product) => product?.productId),
        orderStatus: 'Service Pending',
        productNames: cart.map((product) => product?.name),
      };
      axiosSecure.post('/payments', payment).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          toast.success('Payment success!');
        }
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
        <button
          id="paynow-btn"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay Now
        </button>
      </form>
      {cardError && <p id="payment-error">{cardError}</p>}
      {transactionId && (
        <p id="payment-success">Payment success: {transactionId}</p>
      )}
    </>
  );
};

export default CheckoutForm;
