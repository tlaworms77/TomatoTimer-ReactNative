import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";

function Button({iconName, onPress}) {
    return (
        //TouchableOpacity 버튼을 눌렀을 때 투명도가 높아지는 것이다.
        <TouchableOpacity onPressOut={onPress}>
            <FontAwesome name={iconName} size={80} color="white" />
        </TouchableOpacity>
        
    );
}

Button.propTypes = {
    iconName: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
}

export default Button;