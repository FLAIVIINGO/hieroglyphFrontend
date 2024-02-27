import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import globalStyle from './assets/styles/globalStyle';
import Flashcard from './components/Flashcard/Flashcard';
import {EXAMPLE_FLASHCARDS} from './data';
import AdvanceCardButton from './components/AdvanceCardButton/AdvanceCardButton';

const App = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const changeCard = () => {
    const newIndex = Math.floor(Math.random() * EXAMPLE_FLASHCARDS.length);
    setCurrentCardIndex(newIndex);
  };

  return (
    <SafeAreaView style={globalStyle.container}>
      <View style={globalStyle.cardContainer}>
        <Flashcard {...EXAMPLE_FLASHCARDS[currentCardIndex]} />
      </View>
      <View>
        <AdvanceCardButton
          style={globalStyle.buttonContainer}
          onSelect={changeCard}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
