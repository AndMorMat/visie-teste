import React from 'react'
import { View } from 'react-native'
import { PeopleType } from '../../../../../types/people'
import { Button } from '../../../../components/common/Button'
import dayjs from 'dayjs'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { Label } from '../../../../components/common/Label'
import { ButtonEdit } from '../../../../components/common/ButtonEdit'
import { ButtonDelete } from '../../../../components/common/ButtonDelete'
import {
  PEOPLE_DETAILS_ROUTE_NAME,
  StackParamListType
} from '../../../../../types/navigation'
import styles from './styles'

interface ItemListProps {
  item: PeopleType
}

export function ItemList({ item }: ItemListProps): JSX.Element {
  const navigation = useNavigation<NavigationProp<StackParamListType>>();

  const handleDetailsPress = () => {
    navigation.navigate(PEOPLE_DETAILS_ROUTE_NAME, { item })
  }

  return (
    <View style={styles.itemListContainer}>
      <View style={styles.labels}>
        <Label label="Nome" text={item.name.split(' ')[0]} />
        <Label label="Data admissão" text={dayjs(item.admissionDate).format('DD/MM/YYYY')} labelTextStyle={styles.textRight} />
      </View>
      <View style={styles.buttonsContainer}>
        <Button title="Ver mais" onPress={handleDetailsPress} />
        <ButtonEdit containerStyle={styles.centerButton} people={item} />
        <ButtonDelete peopleId={item.peopleId} />
      </View>
    </View>
  )
}