import React, {createContext, useState} from 'react';

export const AppContext = createContext();

const AppContextProvider = ({children}) => {
  const [countries, setCountries] = useState([]);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [loading, setLoading] = useState(false);
  const [regions, setRegions] = useState([]);

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
    changeTheme,
    regions,
    setRegions
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};


export default AppContextProvider;