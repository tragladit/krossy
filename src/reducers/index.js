import { combineReducers } from 'redux';
import { user } from './user';
import search from './search';
import tinder from './tinder';


export const rootReducer = combineReducers({
  user, search, tinder
});
