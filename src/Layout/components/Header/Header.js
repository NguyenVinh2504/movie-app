import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { cloneElement, memo, useCallback, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Search from '../Search';
import {
    Badge,
    Box,
    Button,
    IconButton,
    Stack,
    Tooltip,
    AppBar,
    Toolbar,
    useScrollTrigger,
    useMediaQuery,
} from '@mui/material';
import { MenuIcon, NotificationIcon, SearchIcon } from '~/components/Icon';
import { menuItems } from '~/config/MenuItemsConfig';
import Logo from '~/components/Logo';
import SideBar from '~/components/SideBar';
import UserMenu from '~/components/UserMenu';
import { useSelector } from 'react-redux';
import { userValue } from '~/redux/selectors';
import config from '~/config';

const cx = classNames.bind(styles);

const ScrollAppBar = ({ children, window }) => {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 50,
        target: window ? window() : undefined,
    });

    return cloneElement(children, {
        sx: {
            background: trigger ? (theme) => theme.movie.background : (theme) => theme.movie.background,
            // (theme) => theme.movie.backgroundGradient,
        },
    });
};

function Header() {
    const user = useSelector(userValue);

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = useCallback(() => setSidebarOpen(!sidebarOpen), [sidebarOpen]);

    const breakpoints = useMediaQuery((theme) => theme.breakpoints.up('lg'));
    //close side bar up screen size lg
    if (breakpoints && sidebarOpen) {
        setSidebarOpen(!sidebarOpen);
    }
    return (
        <>
            {sidebarOpen && (
                <SideBar open={sidebarOpen} onClick={toggleSidebar} onKeyDown={toggleSidebar} onClose={toggleSidebar} />
            )}
            <ScrollAppBar>
                <AppBar elevation={0} position="sticky">
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
                                        className={(nav) => cx({ active: nav.isActive }, 'menu')}
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
                        <Stack direction="row" gap={{ xs: 0, sm: 0, lg: 3 }}>
                            {/* search */}
                            <Box
                                sx={{
                                    display: { xs: 'none', lg: 'flex' },
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
                            <Stack
                                direction={'row'}
                                spacing={3}
                                alignItems={'center'}
                                sx={{ display: { xs: 'none', sm: 'flex' } }}
                            >
                                {/* <IconButton
                                    disableRipple
                                    sx={{
                                        display: { xs: 'none', lg: 'inline-flex' },
                                    }}
                                    color="neutral"
                                >
                                    <HeartIcon />
                                </IconButton> */}

                                <Tooltip
                                    title="Thông báo"
                                    arrow
                                    sx={{
                                        display: { xs: 'none', lg: 'inline-flex' },
                                    }}
                                >
                                    <IconButton disableRipple color="neutral">
                                        <Badge badgeContent={999} color="primary" variant="dot">
                                            <NotificationIcon />
                                        </Badge>
                                    </IconButton>
                                </Tooltip>
                                {!user && (
                                    <NavLink to={config.routes.login}>
                                        <Button variant="contained" disableElevation disableRipple>
                                            Đăng Nhập
                                        </Button>
                                    </NavLink>
                                )}
                                {user && (
                                    <Box>
                                        <UserMenu />
                                    </Box>
                                )}
                            </Stack>
                            {/* user menu */}
                        </Stack>
                        {/* rightHeader */}
                    </Toolbar>
                </AppBar>
            </ScrollAppBar>
        </>
    );
}

export default memo(Header);
