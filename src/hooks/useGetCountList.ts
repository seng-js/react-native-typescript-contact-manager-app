import {useSelector} from "react-redux";

export const useGetCountList = () => {
    const state:any = useSelector(state => state);
    const contacts = state.contacts;
    const listContact = contacts.filter((contact:any) => contact.isContact);
    const listFavorite = contacts.filter((contact:any) => contact.isFavorite);
    const countFavorite = listFavorite.length > 0 ? listFavorite.length : 0;
    const countContact =  listContact.length > 0 ? listContact.length : 0;
    const countPeople =  contacts.length > 0 ? contacts.length : 0;

    return [countFavorite, countContact, countPeople];
}
