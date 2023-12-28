import { Box, Stack, Typography } from '@mui/material';
import { forwardRef } from 'react';
import { memo } from 'react';
const root = {
    backgroundprimary: '#0c0a0a',
    primary: '#ec0101',
    //input
    backgroundDefaultInput: '#2d2c2c',
    backgroundDisableInput: '#232222',
    textDefaultInput: '#848383',
    textErrorInput: '#eb3942',
    textValueInput: '#edebeb',
    borderTypingInput: '#848383',
    borderFocusInput: '#5d5c5c',
    borderErrorInput: '#eb3942',
    borderSuccessInput: '#44ed70',
    borderDisableInput: '#2d2c2c',
};

const Input = forwardRef(
    (
        {
            disable,
            success,
            placeholder,
            error,
            helperText,
            round,
            leftIcon,
            rightIcon,
            iconRightEvent,
            inputEvent,
            iconLeftEvent,
            ...props
        },
        ref,
    ) => {
        return (
            <Stack sx={{ width: '100%' }} spacing={0.5}>
                <Box
                    sx={{
                        backgroundColor: disable ? root.backgroundDisableInput : root.backgroundDefaultInput,
                        pointerEvents: disable && 'none',
                        display: 'flex',
                        width: '100%',
                        borderRadius: round ? '100px' : 1,
                        position: 'relative',
                        border: `1px solid ${
                            disable
                                ? root.borderDisableInput
                                : error
                                ? `${root.borderErrorInput}!important`
                                : 'transparent'
                        }`,
                        padding: '0px 8px 0px 16px',
                        gap: '8px',
                        input: {
                            color: root.textDefaultInput,
                            fontSize: '1rem',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            lineHeight: '45px',
                            letterSpacing: '0.03125rem',
                            width: '100%',
                            '&:not(:placeholder-shown)': { color: root.textValueInput },
                        },
                        '&:hover': { border: `1px solid ${root.borderFocusInput}` },
                        '&:focus-within': { border: `1px solid ${root.borderTypingInput}` },
                    }}
                >
                    {leftIcon && (
                        <button {...iconLeftEvent}>
                            <Box component={'span'} sx={{ display: 'flex', alignItems: 'center' }}>
                                {leftIcon}
                            </Box>
                        </button>
                    )}
                    <input
                        placeholder={placeholder}
                        spellCheck={false}
                        {...inputEvent}
                        {...props}
                        ref={ref}
                        autoComplete="off"
                    ></input>
                    {rightIcon && (
                        <button {...iconRightEvent}>
                            <Box component={'span'} sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                                {rightIcon}
                            </Box>
                        </button>
                    )}
                </Box>
                {helperText && (
                    <Typography variant="caption" mt={0} color={root.textErrorInput}>
                        {helperText}
                    </Typography>
                )}
            </Stack>
        );
    },
);

export default memo(Input);
