import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import style from './style';

const AdvanceCardButton = props => {
  return (
    <TouchableOpacity style={style.button} onPress={props.onSelect}>
      <View>
        <Text style={style.text}>Change Card</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AdvanceCardButton;
