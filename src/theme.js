import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
    typography: {
        h1: {
            fontSize: '6rem',
            fontStyle: 'normal',
            lineHeight: '7rem' /* 116.667% */,
            letterSpacing: '-0.09375rem',
        },
        h2: {
            fontSize: '3.75rem',
            fontStyle: 'normal',
            lineHeight: '3.5rem' /* 116.667% */,
            letterSpacing: '-0.03125rem',
        },
        h3: {
            fontSize: '3rem',
            fontStyle: 'normal',
            lineHeight: '3.5rem' /* 116.667% */,
        },
        h4: {
            fontSize: '2.125rem',
            fontStyle: 'normal',
            lineHeight: '2.25rem' /* 116.667% */,
        },
        h5: {
            fontSize: '1.5rem',
            fontStyle: 'normal',
            lineHeight: '1.5rem' /* 116.667% */,
        },
        h6: {
            fontSize: '1.25rem',
            fontStyle: 'normal',
            lineHeight: '1.5rem' /* 116.667% */,
            letterSpacing: '0.00938rem',
        },
        subtitle1: {
            fontSize: '1rem',
            fontStyle: 'normal',
            lineHeight: '1.5rem' /* 116.667% */,
            letterSpacing: '0.00938rem',
        },
        subtitle2: {
            fontSize: '0.875rem',
            fontStyle: 'normal',
            lineHeight: '1.5rem' /* 116.667% */,
            letterSpacing: '0.00625rem',
        },
        body1: {
            fontSize: '1rem',
            fontStyle: 'normal',
            lineHeight: '1.5rem' /* 116.667% */,
            letterSpacing: '0.03125rem',
        },
        body2: {
            fontSize: '0.875rem',
            fontStyle: 'normal',
            lineHeight: '1.25rem' /* 116.667% */,
            letterSpacing: '0.01563rem',
        },
        caption: {
            fontSize: '0.75rem',
            fontStyle: 'normal',
            lineHeight: '1rem' /* 116.667% */,
            letterSpacing: '0.025rem',
        },
        overline: {
            fontSize: '0.625rem',
            fontStyle: 'normal',
            lineHeight: '1rem' /* 116.667% */,
            letterSpacing: '0.09375rem',
        },
    },
    movie: {
        topBarHeight: '64px',
        background: '#0c0a0a',
        backgroundGradient:
            'linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4766281512605042) 31%, rgba(0,0,0,1) 92%)',
        action: {
            backgroundHover: '#2D2C2C',
        },
    },
    button: {
        neutralButton: {
            solid: {
                default: '#2D2C2C',
                hover: '#4B4949',
                active: '#FFF',
                text: '#fff',
                textActive: '#000',
            },
        },
    },
    mediaItems: {
        background: 'rgba(255, 255, 255, 0.08)',
        text: 'white',
        textOverview: 'rgba(255, 255, 255, 0.50)',
        iconHeart: '#ec0101',
        borderRadius: '5px',
    },
    palette: {
        primary: {
            main: '#ec0101',
        },
        secondary: {
            main: '#2D2C2C',
        },
        error: {
            main: '#EB3942',
        },
    },
    components: {
        MuiButton: {
            variants: [
                {
                    props: { color: 'primary' },
                    style: {
                        height: '40px',
                        padding: '0 15px',
                        '&:hover': {
                            backgroundColor: 'rgba(236, 1, 1, 0.80)',
                        },
                        '&:active': {
                            backgroundColor: 'rgba(236, 1, 1, 0.60)',
                        },
                    },
                },
                {
                    props: { color: 'secondary' },
                    style: {
                        height: '40px',
                        padding: '0 15px',
                        '&:hover': {
                            backgroundColor: '#4B4949',
                        },
                    },
                },
                {
                    props: { size: 'large' },
                    style: {
                        height: '3.125rem',
                        minWidth: '5rem',
                        padding: '0rem 1.5rem',
                    },
                },
                {
                    props: { size: 'small' },
                    style: {
                        height: '1.875rem',
                        minWidth: '3rem',
                        padding: '0rem 0.75rem',
                        fontSize: '12px',
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
                            backgroundColor: '#2D2C2C',
                        },
                        '&:active': {
                            backgroundColor: '#4B4949',
                        },
                    },
                },
            ],
        },
        MuiCssBaseline: {
            styleOverrides: `
            * {
            box-sizing: border-box;
        }
        
        body {
            font-size: 1.6rem;
            line-height: 1.5rem;
            text-rendering: optimizeSpeed;
            margin: 0;
            overflow-y: overlay;
            padding: 0;
            background-color: #0c0a0a;
            color: white !important;
        }
        
        img {
            display: block;
        }
        
        a {
            color: var(--black);
            text-decoration: none;
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