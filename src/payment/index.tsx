import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import { CreditCard, CARD_SIDE } from '../components/credit-card';
import { useSharedValue } from 'react-native-reanimated';
import { Input } from '../components/input';



export function Payment() {
  const cardSide = useSharedValue(CARD_SIDE.front);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [date, setDate] = useState('');
  const [code, setCode] = useState('');

  function showFrontCard() {
    cardSide.value = CARD_SIDE.front;
  }

  function showBackCard() {
    cardSide.value = CARD_SIDE.back;
  }

  function handleFlipCard() {
    if (cardSide.value === CARD_SIDE.front) {
      showBackCard();
    } else {
      showFrontCard();
    }
  }

  return (
    <View style={styles.container}>
      <CreditCard
        cardSide={cardSide}
        data={{
          name,
          number: number.replace(/(\d{4})(?=\d)/g, "$1 "),
          date,
          code
        }}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleFlipCard}
      >
        <Text>Inverter</Text>
      </TouchableOpacity>

      <View style={styles.form}>
        <Input
          placeholder='Nome do titular'
          onChangeText={setName}
          onFocus={showFrontCard}
        />

        <Input
          placeholder='Número do cartão'
          keyboardType='numeric'
          maxLength={16}
          onChangeText={setNumber}
          onFocus={showBackCard}
        />

        <View style={styles.inputInLine}>
          <Input
            style={styles.smallInput}
            placeholder='01/02'
            onChangeText={setDate}
            onFocus={showBackCard}
          />

          <Input
            style={styles.smallInput}
            placeholder='123'
            keyboardType='numeric'
            onChangeText={setCode}
            onFocus={showBackCard}
          />
        </View>
      </View>

    </View>
  );
}