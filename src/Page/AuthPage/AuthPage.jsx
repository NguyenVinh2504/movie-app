// import { Box } from '@mui/material';
// import { useRef } from 'react';
// import { useLocation } from 'react-router-dom';
// import { CSSTransition} from 'react-transition-group';
// import config from '~/config';
import { useLocation } from 'react-router-dom';
import Auth from '~/components/Auth';
import SingIn from '~/components/SingIn';
import SingUp from '~/components/SingUp';
import config from '~/config';

function AuthPage() {
    let { pathname } = useLocation();
    return (
        // <Box
        //     sx={{
        //         '.alert-enter': {
        //             opacity: 0,
        //             transform: 'scale(0.9)',
        //         },
        //         '.alert-enter-active': {
        //             opacity: 1,
        //             transform: 'translateX(0)',
        //             transition: 'opacity 300ms, transform 300ms',
        //         },
        //         '.alert-exit': { opacity: 1 },
        //         '.alert-exit-active': {
        //             opacity: 0,
        //             transform: 'scale(0.9)',
        //             transition: 'opacity 300ms, transform 300ms',
        //         },
        //     }}
        // >
        <>
            {pathname === `${config.routes.login}` && (
                <Auth titleAuth={'Đăng nhập vào tài khoản của bạn'}>{<SingIn />}</Auth>
            )}
            {pathname === `${config.routes.signup}` && (
                <Auth titleAuth={'Chào mừng bạn đến với Viejoy'}>{<SingUp />}</Auth>
            )}
        </>
        // </Box>
    );
}

export default AuthPage;
