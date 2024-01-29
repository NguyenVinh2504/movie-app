import { Box, IconButton, Skeleton } from '@mui/material';
import { PlayIcon } from '~/components/Icon';
import uiConfigs from '~/config/ui.config';
import tmdbConfigs from '~/api/configs/tmdb.configs';
import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import Image from '~/components/Image';
import config from '~/config';
import { useDispatch } from 'react-redux';
import { toggleDetail } from '~/redux/features/mediaDetailSlice';
function BannerMovieDetail({ loading, dataDetail, mediaType }) {
    const dispatch = useDispatch();
    return (
        <Box sx={{ position: 'relative', overflow: 'hidden', pt: 'calc(9/16*100%)', pl: 0 }}>
            {loading ? (
                <>
                    <Skeleton variant="rectangular" width={'100%'} height={'100%'} />
                </>
            ) : (
                <>
                    {mediaType === 'movie' && (
                        <NavLink
                            to={`${config.routes.watchMovie}/${dataDetail?.id}`}
                            onClick={() => dispatch(toggleDetail(false))}
                        >
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
                        </NavLink>
                    )}
                    <Box sx={{ ...uiConfigs.style.positionFullSize }}>
                        <Image src={tmdbConfigs.backdropPath(dataDetail.backdrop_path)} alt={dataDetail.title} />
                    </Box>
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
