import React from 'react'
import { ITask } from '../types/type';


interface IProps {
    item: ITask
}

const TaskItem: React.FC<IProps> = ({item}) => {

// console.log(item);

  return (
        <div className=' flex items-center shadow-xl p-4 gap-10 relative rounded-xl w-2/3 h-[200px]  hover:shadow-2xl transition-all'>
            <div className=' flex-1 border-r h-full'>
                <img src={item.image} alt="taskImage" />
            </div>

            <div className=' flex-[2] font-bold flex flex-col gap-5'>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <span>{item.createdAt.substring(0,10)}</span>

                <div className=' absolute -top-10 -right-10 w-40 flex flex-col justify-center items-center bg-orange-600 bg-opacity-90 rounded-xl p-2'>
                  <img className=' w-12 h-12 rounded-full' src={item.user.avatar} alt="userImage" />
                  <p>{item.user.name}</p>
                </div>
            </div>
    </div>
  )
}

export default TaskItem;