import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { asyncUpdateuser } from '../store/actions/userActions';

const Products = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    userReducer: { users },
    productReducer: { products },
  } = useSelector((state) => state);

  const AddtoCartHandler = (product) => {
    // shallow copy and deep copy
    const copyuser = { ...users, cart: [...users.cart] };
    // is this item already present in cart or not
    const x = copyuser.cart.findIndex((c) => c?.product?.id === product.id);
    // if it is not there then 
    if (x === -1) {
      copyuser.cart.push({ product , quantity: 1 });
    } else {
      // if it is there then 
      copyuser.cart[x] = {
        product,
        quantity: copyuser.cart[x].quantity + 1,
      };
    }
    //update the user 
    dispatch(asyncUpdateuser(copyuser.id, copyuser));
  };

  const data = products.map((product) => (
    <div
      key={product.id}
      className="mr-3 h-[500px] hover:shadow-2xl hover:shadow-white transition-all ease-in-out duration-300 shadow shadow-amber-50 border border-white w-[30%] p-3 box-border"
    >
      <img
        className="w-full h-48 object-cover mb-3"
        src={product.image}
        alt={product.title}
      />
      <h1 className="text-lg font-semibold mb-1">{product.title}</h1>
      <small className="block mb-2">{product.description.slice(0, 100)}...</small>
      <div className="mt-auto flex justify-between items-center mb-3">
        <p className="text-blue-300 font-bold">{product.price}</p>
        <button
          onClick={() => AddtoCartHandler(product)}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors"
        >
          Add to Cart
        </button>
      </div>
      <Link
        className="block border p-3 w-full text-center border-blue-400"
        to={`/product/${product.id}`}
      >
        More Info
      </Link>
    </div>
  ));

  return products.length > 0 ? (
    <div className="flex flex-wrap w-screen overflow-auto text-white font-bold p-4">
      {data}
    </div>
  ) : (
    <div className="text-center text-white font-semibold text-xl mt-20">Loading ....</div>
  );
};

export default Products;
