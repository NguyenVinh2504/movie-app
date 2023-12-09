import { Box, Button, Grid, IconButton, Stack, Typography, styled, useMediaQuery } from '@mui/material';
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import { AboutIcon, PlayIcon } from '~/components/Icon';
import uiConfigs from '~/config/ui.config';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import tmdbConfigs from '~/api/configs/tmdb.configs';
import HeroSliceSkeleton from '../HeroSliceSkeleton';
import { Autoplay, Navigation } from 'swiper/modules';
import SwiperNavigation from '~/components/SwiperNavigation';

function HeroSliceList({ isLoading, medias, onOpen }) {
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
    return (
        <>
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
                    {!isLoading &&
                        medias?.map((item) => (
                            <SwiperSlide key={item.id}>
                                {/* background image */}
                                <Box
                                    sx={{
                                        aspectRatio: { sm: '100/43', xs: '2/3' },
                                        position: 'relative',
                                        height: '100%',
                                        width: '100%',
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
                                    <LazyLoadImage
                                        src={tmdbConfigs.backdropPath(
                                            pointDownSm ? item.poster_path : item.backdrop_path,
                                        )}
                                        alt={item.title}
                                        style={{ objectFit: 'cover' }}
                                        effect="blur"
                                        wrapperProps={{
                                            style: { transitionDelay: '0.5s' },
                                        }}
                                    />
                                    <Box
                                        sx={{
                                            ...uiConfigs.style.gradientBgImage,
                                            background:
                                                'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0, 1) 100%)',
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
                                                {/* <Box
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
                                        ></Box> */}
                                                {/* title */}
                                                <Typography
                                                    variant={
                                                        pointDownSm
                                                            ? 'h5'
                                                            : pointDownMd
                                                            ? 'h4'
                                                            : pointDownLg
                                                            ? 'h3'
                                                            : 'h2'
                                                    }
                                                    sx={{
                                                        fontWeight: '500',
                                                        ...uiConfigs.style.typoLines(3),
                                                    }}
                                                >
                                                    {item.title ?? item.name}
                                                </Typography>
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
                                                <Stack
                                                    direction={'row'}
                                                    spacing={pointDownSm ? 0 : pointDownLg ? 1 : 2}
                                                >
                                                    <CustomButton
                                                        startIcon={<PlayIcon />}
                                                        sx={{ display: { sm: 'inline-flex', xs: 'none' } }}
                                                        component={'a'}
                                                        href={`https://vidsrc.to/embed/movie/${item.id}`}
                                                    >
                                                        Xem Ngay
                                                    </CustomButton>
                                                    <CustomButton
                                                        color="secondary"
                                                        startIcon={<AboutIcon />}
                                                        onClick={() => onOpen(item)}
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
                    {isLoading && (
                        <SwiperSlide>
                            <HeroSliceSkeleton />
                        </SwiperSlide>
                    )}
                </Swiper>
            </SwiperNavigation>
        </>
    );
}

export default HeroSliceList;
