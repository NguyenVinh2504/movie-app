import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import { Container } from '@mui/material';
import Footer from '../components/Footer';
import MediaDetail from '~/components/MediaDetail';
// import GlobalLoading from '~/components/GlobalLoading';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { toggleGlobalLoading } from '~/redux/features/globalLoadingSlice';
import userApi from '~/api/module/user.api';
import { updateUser } from '~/redux/features/userSlice';
import { openSelector, userValue } from '~/redux/selectors';
// import Search from '../components/Search';

function MainLayout() {
    const dispatch = useDispatch();
    const open = useSelector(openSelector);
    const user = useSelector(userValue);
    // useEffect(() => {
    //     const timeout = setTimeout(() => {
    //         dispatch(toggleGlobalLoading(false));
    //     }, 3000);
    //     return () => clearTimeout(timeout);
    // }, [dispatch]);
    useEffect(() => {
        const authUser = async () => {
            const { response } = await userApi.getInfo();
            if (response) dispatch(updateUser(response));
        };
        if (user) {
            authUser();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                {open && <MediaDetail />}
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
