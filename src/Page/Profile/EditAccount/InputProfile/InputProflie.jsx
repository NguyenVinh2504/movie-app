import { Typography } from '@mui/material';
import { memo } from 'react';
import Input from '~/components/Input';

function InputProfile({ label, disable, value, onChange, name, error, helperText, inputEvent,...props }) {
    return (
        <>
            <Typography variant="subtitle1" fontWeight={500} mb={0.2}>
                {label}
            </Typography>
            <Input
                name={name}
                disable={disable}
                value={value}
                error={error}
                helperText={helperText}
                onChange={onChange}
                inputEvent={{
                    disabled: disable,
                    ...inputEvent
                }}
                {...props}
            />
        </>
    );
}

export default memo(InputProfile);
