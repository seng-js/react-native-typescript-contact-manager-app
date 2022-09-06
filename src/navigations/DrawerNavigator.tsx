import DrawerContent from "./DrawerContent";
import {AntDesign, Ionicons, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";
import {iconFontSmall} from "../utils/Styles";
import Colors from "../utils/Colors";
import HeaderRight from "../components/Header/HeaderRight";
import ContactScreen from "../screens/ContactScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import PeopleScreen from "../screens/PeopleScreen";
import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            initialRouteName="Form"
            useLegacyImplementation
            drawerContent={(props) => <DrawerContent {...props} />}
            screenOptions={{
                headerShown: true,
                drawerActiveBackgroundColor: '#aa18ea',
                drawerActiveTintColor: '#fff',
                drawerInactiveTintColor: '#333',
                drawerLabelStyle: {
                    marginLeft: -15,
                    marginTop: 0
                }
            }}
        >
            <Drawer.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    drawerIcon: () => ( <Ionicons name="home-outline" size={iconFontSmall} color={Colors.darkerBlue} />),
                    headerRight: () => ( <HeaderRight />)
                }}
            />
            <Drawer.Screen
                name="Contact"
                component={ContactScreen}
                options={{
                    drawerIcon: () => ( <AntDesign name="contacts" size={iconFontSmall} color={Colors.darkerBlue} />),
                    headerRight: () => ( <HeaderRight />)
                }}
            />
            <Drawer.Screen
                name="Favorite"
                component={FavoriteScreen}
                options={{
                    drawerIcon: () => ( <MaterialIcons name="favorite-outline" size={iconFontSmall} color={Colors.darkerBlue} />),
                    headerRight: () => ( <HeaderRight />)
                }}
            />
            <Drawer.Screen
                name="People"
                component={PeopleScreen}
                options={{
                    drawerIcon: () => ( <Ionicons name="people-outline" size={iconFontSmall} color={Colors.darkerBlue} />),
                    headerRight: () => ( <HeaderRight />)
                }}
            />
            <Drawer.Screen
                name="Company"
                component={PeopleScreen}
                options={{
                    drawerIcon: () => ( <MaterialCommunityIcons name="office-building-outline" size={iconFontSmall} color={Colors.darkerBlue} />),
                    headerRight: () => ( <HeaderRight />)
                }}
            />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;