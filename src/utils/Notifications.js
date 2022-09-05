import * as Notifications from "expo-notifications";
import {useGetPushNotificationToken} from "../hooks/useGetPushNotificationToken";

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    }),
});

export const sendPushNotification = async (messageData) => {
    const token = await useGetPushNotificationToken()
    const message = {
        to: token,
        sound: 'default',
        title: messageData.title,
        body: messageData.body,
        data: messageData.data,
    };

    await fetch('https://exp.host/--/api/v2/push/send', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Accept-encoding': 'gzip, deflate',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
    });
}
