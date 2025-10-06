import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate} from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import { asyncRegisterUser } from '../../store/actions/userActions';
import { asyncCreateProduct } from '../../store/actions/productActions';

const CreateProduct = () => {
    const { register, reset, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const createProductHandler = (product) => {
        product.id = nanoid();
        navigate("/")
        console.log(product);
        dispatch(asyncCreateProduct(product))
        reset();
    };

    return (
        <div>
            <form onSubmit={handleSubmit(createProductHandler)} className='flex flex-col w-1/2 gap-3'>
                <input
                    {...register("image")}
                    className='text-2xl outline-0 border-b p-2'
                    type='url'
                    placeholder='Image Url'
                />
                <input
                    {...register("title")}
                    className='text-2xl outline-0 border-b p-2'
                    type='text'
                    placeholder='Product Title'
                />

                <input
                    {...register("price")}
                    className='text-2xl outline-0 border-b p-2'
                    type="number"
                    placeholder="0.00"
                />

                <textarea
                    {...register("description")}
                    className='text-2xl outline-0 border p-2'
                    placeholder='Enter Description Here'
                ></textarea>

                <input
                    {...register("category")}
                    className='text-2xl outline-0 border-b p-2'
                    type="text"
                    placeholder="Product Category"
                />

                <button className='p-3 rounded w-1/4 bg-white font-bold text-black hover:text-white hover:bg-black hover:border-2 hover:border-white transition-all duration-200 ease-in-out'>
                    Create Product. 
                </button>

            </form>
        </div>
    );
};

export default CreateProduct;