import { TextInput, View, Text } from 'react-native'
import styles from './styles'

export function Input({
  label,
  value,
  onChangeText,
}) {

  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  )
}