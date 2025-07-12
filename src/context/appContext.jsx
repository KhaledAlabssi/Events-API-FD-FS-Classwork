import axios from "axios";
import { useContext, createContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  
  const [isAuth, setIsAuth] = useState(false);
  const [events, setEvents] = useState([]);
  function getEvents () {

    axios("http://localhost:3001/api/events?limit=1000").then((x) =>
      setEvents(x.data.results)
    )

  }

  return (
    <AppContext.Provider value={{ events, getEvents, isAuth, setIsAuth}}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
