import EventCard from "../components/EventCard";
import { useAppContext } from "../context/appContext";

export default function Home() {
  const { events, getEvents } = useAppContext();

  if (events.length < 1) getEvents();

  return (
    <div className="w-full flex flex-col md:flex-row gap-4 flex-wrap md:justify-center p-8">
      {events?.map((i, k) => (
        <EventCard
          key={k}
          itemId={i.id}
          title={i.title}
          date={i.date}
          location={i.location}
          descriptionSnippet={i.description}
        />
      ))}
    </div>
  );
}
