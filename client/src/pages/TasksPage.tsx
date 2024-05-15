import React from 'react'
import { useGetAllTaskQuery } from '../redux/services/taskApi'
import TaskItem from '../components/TaskItem';
import Loading from '../components/Loading';

const TasksPage: React.FC = () => {
  const {data, isLoading} = useGetAllTaskQuery();

  console.log(data,"data");

  let content;

  if(isLoading) {
    content = (
      <div className=' flex justify-center items-center h-[700px]'>
        <Loading />
      </div>
    )
  }else {
    content = (
      data?.data.map((item, i) => (
        <TaskItem key={i} item={item}/>
      ))
    )
  }

  return (
    <div className=' min-h-screen'>
      {content}
    </div>
  )
}

export default TasksPage;