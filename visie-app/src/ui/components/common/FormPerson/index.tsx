import { View } from 'react-native'
import dayjs from 'dayjs'
import { Input } from '../Input'
import { useState } from 'react'
import { Button } from '../Button'
import { PeopleType } from '../../../../types/people'
import styles from './styles'

interface IFormPersonProps {
  onSubmitForm: (people?: PeopleType) => void,
  person?: PeopleType
}

export function FormPerson({
  onSubmitForm,
  person
}: IFormPersonProps) {
  const [peopleId] = useState(person?.peopleId)
  const [name, setName] = useState(person?.name)
  const [rg, setRg] = useState(person?.rg)
  const [cpf, setCpf] = useState(person?.cpf)
  const [birthDate, setBirthDate] = useState(person?.birthDate ? dayjs(person?.birthDate).format('DD/MM/YYYY') : '')
  const [admissionDate, setAdmissionDate] = useState(person?.admissionDate ? dayjs(person?.admissionDate).format('DD/MM/YYYY') : '')
  const [role, setRole] = useState(person?.role)

  return (
    <View>
      <Input label="Nome" onChangeText={setName} value={name} />
      <Input label="Rg" onChangeText={setRg} value={rg} />
      <Input label="Cpf" onChangeText={setCpf} value={cpf} />
      <Input label="Data nascimento" onChangeText={setBirthDate} value={birthDate} />
      <Input label="Data admissão" onChangeText={setAdmissionDate} value={admissionDate} />
      <Input label="Função" onChangeText={setRole} value={role} />
      <View style={styles.buttonContainer}>
        <Button
          title="Salvar"
          onPress={() => onSubmitForm({ peopleId, name, rg, cpf, birthDate, admissionDate, role })}
          containerStyle={styles.buttonEnviar}
        />
      </View>
    </View>
  )
}