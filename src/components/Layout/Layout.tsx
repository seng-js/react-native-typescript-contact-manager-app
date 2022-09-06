import {SafeAreaView} from "react-native";
import * as React from "react";
import ListItem from "../List/ListItem";
import {useSelector} from "react-redux";
import {useGetEnableOptions} from "../../hooks/useGetEnableOptions";
import ListSwipeableItem from "../List/ListSwipeableItem";

interface LayoutProps {
    title: string,
    name?: string
}

const Layout = ({title}: LayoutProps) => {
    const {enabledSwipeList} = useGetEnableOptions();
    const state:any = useSelector(state => state);
    const contacts = state.contacts;
    let data;
    switch (title) {
        case 'Contact':
            data = contacts.filter((contact:any) => contact.isContact);
            break;
        case 'Favorite':
            data = contacts.filter((contact:any) => contact.isFavorite);
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
