// import { Typography } from '@mui/material';
import routes from '~/config/routes';
import images from '~/assets/image';
import { memo } from 'react';

function Logo() {
    return (
        <a href={routes.home}>
            <img src={images.logo} alt="Logos" />
        </a>
    );
}

export default memo(Logo);
