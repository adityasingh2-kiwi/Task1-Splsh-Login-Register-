import {GET_USER, UPDATE_USER, DELETE_USER,ADD_USER} from '../Type';

export const getUser = data => {
  console.log(data, 'actionData');
  return {
    type: GET_USER,
    data: data,
  };
};
export const updateUser = data => {
  console.log(data, 'updateUseraction');
  return {
    type: UPDATE_USER,
    data: data,
  };
};

export const deleteUser = data => {
  return {
    type: DELETE_USER,
    data: data,
  };
};
export const addUser = data => {
  console.log(data, 'addUser');
  return {
    type: ADD_USER,
    data: data,
  };
};
