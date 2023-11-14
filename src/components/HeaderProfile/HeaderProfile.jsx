import { NavLink, useLocation } from 'react-router-dom';
import { Box, Stack, Tab, Tabs, Typography, useMediaQuery } from '@mui/material';
import Image from '~/components/Image';
import AvatarUser from '~/components/Avatar';

import { useSelector } from 'react-redux';
import { userValue } from '~/redux/selectors';
function HeaderProfile({ valueTabItems }) {
    const user = useSelector(userValue);
    const pointDownMd = useMediaQuery((theme) => theme.breakpoints.down('md'));
    const location = useLocation();
    return (
        <>
            {/* banner and avatar */}
            <Stack
                direction={'column'}
                sx={{
                    position: 'relative',
                }}
            >
                {/* banner */}
                <Image
                    src={'https://fullstack.edu.vn/static/media/cover-profile.3fb9fed576da4b28386a.png'}
                    alt={'banner'}
                    sx={{ borderRadius: '16px' }}
                />
                {/* banner */}

                {/* avatar */}
                <Stack
                    alignItems={'flex-end'}
                    sx={{
                        position: 'absolute',
                        left: { md: '38px', xs: '50%' },
                        bottom: { md: '-70px', xs: '-110px' },
                        flexDirection: { md: 'row', xs: 'column' },
                        alignItems: { md: 'flex-end', xs: 'center' },
                        transform: { md: 'translateX(0%)', xs: 'translateX(-50%)' },
                    }}
                >
                    {/* image avatar */}
                    <Box
                        sx={{
                            aspectRatio: '1',
                            width: { md: '172px', xs: '110px' },
                            overflow: 'hidden',
                            borderRadius: '100px',
                        }}
                    >
                        <AvatarUser sx={{ height: '100%', width: '100%' }} alt={user?.name} src={user?.avatar} />
                    </Box>
                    {/* image avatar */}

                    {/* name user */}
                    <Typography
                        variant={pointDownMd ? 'h5' : 'h4'}
                        fontWeight={'500'}
                        sx={{ m: { xs: '16px 0 0 0', md: '0 0 16px 16px' } }}
                    >
                        {user?.name}
                    </Typography>
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
                    mt: { md: '90px', xs: '130px' },
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
                            pl: { md: valueTabItems[0].title === 'Edit Profile' ? '58px' : '60px', xs: 0 },
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
                                        color: 'White',
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
