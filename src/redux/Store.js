import {createStore, combineReducers} from 'redux';
import crudReducer from './reducer/Crud';
import getUserReducer from './reducer/GetUser';

const rootReducer = combineReducers({getUserReducer, crudReducer});
const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;
