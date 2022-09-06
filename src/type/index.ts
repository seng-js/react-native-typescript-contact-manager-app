import {NativeStackScreenProps} from "@react-navigation/native-stack";

export type RootStackParamList = {
    Notification: undefined;
    Home: undefined;
    Profile: { userId: string };
    Feed: { sort: 'latest' | 'top' } | undefined;
};


export type NotificationProps = NativeStackScreenProps<RootStackParamList, 'Notification'>;
