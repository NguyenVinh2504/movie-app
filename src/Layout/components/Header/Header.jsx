import { memo, useCallback, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Search from '../Search';
import { Box, Button, IconButton, Stack, AppBar, Toolbar, useMediaQuery } from '@mui/material';
import { MenuIcon, SearchIcon, UserIcon } from '~/components/Icon';
import { menuItems } from '~/config/MenuItemsConfig';
import Logo from '~/components/Logo';
import SideBar from '~/components/SideBar';
import UserMenu from '~/components/UserMenu';
import { useSelector } from 'react-redux';
import { userValue } from '~/redux/selectors';
import config from '~/config';
import Notification from './Notification/Notification';

function Header() {
    const user = useSelector(userValue);

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = useCallback(() => setSidebarOpen(!sidebarOpen), [sidebarOpen]);

    const breakpoints = useMediaQuery((theme) => theme.breakpoints.up('lg'));
    const ponitDownSm = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    //close side bar up screen size lg
    if (breakpoints && sidebarOpen) {
        setSidebarOpen(!sidebarOpen);
    }
    return (
        <>
            {/* {sidebarOpen && ( */}
            <SideBar open={sidebarOpen} onClick={toggleSidebar} onKeyDown={toggleSidebar} onClose={toggleSidebar} />
            {/* )} */}
            <AppBar position="sticky">
                <Toolbar
                    sx={{
                        justifyContent: 'space-between',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                    }}
                >
                    {/* menu mobile */}
                    <Stack direction="row" spacing={1} sx={{ display: { lg: 'none' } }} alignItems={'center'}>
                        <IconButton onClick={toggleSidebar}>
                            <MenuIcon />
                        </IconButton>
                        <Box sx={{ height: '30px' }}>
                            <Logo />
                        </Box>
                    </Stack>
                    {/* menu mobile */}

                    {/* leftheader */}
                    <Stack direction="row" spacing={4} sx={{ color: '#a6a4a4', alignItems: 'center' }}>
                        {/* logo */}
                        <Box sx={{ display: { xs: 'none', lg: 'inline-block' }, img: { height: '30px' } }}>
                            <Logo />
                        </Box>
                        {/* logo */}

                        {/* tab item */}
                        <Stack
                            sx={{ display: { xs: 'none', lg: 'flex' }, fontSize: '16px' }}
                            direction="row"
                            spacing={3}
                        >
                            {menuItems.map((item, index) => (
                                <NavLink
                                    key={index}
                                    style={(nav) => {
                                        return {
                                            color: nav.isActive && 'white',
                                        };
                                    }}
                                    to={item.path}
                                    end
                                >
                                    {item.title}
                                </NavLink>
                            ))}
                        </Stack>
                        {/* tab items */}
                    </Stack>
                    {/* leftheader */}

                    {/* rightHeader */}
                    <Stack direction="row" gap={{ xs: 1, lg: 3 }} alignItems={'center'}>
                        {/* search */}
                        <Box
                            sx={{
                                display: { xs: 'none', lg: 'block' },
                                width: '380px',
                            }}
                        >
                            <Search round />
                        </Box>

                        <Box
                            sx={{
                                display: { xs: 'block', lg: 'none' },
                            }}
                        >
                            <NavLink to={config.routes.search}>
                                <IconButton disableRipple color="neutral">
                                    <SearchIcon />
                                </IconButton>
                            </NavLink>
                        </Box>

                        {/* user menu */}
                        <Box
                            sx={{
                                display: { xs: 'none', sm: 'flex' },
                            }}
                        >
                            <Notification />
                        </Box>
                        {!user && !ponitDownSm && (
                            <NavLink to={config.routes.login}>
                                <Button variant="contained" disableElevation disableRipple>
                                    Đăng Nhập
                                </Button>
                            </NavLink>
                        )}
                        {!user && ponitDownSm && (
                            <NavLink to={config.routes.login}>
                                <IconButton
                                    variant="contained"
                                    size="small"
                                    sx={{ border: '1px solid hsla(0,0%,100%,.2)' }}
                                >
                                    <UserIcon />
                                </IconButton>
                            </NavLink>
                        )}
                        {user && (
                            <Box>
                                <UserMenu />
                            </Box>
                        )}
                    </Stack>
                    {/* user menu */}
                    {/* rightHeader */}
                </Toolbar>
            </AppBar>
        </>
    );
}

export default memo(Header);
