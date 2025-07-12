import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

export default function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/api/events/${id}`)
      .then((e) => setEvent(e.data))
      .catch((e) => console.log("Event Not Found!"));
  }, [id]);

  return (
    <div className="flex justify-center p-8">
      <div className="card w-full max-w-2xl bg-base-100 shadow-sm">
        <div className="card-body">
          <span className="badge badge-xs badge-success">new</span>
          <div className="flex justify-between">
            <h2 className="text-3xl font-bold">{event.title}</h2>
            <span className="text-xl">{new Date(event.date).toLocaleDateString()}</span>
          </div>
          <p>{event.description}</p>
          <ul className="mt-6 flex flex-col gap-2 text-xs">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>High-resolution image generation</span>
            </li>
            {/* <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Customizable style templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Batch processing capabilities</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>AI-driven image enhancements</span>
      </li>
      <li className="opacity-50">
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className="line-through">Seamless cloud integration</span>
      </li>
      <li className="opacity-50">
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className="line-through">Real-time collaboration tools</span>
      </li> */}
          </ul>
          <div className="mt-6">
            <Link to="/">
              <button className="btn btn-primary btn-block">Back</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
