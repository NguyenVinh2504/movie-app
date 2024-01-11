import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import uiConfigs from '~/config/ui.config';
import { Skeleton, Box } from '@mui/material';

import { memo } from 'react';
function VideoSliceSkeleton() {
    return (
        <Swiper
            spaceBetween={5}
            shortSwipes={false}
            allowTouchMove={false}
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
                        <Box sx={{ pt: 'calc(9/16*100%)', position: 'relative' }}>
                            <Skeleton variant="rounded" sx={{ ...uiConfigs.style.positionFullSize }} />
                        </Box>
                    </SwiperSlide>
                ))}
        </Swiper>
    );
}

export default memo(VideoSliceSkeleton);
