import { Box, ButtonBase, Stack, Typography } from '@mui/material';
import { memo, useCallback, useState } from 'react';
import ModalAvatarEdit from './ModalAvatarEdit/ModalAvatarEdit';
import AvatarUser from '~/components/Avatar/AvatarUser';

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
                    <Typography
                        variant="subtitle1"
                        component={'h2'}
                        fontWeight={500}
                        mb={0.2}
                    >
                        Avatar
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        component="p"
                        fontWeight={300}
                        mb={0.2}
                    >
                        Nên là ảnh vuông, chấp nhận các tệp: JPG, PNG.
                    </Typography>
                </Box>
                <ButtonBase onClick={handleOpen}>
                    <AvatarUser sx={{ width: '56px', height: '56px' }} />
                </ButtonBase>
            </Stack>
            {open && <ModalAvatarEdit handleClose={handleClose} open={open} />}
        </>
    );
}

export default memo(AvatarEdit);
