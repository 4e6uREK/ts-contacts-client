import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export default interface Contact {
  email: string;
  number: string;
}

interface ContactState {
  contacts: Contact[];
}

const initialState: ContactState = {
  contacts: [],
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    setContacts(state, action: PayloadAction<Contact[]>) {
      state.contacts = action.payload;
    },
  },
});

export const { setContacts } = contactSlice.actions;
export const reducer = contactSlice.reducer;
