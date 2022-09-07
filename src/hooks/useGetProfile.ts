import {useSelector} from "react-redux";
import {IMAGE_URL} from "../utils/Constants";
import {RootState} from "../redux/store";
import {PeopleType} from "../interface";

export const useGetProfile = () => {
    const tempContacts = useSelector<RootState, Array<PeopleType>>(state => state.tempContacts);
    const avatar = IMAGE_URL + tempContacts[0]?.avatar.replace('img/', '');
    const name = tempContacts[0]?.name;

    return {avatar, name};
}
