import {useAsyncStorage} from "@react-native-async-storage/async-storage";
import {NOTIFICATION} from "../utils/Constants";

export const useRemoveNotifications = async () => {
    const {removeItem} = useAsyncStorage(NOTIFICATION);

    await removeItem();
}
