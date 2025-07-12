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
    <div className="card bg-base-100 w-96 shadow-sm">
     
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">{date}</div>
        </h2>
        <p>{descriptionSnippet}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
          <Link to={`/events/${itemId}`}><button className="btn">Read more</button></Link>
        </div>
      </div>
    </div>
  );
}
