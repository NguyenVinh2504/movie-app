import { Box, Stack, Typography, useMediaQuery } from '@mui/material';

import { cast } from './ItemsCast';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
function CastItem({ item }) {
    return (
        <Box sx={{ bgcolor: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
            <Box
                sx={{
                    // pt: '56.25%',
                    pt: '100%',
                    backgroundImage: `url('https://www.themoviedb.org/t/p/w500${item.profile_path}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    cursor: 'pointer',
                }}
            />
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
    const pointDonwLg = useMediaQuery((theme) => theme.breakpoints.down('lg'));
    const pointDonwSm = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    return (
        <Swiper
            slidesPerView={pointDonwSm ? 3 : pointDonwLg ? 4 : 5}
            modules={[Navigation, Autoplay]}
            spaceBetween={15}
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
