import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import style from './style';

const Flashcard = props => {
  return (
    <TouchableOpacity onPress={props.flipCard} style={style.card}>
      <View>
        {props.isFlipped ? (
          <Text style={style.text}>{props.answer}</Text>
        ) : (
          <Text style={style.text}>{props.question}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

Flashcard.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  isFlipped: PropTypes.bool.isRequired,
  flipCard: PropTypes.func.isRequired,
};

export default Flashcard;
