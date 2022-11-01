import React, { useState } from "react";
import { signInWithGooglePopup, createUserDocumentFromAuth, signInUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./sign-in-form.style.scss";

const defaultFormValue = {
  email: "",
  password: "",
}

const SingInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormValue);
  const { email, password } = formFields;
  // const { setCurrentUser } = useContext(UserContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const resetFormFields = () => {
    setFormFields(defaultFormValue);
  }
  function checkErrors(error) {
    switch (error.code) {
      case "auth/wrong-password":
        alert("Wrong Password");
        break;

      case "auth/user-not-found":
        alert("User is not found");
        break;

      default:
        alert("sorry try agian later");
        console.log(error);
        break;
    }


  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInUserWithEmailAndPassword(
        email,
        password
      );
      // setCurrentUser(user);
      resetFormFields();
    } catch (error) {
      checkErrors(error);
    }
  }
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  }

  return (
    <div className="sign-in-container">
      <h2>I already have an account</h2>
      <span>Sign In Page</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
          required
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
          required
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SingInForm;