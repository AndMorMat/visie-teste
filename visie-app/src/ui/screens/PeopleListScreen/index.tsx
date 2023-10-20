import React, { useEffect } from 'react'
import { ActivityIndicator, FlatList, SafeAreaView, View } from 'react-native'
import { Button } from '../../components/common/Button'
import { ItemList } from './components/ItemList'
import { usePeopleContext } from '../../../contexts/people-context'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { PEOPLE_ADD_ROUTE_NAME, StackParamListType } from '../../../types/navigation'
import styles from './styles'

export function PeopleListScreen(): JSX.Element {
  const navigation = useNavigation<NavigationProp<StackParamListType>>()
  const { people, loading, fetchPeople } = usePeopleContext()

  useEffect(() => {
    fetchPeople()
  }, [])

  const onAddPersonHandlePress = () => {
    navigation.navigate(PEOPLE_ADD_ROUTE_NAME)
  }

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <FlatList
        data={people}
        keyExtractor={item => item.peopleId.toString()}
        renderItem={({ item }) => <ItemList item={item} />}
      />
      <View style={styles.newPersonButtonContainer}>
        <Button
          onPress={onAddPersonHandlePress}
          title="Adicionar registro"
          containerStyle={styles.containerNewButton}
        />
      </View>
    </SafeAreaView>
  )

}