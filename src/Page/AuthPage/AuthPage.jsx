// import { Box } from '@mui/material';
// import { useRef } from 'react';
// import { useLocation } from 'react-router-dom';
// import { CSSTransition} from 'react-transition-group';
// import config from '~/config';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import SingIn from '~/components/SingIn';
import SingUp from '~/components/SingUp';
import config from '~/config';

function AuthPage() {
    const [isLoading, setIsLoading] = useState(false);
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
            {pathname === `${config.routes.login}` && <SingIn setIsLoading={setIsLoading} isLoading={isLoading} />}
            {pathname === `${config.routes.signup}` && <SingUp setIsLoading={setIsLoading} isLoading={isLoading} />}
        </>
        // </Box>
    );
}

export default AuthPage;
