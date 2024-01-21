import validator from "validator";
import isEmpty from "is-empty";

export default interface signUpUser {
  email: string;
  password: string;
  password1: string;
  name: string;
  username: string;
  bio: string;
  image: string;
}

export const validateSignUpInput = (data: signUpUser) => {
  const errors = {
    name: "",
    email: "",
    username: "",
    password: "",
    password1: " ",
  };

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
    errors.name = "bio field is required";
  }

  if (validator.isEmpty(data.email)) {
    errors.name = "email field is required";
  }

  if (validator.isEmpty(data.username)) {
    errors.name = "username field is required";
  }
  if (validator.isEmpty(data.password)) {
    errors.name = "password field is required";
  }

  return { errors, isValid: isEmpty(errors) };
};
