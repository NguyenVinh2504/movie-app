// import { useRouteError } from 'react-router-dom';

import { NavLink } from 'react-router-dom';

export default function ErrorPage() {
    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <NavLink to={'/'}>Go home</NavLink>
        </div>
    );
}
