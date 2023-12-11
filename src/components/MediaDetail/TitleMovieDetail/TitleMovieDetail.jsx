import { Box, Typography, Stack, IconButton, useMediaQuery, Skeleton } from '@mui/material';
import { memo } from 'react';
import { HeartIcon } from '~/components/Icon';
import uiConfigs from '~/config/ui.config';
function TitleMovieDetail({ loading, dataDetail, genres }) {
    const pointDownSm = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    return (
        <>
            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} spacing={2}>
                {!loading ? (
                    <>
                        <Typography
                            variant={pointDownSm ? 'h4' : 'h3'}
                            fontWeight={'500'}
                            sx={{ ...uiConfigs.style.typoLines(2) }}
                        >
                            {dataDetail?.title ?? dataDetail?.name}
                        </Typography>

                        <Box>
                            <IconButton color="neutral">
                                <HeartIcon />
                            </IconButton>
                        </Box>
                    </>
                ) : (
                    <>
                        <Skeleton variant="rounded" height={'56px'} width={'80%'} />
                        <Box>
                            <Skeleton variant="circular" width={40} height={40} />
                        </Box>
                    </>
                )}
            </Stack>
            {loading ? (
                <Skeleton variant="rounded" height={'24px'} width={'100%'} sx={{ mt: 1 }} />
            ) : (
                <Box
                    display={'flex'}
                    alignItems={'center'}
                    mt={1}
                    overflow={'hidden'}
                    flexWrap={'wrap'}
                    sx={{
                        'h6:not(:first-of-type)': {
                            '::before': {
                                content: '"•"',
                                mx: 0.5,
                            },
                        },
                        h6: {
                            ...uiConfigs.style.typoLines(1),
                        },
                    }}
                >
                    <Typography variant={pointDownSm ? 'subtitle2' : 'subtitle1'}>
                        {`${dataDetail?.vote_average?.toFixed(1) ?? dataDetail?.mediaRate?.toFixed(1)}`}
                    </Typography>
                    <Typography variant={pointDownSm ? 'subtitle2' : 'subtitle1'}>
                        {dataDetail.release_date ?? dataDetail.first_air_date ?? 'Không có ngày'}
                    </Typography>
                    <Typography variant={pointDownSm ? 'subtitle2' : 'subtitle1'}>{genres.join(', ')}</Typography>
                    {dataDetail?.runtime?.toString() && (
                        <Typography variant={pointDownSm ? 'subtitle2' : 'subtitle1'}>
                            {dataDetail.runtime} minutes
                        </Typography>
                    )}
                </Box>
            )}
        </>
    );
}

export default memo(TitleMovieDetail);