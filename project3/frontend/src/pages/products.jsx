import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { asyncUpdateuser } from '../store/actions/userActions';
import axios from '../api/axiosconfig';
import { Suspense } from 'react';

const Products = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const users = useSelector((state) => state.userReducer.users);

  const [products, setProducts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const { data } = await axios.get(`/products?_limit=6&_start=${products.length}`);
      if (data.length === 0) {
        //aur data nahi raha fetch karne ko
        setHasMore(false);
      } else {
        //abhi aur data hai , data still left
        setHasMore(true);
        //value update krr do 
        //product length update ho jaaye gi
        setProducts((prev) => [...prev, ...data]);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const AddtoCartHandler = (product) => {
    if (!users || !users.cart) return;

    //user ko copy karo 
    const copyuser = {
      ...users,
      cart: [...users.cart],
    };

    //find its product index
    const index = copyuser.cart.findIndex((c) => c?.product?.id === product.id);

    //if there is no index then add a new product to cart
    if(index===-1){
      copyuser.cart.push({ product, quantity: 1 });
    }else{
      //imporve the value at cart itself
      copyuser.cart[index] = {
        product,
        quantity: copyuser.cart[index].quantity + 1,
      };
    }

    //iss user ko update krr do with updated cart
    dispatch(asyncUpdateuser(copyuser.id, copyuser));

  };

  const renderproduct = products.map((product) => (
    <div
      key={product.id}
      className="w-full rounded-xl sm:w-[48%] md:w-[30%] h-[500px] m-2 p-3 box-border border border-white shadow hover:shadow-2xl hover:shadow-white transition-all duration-300"
    >
      <img
        loading="lazy"
        className="w-full h-48 object-cover mb-3"
        src={product.image || '/default.png'}
        alt={product.title || 'Product'}
      />
      <h1 className="text-lg font-semibold mb-1">{product.title}</h1>
      <small className="block mb-2">
        {product.description?.slice(0, 100) || 'No description available'}...
      </small>
      <div className="mt-auto flex justify-between items-center mb-3">
        <p className="text-blue-300 font-bold">₹{product.price}</p>
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

  return(
    <div className="flex justify-center items-center scroll-smooth">
      <InfiniteScroll
        dataLength={products.length}
        next={fetchProducts}
        hasMore={hasMore}
        scrollThreshold={0.8}
        loader={<h4 className="text-white text-center">Loading ...</h4>}
        endMessage={
          <p className="text-white text-center">
            <b>You're all caught up!</b>
          </p>
        }
      >
        <div className="mx-auto flex flex-wrap justify-center w-11/12 sm:w-4/5 text-white font-bold p-4">
          <Suspense fallback={<h1 className=' text-center text-5xl text-red-500'>LOADING</h1>}>
            {/* agar yeh data ke aane mai time lagta hai then activate fallback */}
            {renderproduct}
          </Suspense>
        </div>
      </InfiniteScroll>
    </div>
  )
  
};

export default Products;