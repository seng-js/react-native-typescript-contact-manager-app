import {Image, ImageBackground, StyleSheet, Text, View} from "react-native";
import {AntDesign, Ionicons, MaterialIcons} from "@expo/vector-icons";
import * as React from "react";
import Colors from "../../utils/Colors";
import {iconFontMedium} from "../../utils/Styles";
import {useGetCountList} from "../../hooks/useGetCountList";
import {useGetProfile} from "../../hooks/useGetProfile";

const HeaderProfile = () => {
    const [countFavorite, countContact, countPeople] = useGetCountList();
    const {avatar, name} = useGetProfile();

    return (
        <ImageBackground source={require('../../../assets/images/menu-bg.jpeg')} style={{padding: 20}}>
            <Image source={{uri: avatar}} style={styles.image} />
            <Text style={styles.textProfile}>{name}</Text>
            <View style={{flexDirection: 'row'}}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.text}>{countFavorite}</Text>
                    <MaterialIcons name="favorite-outline" size={iconFontMedium} style={styles.icon} />
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.text}>{countContact}</Text>
                    <AntDesign name="contacts" size={iconFontMedium} style={styles.icon}  />
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.text}>{countPeople}</Text>
                    <Ionicons name="people-outline" size={iconFontMedium} style={styles.icon}  />
                </View>
            </View>
        </ImageBackground>
    );
}

export default HeaderProfile;

const styles = StyleSheet.create({
    image: {
        height: 55,
        width: 55,
        borderRadius: 30,
        marginTop: 10
    },
    text: {
        color: Colors.white,
        marginRight: 5,
        marginLeft: 5,
        fontWeight: "bold"
    },
    textProfile: {
        color: Colors.white,
        fontSize: 18,
        padding: 5
    },
    icon: {
        color: Colors.green
    }
});
