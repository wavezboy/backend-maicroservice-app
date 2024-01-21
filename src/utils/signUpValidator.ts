import validator from "validator";
import isEmpty from "is-empty";
import e from "cors";

export default interface signUpUser {
  email: string;
  password: string;
  password1: string;
  name: string;
  username: string;
  bio: string;
  image: string;
}

interface ErrorObject {
  [key: string]: string;
}

export const validateSignUpInput = (data: signUpUser) => {
  const errors: ErrorObject = {};

  // Converts empty fields to String in order to validate them

  data.name = !isEmpty(data.name) ? data.name : "";
  data.bio = !isEmpty(data.bio) ? data.bio : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password1 = !isEmpty(data.password1) ? data.password1 : "";
  data.username = !isEmpty(data.username) ? data.username : "";

  if (validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  if (validator.isEmpty(data.bio)) {
    errors.bio = "bio field is required";
  }

  if (validator.isEmpty(data.email)) {
    errors.email = "email field is required";
  }

  if (validator.isEmpty(data.username)) {
    errors.username = "username field is required";
  }
  if (validator.isEmpty(data.password)) {
    errors.password = "password field is required";
  }
  if (validator.isEmpty(data.password1)) {
    errors.password1 = "confrim password field is required";
  }

  if (!validator.isEmail(data.email)) {
    errors.email = "invalid email";
  }

  if (!validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "passwor must be at least 6 characters";
  }

  if (!validator.equals(data.password, data.password1)) {
    errors.password = "password and confirm password must match";
  }
  return { errors, isValid: isEmpty(errors) };
};
