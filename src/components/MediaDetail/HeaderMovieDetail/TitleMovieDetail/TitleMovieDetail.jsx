import React from 'react';
import { Box, Typography, Stack, useMediaQuery, Skeleton } from '@mui/material';
import { memo } from 'react';
import ButtonAddFavorite from '~/components/FavoriteButton';
import uiConfigs from '~/config/ui.config';
import { useSelector } from 'react-redux';
import { favoritesValue } from '~/redux/selectors';
import { formatDate } from '~/utils/formatDate';

function TitleMovieDetail({ loading, dataDetail, genres, mediaType }) {
    const pointDownSm = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const favorites = useSelector(favoritesValue);

    const rating = {
        rate:
            Number(dataDetail?.vote_average?.toFixed(1)) ||
            Number(dataDetail?.mediaRate?.toFixed(1)),
        date: formatDate(
            dataDetail?.release_date || dataDetail?.first_air_date,
        ),
        genres: genres?.join(', '),
        runtime: dataDetail?.runtime ? `${dataDetail.runtime} minutes` : '',
    };
    // console.log(dataDetail?.runtime);
    const isFavorite = favorites.find(
        (element) => element.mediaId === dataDetail.id,
    );
    if (isFavorite) {
        dataDetail.isFavorite = true;
        dataDetail.favoriteId = isFavorite._id;
    } else {
        dataDetail.isFavorite = false;
    }
    return (
        <Box sx={{ p: 2 }}>
            <Stack
                direction={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
                spacing={2}
            >
                {!loading ? (
                    <>
                        <Typography
                            variant={pointDownSm ? 'h4' : 'h2'}
                            fontWeight={'500'}
                            component={'h3'}
                            title={
                                dataDetail?.title ??
                                dataDetail?.name ??
                                'Không có nội dung'
                            }
                            sx={{ ...uiConfigs.style.typoLines(2) }}
                        >
                            {dataDetail?.title ??
                                dataDetail?.name ??
                                'Không có nội dung'}
                        </Typography>
                        <Box>
                            <ButtonAddFavorite
                                item={dataDetail}
                                isFavorite={dataDetail.isFavorite}
                                mediaType={mediaType}
                            />
                        </Box>
                    </>
                ) : (
                    <>
                        <Skeleton
                            variant="rounded"
                            height={'56px'}
                            width={'80%'}
                        />
                        <Box>
                            <Skeleton
                                variant="circular"
                                width={40}
                                height={40}
                            />
                        </Box>
                    </>
                )}
            </Stack>
            {loading && (
                <Skeleton
                    variant="rounded"
                    height={'24px'}
                    width={'100%'}
                    sx={{ mt: 1 }}
                />
            )}
            {!loading && (
                <>
                    {/* Pc */}
                    <Box
                        alignItems={'center'}
                        mt={1}
                        overflow={'hidden'}
                        flexWrap={'wrap'}
                        sx={{
                            display: { xs: 'none', sm: 'flex' },
                            '& p': {
                                '::before': {
                                    content: '"•"',
                                    mx: 0.5,
                                },
                            },
                            '& p:first-of-type': {
                                '::before': {
                                    content: '""',
                                    mx: 0,
                                },
                            },
                            p: {
                                ...uiConfigs.style.typoLines(1),
                            },
                        }}
                    >
                        {Object.entries(rating).map(([key, value]) => {
                            if (!value) {
                                return null;
                            }
                            return (
                                value && (
                                    <Typography
                                        key={key}
                                        variant={
                                            pointDownSm
                                                ? 'subtitle2'
                                                : 'subtitle1'
                                        }
                                        component={'p'}
                                    >
                                        {value}
                                    </Typography>
                                )
                            );
                        })}
                    </Box>
                    {/* Mobile */}
                    <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                        <Box
                            alignItems={'center'}
                            mt={1}
                            overflow={'hidden'}
                            flexWrap={'wrap'}
                            sx={{
                                display: 'flex',
                                '& p': {
                                    '::before': {
                                        content: '"•"',
                                        mx: 0.5,
                                    },
                                },
                                '& p:first-of-type': {
                                    '::before': {
                                        content: '""',
                                        mx: 0,
                                    },
                                },
                            }}
                        >
                            {Object.entries(rating).map(([key, value]) => {
                                if (key === 'genres' && pointDownSm) {
                                    return null; // Ẩn genres khi ở chế độ mobile
                                }
                                if (!value) {
                                    return null;
                                }
                                return (
                                    value && (
                                        <Typography
                                            key={key}
                                            component={'p'}
                                            variant={
                                                pointDownSm
                                                    ? 'subtitle2'
                                                    : 'subtitle1'
                                            }
                                        >
                                            {value}
                                        </Typography>
                                    )
                                );
                            })}
                        </Box>
                        {genres?.length !== 0 && (
                            <Typography variant="subtitle2">
                                {genres?.join(', ')}
                            </Typography>
                        )}
                    </Box>
                </>
            )}
        </Box>
    );
}

export default memo(TitleMovieDetail);
