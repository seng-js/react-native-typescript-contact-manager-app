import {SafeAreaView} from "react-native";
import * as React from "react";
import ListItem from "../List/ListItem";
import {useSelector} from "react-redux";
import {useGetEnableOptions} from "../../hooks/useGetEnableOptions";
import ListSwipeableItem from "../List/ListSwipeableItem";
import {ListItemProps, PeopleType} from "../../interface";
import {RootState} from "../../redux/store";

interface LayoutProps {
    title: string,
    name?: string
}

const Layout = ({title}: LayoutProps) => {
    const {enabledSwipeList} = useGetEnableOptions();
    const contacts = useSelector<RootState, Array<PeopleType>>(state => state.contacts);
    let data: Array<PeopleType>;
    switch (title) {
        case 'Contact':
            data = contacts.filter((contact:PeopleType) => contact.isContact);
            break;
        case 'Favorite':
            data = contacts.filter((contact:PeopleType) => contact.isFavorite);
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
