import * as React from 'react';
import {useEffect, useRef} from 'react';
import {Provider} from "react-redux";
import store from "./src/redux/store";
import MainNavigator from "./src/navigations/MainNavigator";
import {useRegisterForPushNotificationsAsync} from "./src/hooks/useRegisterForPushNotificationsAsync";
import * as Notifications from "expo-notifications";
import {useStoreNotifications} from "./src/hooks/useStoreNotifications";
import {buildNotificationData} from "./src/utils";

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    }),
});

export default function App() {
    const notificationListener = useRef();

    useEffect(() => {
        useRegisterForPushNotificationsAsync();

        notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
            const {title, data} = notification.request.content;
            useStoreNotifications(buildNotificationData(title, data.image, notification.date));
        });

    }, []);
    return (
        <Provider store={store}>
            <MainNavigator />
        </Provider>
    );
}
