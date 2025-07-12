import axios from "axios";
import { useContext, createContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isToast, setIsToast] = useState(false);
  const [isToastMessage, setIsToastMessage] = useState("");
  const [events, setEvents] = useState([]);
  function showToast (message) {
    setIsToastMessage(message || "Success!")
    setIsToast(true)
    setTimeout(() => {
        setIsToast(false)
        setIsToastMessage("")
        
    }, 3000);
  
  }
  function getEvents() {
    axios("http://localhost:3001/api/events?limit=1000").then((x) =>
      setEvents(x.data.results)
    );
  }

  return (
    <AppContext.Provider value={{ events, getEvents, isAuth, setIsAuth, showToast, isToast, isToastMessage }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
