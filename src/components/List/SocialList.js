import {Linking, StyleSheet, TouchableOpacity, View} from "react-native";
import * as React from "react";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import Colors from "../../utils/Colors";

const SocialList = ({item}) => {
    const {facebook, instagram, twitter, youtube} = item.social_networks;
    return (
        <View style={styles.iconContainer}>
            {facebook?.length > 0 && (
                <TouchableOpacity onPress={() => { Linking.openURL(facebook)}}>
                    <MaterialCommunityIcons
                        name='facebook'
                        style={styles.icon}
                    />
                </TouchableOpacity>
            )}
            {twitter?.length > 0 && (
                <TouchableOpacity onPress={() => { Linking.openURL(twitter)}}>
                    <MaterialCommunityIcons
                        name='twitter'
                        style={styles.icon}
                    />
                </TouchableOpacity>
            )}
            {instagram?.length > 0 && (
                <TouchableOpacity onPress={() => { Linking.openURL(instagram)}}>
                    <MaterialCommunityIcons
                        name='instagram'
                        style={styles.icon}
                    />
                </TouchableOpacity>
            )}
            {youtube?.length > 0 && (
                <TouchableOpacity onPress={() => { Linking.openURL(youtube)}}>
                    <MaterialCommunityIcons
                        name='youtube'
                        style={styles.icon}
                    />
                </TouchableOpacity>
            )}
        </View>
    );
}

export default SocialList;

const styles = StyleSheet.create(
    {
        iconContainer: {
            flexDirection: 'row',
        },
        icon: {
            color: Colors.darkBlue,
            fontSize: 22,
            marginRight: 10
        }
    }
);