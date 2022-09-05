import {useAsyncStorage} from "@react-native-async-storage/async-storage";
import {NOTIFICATION_TOKEN} from "../utils/Constants";

export const useGetPushNotificationToken = async () => {
    const {getItem} = useAsyncStorage(NOTIFICATION_TOKEN);
    let token = '';
    try {
        token = await getItem();
    } catch(error) {
        console.log('Error reading value', error);
    }

    return token;
}
