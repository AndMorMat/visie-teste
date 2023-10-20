import React from 'react'
import { Button } from "../Button";
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { PeopleType } from '../../../../types/people';
import { PEOPLE_EDIT_ROUTE_NAME, StackParamListType } from '../../../../types/navigation';

interface IButtonEditProps {
  containerStyle?: object,
  people: PeopleType
}

export function ButtonEdit({ containerStyle, people }: IButtonEditProps) {
  const navigation = useNavigation<NavigationProp<StackParamListType>>()

  const onPress = () => {
    navigation.navigate(PEOPLE_EDIT_ROUTE_NAME, { item: people })
  }

  return (
    <Button onPress={onPress} title="Editar" containerStyle={containerStyle} />
  )
}