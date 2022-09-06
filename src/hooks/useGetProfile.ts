import {useSelector} from "react-redux";
import {IMAGE_URL} from "../utils/Constants";

export const useGetProfile = () => {
    const state:any = useSelector(state => state);
    const avatar = IMAGE_URL + state?.tempContacts[0]?.avatar.replace('img/', '');
    const name = state?.tempContacts[0]?.name;

    return {avatar, name};
}
