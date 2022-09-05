import * as React from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Colors from "../utils/Colors";
import {getAvatarProfileURL, prepareToEdit} from "../utils";
import SocialList from "../components/List/SocialList";
import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import moment from "moment/moment";
import {grey, iconFontMedium} from "../utils/Styles";
import {Button} from "react-native-paper";
import {updateContactHandler} from "../redux";
import {useDispatch} from "react-redux";

const colorEmphasis = {
    high: 0.87,
    medium: 0.6,
    disabled: 0.38,
};

const darkColors = {
    background: 'white',
    primary: '#BB86FC',
    primary2: '#3700b3',
    secondary: '#03DAC6',
    onBackground: 'black',
    error: '#CF6679',
};

const DetailScreen = ({route, navigation}) => {
    const dispatch = useDispatch();
    const {isContact, isFavorite, index} = route?.params;

    const updateData = (type, action) => {
        updateContactHandler(type, action, index, dispatch);
    }

     return (
        <>
            <View style={styles.profile}>
                <Image style={styles.avatar} source={{uri: getAvatarProfileURL(route?.params.avatar)}}/>
                <Text style={styles.name}>{route?.params.name}</Text>
                <View style={{marginTop: 10}}>
                    <SocialList item={route?.params} />
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.row}>
                    <MaterialCommunityIcons name="office-building-outline" style={styles.selectIcon} color={Colors.darkerBlue} size={iconFontMedium} />
                    <Text style={styles.text}>
                        {route?.params.company}
                    </Text>
                </View>
                <View style={styles.row}>
                    <MaterialCommunityIcons name="medal-outline" style={styles.selectIcon} color={Colors.darkerBlue} size={iconFontMedium} />
                    <Text style={styles.text}>
                        {route?.params.position}
                    </Text>
                </View>
                <View style={styles.row}>
                    <Ionicons name="location-outline" style={styles.selectIcon} color={Colors.darkerBlue} size={iconFontMedium} />
                    <Text style={styles.text}>
                        {route?.params.city}
                    </Text>
                </View>
                <View style={[styles.row, {flex: 1}]}>
                    <MaterialCommunityIcons name="update" size={22} color={Colors.darkerBlue} />
                    <Text style={styles.text}>
                        {moment(route?.params.createdDate).calendar()}
                    </Text>
                </View>
                <View>
                    {isContact ? (
                        <View style={styles.buttonDangerContainer}>
                            <TouchableOpacity onPress={() => updateData('contact', 'delete')}>
                                <Text style={styles.buttonDangerTextAction}>Delete from contacts</Text>
                            </TouchableOpacity>
                        </View>
                    ):(
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity onPress={() => updateData('contact', 'add')}>
                                <Text style={styles.buttonTextAction}>Add to contacts</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    {isFavorite === false && isContact === false && (
                        <View style={styles.buttonDisableContainer}>
                            <Text style={styles.buttonDisableTextAction}>Add to favorites</Text>
                        </View>
                    )}
                    {isFavorite === false && isContact === true && (
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity onPress={() => updateData('favorite', 'add')}>
                                <Text style={styles.buttonTextAction}>Add to favorites</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    {isFavorite === true && (
                        <View style={styles.buttonDangerContainer}>
                            <TouchableOpacity onPress={() => updateData('favorite', 'delete')}>
                                <Text style={styles.buttonDangerTextAction}>Delete from favorites</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
                <View>
                    <Button style={styles.button} onPress={() => navigation.navigate({
                        name: 'Form',
                        params: prepareToEdit(route?.params)
                    })} mode="contained">Edit</Button>
                </View>
            </View>
        </>
    );
}

export default DetailScreen;

const styles = StyleSheet.create({
    profile: {
        flexDirection: 'column',
        marginBottom: 2,
        padding: 30,
        backgroundColor: Colors.white,
        alignItems: 'center'
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        marginBottom: 2,
        padding: 30,
        backgroundColor: Colors.white
    },
    button: {
        marginTop: 10
    },
    buttonTextAction: {
        fontSize: 14,
        color: Colors.darkBlue,
        textTransform: "uppercase",
        textAlign: 'center'
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: darkColors.onBackground,
        opacity: colorEmphasis.high,
        alignSelf: 'center',
        shadowColor: darkColors.secondary,
        shadowOffset: {width: 1, height: 1},
        shadowRadius: 2,
        shadowOpacity: colorEmphasis.high,
    },
    name: {
        fontSize: 16,
        color: Colors.darkBlue,
        fontWeight: '600',
    },
    text: {
        fontSize: 14,
        color: darkColors.onBackground,
        opacity: colorEmphasis.medium,
        paddingLeft: 10
    },
    row: {
        flexDirection: 'row',
        marginBottom: 5
    },
    buttonDangerContainer:{
        flexDirection: 'column',
        borderWidth: 1,
        borderRadius: 20,
        padding: 6,
        marginTop: 5,
        borderColor: '#ff0000'
    },
    buttonContainer: {
        flexDirection: 'column',
        borderWidth: 1,
        borderRadius: 20,
        padding: 6,
        marginTop: 5,
        borderColor: Colors.darkBlue
    },
    buttonDangerTextAction: {
        fontSize: 14,
        color: '#ff0000',
        textAlign: 'center'
    },
    buttonDisableContainer: {
        borderWidth: 1,
        borderRadius: 20,
        padding: 6,
        marginTop: 5,
        borderColor: grey,
        textAlign: 'center'
    },
    buttonDisableTextAction: {
        fontSize: 14,
        textTransform: "uppercase",
        textAlign: 'center',
        color: grey,
    }
});
