import { Box, Typography, Stack, IconButton } from '@mui/material';
import theme from '~/theme';
import { AboutIcon, HeartIcon, PlayIcon } from '../Icon';
import { useState } from 'react';

function MediaItems({ item }) {
    const [liked, setLiked] = useState(false);

    const toggleLikebox = () => {
        setLiked(!liked);
    };
    return (
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
                sx={{
                    // pt: '56.25%',
                    pt: '150%',
                    backgroundImage: `url('https://www.themoviedb.org/t/p/w500${item.poster_path}')`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
            />
            {/* poster */}

            <Box
                padding={'10px 15px 2px 15px'}
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
                            sx={{
                                display: '-webkit-box',
                                overflow: 'hidden',
                                WebkitLineClamp: 1,
                                textOverflow: 'ellipsis',
                                WebkitBoxOrient: 'vertical',
                                whiteSpace: 'normal',
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
                <Stack marginLeft={'-8px'} direction={'row'}>
                    {/* <Button startIcon={<PlayIcon />} variant="contained" disableElevation size="medium">
                            Xem Ngay
                        </Button> */}
                    <IconButton color="neutral">
                        <PlayIcon />
                    </IconButton>
                    <IconButton color="neutral">
                        <AboutIcon />
                    </IconButton>
                </Stack>
                {/* button */}
            </Box>
        </Box>
    );
}

export default MediaItems;
