import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import style from './style';

const Flashcard = props => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => setIsFlipped(!isFlipped);

  return (
    <TouchableOpacity onPress={flipCard} style={style.card}>
      <View>
        {isFlipped ? (
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
};

export default Flashcard;
