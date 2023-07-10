import { Fragment } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";
import MainNavigation from "../components/MainNavigation";

const RootLayout = () => {
	const navigation = useNavigation();

	return (
		<>
			<MainNavigation />
			<main>
				{navigation.state === "loading" && <p>Loading...</p>}
				<EventsNavigation />
				<Outlet />
			</main>
		</>
	)
}

export default RootLayout;