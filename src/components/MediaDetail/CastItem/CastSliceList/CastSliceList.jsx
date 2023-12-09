import { Box, Stack, Typography } from '@mui/material';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import uiConfigs from '~/config/ui.config';
import { memo } from 'react';
import tmdbConfigs from '~/api/configs/tmdb.configs';
import images from '~/assets/image';
import SwiperNavigation from '~/components/SwiperNavigation';
import { LazyLoadImage } from 'react-lazy-load-image-component';
function CastItem({ item }) {
    return (
        <Box sx={{ bgcolor: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
            <Box sx={{ aspectRatio: 1, cursor: 'pointer' }}>
                <LazyLoadImage
                    effect="blur"
                    wrapperProps={{
                        style: { transitionDelay: '0.5s' },
                    }}
                    src={item.profile_path ? tmdbConfigs.posterPath(item.profile_path) : images.noImage2x3}
                    alt={item.title}
                    style={{ objectFit: 'cover' }}
                />
            </Box>
            <Stack p={1}>
                <Typography
                    variant="subtitle2"
                    fontWeight={500}
                    sx={{
                        ...uiConfigs.style.typoLines(1),
                        cursor: 'pointer',
                    }}
                >
                    {item?.name}
                </Typography>
                <Typography
                    variant="subtitle2"
                    fontWeight={300}
                    sx={{
                        ...uiConfigs.style.typoLines(1),
                    }}
                >
                    {item?.character}
                </Typography>
            </Stack>
        </Box>
    );
}
function CastSliceList({ cast }) {
    return (
        <SwiperNavigation>
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={8}
                navigation={true}
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
                {cast?.map((item, index) => (
                    <SwiperSlide key={index}>
                        <CastItem item={item}></CastItem>
                    </SwiperSlide>
                ))}
            </Swiper>
        </SwiperNavigation>
    );
}

export default memo(CastSliceList);
