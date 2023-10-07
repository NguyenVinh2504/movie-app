import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { cloneElement, useState } from 'react';
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
    const [user, setUser] = useState(false);
    const handelSignIn = () => {
        setUser(true);
    };
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    const breakpoints = useMediaQuery((theme) => theme.breakpoints.up('lg'));
    //close side bar up screen size lg
    if (breakpoints && sidebarOpen) {
        setSidebarOpen(!sidebarOpen);
    }
    return (
        <>
            <SideBar
                open={sidebarOpen}
                onClick={toggleSidebar}
                onKeyDown={toggleSidebar}
                onClose={toggleSidebar}
                user={user}
                handelSignIn={handelSignIn}
                setUser={setUser}
            />
            <ScrollAppBar>
                <AppBar position="fixed" elevation={0}>
                    <Toolbar
                        sx={{
                            justifyContent: 'space-between',
                        }}
                    >
                        {/* menu mobile */}
                        <Stack direction="row" spacing={1} sx={{ display: { lg: 'none' } }} alignItems={'center'}>
                            <IconButton onClick={toggleSidebar}>
                                <MenuIcon />
                            </IconButton>
                            <Box>
                                <Logo></Logo>
                            </Box>
                        </Stack>
                        {/* menu mobile */}

                        {/* leftheader */}
                        <Stack direction="row" spacing={4} sx={{ color: '#a6a4a4;' }}>
                            {/* logo */}
                            <Box sx={{ display: { xs: 'none', lg: 'inline-block' } }}>
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
                        <Stack direction="row" gap={{ xs: 0, sm: 2, lg: 5 }}>
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
                                <IconButton disableRipple color="neutral">
                                    <SearchIcon />
                                </IconButton>
                            </Box>

                            {/* user menu */}
                            <Stack direction={'row'} spacing={3} alignItems={'center'}>
                                {/* <IconButton
                                    disableRipple
                                    sx={{
                                        display: { xs: 'none', lg: 'inline-flex' },
                                    }}
                                    color="neutral"
                                >
                                    <HeartIcon />
                                </IconButton> */}

                                <Tooltip title="Thông báo" arrow>
                                    <IconButton
                                        disableRipple
                                        color="neutral"
                                        sx={{
                                            display: { xs: 'none', lg: 'inline-flex' },
                                        }}
                                    >
                                        <Badge badgeContent={999} color="primary" variant="dot">
                                            <NotificationIcon />
                                        </Badge>
                                    </IconButton>
                                </Tooltip>
                                {user && (
                                    <Button
                                        variant="contained"
                                        disableElevation
                                        disableRipple
                                        onClick={() => setUser(!user)}
                                        sx={{ display: { xs: 'none', sm: 'inline-block' } }}
                                    >
                                        Đăng Nhập
                                    </Button>
                                )}
                                {!user && (
                                    <Box sx={{ display: { xs: 'none', sm: 'inline-block' } }}>
                                        <UserMenu handelSignIn={handelSignIn} />
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

export default Header;
