import { NavLink, Outlet } from 'react-router-dom';
import { Container, Stack } from '@mui/material';

function Profile() {
    return (
        <>
            <h1>Profile</h1>
            <Container disableGutters maxWidth={false}>
                <Stack direction={'row'} spacing={2}>
                    <NavLink to={'/profile'}>Thông tin | </NavLink>
                    <NavLink to={'/profile/favorite'}> favorite</NavLink>
                    {/* <NavLink to={'/profile/favorite'}>FavoriteMovieList </NavLink> */}
                    <NavLink to={'/profile/favorite/tv'}>FavoriteTvList</NavLink>
                </Stack>
                <Outlet />
            </Container>
        </>
    );
}

export default Profile;
