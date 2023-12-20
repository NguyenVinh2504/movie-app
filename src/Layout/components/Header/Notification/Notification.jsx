import {
    Badge,
    Box,
    Divider,
    Grow,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
    useMediaQuery,
} from '@mui/material';
import React from 'react';
import { NotificationIcon } from '~/components/Icon';
import HoverPopover from 'material-ui-popup-state/HoverPopover';
import { usePopupState, bindPopover, bindToggle } from 'material-ui-popup-state/hooks';
import Image from '~/components/Image';

function Notification() {
    const breakpoints = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const popupState = usePopupState({
        variant: 'popover',
        popupId: 'demoPopover',
    });
    //close user menu down screen size sm
    if (breakpoints && popupState.isOpen) {
        popupState.close();
    }
    return (
        <>
            <IconButton disableRipple color="neutral" {...bindToggle(popupState)}>
                <Badge badgeContent={999} color="primary" variant="dot">
                    <NotificationIcon />
                </Badge>
            </IconButton>
            <HoverPopover
                style={{ pointerEvents: 'auto' }}
                onClose={() => popupState.close()}
                {...bindPopover(popupState)}
                marginThreshold={70}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                TransitionComponent={Grow}
            >
                <Box sx={{ maxWidth: '480px', minWidth: '400px' }}>
                    <Typography sx={{ p: 2 }} variant="h6" fontWeight={500}>
                        Thông báo
                    </Typography>
                    <Divider />
                    <Box sx={{ p: 0, overflowY: 'auto', maxHeight: '50vh' }}>
                        {false && Array(5)
                            .fill(0)
                            .map((item, index) => (
                                <List key={index}>
                                    <ListItem sx={{ alignItems: 'flex-start', gap: 2 }}>
                                        <ListItemAvatar
                                            sx={{
                                                height: '48px',
                                                width: '48px',
                                                minWidth: '0px',
                                                borderRadius: 100,
                                                overflow: 'hidden',
                                            }}
                                        >
                                            <Image
                                                src={'https://image.tmdb.org/t/p/w500/dB6Krk806zeqd0YNp2ngQ9zXteH.jpg'}
                                            />
                                        </ListItemAvatar>
                                        <ListItemText sx={{ m: 0 }}>
                                            <Typography variant="body2">
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut possimus
                                                reiciendis nobis quibusdam aperiam laborum quae, explicabo quo ea sit
                                                molestias? Ea sequi repellat necessitatibus veritatis asperiores mollitia
                                                expedita quibusdam.
                                            </Typography>
                                        </ListItemText>
                                    </ListItem>
                                </List>
                            ))}
                        {true && (
                            <Typography variant="body1" p={2}>
                                Chào mừng bạn đến với VieJoy  ^.^
                            </Typography>
                        )}
                    </Box>
                </Box>
            </HoverPopover>
        </>
    );
}

export default Notification;
