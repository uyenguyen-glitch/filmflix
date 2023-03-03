import { useEffect } from "react";
import { Form, Input } from "antd";
import { getRedirectResult } from "firebase/auth";
import {
  createUserDocFromAuth,
  signInWithGooglePopUp,
} from "../../services/config/firebase.config";

const SignInWithProviders = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    const userDocRef = await createUserDocFromAuth(user);
  };

  return (
    // <div>
    //   <h1>Signin WIth Providers</h1>
    //   <button onClick={logGoogleUser}>SignIn with Google</button>
    // </div>
    <div>
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        aria-controls="mobile-menu"
        aria-expanded="false"
      ></button>
    </div>
  );
};

export default SignInWithProviders;
