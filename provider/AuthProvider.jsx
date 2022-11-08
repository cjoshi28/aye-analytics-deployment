import { useState, createContext } from "react";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [loggedIn, setLoggedIn] = useState(false);
  const [data, setData] = useState([]);

  const ExpireSeconds = 5000; //1000 * 60 * 60 * 24  //1 Day in MilliSeconds
  
  const login = (name, token) => {
    localStorage.setItem("Session", JSON.stringify(token))
    localStorage.setItem("User", name)

    setLoggedIn(true);

    setData({
      name: localStorage.getItem("User"),
      token: localStorage.getItem("Session")
    });

    setTimeout(() => {
      localStorage.setItem("Session", null)
      localStorage.setItem("User", null)
      setData([])
      setLoggedIn(false);
    }, ExpireSeconds)
  }

  const logout = value => {
    localStorage.setItem("Session", null)
    localStorage.setItem("User", null)
    setLoggedIn(false);
    setData([]);
  }

  const contextValue = {
    status: {
      loggedIn,
      login,
      logout
    },
    session: {
      data,
      setData
    }
  };
  
  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;