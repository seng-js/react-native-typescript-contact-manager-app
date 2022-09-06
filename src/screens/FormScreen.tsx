import {Image, Keyboard, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View} from "react-native";
import * as React from "react";
import {useEffect, useState} from "react";
import {grey, iconFontMedium} from "../utils/Styles";
import Input from '../components/Form/Input';
import Colors from "../utils/Colors";
import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import {
    AVATAR_DEFAULT_PROFILE,
    AVATAR_URL_PROFILE,
    defaultContact,
    IMAGE_URL,
    listAvatar,
    listCity,
    listPosition
} from "../utils/Constants";
import {saveContactHandler} from "../redux";
import {useDispatch} from "react-redux";
import {buildNotificationMessage, deleteKeys} from "../utils";
import {Button} from "react-native-paper";
import {sendPushNotification} from "../utils/Notifications";
import {useGetEnableOptions} from "../hooks/useGetEnableOptions";
import SelectDropdown from 'react-native-select-dropdown';

interface FormScreenProps {
    route:any,
    navigation:any
}

const FormScreen = ({route, navigation}: FormScreenProps) => {
    const dispatch = useDispatch();
    const [inputs, setInputs] = useState<any>(defaultContact);
    const [errors, setErrors] = useState<any>({});
    const [actionLabel, setActionLabel] = useState('Create');
    const {enabledNotification} = useGetEnableOptions();

    const validate = () => {
        Keyboard.dismiss();
        let isValid = true;

        const validateData = [
            {errorLabel: 'Avatar is required field!', field: 'avatar'},
            {errorLabel: 'Name is required field!', field: 'name'},
            {errorLabel: 'Company is required field!', field: 'company'},
            {errorLabel: 'Position is required field!', field: 'position'},
            {errorLabel: 'City is required field!', field: 'city'},
        ]

        validateData.forEach((element) => {
            if (!inputs[element.field]) {
                handleError(element.errorLabel, element.field);
                isValid = false;
            }
        });

        if (isValid) {
            submitHandle();
        }
    };

    const submitHandle = () => {
        if (enabledNotification) {
            sendPushNotification(buildNotificationMessage(inputs.actionLabel + ' ' + inputs.name, '', {image: inputs.avatar}));
        }
        deleteKeys().forEach(key => delete inputs[key]);
        saveContactHandler(inputs, dispatch);
        navigation.navigate('People');
    };

    const handleOnchange = (text: any, input: string) => {
        setInputs((prevState: any) => ({...prevState, [input]: text}));
    };

    const handleSocialOnChange = (text: any, input: string): any => {
        setInputs({
            ...inputs,
            social_networks: {
                ...inputs.social_networks,
                [input]: text,
            }
        });
    }

    const handleOnSelect = (selectedItem: { image: string; title: any; }, input: string) => {
        if (input === 'avatar') {
            setInputs({...inputs, [input]: 'img/' + selectedItem.image});
        } else {
            setInputs({...inputs, [input]: selectedItem.title});
        }
        handleError(null, [input])
    }

    const handleError = (error: string | null, input: any | string[]) => {
        setErrors((prevState: any) => ({...prevState, [input]: error}));
    };

    useEffect(() => {
        setInputs(route?.params);
        setActionLabel(route?.params?.actionLabel);
    }, [route?.params]);

    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView style={{padding: 10}}>
                <View style={styles.selectContainer}>
                    <SelectDropdown
                        buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                            return item
                        }}
                        data={listAvatar}
                        buttonStyle={styles.dropdownButtonStyle}
                        dropdownStyle={styles.dropdownDropdownStyle}
                        rowStyle={styles.dropdownRowStyle}
                        selectedRowStyle={styles.dropdownSelectedRowStyle}
                        searchInputStyle={styles.dropdownSearchInputStyleStyle}
                        searchPlaceHolder={'Search here'}
                        searchPlaceHolderColor={'#F8F8F8'}
                        renderSearchInputLeftIcon={() => {
                            return <Ionicons name={'search'} color={Colors.darkerBlue} size={iconFontMedium} />;
                        }}
                        defaultValueByIndex={inputs?.selectedIndexProfile}
                        onSelect={(selectedItem:any) => handleOnSelect(selectedItem, 'avatar')}
                        renderCustomizedButtonChild={(selectedItem:any) => {
                            return (
                                <View style={styles.dropdownButtonChildStyle}>
                                    <View style={styles.wrapperSelect}>
                                        {selectedItem ? (
                                            <Image source={{uri: AVATAR_URL_PROFILE + selectedItem.image}} style={styles.dropdownButtonImage} />
                                        ) : (
                                            <Image source={{uri: AVATAR_URL_PROFILE + AVATAR_DEFAULT_PROFILE}} style={styles.dropdownButtonImage}  />
                                        )}
                                        <Text style={styles.dropdownButtonTxt}>{selectedItem ? selectedItem.title : 'Select Avatar'}</Text>
                                    </View>
                                    <Ionicons name="chevron-down" color={Colors.darkerBlue} size={iconFontMedium} />
                                </View>
                            );
                        }}
                        renderCustomizedRowChild={(item:any) => {
                            return (
                                <View style={styles.dropdownRowChildStyle}>
                                    <Image source={{uri: AVATAR_URL_PROFILE + item.image}} style={styles.dropdownRowImage} borderRadius={20} />
                                    <Text style={styles.dropdownRowTxt}>{item.title}</Text>
                                </View>
                            );
                        }}
                    />
                    {errors && errors.avatar && (
                        <Text style={styles.errorMessage}>
                            {errors.avatar}
                        </Text>
                    )}
                    <Input
                        onChangeText={(text: any) => handleOnchange(text, 'name')}
                        onFocus={() => handleError(null, 'name')}
                        iconName="account-outline"
                        label="Name"
                        placeholder="Name"
                        value={inputs?.name}
                        error={errors.name}
                    />
                    <Input
                        onChangeText={(event: any) => handleOnchange(event.target.value(), 'company')}
                        onFocus={() => handleError(null, 'company')}
                        iconName="office-building-outline"
                        label="Company"
                        placeholder="Company"
                        value={inputs?.company}
                        error={errors.company}
                    />
                    <SelectDropdown
                        buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                            return item
                        }}
                        buttonStyle={styles.dropdownButtonStyle}
                        dropdownStyle={styles.dropdownDropdownStyle}
                        rowStyle={styles.dropdownRowStyle}
                        selectedRowStyle={styles.dropdownSelectedRowStyle}
                        searchInputStyle={styles.dropdownSearchInputStyleStyle}
                        searchPlaceHolder={'Search here'}
                        searchPlaceHolderColor={'#F8F8F8'}
                        renderSearchInputLeftIcon={() => {
                            return <Ionicons name={'search'} color={Colors.darkerBlue} size={iconFontMedium} />;
                        }}
                        data={listPosition}
                        defaultValue={() => {}}
                        onSelect={(selectedItem: { image: string; title: any; }) => handleOnSelect(selectedItem, 'position')}
                        renderCustomizedButtonChild={(selectedItem: any) => {
                            return (
                                <View style={styles.dropdownButtonChildStyle}>
                                    <View style={styles.wrapperSelect}>
                                        {selectedItem ? (
                                            <MaterialCommunityIcons name="medal-outline" style={styles.selectIcon} color={Colors.darkerBlue} size={iconFontMedium} />
                                        ) : (
                                            <MaterialCommunityIcons name="medal-outline" style={styles.selectIcon} color={Colors.darkerBlue} size={iconFontMedium} />
                                        )}
                                        <Text style={styles.dropdownButtonTxt}>{selectedItem ? selectedItem.title : 'Select position'}</Text>
                                    </View>
                                    <Ionicons name="chevron-down" color={Colors.darkerBlue} size={iconFontMedium} />
                                </View>
                            );
                        }}
                        renderCustomizedRowChild={(item: any) => {
                            return (
                                <View style={styles.dropdownRowChildStyle}>
                                    <Text style={styles.dropdownRowTxt}>{item.title}</Text>
                                </View>
                            );
                        }}
                        search
                    />
                    {errors && errors.position && (
                        <Text style={styles.errorMessage}>
                            {errors.position}
                        </Text>
                    )}
                    <SelectDropdown
                        buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                            return item
                        }}
                        buttonStyle={styles.dropdownButtonStyle}
                        dropdownStyle={styles.dropdownDropdownStyle}
                        rowStyle={styles.dropdownRowStyle}
                        selectedRowStyle={styles.dropdownSelectedRowStyle}
                        searchInputStyle={styles.dropdownSearchInputStyleStyle}
                        searchPlaceHolder={'Search here'}
                        searchPlaceHolderColor={'#F8F8F8'}
                        renderSearchInputLeftIcon={() => {
                            return <Ionicons name={'search'} color={Colors.darkerBlue} size={iconFontMedium} />;
                        }}
                        data={listCity}
                        defaultValueByIndex={inputs?.selectedIndexCity}
                        onSelect={(selectedItem: any) => handleOnSelect(selectedItem, 'city')}
                        renderCustomizedButtonChild={(selectedItem: any) => {
                            return (
                                <View style={styles.dropdownButtonChildStyle}>
                                    <View style={styles.wrapperSelect}>
                                        {selectedItem ? (
                                            <Image source={{uri:IMAGE_URL + selectedItem.image}} style={styles.dropdownButtonImage} />
                                        ) : (
                                            <Ionicons name="location-outline" style={styles.selectIcon} color={Colors.darkerBlue} size={iconFontMedium} />
                                        )}
                                        <Text style={styles.dropdownButtonTxt}>{selectedItem ? selectedItem.title : 'Select city'}</Text>
                                    </View>
                                    <Ionicons name="chevron-down" color={Colors.darkerBlue} size={iconFontMedium} />
                                </View>
                            );
                        }}
                        renderCustomizedRowChild={(item:any) => {
                            return (
                                <View style={styles.dropdownRowChildStyle}>
                                    <Image source={{uri: IMAGE_URL + item.image}} style={styles.dropdownRowImage} borderRadius={20} />
                                    <Text style={styles.dropdownRowTxt}>{item.title}</Text>
                                </View>
                            );
                        }}
                        search
                    />
                    {errors && errors.city && (
                        <Text style={styles.errorMessage}>
                            {errors.city}
                        </Text>
                    )}
                    <Input
                        onChangeText={(text:string) => handleSocialOnChange(text, 'facebook')}
                        onFocus={() => handleError(null, 'facebook')}
                        iconName="facebook"
                        label="Facebook"
                        placeholder="Facebook"
                        value={inputs?.social_networks?.facebook}
                        error={errors.facebook}
                    />
                    <Input
                        onChangeText={(text:string) => handleSocialOnChange(text, 'instagram')}
                        iconName="instagram"
                        label="Instagram"
                        placeholder="Instagram"
                        value={inputs?.social_networks?.instagram}
                        error={errors.instagram}
                    />
                    <Input
                        onChangeText={(text:string) => handleSocialOnChange(text, 'twitter')}
                        iconName="twitter"
                        label="Twitter"
                        placeholder="Twitter"
                        value={inputs?.social_networks?.twitter}
                        error={errors.twitter}
                    />

                    <Input
                        onChangeText={(text:string) => handleSocialOnChange(text, 'youtube')}
                        onFocus={() => handleError(null, 'youtube')}
                        iconName="youtube"
                        label="Youtube"
                        placeholder="Youtube"
                        value={inputs?.social_networks?.youtube}
                        error={errors.youtube}
                    />
                    <View style={styles.buttonContainer}>
                        <Button style={styles.button} mode="contained" onPress={validate}>{actionLabel}</Button>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default FormScreen;

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 10
    },
    button: {
        borderRadius: 20
    },
    selectContainer: {
        marginTop: 10
    },
    dropdownButtonChildStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 18,
        borderRadius: 20
    },
    dropdownButtonImage: {
        width: 25,
        height: 25,
        resizeMode: 'cover',
        borderRadius: 20,
        marginLeft: -10
    },
    dropdownButtonTxt: {
        color: grey,
        textAlign: 'left',
        fontSize: 14,
        marginHorizontal: 12,
        paddingTop: 5
    },
    dropdownRowChildStyle: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 18,
    },
    dropdownRowImage: {
        width: 30,
        height: 30,
        resizeMode: 'cover'
    },
    dropdownRowTxt: {
        color: '#F1F1F1',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14,
        marginHorizontal: 12,
    },
    wrapperSelect: {
        flex: 1,
        flexDirection: 'row'
    },
    selectIcon: {
        marginLeft: -10
    },
    dropdownButtonStyle: {
        width: '100%',
        height: 45,
        paddingHorizontal: 0,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: grey,
    },
    dropdownDropdownStyle: {
        backgroundColor: 'slategray'
    },
    dropdownRowStyle: {
        backgroundColor: 'slategray',
        borderBottomColor: '#444',
        height: 50,
    },
    dropdownSelectedRowStyle: {
        backgroundColor: 'rgba(0,0,0,0.1)'
    },
    dropdownSearchInputStyleStyle: {
        backgroundColor: 'slategray',
        borderBottomWidth: 1,
        borderBottomColor: Colors.white,
    },
    errorMessage: {
        marginTop: 7,
        color: Colors.red,
        fontSize: 12
    },
    formInputElement: {
        flexDirection: 'row',
        borderColor: '#c6c6c6',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 8,
        paddingVertical: 6,
        marginTop: 10
    },
    inputContainer: {
        height: 55,
        backgroundColor: Colors.light,
        flexDirection: 'row',
        paddingHorizontal: 15,
        borderWidth: 0.5
    },
    icon: {
        color: Colors.darkerBlue,
        fontSize: 22,
        marginRight: 10
    },
    error: {
        marginTop: 7,
        color: Colors.red,
        fontSize: 12
    },
    inputText: {
        color: Colors.darkBlue,
        flex: 1
    }
});
