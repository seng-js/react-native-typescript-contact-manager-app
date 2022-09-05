import {StyleSheet, View} from "react-native";
import {DrawerItemList} from "@react-navigation/drawer";
import * as React from "react";
import LeftBottomNavigator from "./LeftBottomNavigator";
import HeaderProfile from "../components/Header/HeaderProfile";

const DrawerContent = (props) => {
    return (
        <View style={{flex: 1}}>
            <HeaderProfile />
            <View style={styles.container}>
                <DrawerItemList {...props} />
            </View>
            <LeftBottomNavigator />
        </View>
    );
}

export default DrawerContent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 10
    }
});