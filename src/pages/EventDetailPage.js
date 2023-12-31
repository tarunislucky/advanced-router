import { Fragment } from "react";
import { json, redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";
const EventDetailPage = () => {
	const data = useRouteLoaderData("event-details");
	const event = data.event;
	return (
		<>
			<EventItem event={event} />
		</>
	)
}
export default EventDetailPage;

export const loader = async ({ request, params }) => {
	const id = params.id;
	const response = await fetch(`http://localhost:8080/events/${id}`);
	if (!response.ok) {
		throw json({ message: "Could not fecth details for selected event" }, {
			status: 500
		});
	}
	return response;
}
export async function action({ params, request }) {
	const id = params.id;
	const response = await fetch('http://localhost:8080/events/' + id, {
		method: request.method,
	});

	if (!response.ok) {
		throw json(
			{ message: 'Could not delete event.' },
			{
				status: 500,
			}
		);
	}
	return redirect('/events');
}