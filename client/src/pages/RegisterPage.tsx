import React, { useState } from 'react'
import baykus from "../assets/baykus.png";
import { Link } from 'react-router-dom';
import { IAuth } from '../types/type';
import { useRegisterMutation } from '../redux/services/authApi';
import {useNavigate} from "react-router-dom";
import { message } from 'antd';
import { useAppDispatch } from '../redux/hooks';
import { createToken, isAuthTrue, saveUser } from '../redux/slices/authSlice';

const RegisterPage: React.FC = () => {
    const [register] = useRegisterMutation();
    const dispatch = useAppDispatch();

    const [formData, setFormData] = useState<IAuth>({
        name: "",
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleChange = (e: any) => {
        setFormData((prev) => ({...prev, [e.target.name] : e.target.value}));
    };
  

    const registerFunc = (e: any) => {
        e.preventDefault();

        register(formData).unwrap()
            .then(async (res) => {
                console.log(res)
                await message.success(res.message);
                dispatch(isAuthTrue());
                dispatch(createToken(res.token));
                dispatch(saveUser(res.data));
                navigate("/");
            })
            .catch((err) => {
                message.error(err.data.message);
            })
    }

  return (
    <div className=' flex justify-start items-center'>
        <div className=' flex-1 h-screen flex justify-center bg-purple-700'>
            <img src={baykus} alt="baykusImage" />
        </div>

        <div className=' flex-1 bg-gray-900 h-screen text-white font-bold'>
            <form className=' flex items-center h-screen flex-col justify-center gap-10 '>
                <div className=' flex justify-center border p-2 rounded shadow shadow-white  gap-1 w-1/2 mx-auto'>
                    <h2>Kayıt Ol Sayfası</h2>
                </div>
                <div className=' flex flex-col gap-1 w-1/2 mx-auto'>
                    <label>İsim Girin</label>
                    <input name='name' value={formData.name} onChange={handleChange} type="text" placeholder='isim...' className=' border p-2 text-black rounded' />
                </div>
                <div className=' flex flex-col gap-1 w-1/2 mx-auto'>
                    <label>Email Girin</label>
                    <input name='email' value={formData.email} onChange={handleChange} type="text" placeholder='email...' className=' border p-2 text-black rounded' />
                </div>
                <div className=' flex flex-col gap-1 w-1/2 mx-auto'>
                    <label>Şifre Girin</label>
                    <input name='password' value={formData.password} onChange={handleChange} type="password" placeholder='şifre...' className=' border p-2 text-black rounded' />
                </div>
                <div className=' flex justify-start w-1/2'>
                    <div className=' flex gap-x-3'>
                        <p className=' font-light'>Hesabın var mı?</p>
                        <Link className=' text-red-600 hover:scale-110 transition-all' to={"/login"}>Giriş Yap</Link>
                    </div>
                </div>
                <div className=' flex flex-col gap-1 w-1/2 mx-auto'>
                    <button onClick={registerFunc} className='bg-orange-600 p-2 rounded hover:bg-orange-800 transition-all'>Kayıt Ol</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default RegisterPage