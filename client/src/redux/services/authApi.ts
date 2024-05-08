import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({


    register: builder.mutation({
      query: (name) => `pokemon/${name}`,
    }),


  }),
})

export const { useRegisterMutation } = authApi