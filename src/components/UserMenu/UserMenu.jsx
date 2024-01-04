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
    // useMediaQuery,
} from '@mui/material';
import { memo, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { userMenu } from '~/config/MenuItemsConfig';
import { SignOutIcon } from '../Icon';
import AvatarUser from '../Avatar/Avatar';

//dispatch redux
import { useDispatch } from 'react-redux';
import { loginOut } from '~/redux/features/userSlice';

//selector redux
import { useSelector } from 'react-redux';
import { refreshToken, userValue } from '~/redux/selectors';
import userApi from '~/api/module/user.api';
import { toast } from 'react-toastify';
import { removeToken } from '~/redux/features/authSlice';
import { logOut } from '~/utils/logOut';

function UserMenu() {
    const user = useSelector(userValue);
    const getRefreshToken = useSelector(refreshToken);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    // const breakpoints = useMediaQuery((theme) => theme.breakpoints.up('sm'));

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    };
    // const token = useSelector(accessToken);
    // const test = () => {
    //     const authUser = async () => {
    //         const { response } = await userApi.getInfo();
    //         if (response) dispatch(updateUser(response));
    //     };
    //     if (token) {
    //         authUser();
    //     }
    // };
    // eslint-disable-next-line react-hooks/exhaustive-deps

    // const handleLogout = async () => {
    //     const { response } = await userApi.logOut({ refreshToken: getRefreshToken });
    //     if (response) {
    //         dispatch(loginOut());
    //         dispatch(removeToken());
    //         toast.success('Đăng xuất thành công');
    //     }
    // };
    //close user menu down screen size sm
    // if (!breakpoints && open) {
    //     setAnchorEl(null);
    // }
    return (
        <>
            <IconButton
                sx={{ p: 0, width: { xs: '30px', sm: '40px' } }}
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
                    },
                }}
                sx={{
                    '& .MuiMenu-paper': {
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
                <MenuItem
                    onClick={() => {
                        logOut({ userApi, getRefreshToken, dispatch, loginOut, removeToken, toast, navigate });
                        // test();
                    }}
                >
                    <ListItemIcon>{<SignOutIcon />}</ListItemIcon>
                    Đăng xuất
                </MenuItem>
            </Menu>
        </>
    );
}

export default memo(UserMenu);
