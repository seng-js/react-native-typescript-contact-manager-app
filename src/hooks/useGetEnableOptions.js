import * as React from "react";
import {useSelector} from "react-redux";

export const useGetEnableOptions = () => {
    const state = useSelector(state => state);
    const enabledDelete = state.enabledDelete;
    const enabledNotification = state.enabledNotification;
    const enabledSwipeList  = state.enabledSwipeList;

   return {enabledDelete, enabledNotification, enabledSwipeList};
}
