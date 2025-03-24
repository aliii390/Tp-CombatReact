import { configureStore } from "@reduxjs/toolkit";
import fightReducer from "../features/fightSlice";

export const store = configureStore({
  reducer: {
    fight: fightReducer,
  },
  // Le DevTools Redux est activé par défaut en développement !
});