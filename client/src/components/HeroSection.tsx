import React from "react";
import hero from "../assets/hero.jpg";

const HeroSection: React.FC = () => {
  return (
    <div className=" h-[500px] w-full bg-white shadow-xl rounded-xl p-4 ">
      <div className=" flex w-full h-full gap-x-10">
        <div className=" w-full h-full flex-[2] p-4 bg-orange-500 bg-opacity-90 rounded-xl">
          <img className=" h-full w-full rounded-xl hover:scale-110 transition-all " src={hero} alt="heroImg" />
        </div>

        <div className=" flex-[2]  flex flex-col gap-20 justify-center items-center">
            <h2 className=" font-bold text-4xl border-b-4 border-b-orange-600">Günlük Planlarınızı Kolayca Yönetin</h2>
            <p className=" font-semibold">Düzenli ve verimli bir şekilde ilerleyin!</p>

            <div className=" flex gap-5">
              <button className=" bg-orange-600 text-white font-bold p-4 rounded w-32 hover:bg-orange-700 transition-all">İletişim</button>
              <button className=" bg-gray-800 text-white font-bold p-4 rounded w-32 hover:bg-gray-900 transition-all">Notlarım</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
