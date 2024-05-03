import React from 'react';
import { TextInputProps, View, TextInput } from 'react-native';

import { styles } from './styles';


export function Input({ style, ...rest }: TextInputProps) {
  return (
    <TextInput
      style={[style, styles.input]}
      {...rest}
    />

  );
}