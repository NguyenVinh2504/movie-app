import { Typography } from '@mui/material';
import { memo } from 'react';
import Input from '~/components/Input';

function InputProfile({ label, disable, value, onChange, name, error, helperText, inputEvent, ...props }) {
    return (
        <>
            <Typography
                variant="subtitle1"
                component={'label'}
                display={'block'}
                fontWeight={500}
                mb={0.2}
                htmlFor={name}
            >
                {label}
            </Typography>
            <Input
                name={name}
                id={name}
                disable={disable}
                value={value}
                error={error}
                helperText={helperText}
                onChange={onChange}
                inputEvent={{
                    disabled: disable,
                    ...inputEvent,
                }}
                {...props}
            />
        </>
    );
}

export default memo(InputProfile);
