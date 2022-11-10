import { useState, createContext, useEffect } from "react";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState({
    name: "",
    token: ""
  });
  //const ExpireSeconds = 5000; //1000 * 60 * 60 * 24  //1 Day in MilliSeconds
  useEffect(() => {
    const name = localStorage.getItem("User")
    const token = localStorage.getItem("Session")
    if (name != null && token != null) {
      setLoggedIn(true)
      setData({
        name: localStorage.getItem("User"),
        token: localStorage.getItem("Session")
      })
    }
    setLoading(false)
  }, [])
  const login = (name, token) => {
    localStorage.setItem("Session", token)
    localStorage.setItem("User", name)
    setLoggedIn(true);
    setData({
      name: localStorage.getItem("User"),
      token: localStorage.getItem("Session")
    });
    // setTimeout(() => {
    //   localStorage.setItem("Session","")
    //   localStorage.setItem("User", "")
    //   setData([])
    //   setLoggedIn(false);
    // }, ExpireSeconds)
  }
  const logout = value => {
    localStorage.setItem("Session", "")
    localStorage.setItem("User", "")
    setLoggedIn(false);
    setData([]);
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
      setData,
    }
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;