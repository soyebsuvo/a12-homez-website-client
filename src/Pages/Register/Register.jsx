import { Link, useNavigate } from 'react-router-dom'
import LoginHeader from '../../assets/header-logo2.svg'
import loginImage from '../../assets/LoginImage.jpg'
import { useForm } from 'react-hook-form';
import { Divider } from '@mui/material';
import { FcGoogle } from 'react-icons/fc';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';
export default function Register() {
const { createUser , googleLogin} = useContext(AuthContext);
const navigate = useNavigate();
    const {
        register,
        handleSubmit,
    } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email , data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            navigate("/")
        })
        .catch(error => {
            console.log(error)
        })
    }

    const handleOtherLogin = () => {
        googleLogin()
        .then(result => {
            console.log(result.user)
            navigate(location.state ? location.state : "/");
        })
        .catch(error => {
            console.log(error)
        })
    }


    return (
        <div className='md:px-20 py-8 flex flex-row-reverse gap-16 justify-center items-center min-h-[99vh]'>
            <div className='w-1/2 md:px-8'>
                <div className="p-8 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <div className='pb-8'>
                        <div className='flex justify-center items-center pb-5'>
                            <Link to="/"><img className='w-32' src={LoginHeader} alt="" /></Link>
                        </div>
                        <h5 className="text-3xl text-center font-medium text-gray-900 dark:text-white">Sign Up</h5>
                        <p className='text-sm text-center'>Sign Up with this account across the following sites.</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mb-3" action="#">

                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                            <input {...register("name", { required: true })} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#EB675368] focus:border-[#EB675368] block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Your Name" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input {...register("email", { required: true })} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#EB675368] focus:border-[#EB675368] block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input {...register("password", { required: true })} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#EB675368] focus:border-[#eb675368] block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="default_size">Profile Photo</label>
                            <input className="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="default_size" type="file"/>
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
                                </div>
                                <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                            </div>
                            <a href="#" className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Password Forgotten?</a>
                        </div>
                        <button type="submit" className="w-full text-white bg-[#EB6753] hover:bg-[#EB6753] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:[#EB6753] dark:hover:bg-[#EB6753] dark:focus:ring-[#EB6753]">Sign Up</button>
                    </form>
                    <Divider>Or</Divider>
                    <div className='relative'>
                        <button onClick={handleOtherLogin} className="w-full my-3 text-black font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:[#EB6753] border border-black">Login With Google</button>
                        <FcGoogle className='absolute left-2 top-5 text-2xl'></FcGoogle>
                    </div>
                    <div className="text-sm text-center font-medium text-gray-500 dark:text-gray-300">
                        Have an Account ?<Link to="/login" className="text-blue-700 hover:underline dark:text-blue-500">Login</Link>
                    </div>
                </div>
            </div>

            {/* svg  */}
            <div className='w-1/2 p-4'>
                <img className='w-full' src={loginImage} alt="" />
            </div>

        </div>
    )
}
