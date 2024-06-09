import {
    Box,
    ListItem,
    List,
    ListItemButton,
    ListItemText,
    Drawer,
    Typography,
    Stack,
    IconButton,
    Button,
    Divider,
    styled,
    Skeleton,
} from '@mui/material';
import { NavLink } from 'react-router-dom';

import { menuItems, userMenu } from '~/config/MenuItemsConfig';
import Logo from '../Logo';
import { MenuIcon } from '../Icon';
import AvatarUser from '../Avatar/Avatar';
import { useSelector } from 'react-redux';
import { userValue } from '~/redux/selectors';
import config from '~/config';
import { memo } from 'react';
import { useLogout } from '~/Hooks/useLogout';
const ListButtonCustoms = styled(ListItemButton)(() => ({
    borderRadius: 8,
}));

function SideBar({ open, onClick, onKeyDown, onClose, isLoading }) {
    const props = {
        onClick,
        onKeyDown,
    };
    const user = useSelector(userValue);

    // const handleLogout = async () => {
    //     const { response } = await userApi.logOut();
    //     if (response) {
    //         dispatch(loginOut());
    //         dispatch(removeToken());
    //         toast.success('Đăng xuất thành công');
    //     }
    // };
    const { disable, handelLogout } = useLogout();

    const drawer = (
        <Box sx={{ width: '100%' }} role="presentation" {...props} px={2}>
            <Box sx={{ padding: '20px 16px 40px 16px', position: 'relative' }}>
                <IconButton sx={{ position: 'absolute', top: '38%', transform: 'translateY(-50%)', p: '0' }}>
                    <MenuIcon />
                </IconButton>
                <Stack width="100%" direction="row" justifyContent="center" sx={{ img: { height: '30px' } }}>
                    <Logo />
                </Stack>
            </Box>

            <List>
                {!isLoading ? (
                    <>
                        {user && (
                            <Box display={{ sm: 'none' }}>
                                <ListItem>
                                    <Stack direction={'row'} alignItems={'center'} spacing={2}>
                                        <Box sx={{ width: '50px', height: '50px' }}>
                                            <AvatarUser alt={user?.name} />
                                        </Box>
                                        <Typography component={'span'} fontWeight={500}>
                                            {user?.name}
                                        </Typography>
                                    </Stack>
                                </ListItem>
                                <Divider sx={{ borderColor: 'white', marginY: '20px', opacity: 0.3 }} />
                                {userMenu.map((item, index) => (
                                    <NavLink to={item.path} key={index} end>
                                        {({ isActive }) => (
                                            <ListButtonCustoms selected={isActive}>
                                                <ListItemText
                                                    primary={
                                                        <Box gap={3} display={'flex'} alignItems={'center'}>
                                                            {isActive ? item.iconActive : item.icon}
                                                            <Typography textTransform="uppercase">
                                                                {item.title}
                                                            </Typography>
                                                        </Box>
                                                    }
                                                />
                                            </ListButtonCustoms>
                                        )}
                                    </NavLink>
                                ))}
                                <Divider sx={{ borderColor: 'white', marginY: '20px', opacity: 0.3 }} />
                            </Box>
                        )}
                    </>
                ) : (
                    <Box display={{ sm: 'none' }}>
                        <ListItem>
                            <Stack direction={'row'} alignItems={'center'} spacing={2}>
                                <Skeleton variant="circular" height={'50px'} width={'50px'} />
                                <Skeleton variant="rounded" height={'25px'} width={'150px'} />
                            </Stack>
                        </ListItem>
                        <Divider sx={{ borderColor: 'white', marginY: '20px', opacity: 0.3 }} />
                    </Box>
                )}
                {menuItems.map((item, index) => (
                    <NavLink to={item.path} key={index} end>
                        {({ isActive }) => (
                            <ListButtonCustoms selected={isActive}>
                                <ListItemText
                                    primary={
                                        <Box gap={3} display={'flex'} alignItems={'center'}>
                                            {isActive ? item.iconActive : item.icon}
                                            <Typography textTransform="uppercase">{item.title}</Typography>
                                        </Box>
                                    }
                                />
                            </ListButtonCustoms>
                        )}
                    </NavLink>
                ))}
            </List>

            {
                <>
                    <Divider
                        sx={{ borderColor: 'white', marginBottom: '20px', display: { sm: 'none' }, opacity: '0.3' }}
                    />
                    {!user || isLoading ? (
                        <Button
                            component={NavLink}
                            to={config.routes.login}
                            sx={{ width: '100%', display: { sm: 'none' }, mb: '60px' }}
                            variant="contained"
                            disableElevation
                            disableRipple
                        >
                            Đăng Nhập
                        </Button>
                    ) : (
                        <Button
                            sx={{ width: '100%', display: { sm: 'none' }, mb: '60px' }}
                            variant="contained"
                            disableElevation
                            disableRipple
                            disabled={disable}
                            onClick={() => handelLogout()}
                        >
                            Đăng Xuất
                        </Button>
                    )}
                </>
            }
        </Box>
    );
    return (
        <Drawer
            anchor={'left'}
            open={open}
            onClose={onClose}
            transitionDuration={500}
            sx={{
                '& .MuiDrawer-paper': {
                    width: { xs: '92%', sm: '45%', md: '32%' },
                    backgroundColor: '#0c0a0a',
                    color: 'white',
                },
            }}
        >
            {drawer}
        </Drawer>
    );
}

export default memo(SideBar);
