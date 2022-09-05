import {grey, iconFontMedium} from "../../utils/Styles";
import Colors from "../../utils/Colors";
import {StyleSheet, Text, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import SelectDropdown from 'react-native-select-dropdown';
import React from "react";

const Select = ({
                    name,
                    errors,
                    data,
                    ...props
                }) => {
    return (
        <View style={styles.selectContainer}>
            <SelectDropdown
                data={data}
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
                buttonTextAfterSelection={() => {}}
                {...props}
            />
            {errors && (
                <Text style={styles.errorMessage}>
                    {errors}
                </Text>
            )}
        </View>
    );
}

export default Select;

const styles = StyleSheet.create({
    selectContainer: {
        marginTop: 10
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
    }
});