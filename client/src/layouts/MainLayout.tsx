import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { operationFalse, sideBarFalse } from "../redux/slices/navbarSlice";

interface IProps {
  children: ReactNode;
}

const MainLayout: React.FC<IProps> = ({ children }) => {
  const {sideBar, operations} = useAppSelector(state => state.navbar);
  const dispatch = useAppDispatch();


  const handleClickClickOutSide = () => {
    dispatch(operationFalse());
    dispatch(sideBarFalse());
  }
  return (
    <div className=" w-10/12 mx-auto shadow-sm bg-gray-50 min-h-screen">
      <Navbar />
        {children}

        {
        sideBar ? (
          <div onClick={handleClickClickOutSide} className=" absolute top-0 left-0 w-full h-full z-0"></div>
        ) : (null)
      }

      {
        operations ? (
          <div onClick={handleClickClickOutSide} className=" absolute top-0 left-0 w-full h-full z-0"></div>
        ) : (
          null
        )
      }
      <Footer />
    </div>
  );
};

export default MainLayout;
