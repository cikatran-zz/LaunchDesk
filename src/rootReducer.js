import {combineReducers} from 'redux';
import person from './screens/Person/personReducer';
import nav from './appReducer'

export default combineReducers({
  person,
  nav
});
