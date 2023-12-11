import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';

import { Skeleton, Box } from '@mui/material';

import { memo } from 'react';
function VideoSliceSkeleton() {
    return (
        <Swiper
            spaceBetween={5}
            simulateTouch={false}
            shortSwipes={false}
            breakpoints={{
                600: {
                    slidesPerView: 3,
                },
            }}
        >
            {Array(3)
                .fill(0)
                .map((item, index) => (
                    <SwiperSlide key={index}>
                        <Box sx={{ aspectRatio: '16/9' }}>
                            <Skeleton variant="rounded" height={'100%'} />
                        </Box>
                    </SwiperSlide>
                ))}
        </Swiper>
    );
}

export default memo(VideoSliceSkeleton);
