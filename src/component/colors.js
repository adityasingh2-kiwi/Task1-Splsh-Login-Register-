import {StyleSheet} from 'react-native';

const COLORS = StyleSheet.create({
  login1: {
    flex: 1,
  },
  login2: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  login3: {
    marginLeft: 30,
    fontSize: 25,
    marginBottom: 10,
    marginTop: 30,
  },
  color1: {
    white: 'white',
    black: 'black',
    blue: 'blue',
    grey: 'grey',
    light: 'light',
    darkBlue: 'darkblue',
    red: 'red',
    backgroundColor: 'white',
  },

  register1: {
    color: 'black',
    marginTop: 35,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  register2: {
    color: 'grey',
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 10,
  },

  content1: {
    marginVertical: 20,
    fontSize: 20,
    color: 'red',
  },
  TextColor: {
    marginVertical: 20,
    marginLeft: 10,
    // color: 'red',
    fontSize: 25,
    fontFamily: 'Cochin',
    placeholderTextColor: 'white',
  },
  TextColor1: {
    borderColor: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    borderWidth: 1,
    marginLeft: 30,
    height: 40,
    backgroundColor: 'pink',
    width: 300,
  },

  button: {
    alignItems: 'center',
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 40,
    marginTop: 40,
    width: 100,
    marginLeft: 130,
  },

  change: {
    color: 'blue',
    marginTop: 20,
    fontSize: 25,
    marginLeft: 60,
  },

  icon: {
    width: 40,
    height: 40,
    // alignContent: 'center',
    marginLeft: 175,
  },
});

export default COLORS;
