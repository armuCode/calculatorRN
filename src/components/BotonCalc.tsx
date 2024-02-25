/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
interface PropsBoton {
  texto: string;
  color?: string;
  ancho?: boolean;
}
const BotonCalc = ({texto, color = '#2d2d2d', ancho = false}: PropsBoton) => {
  return (
    <TouchableOpacity>
      <View
        style={{
          ...styles.boton,
          backgroundColor: color,
          width: ancho ? 180 : 80,
        }}>
        <Text
          style={{
            ...styles.botonTexto,
            color: color === '#9b9b9b' ? 'black' : 'white',
          }}>
          {texto}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default BotonCalc;

const styles = StyleSheet.create({
  boton: {
    height: 80,
    width: 80,
    backgroundColor: '#2d2d2d',
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  botonTexto: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: 'white',
    fontWeight: '300',
  },
});
