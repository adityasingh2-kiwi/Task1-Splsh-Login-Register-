import {createStore, combineReducers} from 'redux';
import getUserReducer from './reducer/GetUser';

const rootReducer = combineReducers({getUserReducer});
const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;
