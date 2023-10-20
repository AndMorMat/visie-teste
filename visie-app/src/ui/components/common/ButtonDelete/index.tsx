import React from 'react'
import { Button } from "../Button"
import { usePeopleContext } from '../../../../contexts/people-context'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { PEOPLE_LIST_ROUTE_NAME, StackParamListType } from '../../../../types/navigation'
import styles from './styles'

interface IButtonDeleteProps {
  peopleId: number,
}

export function ButtonDelete({ peopleId }: IButtonDeleteProps) {
  const navigation = useNavigation<NavigationProp<StackParamListType>>()
  const { deletePeople } = usePeopleContext()


  const onPress = () => {
    deletePeople(peopleId)
    navigation.navigate(PEOPLE_LIST_ROUTE_NAME)
  }

  return (
    <Button onPress={onPress} title="Excluir" textStyle={styles.button} />
  )
}