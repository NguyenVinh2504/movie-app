import { styled, TextField } from '@mui/material';
import { memo } from 'react';
const CustomTextField = styled((props) => (
    <TextField
        multiline
        placeholder="Viết bình luận"
        variant="standard"
        color="secondary"
        fullWidth
        inputProps={{
            maxLength: 400,
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiFormLabel-root': {
        color: 'white',
        fontSize: '1.15rem',
        '& .Mui-focused': {
            color: 'white',
        },
    },
    '& .MuiFormHelperText-root': {
        color: 'white',
        fontSize: '0.875rem',
        textAlign: 'right',
    },
    '& .MuiInputBase-root': {
        color: 'white',
        '&::before': {
            borderBottom: '1px solid rgb(255, 255, 255, 0.5)',
        },
        '&.Mui-focused': {
            '&::after': {
                borderBottom: '1px solid rgb(255, 255, 255)',
            },
        },
        '&:hover': {
            '&::before': {
                borderBottom: '1px solid rgb(255, 255, 255, 0.5) !important',
            },
        },
    },
}));
function TextFieldInput(props) {
    return <CustomTextField {...props} />;
}

export default memo(TextFieldInput);
