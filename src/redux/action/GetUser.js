import {GET_USER} from '../Type';

export const getUser = data => {
  console.log(data, 'actionData');
  return {
    type: GET_USER,
    data: data,
  };
};
