import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Colors from "../../utils/Colors";

interface ButtonProps {
    title: string,
    onPress: () => void
}

const Button = ({title, onPress = () => {}} : ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{
        height: 40,
        width: '100%',
        backgroundColor: Colors.blue,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: Colors.white, fontSize: 14}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
