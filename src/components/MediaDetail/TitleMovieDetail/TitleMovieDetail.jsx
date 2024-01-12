import { Box, Typography, Stack, useMediaQuery, Skeleton } from '@mui/material';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import ButtonAddFavorite from '~/components/ButtonAddFavorite';
import uiConfigs from '~/config/ui.config';
import { favoritesValue } from '~/redux/selectors';
function TitleMovieDetail({ loading, dataDetail, genres, mediaType }) {
    const pointDownSm = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const favorites = useSelector(favoritesValue);

    return (
        <Box sx={{ p: 2 }}>
            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} spacing={2}>
                {!loading && (
                    <>
                        <Typography
                            variant={pointDownSm ? 'h4' : 'h2'}
                            fontWeight={'500'}
                            sx={{ ...uiConfigs.style.typoLines(2) }}
                        >
                            {dataDetail?.title ?? dataDetail?.name}
                        </Typography>
                        <Box>
                            <ButtonAddFavorite
                                item={dataDetail}
                                mediaType={mediaType}
                                favoriteStore={favorites?.find((e) => e.mediaId === dataDetail.id)}
                                checkedLike={favorites?.some(
                                    (favorite) => favorite?.mediaId === dataDetail.id,
                                )}
                            />
                        </Box>
                    </>
                )}

                {loading && (
                    <>
                        <Skeleton variant="rounded" height={'56px'} width={'80%'} />
                        <Box>
                            <Skeleton variant="circular" width={40} height={40} />
                        </Box>
                    </>
                )}
            </Stack>
            {loading && <Skeleton variant="rounded" height={'24px'} width={'100%'} sx={{ mt: 1 }} />}
            {!loading && (
                <>
                    <Box
                        alignItems={'center'}
                        mt={1}
                        overflow={'hidden'}
                        flexWrap={'wrap'}
                        sx={{
                            display: { xs: 'none', sm: 'flex' },
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
                        {dataDetail?.vote_average || dataDetail?.mediaRate ? (
                            <Typography variant={pointDownSm ? 'subtitle2' : 'subtitle1'}>
                                {dataDetail?.vote_average?.toFixed(1) || dataDetail?.mediaRate?.toFixed(1)}
                            </Typography>
                        ) : undefined}
                        {dataDetail?.release_date || dataDetail?.first_air_date ? (
                            <Typography variant={pointDownSm ? 'subtitle2' : 'subtitle1'}>
                                {dataDetail.release_date || dataDetail.first_air_date}
                            </Typography>
                        ) : undefined}
                        {genres?.length !== 0 && (
                            <Typography variant={pointDownSm ? 'subtitle2' : 'subtitle1'}>
                                {genres.join(', ')}
                            </Typography>
                        )}
                        {dataDetail?.runtime ? (
                            <Typography variant={pointDownSm ? 'subtitle2' : 'subtitle1'}>
                                {`${dataDetail.runtime} minutes`}
                            </Typography>
                        ) : undefined}
                    </Box>
                    <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                        {/* <Typography variant="subtitle2">{`${
                            Number(dataDetail?.vote_average?.toFixed(1) || dataDetail?.mediaRate?.toFixed(1)) || 'N/A'
                        } • ${dataDetail.release_date || dataDetail.first_air_date || 'N/A'} ${
                            dataDetail?.runtime?.toString() ? `• ${dataDetail.runtime} minutes` : ''
                        }
                        `}</Typography> */}
                        {/* <Typography variant="subtitle2">
                            {dataDetail?.vote_average || dataDetail?.mediaRate
                                ? // false
                                  `${dataDetail?.vote_average?.toFixed(1) || dataDetail?.mediaRate?.toFixed(1)}`
                                : undefined}
                            {dataDetail?.release_date || dataDetail?.first_air_date
                                ? ` • ${dataDetail.release_date || dataDetail.first_air_date}`
                                : undefined}
                            {dataDetail?.runtime ? ` • ${dataDetail.runtime} minutes` : undefined}
                        </Typography> */}
                        <Box
                            alignItems={'center'}
                            mt={1}
                            overflow={'hidden'}
                            flexWrap={'wrap'}
                            sx={{
                                display: 'flex',
                                'h6:not(:first-of-type)': {
                                    '::before': {
                                        content: '"•"',
                                        mx: 0.5,
                                    },
                                },
                            }}
                        >
                            {dataDetail?.vote_average || dataDetail?.mediaRate ? (
                                <Typography variant={pointDownSm ? 'subtitle2' : 'subtitle1'}>
                                    {dataDetail?.vote_average?.toFixed(1) || dataDetail?.mediaRate?.toFixed(1)}
                                </Typography>
                            ) : undefined}
                            {dataDetail?.release_date || dataDetail?.first_air_date ? (
                                <Typography variant={pointDownSm ? 'subtitle2' : 'subtitle1'}>
                                    {dataDetail.release_date || dataDetail.first_air_date}
                                </Typography>
                            ) : undefined}
                            {dataDetail?.runtime ? (
                                <Typography variant={pointDownSm ? 'subtitle2' : 'subtitle1'}>
                                    {`${dataDetail.runtime} minutes`}
                                </Typography>
                            ) : undefined}
                        </Box>
                        {genres?.length !== 0 && <Typography variant="subtitle2">{genres?.join(', ')}</Typography>}
                    </Box>
                </>
            )}
        </Box>
    );
}

export default memo(TitleMovieDetail);
