import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { operationFalse, sideBarFalse } from "../redux/slices/navbarSlice";
import {useNavigate} from "react-router-dom";
import { isAuthTrue } from "../redux/slices/authSlice";

interface IProps {
  children: ReactNode;
}

const MainLayout: React.FC<IProps> = ({ children }) => {
  const { sideBar, operations } = useAppSelector((state) => state.navbar);
  const { isAuth } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClickClickOutSide = () => {
    dispatch(operationFalse());
    dispatch(sideBarFalse());
  };

  const handleClickLogin = () => {
    dispatch(isAuthTrue());
    navigate("/login");
  }

  const handleClickRegister = () => {
    dispatch(isAuthTrue());
    navigate("/register");
  }


  return (
    <div className=" w-10/12 mx-auto shadow-sm bg-gray-50">

      {
        isAuth ? (
          <>
            <Navbar />
            {children}

            {sideBar ? (
              <div
                onClick={handleClickClickOutSide}
                className=" absolute top-0 left-0 w-full h-full z-0"
              ></div>
            ) : null}

            {operations ? (
              <div
                onClick={handleClickClickOutSide}
                className=" absolute top-0 left-0 w-full h-full z-0"
              ></div>
            ) : null}
            <Footer />
          </>
        ) : (
          <div className=" min-h-screen flex justify-center items-center gap-10">
              <button onClick={handleClickLogin} className=" bg-orange-600 text-white font-bold rounded p-2 w-40 hover:bg-orange-700 transition-all">Giriş Yap</button>
              <button onClick={handleClickRegister} className=" bg-gray-800 text-white font-bold rounded p-2 w-40 hover:bg-gray-900 transition-all">Kayıt Ol</button>
          </div>
        )
      }
    </div>
  );
};

export default MainLayout;
