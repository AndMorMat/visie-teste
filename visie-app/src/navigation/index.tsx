import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  PeopleListScreen,
  DetailsScreen,
  AddPersonScreen,
  EditPersonScreen,
} from '../ui/screens'
import {
  PEOPLE_ADD_ROUTE_NAME,
  PEOPLE_DETAILS_ROUTE_NAME,
  PEOPLE_EDIT_ROUTE_NAME,
  PEOPLE_LIST_ROUTE_NAME,
  StackParamListType
} from '../types/navigation';

const { Navigator, Screen } = createNativeStackNavigator<StackParamListType>();

export function AppNavigator(): JSX.Element {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name={PEOPLE_LIST_ROUTE_NAME} component={PeopleListScreen} />
        <Screen name={PEOPLE_DETAILS_ROUTE_NAME} component={DetailsScreen} />
        <Screen name={PEOPLE_ADD_ROUTE_NAME} component={AddPersonScreen} />
        <Screen name={PEOPLE_EDIT_ROUTE_NAME} component={EditPersonScreen} />
      </Navigator>
    </NavigationContainer>
  );
}