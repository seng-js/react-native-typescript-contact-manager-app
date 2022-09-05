import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import {Platform} from "react-native";
import {useAsyncStorage} from "@react-native-async-storage/async-storage";
import {NOTIFICATION_TOKEN} from "../utils/Constants";

export const useRegisterForPushNotificationsAsync = async () => {
    const {setItem, getItem} = useAsyncStorage(NOTIFICATION_TOKEN);
    let token = '';
    try {
        token = await getItem();
        if (!token) {
            console.log('No data');
            if (Device.isDevice) {
                const { status: existingStatus } = await Notifications.getPermissionsAsync();
                let finalStatus = existingStatus;
                if (existingStatus !== 'granted') {
                    const { status } = await Notifications.requestPermissionsAsync();
                    finalStatus = status;
                }
                if (finalStatus !== 'granted') {
                    console.log('Failed to get push token for push notification!');
                    return;
                }
                token = (await Notifications.getExpoPushTokenAsync()).data;
                await setItem(token);
                console.log(token);
            } else {
                console.log('Must use physical device for Push Notifications');
            }
        }
    } catch(error) {
        console.log('Error reading value', error);
    }

    if (Platform.OS === 'android') {
        await Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
        });
    }
}
