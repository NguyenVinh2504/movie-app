import React, { memo } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import uiConfigs from '~/config/ui.config';
import tmdbConfigs from '~/api/configs/tmdb.configs';
import images from '~/assets/image';
import Image from '../Image';
import FavoriteButton from '../FavoriteButton';
import theme from '~/theme';
import { StarIcon } from '../Icon/Icon';
import { useSearchParams } from 'react-router-dom';
import { useQueryConfig } from '~/Hooks';

function MediaItems({ item, mediaType, isFavorite }) {
    const queryConfig = useQueryConfig();
    const { id } = queryConfig;
    const [, setSearchParams] = useSearchParams();

    const handleOpen = ({ id, mediaType }) => {
        setSearchParams({
            ...queryConfig,
            category: 'detail',
            media_type: mediaType,
            id: id,
        });
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
            onClick={() => {
                if (id === (item.id || item.mediaId)) return;
                handleOpen({
                    id: item.id || item.mediaId,
                    mediaType:
                        mediaType === 'all' ? item.media_type : mediaType,
                });
            }}
            // to={
            //     mediaType === 'all'
            //         ? `modal/${item.media_type}/${item.id ?? item.mediaId}`
            //         : `modal/${mediaType}/${item.id ?? item.mediaId}`
            // }
        >
            <Box
                className="media-item-poster"
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    transition: 'scale 0.5s ease',
                    width: '100%',
                    height: '100%',
                }}
            >
                <Image
                    src={
                        item.poster_path || item.profile_path
                            ? tmdbConfigs.posterPath(
                                  item.poster_path || item.profile_path,
                              )
                            : images.noImage19x6
                    }
                    alt={item.title}
                />
            </Box>
        </Box>
    );

    const renderInfo = () => (
        <Stack
            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'flex-start'}
        >
            <Stack direction={'column'} spacing={0} minWidth={0}>
                <Typography
                    variant="subtitle1"
                    component={'h2'}
                    // onClick={handleOpen}
                    onClick={() => {
                        if (id === (item.id || item.mediaId)) return;
                        handleOpen({
                            id: item.id || item.mediaId,
                            mediaType:
                                mediaType === 'all'
                                    ? item.media_type
                                    : mediaType,
                        });
                    }}
                    title={
                        item?.title || item?.name || item?.mediaTitle || 'N/A'
                    }
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
                        alignItems: 'center',
                        'p:not(:first-of-type)': {
                            '::before': {
                                content: '"•"',
                                mx: 0.5,
                            },
                        },
                    }}
                >
                    <Box mr={0.5}>
                        <StarIcon height={20} width={20} />
                    </Box>
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
                            {item?.release_date?.split('-')[0] ||
                                item?.first_air_date?.split('-')[0]}
                        </Typography>
                    ) : undefined}
                </Box>
            </Stack>
            <FavoriteButton
                item={item}
                mediaType={mediaType}
                isFavorite={isFavorite}
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
                '&:hover .media-item-poster': {
                    scale: '1.1',
                },
                '@media (hover: none)': {
                    '&:hover .media-item-poster': {
                        scale: '1',
                    },
                },
            }}
            component={'article'}
        >
            {renderPoster()}
            <Box
                padding={'15px'}
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'space-between'}
            >
                {renderInfo()}
            </Box>
        </Box>
    );
}

export default memo(MediaItems);
