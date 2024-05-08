import React from 'react'
import HeroSection from '../components/HeroSection'
import Section1 from '../components/Section1'
import { FaChevronCircleDown } from "react-icons/fa";
import { FaChevronCircleUp } from "react-icons/fa";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";


const HomePage: React.FC = () => {

  console.log(typeof img1);
  return (
    <div className=' flex flex-col justify-center items-center p-4'>
        <HeroSection />
        <div className=' mt-8 w-full flex flex-col justify-center items-center'>

          <div className=' w-full flex justify-start'>
            <Section1 text="Planlayın" img={img1}/>
            <div className=' flex justify-center items-center w-1/2 gap-10'>
              <FaChevronCircleDown className=' text-orange-600' size={70}/>
              <FaChevronCircleDown className=' text-orange-500' size={55}/>
              <FaChevronCircleDown className=' text-orange-400' size={40}/>
            </div>
          </div>

          <div className=' w-full flex justify-end'>
            <div className=' flex justify-center items-center w-1/2 gap-10'>
              <FaChevronCircleUp className=' text-orange-600' size={70}/>
              <FaChevronCircleUp className=' text-orange-500' size={55}/>
              <FaChevronCircleUp className=' text-orange-400' size={40}/>
            </div>
            <Section1 text="Zamanlayın" img={img2} />
          </div>

          <div className=' w-full flex justify-start'>
            <Section1 text="Paylaşın" img={img3}/>
            <div className=' flex justify-center items-center w-1/2 gap-10'>
              <FaChevronCircleDown className=' text-orange-600' size={70}/>
              <FaChevronCircleDown className=' text-orange-500' size={55}/>
              <FaChevronCircleDown className=' text-orange-400' size={40}/>
            </div>
          </div>

          <div className=' w-full flex justify-end'>
            <div className=' flex justify-center items-center w-1/2 gap-10'>
              <FaChevronCircleUp className=' text-orange-600' size={70}/>
              <FaChevronCircleUp className=' text-orange-500' size={55}/>
              <FaChevronCircleUp className=' text-orange-400' size={40}/>
            </div>
            <Section1 text="Güvenli" img={img4}/>
          </div>
        </div>
    </div>
  )
}

export default HomePage