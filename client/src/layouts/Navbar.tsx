import React from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const Navbar: React.FC = () => {
  return (
    <header className=" border-b p-6">
      <div className=" flex  justify-between items-center">
        <div>
          <h2 className=" font-bold text-4xl ">
            <Link to={"/"}>TodosS</Link>
          </h2>
        </div>

        <div>
          <nav className=" flex justify-center items-center gap-10 font-semibold">
            
            <div className=" hover:bg-orange-600 hover:text-white  p-3 rounded transition-all bg-white cursor-pointer w-24 flex justify-center items-center ">
              <Link to={"/"}>Anasayfa</Link>
            </div>

            <div className=" hover:bg-orange-600 hover:text-white  p-3 rounded transition-all bg-white cursor-pointer w-24 flex justify-center items-center ">
              <Link to={"/"}>İletişim</Link>
            </div>

            <div className=" flex justify-center items-center gap-1 bg-white border p-3 cursor-pointer rounded">
              <Link to={"/"}>İşlemler</Link>
              <FaChevronDown className=" " />
            </div>

          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
