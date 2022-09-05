import {Alert, TouchableOpacity, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {iconFontSmall} from "../../utils/Styles";
import * as React from "react";
import Colors from "../../utils/Colors";
import {useRemoveNotifications} from "../../hooks/useRemoveNotifications";

const NotificationRight = () => {
    const clearNotification = () =>
        Alert.alert(
            "Clear Notifications",
            "Are you sure to clear all notifications",
            [
                {
                    text: "Cancel",
                    onPress: () => {},
                    style: "cancel"
                },
                { text: "OK", onPress: async () => await useRemoveNotifications() }
            ]
        );

    return (
        <View>
            <TouchableOpacity
                onPress={() => clearNotification()}
                underlayColor='#042417'>
                <View>
                    <Ionicons name="notifications-off-outline" size={iconFontSmall} color={Colors.darkBlue} />
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default NotificationRight;
