import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

import { IconButton } from '@mui/material';

import { Link } from 'react-router-dom';

import { video } from './video';
import { PlayIcon } from '../Icon';
import SwiperNavigation from '../SwiperNavigation';
import Image from '../Image';
import images from '~/assets/image';
import uiConfigs from '~/config/ui.config';
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
                            <Image
                                src={`https://img.youtube.com/vi/${item.key}/hqdefault.jpg`}
                                alt={item.name}
                                fallBack={images.noImage19x6}
                                aspectRatio={'16/9'}
                            />
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
    );
}

export default VideoSlice;
