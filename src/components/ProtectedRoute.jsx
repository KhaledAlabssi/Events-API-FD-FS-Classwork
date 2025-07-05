import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router";

export default function ProtectedRoute() {
  const auth = true;

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios("http://localhost:3001/api/events").then((x) => {
      setEvents(x.data.results);
      setLoading(false);
    });

    axios
      .post("http://localhost:3001/api/auth/login", {
        email: "k@e.com",
        password: "password",
      })
      .then((x) => {
        alert(x.data.token);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  return (
    <div>{events.length > 0 ? <Outlet /> : <Navigate to={"/login"} />}</div>
  );
}
