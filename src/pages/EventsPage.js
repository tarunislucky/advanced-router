import { useLoaderData } from "react-router-dom";
import EventsList from '../components/EventsList';

function EventsPage() {
	const data = useLoaderData();
	const events = data.events;
	return <EventsList events={events} />
}

export const eventsLoader = async () => {
	const response = await fetch('http://localhost:8080/events');

	if (!response.ok) {
		throw new Error({ message: "could not fetch events" });
	} else {
		//  we can directly return response here, because react has build in support to recognoze response objets and extract data from it
		return response;
	}
}

export default EventsPage;