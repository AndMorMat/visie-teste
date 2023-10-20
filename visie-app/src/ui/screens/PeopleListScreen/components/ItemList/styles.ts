import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  itemListContainer: {
    flexDirection: 'column',
    marginHorizontal: 10,
    marginTop: 10,
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 10,
  },
  labels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  labelValue: {
    fontSize: 20,
  },
  textRight: {
    textAlign: 'right'
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  centerButton: {
    marginHorizontal: 5
  }
})

export default styles