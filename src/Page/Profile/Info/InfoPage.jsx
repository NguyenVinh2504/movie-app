import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { userValue } from '~/redux/selectors';
function InfoPage() {
    const user = useSelector(userValue);
    return (
        <Box>
            <Typography mb={2} variant="h5">
                Thong tin ca nhan
            </Typography>
            <Box>
                <Typography variant="h6">Ho ten</Typography>
                <Typography variant="subtitle1">{user?.name}</Typography>
            </Box>
        </Box>
    );
}

export default InfoPage;
