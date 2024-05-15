import React from 'react'
import { ITask } from '../types/type';


interface IProps {
    item: ITask
}

const TaskItem: React.FC<IProps> = ({item}) => {

console.log(item);

  return (
    <div>
        <div>
            <div>
                <img src={item.image} alt="taskImage" />
            </div>

            <div>
                
            </div>
        </div>
    </div>
  )
}

export default TaskItem;