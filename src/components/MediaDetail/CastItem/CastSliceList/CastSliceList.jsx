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
import Image from '~/components/Image';
function CastItem({ item }) {
    return (
        <Box
            sx={{
                bgcolor: 'rgba(255,255,255,0.1)',
                borderRadius: '4px',
                overflow: 'hidden',
            }}
        >
            <Box sx={{ position: 'relative', pt: '100%' }}>
                <Box
                    sx={{
                        ...uiConfigs.style.positionFullSize,
                        cursor: 'pointer',
                    }}
                >
                    <Image
                        src={
                            item.profile_path
                                ? tmdbConfigs.posterPath(item.profile_path)
                                : images.noImage2x3
                        }
                        alt={item.title}
                    />
                </Box>
            </Box>
            <Stack p={1}>
                <Typography
                    variant="subtitle2"
                    component={'h3'}
                    fontWeight={500}
                    sx={{
                        ...uiConfigs.style.typoLines(1),
                        cursor: 'pointer',
                    }}
                >
                    {item?.name || 'N/A'}
                </Typography>
                <Typography
                    variant="subtitle2"
                    component={'p'}
                    fontWeight={300}
                    sx={{
                        ...uiConfigs.style.typoLines(1),
                    }}
                >
                    {item?.character || 'N/A'}
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
                    1400: {
                        slidesPerView: 8,
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
