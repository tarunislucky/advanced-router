import { Fragment } from "react";
import { Outlet } from "react-router-dom";

const EventsRootLayout = () => {

	return (
		<>
			<main>
				<Outlet />
			</main>
		</>
	)
}

export default EventsRootLayout;