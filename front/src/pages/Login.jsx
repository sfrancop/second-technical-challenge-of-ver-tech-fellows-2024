import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { postQuery } from '../api/queryApi';
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

function Login() {

    const { loadUser } = useContext(UserContext);
    let navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const onSubmit = handleSubmit(
        async data => {
          console.log(data);
          loadUser(data.username);
          navigate('/analyzer');

        }
    );
    return (
        <div className='flex w-[100%] h-screen justify-center'>

            <div className='flex justify-center items-center flex-col w-[40%] h-full'>
                <p className='font-Comfortaa text-4xl text-black mb-12 text-center'><b>Hello!</b></p>
                <form onSubmit={onSubmit} className='flex flex-col gap-4 items-center w-3/5'>
                <input {...register("username")} name='username' required className='transition-[border] duration-[250ms] bg-white border-b-[3px] rounded-[3px] border-black focus:outline-none focus:border-secondary w-full px-8 text-center font-Comfortaa h-12' type="text" placeholder="User name"/>
                <input {...register("password")} name='password' required className='mb-6 transition-[border] duration-[250ms] bg-white border-b-[3px] rounded-[3px] border-black focus:outline-none focus:border-secondary w-full px-8 text-center font-Comfortaa h-12' type="password" placeholder="Password"/>
                <button className='bg-black text-white px-4 py-1 h-screend rounded font-bold transition duration-500 ease-in-out transform hover:-translate-y-1 hover:text-primary' >Run Query</button>
                <p className=' font-Comfortaa text-lg text-black text-center'>Don't have an account? <Link className='transition-[color] duration-[250ms] hover:text-primary text-black' to='/signup'><b>Sign up</b></Link></p>
                </form>
            </div>

            <div className='w-[60%] bg-gradient-to-br from-primary to-secondary flex flex-col justify-center items-center h-full rounded-[5rem] z-50 '>
            <br/>
            <p className='font-Comfortaa text-6xl text-white text-center font-bold w-3/5'>International Education Analyzer</p>
            </div>

        </div>    
    )
}

export default Login