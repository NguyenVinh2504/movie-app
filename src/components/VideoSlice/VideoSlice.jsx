import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

import { Box, IconButton, useMediaQuery } from '@mui/material';

import { Link } from 'react-router-dom';

import { video } from './video';
import { PlayIcon, ArrowLeftIcon, ArrowRightIcon } from '../Icon';
import SwiperButton from '~/components/HeroSlice/SwipperButon';

import { useRef, useState } from 'react';

import { LazyLoadImage } from 'react-lazy-load-image-component';

function VideoSlice() {
    const pointDonwSm = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    const SwiperRef = useRef();
    const [stateBtn, setStateBtn] = useState({
        isFirst: true,
        isLast: false,
    });
    const onSlideChange = (swiper) => {
        setStateBtn({
            isFirst: swiper.isBeginning,
            isLast: swiper.isEnd,
        });
    };
    return (
        <Swiper
            slidesPerView={pointDonwSm ? 1 : 3}
            // style={{ height: 'max-content' }}
            spaceBetween={5}
            modules={[Navigation, Autoplay]}
            navigation={true}
            ref={SwiperRef}
            onSlideChange={onSlideChange}
        >
            {video.map((item, index) => (
                <SwiperSlide key={index}>
                    <Link to={`https://www.youtube.com/watch?v=${item.key}`} target="_blank">
                        {/* <Box
                            sx={{
                                pt: '52.25%',
                                backgroundImage: `url(https://img.youtube.com/vi/${item.key}/hqdefault.jpg)`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                borderRadius: '8px',
                            }}
                        /> */}
                        <Box sx={{ width: '100%', aspectRatio: '16/9', img: { objectFit: 'cover' } }}>
                            <LazyLoadImage
                                src={`https://img.youtube.com/vi/${item.key}/hqdefault.jpg`}
                                width={'100%'}
                                height={'100%'}
                                alt="vinh"
                                effect="blur"
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
            <SwiperButton
                onClick={() => SwiperRef.current.swiper.slidePrev()}
                sx={{ left: '5px', svg: { opacity: stateBtn.isFirst ? '0.5' : '1' } }}
            >
                <ArrowLeftIcon />
            </SwiperButton>
            <SwiperButton
                onClick={() => SwiperRef.current.swiper.slideNext()}
                sx={{ right: '5px', svg: { opacity: stateBtn.isLast ? '0.5' : '1' } }}
            >
                <ArrowRightIcon />
            </SwiperButton>
        </Swiper>
    );
}

export default VideoSlice;
