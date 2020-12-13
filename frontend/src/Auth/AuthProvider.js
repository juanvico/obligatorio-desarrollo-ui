import * as React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const AuthContext = React.createContext({
  token: null,
  setToken: () => {}
});
// AuthContext.Provider -> Wraps React tree and provide value
// AuthContext.Consumer -> Extract context value

export const AuthProvider = ({ children }) => {
  const [token, setTokenState] = React.useState(() =>
    AsyncStorage.getItem("token")
  );

  const setToken = aToken => {
    AsyncStorage.setItem("token", aToken);
    setTokenState(aToken);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useToken = () => {
  const { token, setToken } = React.useContext(AuthContext);
  return { token, setToken };
};

export default AuthProvider;
