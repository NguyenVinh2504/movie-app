import 'react-loading-skeleton/dist/skeleton.css';
import { Box, Grid, Skeleton, Stack } from '@mui/material';
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
                    <Box sx={{ pt: '150%', position: 'relative' }}>
                        <Skeleton variant="rectangular" style={{ height: '100%', position: 'absolute', top: 0, left: 0, width: '100%' }} />
                    </Box>
                    <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} p={'15px'}>
                        <Box flex={1} mr={1}>
                            <Skeleton variant="rounded" width={'100%'} height={'20px'} sx={{ mb: 0.5 }} />
                            <Skeleton variant="rounded" width={'50%'} height={'18px'} />
                        </Box>
                        <Skeleton variant="circular" width={'40px'} height={'40px'} />
                    </Stack>
                </Box>
            </Grid>
        ));
}

export default memo(MediaItemSekeleton);
