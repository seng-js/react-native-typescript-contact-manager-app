import * as React from "react";
import {isFilterByName, isValidInput} from "../utils";
import {
    CONTACT_CREATE,
    CONTACT_DELETE,
    CONTACT_GET_FILTER_DATA,
    CONTACT_GET_INIT_DATA,
    CONTACT_UPDATE,
    CONTACT_UPDATE_SETTING
} from "../utils/Constants";


const initialState = {
    selectedFilterByName: '',
    selectedFilterByLocation: '',
    contacts: []
}

const reducer = (state = initialState, action) => {
    let contacts = [];
    let payload = action.payload;
    switch (action.type) {
        case CONTACT_GET_INIT_DATA:
            return {
                ...state,
                contacts: payload,
                tempContacts: payload
            };
        case CONTACT_CREATE:
            return {
                ...state,
                contacts: [...state.contacts, payload.data],
                tempContacts: state.contacts
            };
        case CONTACT_UPDATE:
            contacts = state.contacts.map((contact) => {
                if (contact.index === payload.index) {
                    return {...contact, ...payload.data}
                }

                return contact;
            });
            return {
                ...state,
                contacts: contacts
            };
        case CONTACT_DELETE:
            contacts = state.contacts.filter(contact => contact.index !== payload.index);
            return {
                ...state,
                contacts: contacts
            };
        case CONTACT_GET_FILTER_DATA:
            if (isValidInput(payload.filterByName)) {
                contacts = state.tempContacts.filter(contact => {
                    return isFilterByName(payload.filterByName, contact);
                });
            } else {
                contacts = state.tempContacts;
            }
            return {
                ...state,
                contacts,
                tempContacts: state.tempContacts,
                selectedFilterByName: payload.filterByName
            };
        case CONTACT_UPDATE_SETTING:
            return {
                ...state,
                ...payload
            };
        default:
            return {
                ...state,
                contacts: [],
                tempContacts:[],
                enableDelete: false,
                enableNotification: false
            };
    }
}

export default reducer;