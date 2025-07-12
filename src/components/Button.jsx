import React from "react";

export default function Button({ btnContent, cln }) {
  return <button className="btn btn-neutral">{btnContent}</button>;
}

export function ButtonPrimary({ btnContent }) {
  return <button className="btn btn-primary">{btnContent}</button>;
}
