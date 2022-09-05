import {useAsyncStorage} from "@react-native-async-storage/async-storage";
import {NOTIFICATION} from "../utils/Constants";

export const useGetNotifications = async () => {
    const {getItem} = useAsyncStorage(NOTIFICATION);
    try {
        let notifications = [];
        const item = await getItem();
        if (item) {
            notifications = JSON.parse(item);
        }

        return notifications;
    } catch(e) {
        console.log('Error reading value');
    }
}
