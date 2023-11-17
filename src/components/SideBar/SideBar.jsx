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
} from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';

import { menuItems, userMenu } from '~/config/MenuItemsConfig';
import Logo from '../Logo';
import { MenuIcon } from '../Icon';
import AvatarUser from '../Avatar/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { userValue } from '~/redux/selectors';
import { loginOut } from '~/redux/features/userSlice';
import config from '~/config';
import userApi from '~/api/module/user.api';
import { toast } from 'react-toastify';
const ListCustoms = styled(ListItem)(({ theme }) => ({
    '&:hover': {
        backgroundColor: theme.listItems.backgroundHover,
    },
    '@media (hover: none)': {
        '&:hover': {
            backgroundColor: 'unset',
        },
    },
}));

function SideBar({ open, onClick, onKeyDown, onClose }) {
    const location = useNavigate();
    const props = {
        onClick,
        onKeyDown,
    };
    const user = useSelector(userValue);
    const dispatch = useDispatch();

    const handleLogout = async () => {
        const { response, err } = await userApi.logOut();
        if (response) {
            dispatch(loginOut());
            toast.success('Đăng xuất thành công');
        }
        if (err) {
            toast.error('Đăng xuất không thành công');
        }
    };
    const drawer = (
        <Box sx={{ width: '100%' }} role="presentation" {...props} px={2}>
            <Box sx={{ padding: '20px 16px 40px 16px', position: 'relative' }}>
                <IconButton sx={{ position: 'absolute', top: '38%', transform: 'translateY(-50%)', p: '0' }}>
                    <MenuIcon />
                </IconButton>
                <Stack width="100%" direction="row" justifyContent="center" sx={{ img: { height: '18px' } }}>
                    <Logo />
                </Stack>
            </Box>

            <List>
                {user && (
                    <Box display={{ sm: 'none' }}>
                        <ListItem>
                            <Stack direction={'row'} alignItems={'center'} spacing={2}>
                                <AvatarUser alt={user?.name} src={user?.avatar} />
                                <Typography component={'span'}>{user?.name}</Typography>
                            </Stack>
                        </ListItem>
                        <Divider sx={{ borderColor: 'white', marginY: '20px', opacity: 0.3 }} />
                        {userMenu.map((item, index) => (
                            <NavLink to={item.path} key={index} end>
                                {({ isActive }) => (
                                    <ListCustoms
                                        disablePadding
                                        sx={{
                                            borderRadius: '0.25rem',
                                            backgroundColor: isActive
                                                ? (theme) => theme.listItems.backgroundActive
                                                : 'unset',
                                        }}
                                    >
                                        <ListItemButton disableRipple>
                                            <ListItemText
                                                primary={
                                                    <Box gap={3} display={'flex'} alignItems={'center'}>
                                                        {item.icon}
                                                        <Typography>{item.title}</Typography>
                                                    </Box>
                                                }
                                            />
                                        </ListItemButton>
                                    </ListCustoms>
                                )}
                            </NavLink>
                        ))}
                        <Divider sx={{ borderColor: 'white', marginY: '20px', opacity: 0.3 }} />
                    </Box>
                )}
                {menuItems.map((item, index) => (
                    <NavLink to={item.path} key={index} end>
                        {({ isActive }) => (
                            <ListCustoms
                                disablePadding
                                sx={{
                                    borderRadius: '0.25rem',
                                    backgroundColor: isActive ? (theme) => theme.listItems.backgroundActive : 'unset',
                                    // ':hover': {
                                    //     backgroundColor: !isActive
                                    //         ? (theme) => theme.movie.action.backgroundHover
                                    //         : 'rgb(236, 1, 1, 0.8)',
                                    // },
                                }}
                            >
                                <ListItemButton disableRipple>
                                    <ListItemText
                                        primary={
                                            <Box gap={3} display={'flex'} alignItems={'center'}>
                                                {item.icon}
                                                <Typography textTransform="uppercase">{item.title}</Typography>
                                            </Box>
                                        }
                                    />
                                </ListItemButton>
                            </ListCustoms>
                        )}
                    </NavLink>
                ))}
            </List>

            {
                <>
                    <Divider
                        sx={{ borderColor: 'white', marginBottom: '20px', display: { sm: 'none' }, opacity: '0.3' }}
                    />
                    {!user ? (
                        <Button
                            sx={{ width: '100%', display: { sm: 'none' } }}
                            variant="contained"
                            disableElevation
                            disableRipple
                            onClick={() => location(config.routes.login)}
                        >
                            Đăng Nhập
                        </Button>
                    ) : (
                        <Button
                            sx={{ width: '100%', display: { sm: 'none' } }}
                            variant="contained"
                            disableElevation
                            disableRipple
                            onClick={() => handleLogout()}
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

export default SideBar;
