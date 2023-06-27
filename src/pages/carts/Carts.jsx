import useCart from '../../hooks/useCart';
import './Carts.scss';

const Carts = () => {
    const [cart, refetch]= useCart()
    console.log(cart);

    return (
        <main>
            <h3>Cart</h3>
        </main>
    );
};

export default Carts;