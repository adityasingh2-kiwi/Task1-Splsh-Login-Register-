import {GET_USER} from '../Type';

const initialState = {
  user: [],
};
const getUserReducer = (state = initialState, action) => {
  console.log(action.type, 'actiontype');
  console.log(action.data, 'actiondata');
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.data,
      };

    default:
      return state;
  }
};
export default getUserReducer;
