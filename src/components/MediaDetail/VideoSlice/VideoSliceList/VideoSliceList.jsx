import { Link } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';
import tmdbConfigs from '~/api/configs/tmdb.configs';
import images from '~/assets/image';
import { Box, IconButton } from '@mui/material';
import uiConfigs from '~/config/ui.config';
import { PlayIcon } from '~/components/Icon';
import SwiperNavigation from '~/components/SwiperNavigation';
import { Swiper } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { memo } from 'react';
import Image from '~/components/Image';

function VideoSliceList({ videos }) {
    return (
        <>
            <SwiperNavigation>
                <Swiper
                    spaceBetween={5}
                    breakpoints={{
                        600: {
                            slidesPerView: 3,
                        },
                    }}
                    modules={[Navigation, Autoplay]}
                    navigation={true}
                >
                    {videos?.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Link to={tmdbConfigs.youtubePath(item.key)} target="_blank">
                                <Box sx={{ pt: 'calc(9/16*100%)', position: 'relative' }}>
                                    <Box sx={{ ...uiConfigs.style.positionFullSize, borderRadius: 1, overflow: 'hidden' }}>
                                        <Image
                                            src={item.key ? tmdbConfigs.thumbnailYtb(item.key) : images.noImage19x6}
                                            alt={item.name}
                                        />
                                    </Box>
                                </Box>
                                <IconButton
                                    color="secondNeutral"
                                    sx={{
                                        zIndex: '10',
                                        ...uiConfigs.style.centerAlight,
                                        svg: {
                                            width: '30px',
                                            height: '30px',
                                        },
                                    }}
                                >
                                    <PlayIcon />
                                </IconButton>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </SwiperNavigation>
        </>
    );
}

export default memo(VideoSliceList);
