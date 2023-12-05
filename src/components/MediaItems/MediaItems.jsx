import { Box, Typography, Stack, IconButton, ButtonBase } from '@mui/material';
import theme from '~/theme';
import { HeartIcon } from '../Icon';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getIdDetail, toggleDetail } from '~/redux/features/mediaDetailSlice';
import uiConfigs from '~/config/ui.config';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import tmdbConfigs from '~/api/configs/tmdb.configs';
function MediaItems({ item, mediaType }) {
    const [liked, setLiked] = useState(false);
    const toggleLikebox = () => {
        setLiked(!liked);
    };
    const dispatch = useDispatch();
    const handleOpen = () => {
        dispatch(toggleDetail(true));
        dispatch(
            getIdDetail({
                mediaType: mediaType ? mediaType : item.media_type,
                id: item.id,
            }),
        );
    };
    return (
        <>
            <Box
                sx={{
                    backgroundColor: theme.mediaItems.background,
                    color: 'white',
                    borderRadius: theme.mediaItems.borderRadius,
                    overflow: 'hidden',
                }}
            >
                {/* poster */}
                <Box sx={{ aspectRatio: '2/3' }}>
                    <ButtonBase onClick={handleOpen}>
                        <LazyLoadImage
                            // aspectRatio={'2/3'}
                            style={{ aspectRatio: '2/3', objectFit: 'cover' }}
                            src={tmdbConfigs.posterPath(item.poster_path)}
                            alt={item.title}
                            effect="blur"
                            wrapperProps={{
                                // If you need to, you can tweak the effect transition using the wrapper style.
                                style: { transitionDelay: '0.5s' },
                            }}
                        />
                    </ButtonBase>
                </Box>
                {/* poster */}

                <Box padding={'15px'} display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
                    {/* info */}
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'flex-start'}>
                        {/* text */}
                        <Stack direction={'column'} spacing={0}>
                            {/* title */}
                            <Typography
                                variant="subtitle1"
                                onClick={handleOpen}
                                sx={{
                                    fontWeight: '500',
                                    cursor: 'pointer',
                                    ...uiConfigs.style.typoLines(1),
                                }}
                            >
                                {item?.title ?? item?.name ?? item?.mediaTitle}
                            </Typography>
                            {/* title */}
                            {/* overview */}
                            <Typography
                                variant="body2"
                                color={theme.mediaItems.textOverview}
                                sx={{ ...uiConfigs.style.typoLines(1) }}
                            >
                                {item?.vote_average?.toFixed(1)} •{' '}
                                {item?.release_date?.split('-')[0] ?? item?.first_air_date?.split('-')[0]}
                            </Typography>
                            {/* overview */}
                        </Stack>
                        {/* text */}
                        {/* yeu thich */}
                        <IconButton
                            color="neutral"
                            onClick={toggleLikebox}
                            sx={{ svg: { fill: liked ? theme.mediaItems.iconHeart : 'transparent' } }}
                        >
                            <HeartIcon stroke={liked ? theme.mediaItems.iconHeart : '#fff'} />
                        </IconButton>
                        {/* yeu thich */}
                    </Stack>
                    {/* info */}

                    {/* button */}
                    {/* <Button variant="contained" disableElevation size="medium" sx={{ mt: '20px' }}>
                        Xem Ngay
                    </Button> */}
                    {/* <Stack marginLeft={'-8px'} direction={'row'}>
                        <IconButton color="neutral">
                            <PlayIcon />
                        </IconButton>
                        <IconButton color="neutral">
                            <AboutIcon />
                        </IconButton>
                    </Stack> */}
                    {/* button */}
                </Box>
            </Box>
        </>
    );
}

export default MediaItems;
