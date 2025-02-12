import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Contact from '../../models/Contacts';

type ContactsState = {
  contacts: Contact[];
};

const initialState: ContactsState = {
  contacts: [
    {
      id: 1,
      name: 'Ambulância',
      phone: '192',
      avatarImg: 'https://static.thenounproject.com/png/693320-512.png',
      favorite: 1
    },
    {
      id: 2,
      name: 'Bombeiros',
      phone: '193',
      avatarImg: 'https://static.thenounproject.com/png/693320-512.png',
      favorite: 1
    },
    {
      id: 3,
      name: 'Polícia',
      phone: '190',
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
    },
    changeAvatar: (
      state,
      action: PayloadAction<{ id: number; avatarImg: string }>
    ) => {
      const contact = state.contacts.find((c) => c.id === action.payload.id);
      if (contact) {
        contact.avatarImg = action.payload.avatarImg;
      }
    },
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload);
      state.contacts.sort((a, b) => a.name.localeCompare(b.name));
    },
    editContact: (state, action: PayloadAction<Contact>) => {
      const index = state.contacts.findIndex((c) => c.id === action.payload.id);
      if (index !== -1) {
        state.contacts[index] = action.payload;
      }
    },
    favoriteContact: (state, action: PayloadAction<number>) => {
      const contact = state.contacts.find((c) => c.id === action.payload);
      if (contact) {
        contact.favorite = contact.favorite ? 0 : 1;
      }
    }
  }
});

export const {
  remove,
  changeAvatar,
  addContact,
  editContact,
  favoriteContact
} = contactsSlice.actions;

export default contactsSlice.reducer;
