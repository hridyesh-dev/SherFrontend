import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asyncdeleteuser, asyncLogOutUser, asyncUpdateuser } from '../../store/actions/userActions';

const UserProfile = () => {
    
    const user = useSelector((state) => state.userReducer.users);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { register, reset, handleSubmit } = useForm({
        defaultValues: {
        userName: user?.userName,
        email: user?.email,
        password: user?.password,
        },
    });

    const updateUserHandler = (userData) => {
        dispatch(asyncUpdateuser(user.id, userData));
    };

    const DeleteHandler = () => {
        dispatch(asyncdeleteuser(user.id));
        navigate("/login")
    };

    const logOutHandler = () => {
        dispatch(asyncLogOutUser());
        navigate("/login")
    };



    return user ? (
        <div>

            <div className=' my-10 flex flex-col gap-4 '>
                <h1 className=' text-green-500 font-bold  text-5xl'>User Profile Page</h1>
                <h2 className=' font-thin text-white text-3xl'><spam className=" text-red-500">Hi</spam> , Welcome {user.userName}</h2>
                <h2 className=' font-bold  text-lg text-pink-400'> User Email : {user.email}</h2>
            </div>

            <hr className=' my-10'/>

            <div className=' my-9'>
                <form onSubmit={handleSubmit(updateUserHandler)} className="space-y-6">
                    <input
                    {...register("userName")}
                    className="w-full bg-gray-900 text-white p-3 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
                    type="text"
                    placeholder="User Name"
                    />

                    <input
                    {...register("email")}
                    className="w-full bg-gray-900 text-white p-3 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
                    type="email"
                    placeholder="User Email"
                    />

                    <input
                    {...register("password")}
                    className="w-full bg-gray-900 text-white p-3 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
                    type="password"
                    placeholder="Password"
                    />

                    <button className="w-full bg-white text-black font-bold py-3 rounded hover:bg-blue-500 hover:text-white hover:border hover:border-white transition duration-300">
                        Update User
                    </button>

                    <button
                    type="button"
                    onClick={DeleteHandler}
                    className="w-full bg-black text-white border font-bold py-3 rounded hover:bg-red-500 hover:text-black border-white transition duration-300"
                    >
                        Delete User
                    </button>

                    <button
                    type="button"
                    onClick={logOutHandler}
                    className="w-full hover:bg-black hover:text-white border font-bold py-3 rounded bg-red-500 text-black border-white transition duration-300"
                    >
                        LogOut User
                    </button>
                </form>
            </div>
        </div>
    ) : (
        <div>
        <h1>Please Login — User Not Found</h1>
        </div>
    );
};

export default UserProfile;