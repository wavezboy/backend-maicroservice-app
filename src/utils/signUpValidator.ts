import validator from 'validator'
import is-empty from "is-empty"

export default interface signUpUser {
  email: String;

  name: String;
  username: String;
  bio: String;
  image: String;
}
