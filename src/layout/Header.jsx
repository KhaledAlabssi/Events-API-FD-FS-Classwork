import React from "react";
import { Link } from "react-router";
import Button, { ButtonPrimary } from "../components/Button";


export default function Header() {
  return (
    <div className="navbar bg-base-100 shadow-sm ">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" to={"/"}>
            Event App
        </Link>
        <Button btnContent={"hi normal"} />
        <ButtonPrimary btnContent={"himal"} />


      </div>
      <div className="flex-none">
        <ul className="flex  gap-2 px-1">
          <li>
            <Link className="btn btn-primary" to={"/login"}>Login</Link>
          </li>
            <Link className="btn btn-primary" to={"/sign-up"}>sign-up</Link>
            <Link className="btn btn-primary" to={"/create-event"}>create-event</Link>
            
          
        </ul>
      </div>
    </div>
  );
}
