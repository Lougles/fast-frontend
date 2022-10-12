import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./countReducer";

export const store = configureStore({
  reducer: {
    counter: countReducer,
  },
})


// export type RootState = ReturnType<typeof store.getState>

// export type AppDispatch = typeof store.dispatch