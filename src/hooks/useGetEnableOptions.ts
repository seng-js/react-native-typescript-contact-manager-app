import {useSelector} from "react-redux";

export const useGetEnableOptions = () => {
    const state:any = useSelector(state => state);
    const enabledDelete = state.enabledDelete;
    const enabledNotification = state.enabledNotification;
    const enabledSwipeList = state.enabledSwipeList;

   return {enabledDelete, enabledNotification, enabledSwipeList};
}
