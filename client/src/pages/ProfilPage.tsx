import React, { useEffect } from 'react'
import { useMeQuery } from '../redux/services/authApi'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { getToken } from '../redux/slices/authSlice';
import Loading from '../components/Loading';

const ProfilPage: React.FC = () => {
  const {token} = useAppSelector(state => state.auth);
  const {data, isLoading} = useMeQuery(token);

  const dispatch = useAppDispatch();
  

  // console.log(data);


  let content;

  if(isLoading) {
    content = (
      <div className=' w-full flex justify-center items-center h-[600px]'>
        <Loading />
      </div>
    )
  }else {
    content = (
      <div className=' shadow-xl my-8 min-h-screen p-8'>
        <div className=' flex justify-around items-center border-b py-4'>
          <div>
            <img src={data?.data.avatar} alt="profilImage" className=' rounded-full hover:scale-110 transition-all'/>
          </div>

          <div className=' flex flex-col gap-10 font-bold p-4  rounded-xl'>
            <div className=' flex justify-between'>
              <p className=' w-52'>İsim: </p>
              <p>{data?.data.name}</p>
            </div>

            <div className=' flex justify-between'>
              <p className=' w-52'>Email: </p>
              <p>{data?.data.email}</p>
            </div>

            <div className=' flex justify-between'>
              <p className=' w-52'>Kayıt Tarihi: </p>
              <p>{data?.data.createdAt?.substring(0, 10)}</p>
            </div>

            <div className=' flex justify-center w-full items-center'>
              <button className=' bg-orange-600 p-1 rounded text-white hover:bg-orange-700 transition-all'>Profili Güncelle</button>
            </div>
          </div>
        </div>


        <div className=' flex flex-col justify-center items-center my-4'>
            <div className=' font-bold text-xl'>
              Notlar
            </div>

            <div>
              asdasdas
            </div>
        </div>
      </div>
    )
  }

  useEffect(() => {
    dispatch(getToken());
}, [data, dispatch])

  return (
    <div>
      {content}
    </div>
  )
}

export default ProfilPage;