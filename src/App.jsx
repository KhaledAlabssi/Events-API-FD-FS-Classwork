import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import EventDetails from "./pages/EventDetails";
import CreateEvent from "./pages/CreateEvent";
import Error from "./pages/NotFoundPage";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import { useAppContext } from "./context/appContext";
import Toast from "./components/Toast";
import Loading from "./components/Loading";
import AlertComponent from "./components/AlertComponent";

function App() {
  const { isToast, isLoading, isAlert } = useAppContext();

  return (
    <div className="">
      <Header />

    
      {isAlert && <AlertComponent />}
      {isLoading && <Loading />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/create-event" element={<ProtectedRoute />}>
          <Route index element={<CreateEvent />} />
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
      {isToast && <Toast />}
      <Footer />
    </div>
  );
}

export default App;
