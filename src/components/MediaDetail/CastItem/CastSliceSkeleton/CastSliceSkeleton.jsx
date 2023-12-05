import { Box, Stack, Skeleton } from '@mui/material';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import { memo } from 'react';
function CastItem({ item }) {
    return (
        <Box>
            <Box sx={{ aspectRatio: '1' }}>
                <Skeleton variant="rectangular" height={'100%'} width={'100%'} />
            </Box>
            <Stack spacing={1} mt={1}>
                <Skeleton variant="rounded" height={'20px'} />
                <Skeleton variant="rounded" height={'20px'} width={'80px'} />
            </Stack>
        </Box>
    );
}
function CastSliceSkeleton({ cast }) {
    return (
        <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={8}
            breakpoints={{
                0: {
                    slidesPerView: 3,
                },
                600: {
                    slidesPerView: 4,
                },
                1200: {
                    slidesPerView: 5,
                },
            }}
        >
            {Array(5)
                .fill(0)
                .map((item, index) => (
                    <SwiperSlide key={index}>
                        <CastItem item={item}></CastItem>
                    </SwiperSlide>
                ))}
        </Swiper>
    );
}

export default memo(CastSliceSkeleton);
