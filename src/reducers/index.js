import { combineReducers } from 'redux-immutable';
import modal from 'reducers/modal';

const rootReducer = combineReducers({
  modal,
});

export default rootReducer;
