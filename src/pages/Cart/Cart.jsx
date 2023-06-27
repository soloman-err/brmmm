import useCart from '../../hooks/useCart';
import './Cart.scss';

const Cart = () => {
    const [cart, refetch]= useCart()
    console.log(cart);

    return (
        <main>
            <h3>Cart</h3>
        </main>
    );
};

export default Cart;