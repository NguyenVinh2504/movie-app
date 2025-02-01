import { Box, IconButton, Skeleton } from '@mui/material';
import { PlayIcon } from '~/components/Icon';
import uiConfigs from '~/config/ui.config';
import tmdbConfigs from '~/api/configs/tmdb.configs';
import { memo } from 'react';
import Image from '~/components/Image';
import { useGoWatchMovie } from '~/Hooks';

function BannerMovieDetail({ loading, dataDetail, mediaType }) {
    const { handleOpen } = useGoWatchMovie();

    return (
        <Box
            sx={{
                position: 'relative',
                overflow: 'hidden',
                pt: 'calc(9/16*100%)',
                pl: 0,
            }}
        >
            {loading ? (
                <>
                    <Skeleton
                        variant="rectangular"
                        width={'100%'}
                        height={'100%'}
                    />
                </>
            ) : (
                <>
                    {mediaType === 'movie' && (
                        <IconButton
                            // component={NavLink}
                            onClick={() =>
                                handleOpen({ id: dataDetail.id, mediaType })
                            }
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
                    )}
                    <Box sx={{ ...uiConfigs.style.positionFullSize }}>
                        <Image
                            src={tmdbConfigs.backdropPath(
                                dataDetail.backdrop_path,
                            )}
                            alt={dataDetail.title}
                        />
                    </Box>
                    <Box
                        sx={{
                            ...uiConfigs.style.gradientBgImage,
                            bottom: '-2px',
                            height: 'auto',
                            background:
                                'linear-gradient(180deg, rgba(18,18,18,0), rgb(18,18,18) )',
                        }}
                    />
                </>
            )}
        </Box>
    );
}

export default memo(BannerMovieDetail);
