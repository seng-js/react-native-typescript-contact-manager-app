import {
    CONTACT_CREATE,
    CONTACT_DELETE,
    CONTACT_GET_FILTER_DATA,
    CONTACT_GET_INIT_DATA,
    CONTACT_UPDATE,
    CONTACT_UPDATE_SETTING
} from "../utils/Constants";
import {PeopleType} from "../interface";

export const getInitData = (contacts:Array<PeopleType>) => {
    console.log('getInitData');
    return {
        type: CONTACT_GET_INIT_DATA,
        payload: contacts,
    };
};

export const createContact = (data:PeopleType) => {
    return {
        type: CONTACT_CREATE,
        payload: {data: data}
    };
};

export const updateContact = (index:string, data:PeopleType) => {
    return {
        type: CONTACT_UPDATE,
        payload: {index: index, data: data}
    };
};

export const deleteContact = (index:string) => {
    return {
        type: CONTACT_DELETE,
        payload: {index: index}
    };
};

export const getFilterData = (payload:object) => {
    return {
        type: CONTACT_GET_FILTER_DATA,
        payload: payload
    };
}

export const updateSetting = (payload:object) => {
    return {
        type: CONTACT_UPDATE_SETTING,
        payload: payload
    };
};
