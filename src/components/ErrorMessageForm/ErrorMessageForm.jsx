import { ErrorOutline } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

function ErrorMessageForm({ children }) {
    return (
        <Box
            sx={{
                bgcolor: 'rgba(236,1,1,.05)',
                border: '1px solid rgba(236,1,1,.4)',
                padding: 1,
                borderRadius: '0.125rem',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
            }}
        >
            <ErrorOutline />
            <Typography variant="subtitle2">{children}</Typography>
        </Box>
    );
}

export default ErrorMessageForm;
