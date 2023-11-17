import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import { Container } from '@mui/material';
import Footer from '../components/Footer';
import MediaDetail from '~/components/MediaDetail';
import GlobalLoading from '~/components/GlobalLoading';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toggleGlobalLoading } from '~/redux/features/globalLoadingSlice';
// import Search from '../components/Search';

function MainLayout() {
    const dispatch = useDispatch();
    dispatch(toggleGlobalLoading(true));
    useEffect(() => {
        const timeout = setTimeout(() => {
            dispatch(toggleGlobalLoading(false));
        }, 3000);
        return () => clearTimeout(timeout);
    }, [dispatch]);
    return (
        <>
            {/* <GlobalLoading /> */}
            <Container
                disableGutters
                maxWidth="auto"
                sx={{
                    maxWidth: { xl: '1904px' },
                }}
            >
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
            </Container>
        </>
    );
}

export default MainLayout;
