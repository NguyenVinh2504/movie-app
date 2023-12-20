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
import { loginOut, updateUser } from '~/redux/features/userSlice';
import { accessToken, openSelector } from '~/redux/selectors';
import { removeAccessToken } from '~/redux/features/authSlice';
import { useConfirm } from 'material-ui-confirm';
// import Search from '../components/Search';

function MainLayout() {
    const dispatch = useDispatch();
    const confirm = useConfirm();
    const open = useSelector(openSelector);
    const token = useSelector(accessToken);
    useEffect(() => {
        const authUser = async () => {
            const { response, err } = await userApi.getInfo();
            if (response) dispatch(updateUser(response));
            if (err) {
                confirm({
                    title: 'Vui lòng đăng nhập lại',
                    description: 'Phiên đăng nhập đã hết hạn',
                    hideCancelButton: true,
                }).then(async () => {
                    dispatch(loginOut());
                    dispatch(removeAccessToken());
                });
            }
        };
        if (token) {
            authUser();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
