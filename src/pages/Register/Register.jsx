import React, { useState } from "react";
import {
  createAuthUserWithEmailPassword,
  createUserDocFromAuth,
  signInAuthUserWithEmailPassword,
} from "../../services/config/firebase.config";

const defaultFormFiled = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const [formField, setFormField] = useState(defaultFormFiled);
  const { displayName, email, password, confirmPassword } = formField;
  const resetFormFields = () => {
    setFormField(defaultFormFiled);
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    // if (password !== confirmPassword) {
    //   alert("Password do not match");
    //   return;
    // }

    try {
      const response = await signInAuthUserWithEmailPassword(email, password);
      console.log(response);
      resetFormFields();
    } catch (error) {
      console.log(error);
      switch (error.code) {
        case "auth/wrong-password":
          alert("Email or password does not correct");
          break;
        case "auth/user-not-found":
          alert("No user associated with this email");
          break;

        default:
          console.log("User creation encounter error ", error);
      }
    }
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormField({ ...formField, [name]: value });
  };
  return (
    <div>
      <h1>Sign Up Page</h1>
      <form onSubmit={handleSubmit}>
        <label>Display Name</label>
        <input
          required
          type="text"
          onChange={handleChange}
          name="displayName"
          value={displayName}
        ></input>
        <label>Email</label>
        <input
          required
          type="text"
          onChange={handleChange}
          name="email"
          value={email}
        ></input>
        <label>Password</label>
        <input
          required
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
        ></input>
        <label>Password</label>
        <input
          required
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        ></input>

        <button>Sign in</button>
      </form>
    </div>
  );
};

export default Register;
