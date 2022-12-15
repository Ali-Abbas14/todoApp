import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from '../reducers/toDoSlice.js'
export default configureStore({
    reducer: {
        toDo: toDoReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})