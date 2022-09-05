import {createNativeStackNavigator} from "@react-navigation/native-stack";
import FormScreen from "../screens/FormScreen";
import React from "react";
import DrawerNavigator from "./DrawerNavigator";
import NotificationScreen from "../screens/NotificationScreen";
import NotificationRight from "../components/Header/NotificationRight";
import DetailScreen from "../screens/DetailScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: true,
            }}
        >
            <Stack.Screen name="LeftMenu" component={DrawerNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="Form" component={FormScreen} />
            <Stack.Screen name="Notification" component={NotificationScreen} options={{
                title: 'Notifications',
                headerRight: () => ( <NotificationRight />) }}
            />
            <Stack.Screen name="Detail" component={DetailScreen} options={{
                title: 'Detail'
            }}
            />
        </Stack.Navigator>
    );
};

export default StackNavigator;
