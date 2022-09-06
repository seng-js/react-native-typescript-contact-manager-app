import React, {useEffect} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {useDispatch} from "react-redux";
import {getInitDataHandler} from "../redux";
import StackNavigator from "./StackNavigator";

const MainNavigator = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        getInitDataHandler(dispatch);
    });

    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    );
};

export default MainNavigator;
