import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { authApi } from './services/authApi'
import { navbarReducer } from './slices/navbarSlice'
import { authReducer } from './slices/authSlice'
import { taskReducer } from './slices/taskSlice'
import { taskApi } from './services/taskApi'


export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    auth: authReducer,
    task: taskReducer,
    [authApi.reducerPath]: authApi.reducer,
    [taskApi.reducerPath]: taskApi.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware).concat(taskApi.middleware),
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch);