import React from 'react'
import { ReactNode, createContext, useContext, useState } from "react";
import { PeopleType } from '../types/people'
import { Api } from '../services/Api'

interface PeopleContextType {
  people: PeopleType[] | null,
  loading: boolean,
  fetchPeople: () => void,
  deletePeople: (peopleId: number) => void,
  addPerson: (people: PeopleType) => void,
  editPerson: (people: PeopleType) => void,
}

interface PropsType {
  children: ReactNode
}
const FAIL_API_CODE = 'NAO'
const PeopleContext = createContext({} as PeopleContextType);

export const PeopleProvider = ({ children }: PropsType): JSX.Element => {
  const [people, setPeople] = useState<PeopleType[] | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const fetchPeople = () => {
    setLoading(true)
    Api().get('/list').then((res) => {
      setPeople(res.data.content)
    }).catch((e) => {
      if (e.response.data.success === FAIL_API_CODE) {
        //handle exception
      }
    }).finally(() => {
      setLoading(false)
    })
  }

  const deletePeople = (peopleId: number) => {
    Api().del(`/delete/${peopleId}`).then((res) => {
      fetchPeople()
    }).catch((e) => {
      if (e.response.data.success === FAIL_API_CODE) {
        //handle exception
      }
    })
  }

  const addPerson = (person: PeopleType) => {
    Api().post('/add', person).then((res) => {
      fetchPeople()
    }).catch((e) => {
      if (e.response.data.success === FAIL_API_CODE) {
        //handle exception
      }
    })
  }

  const editPerson = (person: PeopleType) => {
    Api().put('/edit', person).then((res) => {
      fetchPeople()
    }).catch((e) => {
      if (e.response.data.success === FAIL_API_CODE) {
        //handle exception
      }
    })
  }

  return (
    <PeopleContext.Provider value={{ people, loading, fetchPeople, deletePeople, addPerson, editPerson }}>
      {children}
    </PeopleContext.Provider>
  )
}

export const usePeopleContext = () => {
  const context = useContext(PeopleContext)
  return context
}