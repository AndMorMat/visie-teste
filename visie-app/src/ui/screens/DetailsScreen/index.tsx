import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { Label } from '../../components/common/Label'
import { ButtonEdit } from '../../components/common/ButtonEdit'
import { ButtonDelete } from '../../components/common/ButtonDelete'
import dayjs from 'dayjs'
import styles from './styles'

export function DetailsScreen({ route }) {
  const { item } = route.params

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Label label="Nome:" text={item.name} />
        <Label label="Rg:" text={item.rg} />
        <Label label="Cpf:" text={item.cpf} />
        <Label label="Data de nascimento:" text={dayjs(item.birthDate).format('DD/MM/YYYY')} />
        <Label label="Data de admissão:" text={dayjs(item.admissionDate).format('DD/MM/YYYY')} />
        <Label label="Função:" text={item.role} />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <ButtonEdit containerStyle={styles.buttonEditContainer} people={item} />
        <ButtonDelete peopleId={item.peopleId} />
      </View>
    </SafeAreaView>
  )
}