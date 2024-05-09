import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IAuth, IAuthRes } from '../../types/type'


export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api/auth' }),
  endpoints: (builder) => ({


    register: builder.mutation<IAuthRes, IAuth>({
      query: (formData) => {
        return {
          url: `/register`,
          method: "POST",
          body: formData
        }
      },
    }),

    me: builder.query<IAuthRes, string>({
      query: (token) => {
        return {
          url: `/me`,
          method: "GET",
          headers: {Authorization: `Bearer ${token}`},
        }
      },
    }),


  }),
})

export const { useRegisterMutation, useMeQuery } = authApi