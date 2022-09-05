import {SafeAreaView} from "react-native";
import * as React from "react";
import ListItem from "../List/ListItem";
import {useSelector} from "react-redux";
import {useGetEnableOptions} from "../../hooks/useGetEnableOptions";
import ListSwipeableItem from "../List/ListSwipeableItem";

const Layout = (props) => {
    const {enabledSwipeList} = useGetEnableOptions();
    const state = useSelector(state => state);
    const contacts = state.contacts;
    let data;
    switch (props.title) {
        case 'Contact':
            data = contacts.filter((contact) => contact.isContact);
            break;
        case 'Favorite':
            data = contacts.filter((contact) => contact.isFavorite);
            break;
        default:
            data = contacts;
    }

    return (
        <SafeAreaView>
            {enabledSwipeList ? (
                <ListSwipeableItem data={data} />
            ):(
                <ListItem data={data} />
            )}
        </SafeAreaView>
    );
}

export default Layout;
