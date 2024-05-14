import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { operationFalse, sideBarFalse } from "../redux/slices/navbarSlice";
import { useNavigate } from "react-router-dom";
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



  return (
    <div className=" w-10/12 mx-auto shadow-sm bg-gray-50">
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
    </div>
  );
};

export default MainLayout;
