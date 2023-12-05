// import { Typography } from '@mui/material';
import routes from '~/config/routes';
import images from '~/assets/image';
import { memo } from 'react';

function Logo() {
    return (
        <a href={routes.home}>
            {/* <Typography
                    variant="h5"
                    sx={{
                        color: 'primary.main',
                        fontWeight: '500',
                    }}
                >
                    MOVI
                    <Typography
                        variant="span"
                        sx={{
                            color: 'white',
                        }}
                    >
                        .COM
                    </Typography>
                </Typography> */}
            <img src={images.logo} alt="Logos" />
        </a>
    );
}

export default memo(Logo);
