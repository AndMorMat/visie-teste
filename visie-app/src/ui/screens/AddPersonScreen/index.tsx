import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import { FormPerson } from '../../components/common/FormPerson'
import { usePeopleContext } from '../../../contexts/people-context'
import { PeopleType } from '../../../types/people'
import styles from './styles'

export function AddPersonScreen() {
  const { addPerson } = usePeopleContext()

  const handleAddPerson = (person: PeopleType) => {
    addPerson(person)
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