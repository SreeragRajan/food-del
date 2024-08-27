import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets';
import { StoreContext } from '../context/StoreContext';
import axios from 'axios'

const LoginPopup = ({setShowLogin}) => {

    const {url, setToken} = useContext(StoreContext);

    const [currState, setCurrState] = useState("Login"); 
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setData((data) => ({...data, [name]:value}))
    }

    const onLogin = async (event) => {
        event.preventDefault();
        let newUrl = url;
        if (currState === 'Login') {
            newUrl += "/api/user/login"
        }
        else {
            newUrl += "/api/user/register"
        }

        const response = await axios.post(newUrl, data);
        
        if(response.data.success) {
            setToken(response.data.token);
            localStorage.setItem('token', response.data.token);
            setShowLogin(false);
        }
        else {
            alert(response.data.message);
        }
    }

  return (
    <div className='h-full w-full absolute z-[99] bg-black/50 flex justify-center items-center overflow-hidden '>
        <form onSubmit={onLogin} action="" className='flex flex-col gap-4 bg-white p-8 rounded-md w-[350px] login-fadeIn'>
            <div className='flex justify-between items-center'>
                <h1 className='font-semibold text-2xl'>{currState}</h1>
                <img onClick={() => setShowLogin(false)} src={assets.cross_icon} className='h-5 cursor-pointer' alt="" />
            </div>
            <div className='flex flex-col gap-3'>
                {currState === "Sign Up" && 
                    <input className='outline-none p-2 border' type="text" name='name' placeholder='name' onChange={onChangeHandler} value={data.name} />
                }
                <input className='outline-none p-2 border' type="email" name="email" placeholder='email' onChange={onChangeHandler} value={data.email} />
                <input className='outline-none p-2 border' type="password" name="password" placeholder='password' onChange={onChangeHandler} value={data.password} />
            </div>
            {currState === "Sign Up" ? <button type='submit' className='bg-[#FF4C24] text-white p-2'>Create Account</button>:<button type='submit' className='bg-[#FF4C24] text-white p-2'>Login</button>}
            <div className='flex gap-2 items-center'>
                <input type="checkbox" name="" id="" required/>
                <p className='text-sm leading-tight'>By continuing, I agree to the terms of use & privacy policy.</p>
            </div>
            {currState === "Sign Up" ? <p>Already have an account? <span className='underline cursor-pointer text-[#FF4C24]' onClick={() => setCurrState("Login")}>Login here</span></p>: <p>Create a new account? <span className='underline cursor-pointer text-[#FF4C24]' onClick={() => setCurrState("Sign Up")}>Click here</span></p>}
        </form>
    </div>
  )
}

export default LoginPopup