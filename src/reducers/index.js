import { combineReducers } from 'redux';

import user from './userReducer';
import taskList from './taskList';

const rootReducer = combineReducers({
  user,
  taskList
});

export default rootReducer;
