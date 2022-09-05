import * as React from "react";
import {useEffect, useState} from "react";
import {FlatList, Image, StyleSheet, Text, View} from "react-native";
import {REACT_JS_APP_URl} from "../utils/Constants";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import Colors from "../utils/Colors";
import moment from "moment/moment";
import {useGetNotifications} from "../hooks/useGetNotifications";

const NotificationScreen = () => {
    const [data, setData] = useState([]);

    const getNotifications = async () => {
        try {
            let notifications = await useGetNotifications();
            notifications.sort((a, b) => {
                return b.date - a.date;
            });
            setData(notifications);
        } catch(e) {
            console.log('Error reading value');
        }
    }

    const Item = ({ item, textColor }) => (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{uri: REACT_JS_APP_URl + '/' + item.image}} style={styles.image} />
            </View>
            <View style={styles.info}>
                <View>
                    <Text style={[styles.title, textColor]}>{item.text}</Text>
                </View>
                <View style={styles.dateContainer}>
                    <MaterialCommunityIcons name="update" size={20} color={Colors.darkBlue} />
                    <Text style={[styles.date, textColor]}>{moment(item.date).calendar()}</Text>
                </View>
            </View>
        </View>
    );

    const renderItem = ({ item }) => {
        return (
            <Item
                item={item}
            />
        );
    };

    useEffect(() => {
        getNotifications();
    }, []);

     return (
        <View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.date}
            />
        </View>
    );
}

export default NotificationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: Colors.white,
        marginBottom: 2,
        padding: 10,
        marginTop: 2
    },
    info: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 30
    },
    item: {
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 14,
        marginBottom: 6
    },
    date: {
        fontSize: 12,
        marginLeft: 8
    },
    imageContainer: {
        marginLeft: 30,
    },
    dateContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 20
    }
});
