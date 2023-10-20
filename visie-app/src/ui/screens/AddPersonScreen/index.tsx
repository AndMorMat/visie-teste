import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import { FormPerson } from '../../components/common/FormPerson'
import { usePeopleContext } from '../../../contexts/people-context'
import { PeopleType } from '../../../types/people'
import styles from './styles'
import { PEOPLE_LIST_ROUTE_NAME, StackParamListType } from '../../../types/navigation'
import { NavigationProp, useNavigation } from '@react-navigation/native'

export function AddPersonScreen() {
  const navigation = useNavigation<NavigationProp<StackParamListType>>()
  const { addPerson } = usePeopleContext()

  const goToPersonListScreen = () => {
    navigation.navigate(PEOPLE_LIST_ROUTE_NAME)
  }

  const handleAddPerson = (person: PeopleType) => {
    addPerson(person)
    goToPersonListScreen()
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <FormPerson
          onSubmitForm={handleAddPerson}
        />
      </ScrollView>
    </SafeAreaView>
  )
}