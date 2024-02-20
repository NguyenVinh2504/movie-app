import { Stack, Typography } from '@mui/material';

import UpdatePassword from './UpdatePassword/UpdatePassword';
import DeleteUser from './DeleteUser/DeleteUser';
import PaperProfile from '../components/PaperProfile';

function SettingCategory({ children }) {
    return (
        <Typography variant="h6" mb={2} fontWeight={500}>
            {children}
        </Typography>
    );
}

function EditAccount() {

    return (
        <Stack spacing={2}>
            <Typography variant="body1">
                ⚠️Chỉ có thể thay đổi mật khẩu và xóa tài khoản đối với những tài khoản không đăng nhập bằng Google!
            </Typography>
            <SettingCategory>Thay đổi mật khẩu</SettingCategory>
            <PaperProfile>
                <UpdatePassword />
            </PaperProfile>
            <SettingCategory>Xóa tài khoản</SettingCategory>
            <PaperProfile>
                <DeleteUser />
            </PaperProfile>
        </Stack>
    );
}

export default EditAccount;
