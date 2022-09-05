import {useAsyncStorage} from "@react-native-async-storage/async-storage";
import {NOTIFICATION} from "../utils/Constants";

export const useStoreNotifications = async (jsonData) => {
    const {getItem, setItem} = useAsyncStorage(NOTIFICATION);

    let data = [];
    const item = await getItem();
    if (item) {
        data = JSON.parse(item);
    }

    await setItem(JSON.stringify([...data, jsonData]));
}
