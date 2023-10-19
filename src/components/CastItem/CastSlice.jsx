import { Box, Stack, Typography } from '@mui/material';

import { cast } from './ItemsCast';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from '../Image';
function CastItem({ item }) {
    return (
        <Box sx={{ bgcolor: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
            <Box
                sx={{
                    // pt: '56.25%',
                    aspectRatio: '1',
                    img: {
                        objectFit: 'cover',
                    },
                    cursor: 'pointer',
                }}
            >
                <Image
                    src={`https://www.themoviedb.org/t/p/w500${item.profile_path}`}
                    alt={item.title}
                    width={'100%'}
                    height={'100%'}
                    loading="lazy"
                />
            </Box>
            <Stack p={1}>
                <Typography
                    variant="subtitle2"
                    fontWeight={500}
                    sx={{
                        display: '-webkit-box',
                        overflow: 'hidden',
                        WebkitLineClamp: 1,
                        textOverflow: 'ellipsis',
                        WebkitBoxOrient: 'vertical',
                        whiteSpace: 'normal',
                        cursor: 'pointer',
                    }}
                >
                    {item.name}
                </Typography>
                <Typography
                    variant="subtitle2"
                    fontWeight={300}
                    sx={{
                        display: '-webkit-box',
                        overflow: 'hidden',
                        WebkitLineClamp: 1,
                        textOverflow: 'ellipsis',
                        WebkitBoxOrient: 'vertical',
                        whiteSpace: 'normal',
                    }}
                >
                    {item.character}
                </Typography>
            </Stack>
        </Box>
    );
}
function CastSlice() {
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
            {cast.map((item, index) => (
                <SwiperSlide key={index}>
                    <CastItem item={item}></CastItem>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default CastSlice;
