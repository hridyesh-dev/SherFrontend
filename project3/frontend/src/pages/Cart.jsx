import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncUpdateuser } from '../store/actions/userActions';

const Cart = () => {
    const dispatch = useDispatch();

    const users = useSelector((state) => state.userReducer.users);
    const products = useSelector((state) => state.productReducer.products);

    const increaseQuantityHandler = (index) => {
        
        //saare users and unki cart copy karo 
        const copyuser = {
        ...users,
        cart: [...users.cart],
        };

        //item nikalo from cart
        const item = copyuser.cart[index];
        if (!item || !item.product) return;

        // go to the indexof that item and then add and increase its quantity
        copyuser.cart[index] = {
        product: item.product,
        quantity: item.quantity + 1,
        };

        dispatch(asyncUpdateuser(copyuser.id, copyuser));
    };

    const decreaseQuantityHandler = (index) => {
        
        const copyuser = {
            ...users,
            cart: [...users.cart],
        };

        const item = copyuser.cart[index];
        
        if (!item || !item.product) return;

        if (item.quantity > 1) {
            copyuser.cart[index] = {
                    product: item.product,
                    quantity: item.quantity - 1,
            };
        } else {
            // remove item if quantity is 0
            copyuser.cart.splice(index, 1); 
        }

        dispatch(asyncUpdateuser(copyuser.id, copyuser));
    };

    const cartItems = users.cart?.map((c, index) => {
        if (!c?.product) return 

        return (
        <li
            className="hover:bg-gray-900 my-3 rounded transition-all duration-300 p-7 flex flex-row items-center justify-between border border-white"
            key={c.product.id}
        >
            <div className="flex flex-row">
            <img
                className="mr-10 object-cover border border-white w-[7vmax] h-[7vmax]"
                src={c.product.image || '/default.png'}
                alt="Product Image"
            />
            <span className="flex flex-col">
                <h1 className="font-bold text-red-400 text-3xl">
                Product Name: {c.product.title}
                </h1>
                <h1 className="font-bold text-blue-400 text-3xl">
                Cost: ₹{c.product.price}
                </h1>
            </span>
            </div>
            <div className="flex gap-3 flex-col justify-center items-center">
            <div className="flex flex-row gap-2">
                <button
                onClick={() => increaseQuantityHandler(index)}
                className="mx-3 cursor-pointer flex justify-center items-center font-bold text-white text-3xl border border-white px-7 py-2 rounded"
                >
                +
                </button>
                <button
                onClick={() => decreaseQuantityHandler(index)}
                className="mx-3 cursor-pointer flex justify-center items-center font-bold text-white text-3xl border border-white px-7 py-2 rounded"
                >
                -
                </button>
            </div>
            <h3 className="font-black text-green-400 text-3xl">
                Quantity: {c.quantity}
            </h3>
            </div>
        </li>
        );
    });

    return <ul>{cartItems}</ul>;
};

export default Cart;
