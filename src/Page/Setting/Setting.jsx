import { NavLink, Outlet } from 'react-router-dom';
import { Container, Stack } from '@mui/material';

function Settings() {
    return (
        <>
            <h1>Profile</h1>
            <Container disableGutters maxWidth={false}>
                <Stack direction={'row'} spacing={2}>
                    <NavLink to={'/settings/profile'}>Edit</NavLink>
                    <NavLink to={'/settings/delete-account'}>Delete</NavLink>
                </Stack>
                <Outlet />
            </Container>
        </>
    );
}

export default Settings;
