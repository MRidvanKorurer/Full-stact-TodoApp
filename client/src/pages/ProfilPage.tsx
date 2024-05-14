import React, { useEffect } from 'react'
import { useMeQuery } from '../redux/services/authApi'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { getToken } from '../redux/slices/authSlice';

const ProfilPage: React.FC = () => {
  const {token} = useAppSelector(state => state.auth);
  const {data, isLoading} = useMeQuery(token);

  const dispatch = useAppDispatch();
  

  console.log(token);


  let content;

  if(isLoading) {
    content = (
      <div>
        loading...
      </div>
    )
  }else {
    content = (
      <div>
        data
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