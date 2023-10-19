import {
    Avatar,
    Divider,
    IconButton,
    ListItem,
    ListItemIcon,
    Menu,
    MenuItem,
    Stack,
    Typography,
    useMediaQuery,
} from '@mui/material';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { userMenu } from '~/config/MenuItemsConfig';
import { SignOutIcon } from '../Icon';
import AvatarUser from '../Avatar/Avatar';
import { useDispatch } from 'react-redux';
import { setUser } from '~/redux/features/userSlice';

function UserMenu() {
    const [anchorEl, setAnchorEl] = useState(null);
    const breakpoints = useMediaQuery((theme) => theme.breakpoints.up('sm'));
    const open = Boolean(anchorEl);
    const dispatch = useDispatch();
    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    };
    //close user menu down screen size sm
    if (!breakpoints && open) {
        setAnchorEl(null);
    }
    return (
        <>
            <IconButton
                sx={{ p: 0 }}
                onClick={handleClick}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
            >
                <AvatarUser />
            </IconButton>
            <Menu
                id="account-menu"
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                onClick={handleClose}
                slotProps={{
                    paper: {
                        variant: 'outlined',
                        elevation: 0,
                        sx: {
                            borderColor: '#A6A4A4',
                            mt: 2,
                            bgcolor: 'black',
                            color: 'white',
                            '.MuiMenuItem-root': {
                                ':hover': {
                                    background: 'rgba(255, 255, 255, 0.10)',
                                },
                                ':active': {
                                    background: (theme) => theme.palette.primary.main,
                                },
                            },
                        },
                    },
                }}
            >
                <ListItem>
                    <Stack direction={'row'} alignItems={'center'} spacing={2}>
                        <Avatar sx={{ bgcolor: 'red' }} alt="H" src="/broken-image.jpg" />
                        <Typography component={'span'}>Hoangvinh250404</Typography>
                    </Stack>
                </ListItem>
                <Divider light sx={{ borderColor: 'white', my: 1.5, opacity: 0.3 }} />
                {userMenu.map((item, index) => (
                    <NavLink to={item.path} key={index}>
                        <MenuItem sx={{ paddingRight: '55px' }}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            {item.title}
                        </MenuItem>
                    </NavLink>
                ))}
                <Divider light sx={{ borderColor: 'white', mt: 1.5, mb: '5px', opacity: 0.3 }} />
                <MenuItem onClick={() => dispatch(setUser(false))}>
                    <ListItemIcon>{<SignOutIcon />}</ListItemIcon>
                    Đăng xuất
                </MenuItem>
            </Menu>
        </>
    );
}

export default UserMenu;
