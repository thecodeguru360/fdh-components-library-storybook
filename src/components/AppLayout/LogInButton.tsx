export const LogInButton = () => {
  // const { instance } = useMsal();

  const handleLogin = () => {
    // instance.loginRedirect(loginRequest).catch((e) => {
    //   console.log(e);
    // });
  };
  return (
    <a onClick={() => handleLogin()} className="user-info__name">
      Jane D.
    </a>
  );
};
