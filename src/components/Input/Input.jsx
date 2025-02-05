import { Box, Stack, Typography } from '@mui/material';
import { forwardRef, useState } from 'react';
import { memo } from 'react';
import { EyeIcon, EyeSlashIcon } from '../Icon';
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
            isHepperText = true,
            ...props
        },
        ref,
    ) => {
        const [openEye, setOpenEye] = useState(false);
        const toggleEye = () => {
            setOpenEye((prev) => !prev);
        };
        return (
            <Stack sx={{ width: '100%' }}>
                <Box
                    sx={{
                        backgroundColor: disable
                            ? root.backgroundDisableInput
                            : root.backgroundDefaultInput,
                        pointerEvents: disable && 'none',
                        display: 'flex',
                        alignItems: 'center',
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
                        'button, input': {
                            backgroundColor: 'transparent',
                            padding: 0,
                        },
                        input: {
                            color: root.textDefaultInput,
                            fontSize: '1rem',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            lineHeight: '45px',
                            letterSpacing: '0.03125rem',
                            width: '100%',
                            '&:not(:placeholder-shown)': {
                                color: root.textValueInput,
                            },
                        },
                        '&:hover': {
                            border: `1px solid ${root.borderFocusInput}`,
                        },
                        '&:focus-within': {
                            border: `1px solid ${root.borderTypingInput}`,
                        },
                    }}
                >
                    {leftIcon && (
                        <button {...iconLeftEvent}>
                            <Box
                                component={'span'}
                                sx={{ display: 'flex', alignItems: 'center' }}
                            >
                                {leftIcon}
                            </Box>
                        </button>
                    )}
                    <input
                        placeholder={placeholder}
                        spellCheck={false}
                        {...inputEvent}
                        {...props}
                        type={openEye ? 'text' : props?.type}
                        ref={ref}
                        style={{
                            'input[type="number" i]': {
                                'writing-mode': 'horizontal-tb !important',
                            },
                        }}
                        autoComplete="off"
                    ></input>
                    {props?.type === 'password' && props?.value && (
                        <Box
                            component={'span'}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                cursor: 'pointer',
                            }}
                            onClick={toggleEye}
                        >
                            {!openEye ? <EyeIcon /> : <EyeSlashIcon />}
                        </Box>
                    )}
                    {rightIcon && (
                        <button {...iconRightEvent}>
                            <Box
                                component={'span'}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                }}
                            >
                                {rightIcon}
                            </Box>
                        </button>
                    )}
                </Box>
                {isHepperText && (
                    <Typography
                        variant="caption"
                        my={0.5}
                        color={root.textErrorInput}
                        minHeight={'16px'}
                        lineHeight={'1rem'}
                        display={'block'}
                    >
                        {helperText}
                    </Typography>
                )}
            </Stack>
        );
    },
);

export default memo(Input);
