import React from "react";
import { Link } from "react-router";
import { useAppContext } from "../context/appContext";

export default function Header() {
  const {isAuth,signout} = useAppContext()
  return (
    <div className="navbar bg-base-100 shadow-sm ">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" to={"/"}>
          Event App
        </Link>
       
      </div>
      <div className="flex-none">
        <ul className="flex  gap-2 px-1">
          <li>
            {isAuth ?  
            <button onClick={signout} className="btn btn-primary">Sign Out</button>
            :
            <Link className="btn btn-primary" to={"/login"}>
              Login
            </Link>
            }
          </li>
         
          <Link className="btn btn-primary" to={"/create-event"}>
            create-event
          </Link>
          {isAuth && <div className="avatar">
  <div className="w-10 rounded">
    <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
  </div>
</div>}
          
        </ul>
      </div>
    </div>
  );
}
