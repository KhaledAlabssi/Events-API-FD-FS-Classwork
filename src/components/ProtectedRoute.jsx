import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router";
import Alert from "./Alert";

export default function ProtectedRoute({isAuth}) {
  
  // const [isUser, setIsUser] = useState(false)
  // const [isError, setIsError] = useState(false)
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // axios("http://localhost:3001/api/events").then((x) => {
  //   //   setEvents(x.data.results);
  //   //   setLoading(false);
  //   // });

  //   axios
  //     .post("http://localhost:3001/api/auth/login", {
  //       email: "wbs@e.com",
  //       password: "pasord",
  //     })
  //     .then((x) => {
  //       if(x.data.token){
  //         console.log(x.data.token);
  //         console.log("Hello guys!");
          
  //         setIsUser(true)
                   
  //         setLoading(false)
  //       }
  //     }).catch(e => {console.log("Hi folks")
  //       setIsError(true)
  //         setLoading(false)

  //     }
  //     )

  // }, []);

  // if (loading) return <p>Loading...</p>;
  // if (isError) return <Alert content={"Please check your email and password input and try again after a month!"}/>
  return (
    <div>{isAuth ? <Outlet /> : <Navigate to={"/login"} />}</div>
  );
}
