import React from "react";
import "./SignInComponent.scss";
interface Props {
  children: React.ReactNode;
}
const SignInComponent: React.FC = () => {
  // const { instance } = useMsal();
  const handleLogin = () => {
    // instance.loginRedirect(loginRequest).catch((e) => {
    //   console.log(e);
    // });
  };
  return (
    <>
      <div className="container-fluid">
        <div className="sign-in text-center">
          <p>Not Signed In</p>
          <p>You must be signed in to access this application.</p>
          <button className="primary rounded" onClick={() => handleLogin()}>
            Sign In
          </button>
        </div>
      </div>
    </>
  );
};

export default SignInComponent;
