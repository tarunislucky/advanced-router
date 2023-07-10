import { Fragment } from "react";
import { Link } from "react-router-dom";
const dummyEvents = [{ id: 1, message: "Event-1" }, { id: 2, message: "Event-2" }];
const EventsPage = () => {
	return (
		<>
			<ul>
				{dummyEvents.map((event, i) => {
					return (
						<li>
							<Link to={`${event.id}`} > {event.message} </Link>
						</li>
					)
				})}
			</ul>
			<h1>EventsPage</h1>
		</>
	)
}

export default EventsPage;