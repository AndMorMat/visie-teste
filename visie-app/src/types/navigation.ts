import { PeopleType } from "./people";

export const PEOPLE_LIST_ROUTE_NAME = 'Listar pessoas'
export const PEOPLE_DETAILS_ROUTE_NAME = 'Detalhes'
export const PEOPLE_ADD_ROUTE_NAME = 'Adicionar pessoa'
export const PEOPLE_EDIT_ROUTE_NAME = 'Editar pessoa'

export type StackParamListType = {
  [PEOPLE_LIST_ROUTE_NAME]: undefined;
  [PEOPLE_DETAILS_ROUTE_NAME]: { item: PeopleType };
  [PEOPLE_ADD_ROUTE_NAME]: undefined;
  [PEOPLE_EDIT_ROUTE_NAME]: { item: PeopleType };
};