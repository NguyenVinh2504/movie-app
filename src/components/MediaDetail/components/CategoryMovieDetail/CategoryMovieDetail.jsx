import { Typography, useMediaQuery } from '@mui/material';

const TitleMovieDetail = ({ valueTitle }) => {
    const pointDownSm = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    return (
        <Typography
            variant={pointDownSm ? 'h6' : 'h5'}
            mb={1}
            fontWeight={'500'}
            component={'h4'}
        >
            {valueTitle}
        </Typography>
    );
};

export default TitleMovieDetail;
