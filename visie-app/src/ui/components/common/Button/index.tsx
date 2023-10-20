import React from 'react'
import { TouchableOpacity, Text, ViewStyle, TextStyle } from 'react-native'
import styles from './styles'

interface IButtonProps {
  title: string,
  onPress?: () => void,
  containerStyle?: ViewStyle,
  textStyle?: TextStyle,
}

export function Button({ title, containerStyle, textStyle, onPress }: IButtonProps): JSX.Element {
  return (
    <TouchableOpacity
      style={[styles.defaultButton, containerStyle]}
      onPress={onPress}
    >
      <Text style={[styles.defaultButtonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  )
}