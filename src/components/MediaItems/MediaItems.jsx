import { Box, Typography, Stack, IconButton } from '@mui/material';
import theme from '~/theme';
import { HeartIcon } from '../Icon';
import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
function MediaItems({ item, handleOpen }) {
    const [liked, setLiked] = useState(false);

    const toggleLikebox = () => {
        setLiked(!liked);
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
                <Box
                    onClick={handleOpen}
                    sx={{
                        // pt: '56.25%',
                        // pt: '150%',
                        width: '100%',
                        aspectRatio: '2/3',
                        cursor: 'pointer',
                    }}
                >
                    <LazyLoadImage
                        src={`https://www.themoviedb.org/t/p/w500${item.poster_path}`}
                        alt={item.title}
                        width={'100%'}
                        height={'100%'}
                        effect="opacity"
                    />
                </Box>
                {/* poster */}

                <Box
                    padding={'15px 15px 15px 15px'}
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'space-between'}
                >
                    {/* info */}
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'flex-start'}>
                        {/* text */}
                        <Stack direction={'column'} spacing={0}>
                            {/* title */}
                            <Typography
                                variant="subtitle1"
                                onClick={handleOpen}
                                sx={{
                                    display: '-webkit-box',
                                    overflow: 'hidden',
                                    WebkitLineClamp: 1,
                                    fontWeight: '500',
                                    textOverflow: 'ellipsis',
                                    WebkitBoxOrient: 'vertical',
                                    whiteSpace: 'normal',
                                    cursor: 'pointer',
                                }}
                            >
                                {item.title}
                            </Typography>
                            {/* title */}
                            {/* overview */}
                            <Typography variant="body2" color={theme.mediaItems.textOverview}>
                                {item.vote_average.toFixed(1)} • {item.release_date.split('-')[0]}
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
