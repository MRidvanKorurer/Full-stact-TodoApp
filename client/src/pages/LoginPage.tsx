import React from 'react'
import baykus from "../assets/baykus.png";
import { Link } from 'react-router-dom';

const LoginPage: React.FC = () => {
  return (
    <div className=' flex justify-start items-center'>
        <div className=' flex-1 h-screen flex justify-center bg-purple-700'>
            <img src={baykus} alt="baykusImage" />
        </div>

        <div className=' flex-1 bg-gray-900 h-screen text-white font-bold'>
            <form className=' flex items-center h-screen flex-col justify-center gap-10 '>
                <div className=' flex justify-center border p-2 rounded shadow shadow-white  gap-1 w-1/2 mx-auto'>
                    <h2>Giriş Yap Sayfası</h2>
                </div>
                <div className=' flex flex-col gap-1 w-1/2 mx-auto'>
                    <label>Email Girin</label>
                    <input type="text" placeholder='email...' className=' border p-2 text-black rounded' />
                </div>
                <div className=' flex flex-col gap-1 w-1/2 mx-auto'>
                    <label>Şifre Girin</label>
                    <input type="text" placeholder='şifre...' className=' border p-2 text-black rounded' />
                </div>
                <div className=' flex justify-start w-1/2'>
                    <div className=' flex gap-x-3'>
                        <p className=' font-light'>Hesabın yok mu?</p>
                        <Link className=' text-red-600 hover:scale-110 transition-all' to={"/register"}>Kayıt Ol</Link>
                    </div>
                </div>
                <div className=' flex flex-col gap-1 w-1/2 mx-auto'>
                    <button className=' bg-orange-600 p-2 rounded hover:bg-orange-800 transition-all'>Giriş Yap</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default LoginPage