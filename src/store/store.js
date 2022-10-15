import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./countReducer";
import { studentReducer } from "./studentReducer";

export const store = configureStore({
  reducer: {
    counter: countReducer,
    student: studentReducer,
  },
})


// export type RootState = ReturnType<typeof store.getState>

// export type AppDispatch = typeof store.dispatch