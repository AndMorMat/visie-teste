import React from 'react'
import { View, Text, StyleProp, TextStyle } from 'react-native'
import styles from './styles'

interface ILabelProps {
  label: string,
  text: string,
  labelTextStyle?: StyleProp<TextStyle>
}

export function Label({ label, text, labelTextStyle }: ILabelProps) {
  return (
    <View style={styles.labelContainer}>
      <Text style={labelTextStyle}>{label}</Text>
      <Text style={styles.labelValue}>{text}</Text>
    </View>
  )
}