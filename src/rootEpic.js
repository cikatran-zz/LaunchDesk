import {combineEpics} from 'redux-observable';
import personEpic from './screens/Person/getPersonEpic'

const rootEpic = combineEpics(
  personEpic
);

export default rootEpic;