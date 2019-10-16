import { combineReducers } from 'redux';
import { user } from './user';
import search from './search';

export const rootReducer = combineReducers({
  user, search
});
