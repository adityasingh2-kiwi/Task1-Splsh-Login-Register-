import {UPDATE_USER, DELETE_USER, ADD_USER} from '../Type';

const initialState = {
  allUser: [
    {
      id: 1,
      image: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
      name: 'Adi',
      age: 20,
      email: 'Aditya@yopmail.com',
    },
    {
      id: 2,
      image: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
      name: 'John',
      age: 24,
      email: 'John@yopmail.com',
    },
    {
      id: 3,
      image: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
      name: 'Josef',
      age: 26,
      email: 'Josef@yopmail.com',
    },
    {
      id: 4,
      image: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
      name: 'Harry',
      age: 28,
      email: 'Harry@yopmail.com',
    },
    {
      id: 5,
      image: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
      name: 'Denial',
      age: 30,
      email: 'Denial@yopmail.com',
    },
  ],
};
const crudReducer = (state = initialState, action) => {
  console.log(action.type, 'actionType');
  console.log(action.data, 'actionData');
  switch (action.type) {
    case ADD_USER: {
      return {
        ...state,
        allUser: [...state.allUser, action.data],
      };
    }
    /**
     * DELETE USER
     */
    case DELETE_USER: {
      const deleteData = state.allUser.filter(item => {
        return item.id !== action.data.id;
      });
      return {allUser: [...deleteData]};
    }
    /**
     * EDIT USER
     */
    case UPDATE_USER: {
      return {
        ...state,

        allUser: state.allUser.map(item => {
          console.log(item, 'itemPayload');
          console.log(action.data, 'hello');
          if (item?.id === action.data.id) {
            console.log(item, 'exactPayload');
            return action.data;
          }
          return item;
        }),
      };
    }

    default:
      return state;
  }
};
export default crudReducer;
