import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

import { Box, IconButton } from '@mui/material';

import { Link } from 'react-router-dom';

import { video } from './video';
import { PlayIcon } from '../Icon';
import SwiperNavigation from '../SwiperNavigation';
import Image from '../Image';
import images from '~/assets/image';

function VideoSlice() {
    return (
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
                {video.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Link to={`https://www.youtube.com/watch?v=${item.key}`} target="_blank">
                            <Box
                                sx={{
                                    width: '100%',
                                    aspectRatio: '16/9',
                                }}
                            >
                                <Image
                                    src={`https://img.youtube.com/vi/${item.key}/hqdefault.jpg`}
                                    width={'100%'}
                                    height={'100%'}
                                    alt={item.name}
                                    fallBack={images.noImage19x6}
                                    loading="lazy"
                                />
                            </Box>
                            <IconButton
                                color="secondNeutral"
                                sx={{
                                    position: 'absolute',
                                    zIndex: '10',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
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
    );
}

export default VideoSlice;
