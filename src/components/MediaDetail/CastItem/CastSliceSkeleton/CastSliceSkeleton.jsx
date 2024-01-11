import { Box, Stack, Skeleton } from '@mui/material';
import uiConfigs from '~/config/ui.config';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import { memo } from 'react';
function CastItem({ item }) {
    return (
        <Box>
            <Box sx={{ position: 'relative', pt: '100%' }}>
                <Skeleton variant="rectangular" style={{ ...uiConfigs.style.positionFullSize }} />
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
            simulateTouch={false}
            shortSwipes={false}
            allowTouchMove={false}
            preventInteractionOnTransition={false}
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
