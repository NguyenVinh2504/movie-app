import { memo, useCallback, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Search from '~/components/Search';
import { Box, Button, IconButton, Stack, AppBar, Toolbar, useMediaQuery, Skeleton } from '@mui/material';
import { MenuIcon, SearchIcon, UserIcon } from '~/components/Icon';
import { menuItems } from '~/config/MenuItemsConfig';
import Logo from '~/components/Logo';
import SideBar from '~/components/SideBar';
import UserMenu from '~/components/UserMenu';
import { useSelector } from 'react-redux';
import { isAuthenticated } from '~/redux/selectors';
import config from '~/config';
import Notification from './Notification/Notification';

function Header({ isLoading }) {
    const isLogged = useSelector(isAuthenticated);

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
            <SideBar
                open={sidebarOpen}
                onClick={toggleSidebar}
                onKeyDown={toggleSidebar}
                onClose={toggleSidebar}
                isLoading={isLoading}
            />
            {/* )} */}
            <AppBar position="sticky">
                <Toolbar
                    sx={{
                        justifyContent: 'space-between',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                    }}
                >
                    {/* menu mobile */}
                    <Stack
                        direction="row"
                        spacing={1}
                        sx={{ display: { lg: 'none' }, flex: '1' }}
                        alignItems={'center'}
                    >
                        <IconButton onClick={toggleSidebar}>
                            <MenuIcon />
                        </IconButton>
                        <Box sx={{ height: '30px', maxWidth: '100px' }}>
                            <Logo />
                        </Box>
                    </Stack>
                    {/* menu mobile */}

                    {/* leftheader */}
                    <Stack
                        direction="row"
                        spacing={4}
                        sx={{ color: '#a6a4a4', alignItems: 'center', display: { xs: 'none', md: 'flex' } }}
                    >
                        {/* logo */}
                        <Box sx={{ display: { xs: 'none', lg: 'inline-block' }, width: '92px', height: '30px' }}>
                            <Logo />
                        </Box>
                        {/* logo */}

                        {/* tab item */}
                        <Stack
                            sx={{ display: { xs: 'none', lg: 'flex' }, fontSize: '16px', p: 0, listStyle: 'none' }}
                            direction="row"
                            spacing={3}
                            component={'ul'}
                        >
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    <NavLink
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
                                </li>
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
                            <Search round inHeader />
                        </Box>

                        <Box
                            sx={{
                                display: { xs: 'block', lg: 'none' },
                            }}
                        >
                            <IconButton disableRipple color="neutral" component={NavLink} to={config.routes.searchPage}>
                                <SearchIcon />
                            </IconButton>
                        </Box>

                        {/* user menu */}
                        <Box
                            sx={{
                                display: { xs: 'none', sm: 'flex' },
                            }}
                        >
                            <Notification />
                        </Box>
                        {!isLoading ? (
                            <>
                                {!isLogged && !ponitDownSm && (
                                    <Button
                                        variant="contained"
                                        disableElevation
                                        disableRipple
                                        component={NavLink}
                                        to={config.routes.login}
                                    >
                                        Đăng Nhập
                                    </Button>
                                )}
                                {!isLogged && ponitDownSm && (
                                    <IconButton
                                        component={NavLink}
                                        to={config.routes.login}
                                        sx={{
                                            p: '4px',
                                            border: '1px solid hsla(0,0%,100%,.2)',
                                        }}
                                        size="small"
                                    >
                                        <UserIcon />
                                    </IconButton>
                                )}
                                {isLogged && (
                                    <Box>
                                        <UserMenu />
                                    </Box>
                                )}
                            </>
                        ) : (
                            <Skeleton
                                sx={{ width: { xs: '34px', sm: '40px' }, height: { xs: '34px', sm: '40px' } }}
                                variant="circular"
                            />
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
