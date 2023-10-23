import { Box, Typography } from '@mui/material';

function InfoPage() {
    return (
        <Box>
            <Typography mb={2} variant="h5">
                Thong tin ca nhan
            </Typography>
            <Box>
                <Typography variant="h6">Ho ten</Typography>
            </Box>
        </Box>
    );
}

export default InfoPage;
