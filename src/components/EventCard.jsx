import React from "react";
import { Link } from "react-router";

export default function EventCard({
  title,
  date,
  location,
  descriptionSnippet,
  itemId
}) {
  return (
    <div className="card bg-base-100 w-96 shadow-sm border-transparent hover:bg-base-200/60 hover:border-primary border-2">
     
      <div className="card-body">
        <h2 className="card-title flex justify-between">
          {title}
          <div className="badge badge-outline badge-secondary">{new Date(date).toLocaleString()}</div>
        </h2>
        <p>{descriptionSnippet}</p>
        <div className="card-actions justify-end">
          <Link to={`/events/${itemId}`}><button className="badge badge-primary scale-90 hover:scale-100 cursor-pointer">Read more</button></Link>
        </div>
      </div>
    </div>
  );
}
