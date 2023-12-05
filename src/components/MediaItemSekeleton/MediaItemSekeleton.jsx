// import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Box, Typography, Grid, Skeleton } from '@mui/material';
import theme from '~/theme';
import { memo } from 'react';

function MediaItemSekeleton({ cardNumber }) {
    return Array(cardNumber)
        .fill(0)
        .map((item, index) => (
            <Grid item xl={2.4} lg={3} md={4} sm={6} xs={6} key={index}>
                <Box
                    sx={{
                        backgroundColor: theme.mediaItems.background,
                        color: 'white',
                        borderRadius: theme.mediaItems.borderRadius,
                        overflow: 'hidden',
                    }}
                >
                    <Box sx={{ aspectRatio: '2/3' }}>
                        <Skeleton variant="rectangular" style={{ height: '100%' }} />
                    </Box>
                    <Box sx={{ p: '15px' }}>
                        <Typography variant="subtitle1">
                            <Skeleton variant="rounded" />
                        </Typography>
                        <Typography variant="body2" mt={1}>
                            <Skeleton variant="rounded" width={'40%'} />
                        </Typography>
                    </Box>
                </Box>
            </Grid>
        ));
}

export default memo(MediaItemSekeleton);
