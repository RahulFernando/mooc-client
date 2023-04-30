import { createContext, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({
  user: null,
  isAuthenticated: false,
  onLoginSuccess: (user) => {},
  onSignout: () => {},
});

const initialize = () => {
  let user = null;
  const localUser = window.localStorage.getItem("user");

  if (localUser) user = JSON.parse(localUser);

  return user;
};

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(initialize());
  const [isAuthenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (user) setAuthenticated(true);
  }, [user]);

  // update local and browser state
  const loginSuccessHandler = useCallback((userDetails) => {
    const { password, ...withoutPassword } = userDetails;
    setUser(withoutPassword);
    setAuthenticated(true);

    window.localStorage.setItem("user", JSON.stringify(withoutPassword));
  }, []);

  const signoutHandler = () => {
    setUser(null);
    setAuthenticated(false);
    window.localStorage.removeItem("user");
    navigate("/", { replace: true });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        onLoginSuccess: loginSuccessHandler,
        onSignout: signoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
