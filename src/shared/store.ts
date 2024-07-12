import { configureStore } from "@reduxjs/toolkit";
import { reducer as contactsReducer } from "../entities/contacts/model";

export const store = configureStore({
  reducer: { contacts: contactsReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
