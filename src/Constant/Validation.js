import {RegistrationScreen,Login}

export const handleCheckEmail = text => {
  let re = /\S+@\S+\.\S+/;
  setEmail(text);
  if (re.test(text)) {
    setCheckValidEmail(false);
  } else {
    setCheckValidEmail(true);
  }
};

export const handleFirstName = text => {
  let re = /^[a-zA-Z ]{3,14}$/;
  setFirstName(text);
  if (re.test(text)) {
    setCheckValidFirstName(false);
  } else {
    setCheckValidFirstName(true);
  }
};

export const handleCheckPassword = text => {
  let re = /^[a-z]+[A-Z]+[0-9]+[!@#$%^&]+]{8,16}$/;
  setPassword(text);
  if (re.test(text)) {
    setCheckValidPassword(false);
  } else {
    setCheckValidPassword(true);
  }
};

export const handleMobileNumber = text => {
  let re = /^[0]?[789]\d{9}$/;
  setMobileNumber(text);
  if (re.test(text)) {
    setCheckValidMobileNo(false);
  } else {
    setCheckValidMobileNo(true);
  }
};
