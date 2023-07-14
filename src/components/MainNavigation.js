import { NavLink } from "react-router-dom";
import NewsletterSignup from "./NewsletterSignup";
import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? classes.active : undefined} >Home</NavLink >
          </li>
          <li>
            {/* end prop is important, because by default isActive checks if "/events" is part of the url or not, instead we want it to check if the url ends with "/events" */}
            <NavLink to="/events" className={({ isActive }) => isActive ? classes.active : undefined} end>Events</NavLink >
          </li>
          <li>
            <NavLink
              to="/newsletter"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Newsletter
            </NavLink>
          </li>
        </ul>
      </nav>
      <NewsletterSignup />
    </header>
  );
}

export default MainNavigation;
