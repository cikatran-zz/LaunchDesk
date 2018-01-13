import Home from './screens/Home'
import Person from './screens/Person'
import {StackNavigator} from 'react-navigation'

export const ScreenStack = StackNavigator({
  Home: {
    screen: Home,
  },
  Person: {
    screen: Person,
  },
});
