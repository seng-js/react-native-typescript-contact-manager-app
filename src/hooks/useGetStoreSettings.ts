import {useAsyncStorage} from "@react-native-async-storage/async-storage";
import {SETTING_DATA} from "../utils/Constants";

export const useGetStoreSettings = async () => {
    const {getItem} = useAsyncStorage(SETTING_DATA);
    let data = [];
    const item = await getItem();
    if (item) {
        data = JSON.parse(item);
    }

    return data;
}
