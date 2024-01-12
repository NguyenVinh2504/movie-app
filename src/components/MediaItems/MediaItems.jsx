import React, { memo } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { useDispatch } from 'react-redux';
import { getIdDetail, toggleDetail } from '~/redux/features/mediaDetailSlice';
import uiConfigs from '~/config/ui.config';
import tmdbConfigs from '~/api/configs/tmdb.configs';
import images from '~/assets/image';
import Image from '../Image';
import ButtonAddFavorite from '../FavoriteButton';
import theme from '~/theme';

function MediaItems({ item, mediaType, checkedLike, favoriteStore }) {
    const dispatch = useDispatch();

    const handleOpen = () => {
        if (item.media_type !== 'person') {
            dispatch(toggleDetail(true));
            dispatch(
                getIdDetail({
                    mediaType: mediaType || item.media_type,
                    id: item.id ?? item.mediaId,
                }),
            );
        }
    };

    const renderPoster = () => (
        <Box
            sx={{
                width: '100%',
                position: 'relative',
                paddingTop: '150%',
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
            }}
            component={'button'}
            onClick={handleOpen}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    transition: 'all 0.5s ease ',
                    width: '100%',
                    height: '100%',
                    ':hover': {
                        height: '105%',
                    },
                    '@media (hover: none)': {
                        '&:hover': {
                            height: '100%',
                        },
                    },
                }}
            >
                <Image
                    src={
                        item.poster_path || item.profile_path
                            ? tmdbConfigs.posterPath(item.poster_path || item.profile_path)
                            : images.noImage19x6
                    }
                    alt={item.title}
                />
            </Box>
        </Box>
    );

    const renderInfo = () => (
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'flex-start'}>
            <Stack direction={'column'} spacing={0}>
                <Typography
                    variant="subtitle1"
                    onClick={handleOpen}
                    sx={{
                        fontWeight: '500',
                        cursor: 'pointer',
                        ...uiConfigs.style.typoLines(1),
                    }}
                >
                    {item?.title || item?.name || item?.mediaTitle || 'N/A'}
                </Typography>
                <Box
                    alignItems={'center'}
                    overflow={'hidden'}
                    sx={{
                        display: 'flex',
                        'p:not(:first-of-type)': {
                            '::before': {
                                content: '"•"',
                                mx: 0.5,
                            },
                        },
                    }}
                >
                    {item.vote_average ? (
                        <Typography
                            variant="body2"
                            color={theme.mediaItems.textOverview}
                            sx={{ ...uiConfigs.style.typoLines(1) }}
                        >
                            {item?.vote_average?.toFixed(1)}
                        </Typography>
                    ) : undefined}
                    {item.release_date || item.first_air_date ? (
                        <Typography
                            variant="body2"
                            color={theme.mediaItems.textOverview}
                            sx={{ ...uiConfigs.style.typoLines(1) }}
                        >
                            {item?.release_date?.split('-')[0] || item?.first_air_date?.split('-')[0]}
                        </Typography>
                    ) : undefined}
                </Box>
            </Stack>
            <ButtonAddFavorite
                item={item}
                mediaType={mediaType}
                checkedLike={checkedLike}
                favoriteStore={favoriteStore}
            />
        </Stack>
    );

    return (
        <Box
            sx={{
                backgroundColor: theme.mediaItems.background,
                color: 'white',
                borderRadius: theme.mediaItems.borderRadius,
                overflow: 'hidden',
            }}
        >
            {renderPoster()}
            <Box padding={'15px'} display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
                {renderInfo()}
            </Box>
        </Box>
    );
}

export default memo(MediaItems);
