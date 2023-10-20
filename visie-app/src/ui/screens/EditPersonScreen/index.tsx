import React from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import { FormPerson } from '../../components/common/FormPerson'
import { usePeopleContext } from '../../../contexts/people-context'
import { Button } from '../../components/common/Button'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { PEOPLE_LIST_ROUTE_NAME, StackParamListType } from '../../../types/navigation'
import { PeopleType } from '../../../types/people'
import styles from './styles'

export function EditPersonScreen({ route }) {
  const navigation = useNavigation<NavigationProp<StackParamListType>>()
  const { editPerson } = usePeopleContext()
  const { item } = route.params

  const goToPersonListScreen = () => {
    navigation.navigate(PEOPLE_LIST_ROUTE_NAME)
  }

  const handleEditPerson = (person: PeopleType) => {
    editPerson(person)
    goToPersonListScreen()
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <FormPerson
          onSubmitForm={handleEditPerson}
          person={item}
        />
        <View style={styles.buttonContainer}>
          <Button
            title="Cancelar"
            onPress={goToPersonListScreen}
            containerStyle={styles.buttonCancelar}
            textStyle={styles.textCancelar}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}