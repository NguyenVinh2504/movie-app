import { Box, IconButton, Stack, Typography } from '@mui/material';
import { memo, useCallback, useState } from 'react';
import Avatar from '~/components/Avatar';
import ModalAvatarEdit from './ModalAvatarEdit/ModalAvatarEdit';

function AvatarEdit() {
    const [open, setOpen] = useState(false);
    const handleOpen = useCallback(() => {
        setOpen(true);
    }, []);
    const handleClose = useCallback((ourRequestToken) => {
        // ourRequestToken.cancel('Huy cap nhat avatar');
        setOpen(false);
    }, []);
    return (
        <>
            <Stack direction={'row'} alignItems={'center'} gap={2}>
                <Box>
                    <Typography variant="subtitle1" fontWeight={500} mb={0.2}>
                        Avatar
                    </Typography>
                    <Typography variant="subtitle2" fontWeight={300} mb={0.2}>
                        Nên là ảnh vuông, chấp nhận các tệp: JPG, PNG.
                    </Typography>
                </Box>
                <IconButton sx={{ width: '75px' }} onClick={handleOpen}>
                    <Avatar />
                </IconButton>
            </Stack>
            {open && <ModalAvatarEdit handleClose={handleClose} open={open} />}
        </>
    );
}

export default memo(AvatarEdit);
