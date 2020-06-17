import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./ContactContext";
import contactReducer from "./ContactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        type: "personal",
        name: "Ted Johnsen",
        email: "teddy@gmail.com",
        phone: "222-222-2222",
      },
      {
        id: 2,
        type: "professional",
        name: "Sarah Smith",
        email: "ssmith@gmail.com",
        phone: "111-111-1111",
      },
      {
        id: 3,
        name: "Hary White",
        email: "harry@gmail.com",
        phone: "333-333-3333",
        type: "personal",
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add contact

  // Delete contact

  // Set Current contact

  // Clea current contact

  // Update contact

  // Filter contacts

  // Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
