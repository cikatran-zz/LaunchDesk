import * as actionTypes from './actionTypes';
import {getPersonSuccess, getPersonFailure} from './action/getPersonAction';
import {getPerson} from '../../api';
import 'rxjs';
import {Observable} from 'rxjs/Observable';

const getPersonEpic = (action$) =>
  action$.ofType(actionTypes.GET_PERSON)
    .mergeMap(action =>
      Observable.from(getPerson(action.name))
        .map(response => getPersonSuccess(response.data))
        .catch(error => Observable.of(getPersonFailure(error)))
    );

export default getPersonEpic;