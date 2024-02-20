import React from 'react';
import { Box, Typography, Stack, useMediaQuery, Skeleton } from '@mui/material';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import ButtonAddFavorite from '~/components/FavoriteButton';
import uiConfigs from '~/config/ui.config';
import { favoritesValue } from '~/redux/selectors';

function TitleMovieDetail({ loading, dataDetail, genres, mediaType }) {
    const pointDownSm = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const favorites = useSelector(favoritesValue);

    const rating = {
        value: dataDetail?.vote_average?.toFixed(1) || dataDetail?.mediaRate?.toFixed(1),
        date: dataDetail?.release_date || dataDetail?.first_air_date,
        genres: genres?.length !== 0 ? genres.join(', ') : undefined,
        runtime: dataDetail?.runtime ? `${dataDetail.runtime} minutes` : undefined,
    };
// console.log('title', genres, genres?.length, 'isLoading', loading);
    return (
        <Box sx={{ p: 2 }}>
            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} spacing={2}>
                {!loading && Boolean(genres?.length) ? (
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
                                favoriteStore={favorites?.find((e) => e.mediaId === dataDetail.id)?._id}
                                checkedLike={favorites?.some((favorite) => favorite?.mediaId === dataDetail.id)}
                            />
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
            {(loading || !Boolean(genres?.length)) && <Skeleton variant="rounded" height={'24px'} width={'100%'} sx={{ mt: 1 }} />}
            {!loading && Boolean(genres?.length) && (
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
                        {Object.entries(rating).map(([key, value]) => {
                            if (value !== undefined && parseFloat(value) === 0) {
                                return null;
                            }

                            return (
                                value && (
                                    <Typography key={key} variant={pointDownSm ? 'subtitle2' : 'subtitle1'}>
                                        {value}
                                    </Typography>
                                )
                            );
                        })}
                    </Box>
                    <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                        <Box
                            alignItems={'center'}
                            mt={1}
                            overflow={'hidden'}
                            flexWrap={'wrap'}
                            sx={{
                                display: 'flex',
                                'h6:not(:first-of-type)': { '::before': { content: '"•"', mx: 0.5 } },
                            }}
                        >
                            {Object.entries(rating).map(([key, value]) => {
                                if (key === 'genres' && pointDownSm) {
                                    return null; // Ẩn genres khi ở chế độ mobile
                                }
                                if (value !== undefined && parseFloat(value) === 0) {
                                    return null;
                                }
                                return (
                                    value && (
                                        <Typography key={key} variant={pointDownSm ? 'subtitle2' : 'subtitle1'}>
                                            {value}
                                        </Typography>
                                    )
                                );
                            })}
                        </Box>
                        {genres?.length !== 0 && <Typography variant="subtitle2">{genres?.join(', ')}</Typography>}
                    </Box>
                </>
            )}
        </Box>
    );
}

export default memo(TitleMovieDetail);