import { Box, Button, Grid, IconButton, Stack, Typography, styled, useMediaQuery } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import { movie } from './movie';
import { AboutIcon, PlayIcon } from '../Icon';
import SwiperNavigation from '../SwiperNavigation';
import { useDispatch } from 'react-redux';
import { toggleDetail } from '~/redux/features/mediaDetailSlice';
import Image from '../Image';
import images from '~/assets/image';
import uiConfigs from '~/config/ui.config';
import { memo } from 'react';
function HeroSlice() {
    const pointDownLg = useMediaQuery((theme) => theme.breakpoints.down('lg'));
    const pointDownMd = useMediaQuery((theme) => theme.breakpoints.down('md'));
    const pointDownSm = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const CustomButton = styled((props) => (
        <Button variant="contained" size={pointDownMd ? 'small' : pointDownLg ? 'medium' : 'large'} {...props} />
    ))(({ theme }) => ({
        [theme.breakpoints.down('md')]: {
            svg: {
                height: '1rem',
                width: '1rem',
            },
        },
    }));
    const dispatch = useDispatch();

    const handleOpen = () => {
        dispatch(toggleDetail(true));
    };
    return (
        <SwiperNavigation>
            <Swiper
                style={{
                    borderRadius: '20px',
                    overflow: 'hidden',
                    width: '100%',
                    // boxShadow: pointDonwSm ? ' -2px 0px 15px 2px rgba(75, 73, 73)' : 'none',
                    // border: '1px solid #848383',
                }}
                navigation={true}
                modules={[Navigation, Autoplay]}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
            >
                {movie.map((item, index) => (
                    <SwiperSlide key={index}>
                        {/* background image */}
                        <Box
                            sx={{
                                aspectRatio: { sm: '100/43', xs: '2/3' },
                                position: 'relative',
                                borderRadius: '20px',
                                overflow: 'hidden',
                                img: {
                                    objectPosition: 'top',
                                },
                                ':before': {
                                    content: '""',
                                    ...uiConfigs.style.gradientBgImage,
                                    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0), rgb(0, 0, 0, 1))',
                                },
                            }}
                        >
                            {/* background image */}
                            <Image
                                fallBack={pointDownSm ? images.noImage2x3 : images.noImage19x6}
                                src={
                                    pointDownSm
                                        ? `https://image.tmdb.org/t/p/original${item.poster_path}`
                                        : `https://image.tmdb.org/t/p/original${item.backdrop_path}`
                                }
                                alt={item.title}
                            />
                            <Box
                                sx={{
                                    ...uiConfigs.style.gradientBgImage,
                                    // background: 'linear-gradient(-90deg, rgba(0, 0, 0, 0) 100%, rgb(0, 0, 0, 1))',
                                }}
                            ></Box>
                            <IconButton
                                color="secondNeutral"
                                sx={{
                                    display: { sm: 'none' },
                                    zIndex: '10',
                                    ...uiConfigs.style.centerAlight,
                                    svg: {
                                        width: '40px',
                                        height: '40px',
                                    },
                                }}
                            >
                                <PlayIcon />
                            </IconButton>
                            {/* content*/}
                            <Grid
                                container
                                sx={{
                                    position: 'absolute',
                                    top: '0',
                                    left: '0',
                                    width: '100%',
                                    height: '100%',
                                    display: 'flex',
                                    alignItems: { xs: 'flex-end', sm: 'center' },
                                    paddingLeft: { lg: '80px', sm: '60px', xs: '30px' },
                                    paddingRight: '15px',
                                    justifyContent: { sm: 'flex-start' },
                                }}
                            >
                                {/* text content */}
                                <Grid item lg={6} md={6} sm={8} xs={12}>
                                    <Stack
                                        spacing={pointDownMd ? 1 : 2}
                                        alignItems={{ sm: 'flex-start' }}
                                        textAlign={{ sm: 'left' }}
                                        marginBottom={{ xs: '50px', sm: '0' }}
                                    >
                                        <Box
                                            sx={{
                                                backgroundImage: item.logo
                                                    ? `url(${item.logo})`
                                                    : `url(https://www.themoviedb.org/t/p/original/zanKFaGoXMI5p22vj4VB3rvM5Eg.png)`,
                                                paddingTop: '30%',
                                                width: '80%',
                                                backgroundSize: 'contain',
                                                backgroundRepeat: 'no-repeat',
                                                backgroundPosition: 'left bottom',
                                            }}
                                        ></Box>
                                        {/* title */}
                                        {/* <Typography
                                                    variant={
                                                        pointDonwSm ? 'h5' : pointDonwMd ? 'h4' : pointDonwLg ? 'h3' : 'h2'
                                                    }
                                                    sx={{
                                                        fontWeight: '500',
                                                    ...uiConfigs.style.typoLines(3),
                                                    }}
                                                >
                                                    {item.title}
                                                </Typography> */}
                                        {/* title */}
                                        <Typography
                                            variant={
                                                pointDownSm
                                                    ? 'caption'
                                                    : pointDownMd
                                                    ? 'subtitle2'
                                                    : pointDownLg
                                                    ? 'subtitle1'
                                                    : 'h6'
                                            }
                                            sx={{
                                                fontWeight: '400',
                                                ...uiConfigs.style.typoLines(3),
                                            }}
                                        >
                                            {item.overview}
                                        </Typography>
                                        <Stack direction={'row'} spacing={{ sm: '1vw', xs: '0' }}>
                                            <CustomButton
                                                startIcon={<PlayIcon />}
                                                sx={{ display: { sm: 'inline-flex', xs: 'none' } }}
                                            >
                                                Xem Ngay
                                            </CustomButton>
                                            <CustomButton
                                                color="secondary"
                                                startIcon={<AboutIcon />}
                                                onClick={handleOpen}
                                            >
                                                Chi tiết
                                            </CustomButton>
                                        </Stack>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </SwiperNavigation>
    );
}

export default memo(HeroSlice);
