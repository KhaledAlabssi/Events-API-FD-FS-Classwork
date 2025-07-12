import axios from "axios";
import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router";

const AppContext = createContext();

export const AppProvider = ({ children }) => {


  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isToast, setIsToast] = useState(false);
  const [isToastMessage, setIsToastMessage] = useState("");
  const [events, setEvents] = useState([]);



  const navigate = useNavigate()
  function showToast (message) {
    setIsToastMessage(message || "Success!")
    setIsToast(true)
    setTimeout(() => {
        setIsToast(false)
        setIsToastMessage("")
        
    }, 5000);
  
  }

  function signout () {
    setIsLoading(true)
    localStorage.removeItem("userToken")
    setIsAuth(false)
    setIsLoading(false)
    navigate("/")
    showToast("See you soon!")

  }
  function getEvents() {
    axios("http://localhost:3001/api/events?limit=1000").then((x) =>
      setEvents(x.data.results)
    );
  }

  return (
    <AppContext.Provider value={{ events, signout, getEvents, isAuth, setIsAuth, showToast, isToast, isToastMessage }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
