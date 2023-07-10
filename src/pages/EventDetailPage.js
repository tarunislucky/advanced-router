import { Fragment } from "react";
import { useParams } from "react-router-dom";
const EventDetailPage = () => {
	const { id } = useParams();
	return (
		<>
			<h1>EventDetailPage</h1>
			<p>EventId  : {id}</p>
		</>
	)
}
export default EventDetailPage;