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
    Avatar,
} from '@mui/material';
import { NavLink } from 'react-router-dom';

import { menuItems, userMenu } from '~/config/MenuItemsConfig';
import Logo from '../Logo';
import { MenuIcon } from '../Icon';
import theme from '~/theme';

function SideBar({ open, onClick, onKeyDown, onClose, user, handelSignIn, setUser }) {
    const props = {
        onClick,
        onKeyDown,
    };

    const drawer = (
        <Box sx={{ width: '100%' }} role="presentation" {...props} px={2}>
            <Box sx={{ padding: '20px 16px 40px 16px', position: 'relative' }}>
                <IconButton sx={{ position: 'absolute', top: '38%', transform: 'translateY(-50%)', p: '0' }}>
                    <MenuIcon />
                </IconButton>
                <Stack width="100%" direction="row" justifyContent="center">
                    <Logo />
                </Stack>
            </Box>

            <List>
                {!user && (
                    <Box display={{ sm: 'none' }}>
                        <ListItem>
                            <Stack direction={'row'} alignItems={'center'} spacing={2}>
                                <Avatar sx={{ bgcolor: 'red' }} alt="H" src="/broken-image.jpg" />
                                <Typography component={'span'}>Hoangvinh250404</Typography>
                            </Stack>
                        </ListItem>
                        <Divider sx={{ borderColor: 'white', marginY: '20px', opacity: 0.3 }} />
                        {userMenu.map((item, index) => (
                            <NavLink to={item.path} key={index} end>
                                {({ isActive }) => (
                                    <ListItem
                                        disablePadding
                                        sx={{
                                            borderRadius: '0.25rem',
                                            backgroundColor: isActive ? 'primary.main' : 'unset',
                                            ':hover': {
                                                backgroundColor: !isActive
                                                    ? (theme) => theme.movie.action.backgroundHover
                                                    : 'rgb(236, 1, 1, 0.8)',
                                            },
                                        }}
                                    >
                                        <ListItemButton>
                                            <ListItemText
                                                primary={
                                                    <Box gap={3} display={'flex'} alignItems={'center'}>
                                                        {item.icon}
                                                        <Typography>{item.title}</Typography>
                                                    </Box>
                                                }
                                            />
                                        </ListItemButton>
                                    </ListItem>
                                )}
                            </NavLink>
                        ))}
                        <Divider sx={{ borderColor: 'white', marginY: '20px', opacity: 0.3 }} />
                    </Box>
                )}
                {menuItems.map((item, index) => (
                    <NavLink to={item.path} key={index} end>
                        {({ isActive }) => (
                            <ListItem
                                disablePadding
                                sx={{
                                    borderRadius: '0.25rem',
                                    backgroundColor: isActive ? 'primary.main' : 'unset',
                                    ':hover': {
                                        backgroundColor: !isActive
                                            ? (theme) => theme.movie.action.backgroundHover
                                            : 'rgb(236, 1, 1, 0.8)',
                                    },
                                }}
                            >
                                <ListItemButton>
                                    <ListItemText
                                        primary={
                                            <Box gap={3} display={'flex'} alignItems={'center'}>
                                                {item.icon}
                                                <Typography textTransform="uppercase">{item.title}</Typography>
                                            </Box>
                                        }
                                    />
                                </ListItemButton>
                            </ListItem>
                        )}
                    </NavLink>
                ))}
            </List>

            {
                <>
                    <Divider
                        sx={{ borderColor: 'white', marginBottom: '20px', display: { sm: 'none' }, opacity: '0.3' }}
                    />
                    <Button
                        sx={{ width: '100%', display: { sm: 'none' } }}
                        variant="contained"
                        disableElevation
                        disableRipple
                        onClick={() => setUser(!user)}
                    >
                        {user ? 'Đăng Nhập' : 'Đăng Xuất'}
                    </Button>
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
                    backgroundColor: theme.movie.background,
                    color: 'white',
                },
            }}
        >
            {drawer}
        </Drawer>
    );
}

export default SideBar;