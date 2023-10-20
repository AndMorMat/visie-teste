import { PeopleProvider } from './src/contexts/people-context'
import { AppNavigator } from './src/navigation'

export default function App() {
  return (
    <PeopleProvider>
      <AppNavigator />
    </PeopleProvider>
  )
}
