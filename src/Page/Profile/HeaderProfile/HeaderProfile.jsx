import { NavLink } from 'react-router-dom';
import { Box, Stack, Tab, Tabs, Typography, useMediaQuery } from '@mui/material';
import Image from '~/components/Image';
import uiConfigs from '~/config/ui.config';
import AvatarUser from '~/components/Avatar';

import { useSelector } from 'react-redux';
import { userValue } from '~/redux/selectors';
function HeaderProfile({ valueTabItems, location }) {
    const user = useSelector(userValue);
    const pointDownMd = useMediaQuery((theme) => theme.breakpoints.down('md'));
    return (
        <>
            {/* banner and avatar */}
            <Stack
                component={'aside'}
                direction={'column'}
                sx={{
                    position: 'relative',
                }}
            >
                {/* banner */}
                <Box sx={{ pt: 'calc(431/1536*100%)' }}>
                    <Box sx={{ ...uiConfigs.style.positionFullSize }}>
                        <Image
                            alt={'banner'}
                            src={
                                'https://firebasestorage.googleapis.com/v0/b/movie-app-8766b.appspot.com/o/images%2FBannerVieJoy%20(1).png?alt=media&token=6c3f75e0-4525-4571-90a3-c39209c33353'
                            }
                            sx={{ borderRadius: '16px' }}
                        />
                    </Box>
                </Box>
                {/* banner */}

                {/* avatar */}
                <Stack
                    alignItems={'flex-end'}
                    sx={{
                        position: 'absolute',
                        left: { md: '38px', xs: '50%' },
                        bottom: { md: '-70px', xs: '-130px' },
                        flexDirection: { md: 'row', xs: 'column' },
                        alignItems: { md: 'flex-end', xs: 'center' },
                        transform: { md: 'translateX(0%)', xs: 'translateX(-50%)' },
                        width: '100%',
                    }}
                >
                    {/* image avatar */}
                    <Box
                        sx={{
                            width: { md: '172px', xs: '110px' },
                            height: { md: '172px', xs: '110px' },
                            overflow: 'hidden',
                            borderRadius: '100px',
                        }}
                    >
                        <AvatarUser
                            sx={{ height: '100%', width: '100%' }}
                            alt={user?.name}
                            src={user?.avatar ?? user?.temporaryAvatar}
                        />
                    </Box>
                    {/* image avatar */}

                    {/* name user */}
                    <Stack>
                        <Typography
                            variant={pointDownMd ? 'h6' : 'h4'}
                            fontWeight={'500'}
                            component={'h1'}
                            sx={{
                                m: { xs: '16px 0 0 0', md: '0 0 0px 16px', textAlign: 'center' },
                            }}
                        >
                            {user?.name}
                        </Typography>
                        <Typography
                            variant={pointDownMd ? 'subtitle2' : 'subtitle1'}
                            component={'p'}
                            fontWeight={'300'}
                            sx={{ ml: { xs: '0px', md: '16px' }, textAlign: { xs: 'center', md: 'left' } }}
                        >
                            {user?.userName}
                        </Typography>
                    </Stack>
                    {/* name user */}
                </Stack>
                {/* avatar */}
            </Stack>
            {/* banner and avatar */}

            {/* tab item */}
            <Stack
                direction={'column'}
                spacing={2}
                sx={{
                    mt: { md: '90px', xs: '150px' },
                }}
            >
                <Box>
                    <Tabs
                        value={location.pathname}
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="basic tabs example"
                        sx={{
                            '& .MuiTabs-indicator': {
                                bgcolor: 'white',
                            },
                            pl: { md: valueTabItems[0].title === 'Thông tin cá nhân' ? '36px' : '60px', xs: 0 },
                            borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                        }}
                    >
                        {valueTabItems.map((item, index) => (
                            <Tab
                                key={index}
                                component={NavLink}
                                disableRipple
                                to={item.path}
                                value={item.path}
                                label={item.title}
                                sx={{
                                    color: '#a6a4a4',
                                    '&.Mui-selected': {
                                        color: 'White !important',
                                    },
                                    '&:hover': {
                                        color: '#fff',
                                    },
                                    '@media (hover: none)': {
                                        '&:hover': {
                                            color: '#a6a4a4',
                                        },
                                    },
                                }}
                            ></Tab>
                        ))}
                    </Tabs>
                </Box>
            </Stack>
            {/* tab item */}
        </>
    );
}

export default HeaderProfile;
