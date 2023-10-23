import { NavLink, Outlet } from 'react-router-dom';
import { Box, Container, Stack, Tab, Tabs } from '@mui/material';
import Image from '~/components/Image';
import { useState } from 'react';

function Profile() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    function LinkTab(props) {
        return <Tab component="NavLink" {...props} />;
    }
    return (
        <Container maxWidth={'xl'}>
            <Stack
                direction={'column'}
                sx={{
                    // bgcolor: 'blue',
                    // aspectRatio: '202/80',
                    borderRadius: '16px',
                    position: 'relative',
                    overflow: 'hidden',
                    // border: '1px solid rgba(255,255,255,0.2)',
                }}
            >
                <Image
                    aspectRatio={'202/60'}
                    src={'https://fullstack.edu.vn/static/media/cover-profile.3fb9fed576da4b28386a.png'}
                    alt={'banner'}
                />
                <Box
                    sx={{
                        height: '80px',
                        bgcolor: 'rgba(255,255,255,0.2)',
                    }}
                >
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                        sx={{
                            height: '100%',
                            ml: '220px',
                            '.MuiTabs-flexContainer': {
                                height: '100%',
                            },
                        }}
                    >
                        <Tab to={'/movie-app/profile'} label="Item One" />
                        <Tab label="Item Two" />
                        <Tab label="Item Three" />
                    </Tabs>
                </Box>
                <Box
                    sx={{
                        bgcolor: 'blue',
                        aspectRatio: '1',
                        position: 'absolute',
                        width: '172px',
                        left: '38px',
                        bottom: '20px',
                        borderRadius: '100px',
                    }}
                ></Box>
            </Stack>
            {/* <Stack direction={'row'} spacing={2}>
                    <NavLink to={'/movie-app/profile'}>Thông tin | </NavLink>
                    <NavLink to={'/movie-app/profile/favorite'}> Favorite | </NavLink>
                    <NavLink to={'/movie-app/profile/favorite/tv'}>FavoriteTvList</NavLink>
                </Stack> */}
            <Box
                sx={{
                    mt: '20px',
                    bgcolor: 'rgba(255,255,255,0.1)',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    p: 2,
                    // border: '1px solid rgba(255,255,255,0.2)',
                }}
            >
                <Outlet />
            </Box>
        </Container>
    );
}

export default Profile;
