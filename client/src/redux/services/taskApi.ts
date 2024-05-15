import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ITaskRes } from '../../types/type'


const pause = (duration: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);    					 
  });
};

export const taskApi = createApi({
  reducerPath: 'taskApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://localhost:4000/api/tasks',
    fetchFn: async (...args) => {
      await pause(1000);
      return fetch(...args);
    },
  }),
  endpoints: (builder) => ({


    getAllTask: builder.query<ITaskRes, void>({
      query: () => {
        return {
          url: `/all-task`,
          method: "GET",
        }
      },
    }),



  }),
})

export const {useGetAllTaskQuery} = taskApi;