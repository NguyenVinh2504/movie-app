import { memo } from 'react';
import { Box, Typography, useMediaQuery, Skeleton } from '@mui/material';
function OverviewMovieDetail({ loading, dataDetail }) {
    const pointDownSm = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    return (
        <Box sx={{ marginTop: 3 }}>
            <Typography variant={'h5'} mb={1} fontWeight={'500'}>
                Mô tả
            </Typography>
            {loading ? (
                <Skeleton variant="rounded" height={'150px'} width={'100%'} />
            ) : (
                <Typography variant={pointDownSm ? 'body2' : 'body1'}>{dataDetail.overview}</Typography>
            )}
        </Box>
    );
}

export default memo(OverviewMovieDetail);
