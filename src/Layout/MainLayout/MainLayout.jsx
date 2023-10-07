import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import { Container } from '@mui/material';
// import Search from '../components/Search';

function MainLayout() {
    return (
        <Container disableGutters maxWidth={false}>
            <Header />
            {/* <Box sx={{ position: 'fixed', left: '0', right: '0', top: '64px', display: { md: 'none' } }} px={3}>
                <Search />
            </Box> */}
            <Outlet />
            <h1>Footer</h1>
        </Container>
    );
}

export default MainLayout;
