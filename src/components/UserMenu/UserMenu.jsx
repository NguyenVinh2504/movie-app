import {
    Box,
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
import { memo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { userMenu } from '~/config/MenuItemsConfig';
import { SignOutIcon } from '../Icon';
import AvatarUser from '../Avatar/Avatar';

//dispatch redux
import { useDispatch } from 'react-redux';
import { loginOut } from '~/redux/features/userSlice';

//selector redux
import { useSelector } from 'react-redux';
import { userValue } from '~/redux/selectors';
import userApi from '~/api/module/user.api';
import { toast } from 'react-toastify';

function UserMenu() {
    console.log('re user');
    const user = useSelector(userValue);
    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const breakpoints = useMediaQuery((theme) => theme.breakpoints.up('sm'));

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    };

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
    //close user menu down screen size sm
    if (!breakpoints && open) {
        setAnchorEl(null);
    }
    return (
        <>
            <IconButton
                sx={{ p: 0, width: '40px' }}
                onClick={handleClick}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
            >
                <AvatarUser alt={user?.name} />
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
                            borderColor: 'rgba(255, 255, 255, 0.2)',
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
                        <Box sx={{ width: '40px' }}>
                            <AvatarUser alt={user?.name} src={user?.avatar} />
                        </Box>
                        <Typography component={'span'}>{user?.name}</Typography>
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
                <MenuItem onClick={() => handleLogout()}>
                    <ListItemIcon>{<SignOutIcon />}</ListItemIcon>
                    Đăng xuất
                </MenuItem>
            </Menu>
        </>
    );
}

export default memo(UserMenu);