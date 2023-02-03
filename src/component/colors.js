import {StyleSheet, Image} from 'react-native';

const COLORS = StyleSheet.create({
  login1: {
    flex: 1,
    backgroundColor: <Image source={require('../assets/Image/Ocean.jpeg')} />,
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
    // backgroundColor: 'g',
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

  UserDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 0.3,
  },

  onEdit: {
    marginRight: 5,
  },
  userDetailAdd: {
    width: 40,
    height: 40,
    marginLeft: 320,
  },

  HomeHeading: {
    fontSize: 40,
    textAlign: 'center',
    marginTop: 200,
    marginBottom: 70,
  },
  Logout: {
    textAlign: 'center',
    marginTop: 70,
    backgroundColor: 'magenta',
    color: 'white',
    fontWeight: 'bold',
    width: 90,
    height: 30,
    fontSize: 20,
    marginLeft: 152,
  },
  UserDetailMain: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 0.2,
    paddingHorizontal: 40,
  },
  ImagePicker: {
    backgroundColor: 'blue',
    marginTop: 40,
    borderRadius: 90,
    height: 150,
    width: 150,
    marginLeft: 120,
  },
  LoginButton: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  PasswordValidation: {
    color: 'red',
    marginLeft: 30,
    marginTop: 10,
  },
  RegisterHeading: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  LoginImage: {width: 80, height: 80, marginLeft: 135},
  ImageBackground: {flex: 1, justifyContent: 'center'},
  PImagePicker: {
    backgroundColor: 'blue',
    marginTop: 70,
    borderRadius: 90,
    height: 150,
    width: 150,
  },
  UploadImage: {
    backgroundColor: 'pink',
    marginTop: 25,
    borderRadius: 30,
  },
  AddUser: {flex: 1, justifyContent: 'center'},
  AddUser1: {fontSize: 20, textAlign: 'center'},
  UploadUser: {fontSize: 20, textAlign: 'center'},
  ImagePickerEditUser: {
    backgroundColor: 'blue',
    marginTop: 40,
    borderRadius: 90,
    height: 150,
    width: 150,
    marginLeft: 120,
  },
  EditUploadImage: {
    backgroundColor: 'yellow',
    width: 180,
    marginTop: 25,
    borderRadius: 30,
    marginLeft: 110,
  },
  UploadImage1: {fontSize: 20, textAlign: 'center'},
  AddIcon: {
    marginTop: 20,
    width: 30,
    height: 30,
  },
  UserDetailsScreen: {
    fontSize: 25,
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 20,
    flex: 1,
  },
  UserDetailsScreen1: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 0.2,
    paddingHorizontal: 40,
  },
  Swipe1: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  Touchable1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  ImageDetailImage: {
    height: 40,
    width: 40,
    borderRadius: 80,
  },
  ItemName: {
    fontSize: 18,
    marginLeft: 20,
  },
  SwipeDelete: {
    marginRight: 10,
    fontSize: 20,
    backgroundColor: 'red',
  },
  SwipeEdit: {
    fontSize: 20,
    backgroundColor: 'green',
  },
});

export default COLORS;
