import { createContext, useContext, useState } from 'react';

const globalContext = createContext();

export const useGlobalContext = () => useContext(globalContext);

const GlobalProvider = ({ children }) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true);



  return (
    <globalContext.Provider value={{
      isLoggedIn,
      setIsLoggedIn,
      user,
      setUser,
      isLoading
    }}>
      {children}
    </globalContext.Provider>
  );
}

export default GlobalProvider