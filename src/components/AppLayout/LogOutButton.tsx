/**
 * Renders a sign out button
 */
export const LogOutButton = () => {
  // const { instance } = useMsal();

  const handleLogout = () => {
    // instance.logoutRedirect({
    //   postLogoutRedirectUri: "/",
    // });
  };

  return <a onClick={() => handleLogout()}>Logout</a>;
};
