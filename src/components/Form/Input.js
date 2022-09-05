import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import Colors from "../../utils/Colors";

const Input = ({
  label,
  iconName,
  error,
  onFocus = () => {},
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View>
      <View
        style={[
          styles.formElement,
          {
            borderColor: error
              ? Colors.red
              : isFocused
              ? Colors.darkBlue
              : Colors.light,
            alignItems: 'center',
          },
        ]}>
        <MaterialCommunityIcons
          name={iconName}
          style={styles.icon}
        />
        <TextInput
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          style={styles.inputText}
          {...props}
        />
      </View>
      {error && (
        <Text style={styles.error}>
          {error}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
    formElement: {
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

export default Input;
