import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Products = () => {
  const products = useSelector((state) => state.productReducer.products);

  const data = products.map((product) => {
    return (
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
          <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors">
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
    );
  });

  return products.length > 0 ? (
    <div className="flex flex-wrap w-screen overflow-auto text-white font-bold p-4">
      {data}
    </div>
  ) : (
    <div className="text-center text-white font-semibold text-xl mt-20">Loading ....</div>
  );
};

export default Products;