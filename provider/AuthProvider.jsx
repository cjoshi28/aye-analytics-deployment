import { useState, createContext, useEffect } from "react";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [loggedIn, SetLoggedIn] = useState(false);
  const [loading, SetLoading] = useState(true)
  const [data, SetData] = useState({
    name: "",
    token: ""
  });
  //const ExpireSeconds = 5000; //1000 * 60 * 60 * 24  //1 Day in MilliSeconds
  useEffect(() => {
    const name = localStorage.getItem("User")
    const token = localStorage.getItem("Session")
    if (name != null && token != null) {
      SetLoggedIn(true)
      SetData({
        name: localStorage.getItem("User"),
        token: localStorage.getItem("Session")
      })
    }
    SetLoading(false)
  }, [])
  const login = (name, token) => {
    localStorage.setItem("Session", token)
    localStorage.setItem("User", name)
    SetLoggedIn(true);
    SetData({
      name: localStorage.getItem("User"),
      token: localStorage.getItem("Session")
    });
    // setTimeout(() => {
    //   localStorage.setItem("Session","")
    //   localStorage.setItem("User", "")
    //   SetData([])
    //   SetLoggedIn(false);
    // }, ExpireSeconds)
  }
  const logout = value => {
    localStorage.setItem("Session", "")
    localStorage.setItem("User", "")
    SetLoggedIn(false);
    SetData([]);
  }
  const contextValue = {
    status: {
      loggedIn,
      login,
      logout,
      loading
    },
    session: {
      data,
      SetData,
    }
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;