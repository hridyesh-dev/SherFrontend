import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { asyncupdateProduct } from "../../store/actions/productActions";
import { asyncdeleteProduct } from "../../store/actions/productActions";

const ProductDetails = () => {
  const { id } = useParams();
  
  // Get all products
  const products = useSelector((state) => state.productReducer.products);

  // Get the current logged-in user
  const currentUser = useSelector((state) => state.userReducer.users);

  const product = products?.find((product) => product.id == id);
  
  console.log(product,currentUser);

  

  const { register, reset, handleSubmit } = useForm({
    defaultValues:{
      image:product?.image,
      title:product?.title,
      price:product?.price,
      category:product?.category,
      description:product?.description,
    }
  });


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateProductHandler = (product) => {
    dispatch(asyncupdateProduct(id, product));
  };


  const DeleteHandler=()=>{
    dispatch(asyncdeleteProduct(id));
    navigate("/products")
  }



  return product?(
    <div className=' flex flex-col justify-center items-center'>
      
      <hr className=''/>

      {/* Product Description */}
      <div className=" w-full border border-white bg-black text-white px-6 py-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-[400px] object-cover border border-gray-700 rounded-lg shadow-xl"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl font-bold">{product.title}</h1>
            <h2 className="text-2xl text-green-400 font-semibold">₹{product.price}</h2>
            <p className="text-gray-300 leading-relaxed">{product.description}</p>
            <button className="bg-purple-600 text-white px-6 py-3 rounded-md border border-purple-600 hover:bg-purple-700 transition duration-300">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>

      <hr/>

      { currentUser && currentUser?.isAdmin &&(
        // Update Form 
        <div className=" transition-all duration-200 ease-in-out hover:shadow-2xl hover:shadow-amber-50 border-white border-2 w-full bg-black text-white px-6 py-16">
          <div className="max-w-3xl mx-auto">
            
            <h2 className="text-3xl font-semibold mb-8 text-center">Update Product</h2>
            
            <form onSubmit={handleSubmit(updateProductHandler)} className="space-y-6">
            
              <input
                {...register("image")}
                className="w-full bg-gray-900 text-white p-3 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
                type="url"
                placeholder="Image URL"
              />
            
              <input
                {...register("title")}
                className="w-full bg-gray-900 text-white p-3 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
                type="text"
                placeholder="Product Title"
              />
            
              <input
                {...register("price")}
                className="w-full bg-gray-900 text-white p-3 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
                type="number"
                placeholder="0.00"
              />
            
              <textarea
                {...register("description")}
                className="w-full bg-gray-900 text-white p-3 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Enter Description Here"
                rows={4}
              />
            
              <input
                {...register("category")}
                className="w-full bg-gray-900 text-white p-3 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
                type="text"
                placeholder="Product Category"
              />
            
              <button className="w-full bg-white text-black font-bold py-3 rounded hover:bg-blue-500 hover:text-white hover:border hover:border-white transition duration-300">
                Update Product
              </button>

              <button type='button' onClick={DeleteHandler}  className="w-full bg-black text-white border font-bold py-3 rounded hover:bg-red-500 hover:text-black  border-white transition duration-300">
                Delete Product
              </button>
            
            </form>
          </div>
        </div>
      ) }

      

    </div>
  ):<h1>Loading....</h1>
};

export default ProductDetails;