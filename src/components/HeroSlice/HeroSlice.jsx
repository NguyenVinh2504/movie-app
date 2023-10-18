import { Box, Button, Grid, IconButton, Stack, Typography, styled, useMediaQuery } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import { movie } from './movie';
import { AboutIcon, PlayIcon } from '../Icon';
import SwiperNavigation from '../SwiperNavigation';
import { useDispatch } from 'react-redux';
import showHideDetailSlice from '~/components/MediaDetail/MediaDetailSlice';

function HeroSlice() {
    const dispatch = useDispatch();
    const CustomButton = styled(Button)(({ theme }) => ({
        [theme.breakpoints.down('md')]: {
            svg: {
                height: '20px',
                width: '20px',
            },
        },
    }));
    const pointDonwLg = useMediaQuery((theme) => theme.breakpoints.down('lg'));
    const pointDonwMd = useMediaQuery((theme) => theme.breakpoints.down('md'));
    const pointDonwSm = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    const handleOpen = () => {
        dispatch(showHideDetailSlice.actions.openDetail(true));
    };
    return (
        <SwiperNavigation>
            <Swiper
                style={{
                    borderRadius: '20px',
                    overflow: 'hidden',
                    marginTop: '70px',
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
                                width: '100%',
                                aspectRatio: { sm: '100/43', xs: '2/3' },
                                position: 'relative',
                                borderRadius: '20px',
                                overflow: 'hidden',
                                ':before': {
                                    content: '""',
                                    left: 0,
                                    top: 0,
                                    position: 'absolute',
                                    width: '100%',
                                    height: '100%',
                                    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0), rgb(0, 0, 0, 1))',
                                },
                            }}
                        >
                            {/* background image */}
                            <Box>
                                <img
                                    loading="lazy"
                                    src={
                                        pointDonwSm
                                            ? `https://image.tmdb.org/t/p/original${item.poster_path}`
                                            : `https://image.tmdb.org/t/p/original${item.backdrop_path}`
                                    }
                                    width={'100%'}
                                    height={'100%'}
                                    alt={item.name}
                                />
                            </Box>
                            <Box
                                sx={{
                                    left: 0,
                                    top: 0,
                                    position: 'absolute',
                                    width: '100%',
                                    height: '100%',
                                    // background: 'linear-gradient(-90deg, rgba(0, 0, 0, 0) 100%, rgb(0, 0, 0, 1))',
                                }}
                            ></Box>
                            <IconButton
                                color="secondNeutral"
                                sx={{
                                    display: { sm: 'none' },
                                    position: 'absolute',
                                    top: '50%',
                                    zIndex: '10',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
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
                                        spacing={'1.5vw'}
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
                                                    textTransform: 'uppercase',
                                                    display: '-webkit-box',
                                                    overflow: 'hidden',
                                                    WebkitLineClamp: 3,
                                                    textOverflow: 'ellipsis',
                                                    WebkitBoxOrient: 'vertical',
                                                    whiteSpace: 'normal',
                                                }}
                                            >
                                                {item.title}
                                            </Typography> */}
                                        {/* title */}
                                        <Typography
                                            variant={
                                                pointDonwSm
                                                    ? 'caption'
                                                    : pointDonwMd
                                                    ? 'subtitle2'
                                                    : pointDonwLg
                                                    ? 'subtitle1'
                                                    : 'h6'
                                            }
                                            sx={{
                                                display: '-webkit-box',
                                                overflow: 'hidden',
                                                WebkitLineClamp: 3,
                                                fontWeight: '400',
                                                textOverflow: 'ellipsis',
                                                WebkitBoxOrient: 'vertical',
                                                whiteSpace: 'normal',
                                            }}
                                        >
                                            {item.overview}
                                        </Typography>
                                        <Stack direction={'row'} spacing={{ sm: '1vw', xs: '0' }}>
                                            <CustomButton
                                                variant="contained"
                                                size={pointDonwMd ? 'small' : pointDonwLg ? 'medium' : 'large'}
                                                disableElevation
                                                startIcon={<PlayIcon />}
                                                sx={{ display: { sm: 'inline-flex', xs: 'none' } }}
                                            >
                                                Xem Ngay
                                            </CustomButton>
                                            <CustomButton
                                                variant="contained"
                                                color="secondary"
                                                size={pointDonwMd ? 'small' : pointDonwLg ? 'medium' : 'large'}
                                                disableElevation
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

export default HeroSlice;
