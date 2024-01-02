import { createTheme } from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';
// A custom theme for this app
const Color = {
    primary: '#ec0101',
    secondary: '#2D2C2C',
    background: '#0c0a0a',
};
const theme = createTheme({
    typography: {
        h1: {
            fontSize: '3.8125rem',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '1.15',
        },
        h2: {
            fontSize: '3.0625rem',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '1.15',
        },
        h3: {
            fontSize: '2.4375rem',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '1.15',
        },
        h4: {
            fontSize: '1.9375rem',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '1.15',
        },
        h5: {
            fontSize: '1.5625rem',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '1.15',
        },
        h6: {
            fontSize: '1.25rem',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '1.15',
        },
        subtitle1: {
            fontSize: '1rem',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '1.48',
        },
        subtitle2: {
            fontSize: '0.875rem',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '1.48',
        },
        body1: {
            fontSize: '1rem',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '1.48',
        },
        body2: {
            fontSize: '0.875rem',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '1.48',
        },
        caption: {
            fontSize: '0.75rem',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '1.6',
        },
        overline: {
            fontSize: '0.5rem',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '1',
        },
    },
    movie: {
        topBarHeight: '64px',
        background: Color.background,
        backgroundAppBarScroll: '#1f1d1d',
        backgroundGradient:
            'linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4766281512605042) 31%, rgba(0,0,0,1) 92%)',
        action: {
            backgroundHover: Color.secondary,
        },
    },
    listItems: {
        backgroundActive: `${Color.primary}!important`,
        backgroundHover: Color.secondary,
    },

    button: {
        neutralButton: {
            solid: {
                default: Color.secondary,
                hover: '#4B4949',
                active: '#FFF',
                text: '#fff',
                textActive: '#000',
            },
        },
    },
    mediaItems: {
        // background: 'rgba(255, 255, 255, 0.08)',
        background: '#141212',
        text: 'white',
        textOverview: 'rgba(255, 255, 255, 0.50)',
        iconHeart: Color.primary,
        borderRadius: '5px',
    },
    palette: {
        primary: {
            main: Color.primary,
        },
        secondary: {
            main: Color.secondary,
        },
    },
    components: {
        MuiPaper: {
            variants: [
                {
                    props: { variant: 'outlined' },
                    style: {
                        backgroundColor: '#141212',
                        borderRadius: '8px',
                        border: '1px solid hsla(0,0%,100%,.1)',
                        color: 'white'
                    },
                },
            ],
        },
        MuiAppBar: {
            defaultProps: {
                elevation: 0
            },
            styleOverrides: {
                root: {
                    backgroundColor: Color.background
                }
            }
        },
        MuiPopover: {
            defaultProps: {
                elevation: 0
            },
            styleOverrides: {
                root: {
                    '& .MuiPopover-paper': {
                        // backgroundColor: '#141212',
                        backgroundColor: Color.background,
                        border: '1px solid hsla(0,0%,100%,.1)',
                        color: 'white',
                        borderRadius: 8
                    },
                },
            },
        },
        MuiDialog: {
            styleOverrides: {
                root: {
                    '& .MuiDialog-paper': {
                        backgroundColor: Color.background,
                    },
                },
            },
        },
        MuiDialogTitle: {
            styleOverrides: {
                root: {
                    color: 'white',
                    fontWeight: '500',
                },
            },
        },
        MuiDialogContentText: {
            styleOverrides: {
                root: {
                    color: 'white',
                    fontWeight: '400',
                },
            },
        },
        MuiSkeleton: {
            styleOverrides: {
                root: {
                    backgroundColor: '#2d2c2c',
                },
            },
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    '::before': {
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                    },
                    '::after': {
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                    },
                },
            },
        },
        MuiButton: {
            defaultProps: {
                disableElevation: true,
            },
            variants: [
                {
                    props: { variant: 'pill-outline' },
                    style: {
                        borderRadius: '100px',
                    },
                },
                {
                    props: { color: 'white-outline' },
                    style: {
                        border: '1px solid hsla(0,0%,100%,.2)',
                        backgroundColor: 'hsla(0, 0%, 52%, 0.1)',
                        lineHeight: '42px',
                        '&:hover': {
                            color: 'white',
                            backgroundColor: 'hsla(0, 0%, 52%, 0.2)',
                            border: '1px solid hsla(0,0%,100%,.3)',
                        },
                        '@media (hover: none)': {
                            '&:hover': {
                                backgroundColor: 'hsla(0, 0%, 52%, 0.1)',
                                border: '1px solid hsla(0,0%,100%,.2)',
                            },
                        },
                    },
                },
                {
                    props: { color: 'primary' },
                    style: {
                        '&:hover': {
                            backgroundColor: 'rgba(236, 1, 1, 0.80)',
                        },
                        '@media (hover: none)': {
                            '&:hover': {
                                backgroundColor: Color.primary,
                            },
                        },
                        '&:active': {
                            backgroundColor: 'rgba(236, 1, 1, 0.60)',
                        },
                    },
                },
                {
                    props: { color: 'secondary' },
                    style: {
                        '&:hover': {
                            backgroundColor: '#4B4949',
                        },
                        '@media (hover: none)': {
                            '&:hover': {
                                backgroundColor: Color.secondary,
                            },
                        },
                    },
                },
                {
                    props: { size: 'medium' },
                    style: {
                        padding: '0 15px',
                        lineHeight: '44px',
                    },
                },
                {
                    props: { size: 'large' },
                    style: {
                        minWidth: '5rem',
                        padding: '0 1.5rem',
                        fontSize: '1.25rem',
                        lineHeight: '50px',
                    },
                },
                {
                    props: { size: 'small' },
                    style: {
                        minWidth: '3rem',
                        padding: '0 0.75rem',
                        fontSize: '0.8125rem',
                        lineHeight: '38px',
                    },
                },
            ],
        },
        MuiIconButton: {
            variants: [
                {
                    props: { color: 'neutral' },
                    style: {
                        '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        },
                        '@media (hover: none)': {
                            '&:hover': {
                                backgroundColor: 'transparent',
                            },
                        },
                        '&:active': {
                            backgroundColor: 'rgba(255, 255, 255, 0.4)!important',
                        },
                    },
                },
                {
                    props: { color: 'secondNeutral' },
                    style: {
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        },
                        '@media (hover: none)': {
                            '&:hover': {
                                backgroundColor: 'rgba(0,0,0,0.5)',
                            },
                        },
                        '&:active': {
                            backgroundColor: 'rgba(255, 255, 255, 0.4)!important',
                        },
                    },
                },
            ],
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    '&.Mui-selected': {
                        backgroundColor: `${Color.primary}!important`,
                    },
                    ':hover': {
                        backgroundColor: Color.secondary,
                    },
                },
            },
        },
        MuiCssBaseline: {
            styleOverrides: `
            * {
            box-sizing: border-box;
            scrollbar-width: auto;
            scrollbar-color: rgba(255,255,255,0.5);
          }
        
          /* Chrome, Edge, and Safari */
          *::-webkit-scrollbar {
            width: 8px;
          }
        
          *::-webkit-scrollbar-track {
            background: transparent;
          }
        
          *::-webkit-scrollbar-thumb {
            border-radius: 100px;
            background: rgba(255,255,255,0.5);
          }
        body {
            font-size: 1.6rem;
            line-height: 1.5rem;
            margin: 0;
            overflow-y: overlay;
            padding: 0;
            background-color: #0c0a0a;
            color: white !important;
        }
        img {
            display: block;
            width: 100%;
            height: 100%;
        }

        a {
            color: var(--black);
            text-decoration: none;
        }
        
        /* Chrome, Safari, Edge, Opera */
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        
        /* Firefox */
        input[type=number] {
          -moz-appearance: textfield;
        }

        button,
        input,
        [tabindex] {
            outline: none;
            border: none;
            padding: 0;
            background-color: transparent;
        }
        
            `,
        },
    },
});
export default theme;
