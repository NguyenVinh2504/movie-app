import { Box, IconButton, Skeleton } from '@mui/material';
import { PlayIcon } from '~/components/Icon';
import uiConfigs from '~/config/ui.config';
import tmdbConfigs from '~/api/configs/tmdb.configs';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
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
                    <Image src={tmdbConfigs.backdropPath(dataDetail.backdrop_path)} alt={dataDetail.title} />
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
