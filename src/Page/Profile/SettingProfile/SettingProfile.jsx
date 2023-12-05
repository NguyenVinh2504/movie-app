import { Box, Stack, Typography } from '@mui/material';

import UpdatePassword from './UpdatePassword/UpdatePassword';
import DeleteUser from './DeleteUser/DeleteUser';

function SettingCategory({ children }) {
    return (
        <Typography variant="h6" mb={2} fontWeight={500}>
            {children}
        </Typography>
    );
}

function ContainerSetting({ children }) {
    return (
        <Box bgcolor={'#141212'} borderRadius={2} border={'1px solid hsla(0,0%,100%,.1)'}>
            {children}
        </Box>
    );
}
function EditAccount() {
    // const dispatch = useDispatch();

    return (
        <Stack spacing={2}>
            <Typography variant="body1">
                ⚠️Chỉ có thể thay đổi mật khẩu và xóa tài khoản đối với những tài khoản không đăng nhập bằng Google!
            </Typography>
            <SettingCategory>Thay đổi mật khẩu</SettingCategory>
            <ContainerSetting>
                <UpdatePassword />
            </ContainerSetting>
            <SettingCategory>Xóa tài khoản</SettingCategory>
            <ContainerSetting>
                <DeleteUser />
            </ContainerSetting>
        </Stack>
    );
}

export default EditAccount;
