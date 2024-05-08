import React from 'react'

interface IProps {
    text: string,
    img: string
}

const Section1: React.FC<IProps> = ({text, img}) => {
  return (
    <div className=' flex justify-between items-center w-1/2  bg-white rounded-xl shadow-xl h-[300px] '>
        <div className=' flex-[2]'>
            <h2 className=' font-bold text-4xl tracking-wider ml-20'>{text}!</h2>
        </div>

        <div className=' flex-[2] bg-orange-500 h-[260px] w-[260px] border mr-4 flex justify-center items-center rounded-full '>
            <img className='' src={img} alt="" />
        </div>
    </div>
  )
}

export default Section1