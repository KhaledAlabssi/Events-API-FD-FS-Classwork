import React, { useState } from "react";

export default function AuthForm({ register }) {
  const [isRegiter, setIsRegiter] = useState(false);
  return (
    <div className="h-full  flex justify-center items-center  w-full bg-pink-300">
      <form >
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          {isRegiter && (
            <>
              <label className="label">Name</label>
              <input type="text" className="input" placeholder="Name" />
            </>
          )}
          <legend className="fieldset-legend">
            {isRegiter ? "Register" : "Login"}
          </legend>

          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />

          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />

          <button className="btn btn-neutral mt-4">Login</button>
      <p>
        you can create your account now...
        <button className="badge bg-primary" onClick={() => setIsRegiter(true)}>
          register
        </button>
      </p>
        </fieldset>
      </form>

    </div>
  );
}
