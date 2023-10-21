import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import { Container } from '@mui/material';
import Footer from '../components/Footer';
import MediaDetail from '~/components/MediaDetail';
// import Search from '../components/Search';

function MainLayout() {
    return (
        <>
            <MediaDetail />
            <Header />
            {/* <Box sx={{ position: 'fixed', left: '0', right: '0', top: '64px', display: { md: 'none' } }} px={3}>
                    <Search />
                </Box> */}
            <Container
                component={'main'}
                maxWidth="auto"
                sx={{
                    marginY: '20px',
                    minHeight: '100vh',
                }}
            >
                <Outlet />
            </Container>
            <Footer />
        </>
    );
}

export default MainLayout;
