import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { operationFalse, operationTrue, sideBarFalse, sideBarTrue } from "../redux/slices/navbarSlice";
import { IoIosCloseCircle } from "react-icons/io";
import { FaChevronUp } from "react-icons/fa";
import { getUser, logout } from "../redux/slices/authSlice";
import { MdLogout } from "react-icons/md";
import { message } from "antd";

const Navbar: React.FC = () => {
  const { sideBar, operations } = useAppSelector((state) => state.navbar);
  const {isAuth, user} = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  
  const handleClickLogout = () => {
    if(window.confirm("Çıkış Yapmak İstediğinize Emin misiniz? ")) {
      message.success("Çıkış İşlemi Başarılı");
      dispatch(logout());
      navigate("/");
    }else{
      message.error("Çkıkış İşlemi İptal Edildi");
    }
  }

  const profileImage = user?.avatar;
  

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch, isAuth])

  return (
    <header className=" border-b p-6 relative z-10 mb-2">
      <div className="flex justify-between items-center">
        <div>
          <h2 className=" font-bold text-4xl ">
            <Link to={"/"}>TodosS</Link>
          </h2>
        </div>

        <div className="">
          <nav className="hidden md:flex justify-center items-center gap-10 font-semibold">
            <div className=" hover:bg-orange-600 hover:text-white  p-3 rounded transition-all bg-white cursor-pointer w-24 flex justify-center items-center ">
              <Link to={"/"}>Anasayfa</Link>
            </div>

            <div className=" hover:bg-orange-600 hover:text-white  p-3 rounded transition-all bg-white cursor-pointer w-24 flex justify-center items-center ">
              <Link to={"/"}>İletişim</Link>
            </div>
              
              <>
              {
                isAuth ? (
                  <div className=" flex justify-center items-center gap-1 p-3 cursor-pointer rounded">
                    <Link to={"/"}>
                      <img className=" w-10 h-10 rounded-full" src={profileImage} alt="" />
                    </Link>
                    {
                      operations ? (
                        <FaChevronUp  onClick={() => dispatch(operationFalse())}   className=" hover:scale-125 transition-all " />
                      ) : (
                        <FaChevronDown  onClick={() => dispatch(operationTrue())}  className=" hover:scale-125 transition-all" />
                      )
                    }   
                  </div>
                ) : (
                  <>
                  <div className=" hover:bg-orange-600 hover:text-white  p-3 transition-all bg-white cursor-pointer w-full flex justify-center items-center ">
                    <Link onClick={() => dispatch(operationFalse())} to={"/login"}>Giriş Yap</Link>
                  </div>
                  <div className=" hover:bg-orange-600 hover:text-white  p-3 transition-all bg-white cursor-pointer w-full flex justify-center items-center ">
                    <Link onClick={() => dispatch(operationFalse())} to={"/register"}>Kayıt Ol</Link>
                  </div>
                  </>
                )
              }

            {
              operations ? (
                <>
                  <div className=" absolute right-6 top-20 shadow-xl rounded border w-48">
                    <div>
                      <div className=" hover:bg-orange-600 hover:text-white  p-3 transition-all bg-white cursor-pointer w-full flex justify-center items-center ">
                        <Link onClick={() => dispatch(operationFalse())} to={"/profile"}>Profil</Link>
                      </div>

                      <div className=" hover:bg-orange-600 hover:text-white  p-3 transition-all bg-white cursor-pointer w-full flex justify-center items-center ">
                        <Link to={"/"}>Notlarım</Link>
                      </div>

                      <div className=" hover:bg-orange-600 hover:text-white  p-3 transition-all bg-white cursor-pointer w-full flex justify-center items-center ">
                        <Link to={"/"}>Not Ekle</Link>
                      </div>

                      <div className=" hover:bg-orange-600 hover:text-white  p-3 transition-all bg-white cursor-pointer w-full flex justify-center items-center ">
                        <Link to={"/"}>Not Sil</Link>
                      </div>

                      <div className=" hover:bg-orange-600 hover:text-white  p-3 transition-all bg-white cursor-pointer w-full flex justify-center items-center ">
                        <Link to={"/"}>Not Düzenle</Link>
                      </div>
                    </div>
                  </div>
                </> 
              ) : (null)
            }

              </>

            {
              isAuth ? (
                <>
                  <div onClick={handleClickLogout} className=" flex justify-center items-center gap-1  p-3 cursor-pointer rounded hover:text-orange-600 transition-all">
                    <MdLogout size={24}/>
                  </div>
                  </>
              ) : (null)
            }
           
          </nav>

          {sideBar ? (
            <>
              <nav className="flex justify-between flex-col w-[300px] absolute h-full font-semibold border left-0 top-2 z-20 bg-gray-100">
                <div className=" hover:bg-orange-600 hover:text-white p-3 rounded transition-all bg-white cursor-pointer w-full flex justify-center items-center ">
                  <Link to={"/"}>Anasayfa</Link>
                </div>

                <div className=" hover:bg-orange-600 hover:text-white  p-3 rounded transition-all bg-white cursor-pointer w-full flex justify-center items-center ">
                  <Link to={"/"}>İletişim</Link>
                </div>

                <div onClick={() => dispatch(operationTrue())} className=" flex justify-center items-center gap-1 bg-white border p-3 cursor-pointer rounded">
                  <Link  to={"/"}>
                    <img className=" w-10 h-10" src="https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2281862025.jpg" alt="" />
                  </Link>
                  <FaChevronDown className=" " />
                </div>

                <div onClick={() => {}} className=" flex justify-center items-center gap-1 bg-white border p-3 cursor-pointer rounded">
                  <MdLogout size={25}/>
                </div>
              </nav>
              <div onClick={() => dispatch(sideBarFalse())} className="absolute w-full h-full top-0 left-0"></div>
            </>
          ) : null}

          <div
            onClick={() => dispatch(sideBarTrue())}
            className=" md:hidden flex justify-end items-start cursor-pointer"
          >
            {
              sideBar ? (
                <IoIosCloseCircle className=" cursor-pointer" size={28} />
              ) : (
                <IoMenu size={31} />
              )
            }
          </div>
        </div>
      </div>

      
    </header>
  );
};

export default Navbar;
