import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Contact from '../../models/Contacts';

type ContactsState = {
  contacts: Contact[];
};

const initialState: ContactsState = {
  contacts: [
    {
      id: 1,
      name: 'Eduardo',
      avatarImg: 'https://static.thenounproject.com/png/693320-512.png',
      favorite: 1
    },
    {
      id: 2,
      name: 'Eduardo2',
      avatarImg: 'https://static.thenounproject.com/png/693320-512.png',
      favorite: 1
    },
    {
      id: 3,
      name: 'Eduardo3',
      avatarImg: 'https://static.thenounproject.com/png/693320-512.png',
      favorite: 1
    }
  ]
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.contacts = [
        ...state.contacts.filter((c) => c.id !== action.payload)
      ];
    }
  }
});

export const { remove } = contactsSlice.actions;

export default contactsSlice.reducer;
