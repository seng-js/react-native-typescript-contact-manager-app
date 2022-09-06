import {useAsyncStorage} from "@react-native-async-storage/async-storage";
import {SETTING_DATA} from "../utils/Constants";

export const useSetStoreSetting = async (value: Array<string>) => {
    const {getItem, setItem} = useAsyncStorage(SETTING_DATA);
    let data = [];
    const item = await getItem();
    if (item) {
        data = JSON.parse(item);
    }

    await setItem(JSON.stringify({...data, ...value}));
}
