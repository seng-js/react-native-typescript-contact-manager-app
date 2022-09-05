import {useAsyncStorage} from "@react-native-async-storage/async-storage";
import {SETTING_DATA} from "../utils/Constants";
import React from "react";

export const useSetStoreSetting = async value => {
    const {getItem, setItem} = useAsyncStorage(SETTING_DATA);
    let data = [];
    const item = await getItem();
    if (item) {
        data = JSON.parse(item);
    }

    await setItem(JSON.stringify({...data, ...value}));
}
