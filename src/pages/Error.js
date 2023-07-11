import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/PageContent";
const ErrorPage = () => {
	const error = useRouteError();
	const status = error.status;

	let title = "An error occured";
	let message = "Something went wrong.";

	if (status === 500) {
		message = JSON.parse(error.data).message;
	}
	if (status === 404) {
		title = "Not found";
		message = "Could not find resource page";
	}
	return (
		<>
			<MainNavigation />
			<PageContent title={title}>
				<p>{message}</p>
			</PageContent >
		</>
	)
}

export default ErrorPage;