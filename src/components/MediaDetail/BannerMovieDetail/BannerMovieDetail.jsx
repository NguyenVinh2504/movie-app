import { Box, IconButton, Skeleton } from '@mui/material';
import { PlayIcon } from '~/components/Icon';
import uiConfigs from '~/config/ui.config';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import tmdbConfigs from '~/api/configs/tmdb.configs';
import { memo } from 'react';
import { Link } from 'react-router-dom';
function BannerMovieDetail({ loading, dataDetail, mediaType }) {
    return (
        <Box sx={{ position: 'relative', overflow: 'hidden', aspectRatio: '16/9', pl: 1 }}>
            {loading ? (
                <>
                    <Skeleton variant="rectangular" width={'100%'} height={'100%'} />
                </>
            ) : (
                <>
                    {mediaType === 'movie' && (
                        <Link to={`https://vidsrc.to/embed/movie/${dataDetail.id}`}>
                            <IconButton
                                color="secondNeutral"
                                sx={{
                                    zIndex: '10',
                                    ...uiConfigs.style.centerAlight,
                                    svg: {
                                        width: '40px',
                                        height: '40px',
                                    },
                                }}
                            >
                                <PlayIcon />
                            </IconButton>
                        </Link>
                    )}
                    <LazyLoadImage
                        style={{ objectFit: 'cover' }}
                        src={tmdbConfigs.backdropPath(dataDetail.backdrop_path)}
                        alt={dataDetail.title}
                        effect="blur"
                        wrapperProps={{
                            // If you need to, you can tweak the effect transition using the wrapper style.
                            style: { transitionDelay: '0.5s' },
                        }}
                    />
                    <Box
                        sx={{
                            ...uiConfigs.style.gradientBgImage,
                            bottom: '-2px',
                            height: 'auto',
                            background: 'linear-gradient(180deg, rgba(18,18,18,0), rgb(18,18,18) )',
                        }}
                    />
                </>
            )}
        </Box>
    );
}

export default memo(BannerMovieDetail);