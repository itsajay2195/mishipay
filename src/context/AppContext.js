import React, {createContext, useState} from 'react';

export const AppContext = createContext();

const AppContextProvider = ({children}) => {
  const [countries, setCountries] = useState([]);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [loading, setLoading] = useState(false);

  const changeTheme = () => {
    setIsDarkTheme(theme => !theme);
  };

  const values = {
    countries,
    setCountries,
    isDarkTheme,
    setIsDarkTheme,
    loading,
    setLoading,
    changeTheme
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};


export default AppContextProvider;