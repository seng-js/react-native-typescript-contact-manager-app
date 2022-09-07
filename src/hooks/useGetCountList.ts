import {useSelector} from "react-redux";
import {PeopleType} from "../interface";
import {RootState} from "../redux/store";

export const useGetCountList = () => {
    const contacts = useSelector<RootState, Array<PeopleType>>(state => state.contacts);
    const listContact = contacts.filter((contact:PeopleType) => contact.isContact);
    const listFavorite = contacts.filter((contact:PeopleType) => contact.isFavorite);
    const countFavorite = listFavorite.length > 0 ? listFavorite.length : 0;
    const countContact =  listContact.length > 0 ? listContact.length : 0;
    const countPeople =  contacts.length > 0 ? contacts.length : 0;

    return [countFavorite, countContact, countPeople];
}
