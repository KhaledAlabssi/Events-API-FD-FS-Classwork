import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function AuthForm({ setIsAuth }) {
  const [isRegiter, setIsRegiter] = useState(false);

  const navigate = useNavigate();

  function submitHandler(e) {
    e.preventDefault();
    const emailInput = e.target.email.value;
    const passwordInput = e.target.password.value;
    axios
      .post("http://localhost:3001/api/auth/login", {
        email: emailInput,
        password: passwordInput,
      })
      .then((x) => {
        if (x.data.token) {
          console.log(x.data.token);

          // save token to LS
          localStorage.setItem("userToken", JSON.stringify(x.data.token));

          setIsAuth(true);

          navigate("/create-event");
        }
      })
      .catch((e) => {
        console.log("Hi folks");
        console.log("Error ");
      });
  }
  return (
    <div className="h-full  flex justify-center items-center  w-full bg-gray-300">
      <form onSubmit={submitHandler}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          {/* {isRegiter && (
            <>
              <label className="label">Name</label>
              <input type="text" className="input" placeholder="Name" />
            </>
          )} */}
          {/* <legend className="fieldset-legend">
            {isRegiter ? "Register" : "Login"}
          </legend> */}

          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            placeholder="Email"
            name="email"
          />

          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            placeholder="Password"
            name="password"
          />

          <button className="btn btn-neutral mt-4">
            {isRegiter ? "Create Account" : "Login"}
          </button>
          <p>
            you can create your account now...
            {/* <button className="badge bg-primary" onClick={() => setIsRegiter(!isRegiter)}>
          register
        </button> */}
          </p>
        </fieldset>
      </form>
    </div>
  );
}
