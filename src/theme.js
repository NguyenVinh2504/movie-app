import { createTheme } from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';
// A custom theme for this app
const Color = {
    primary: '#ec0101',
    secondary: '#2D2C2C',
};
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
            // fontWeight: '500',
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
        background: 'rgba(255, 255, 255, 0.08)',
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
        MuiButton: {
            defaultProps: {
                disableElevation: true,
            },
            variants: [
                {
                    props: { color: 'primary' },
                    style: {
                        height: '40px',
                        padding: '0 15px',
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
                        height: '40px',
                        padding: '0 15px',
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
            object-fit: cover;
            line-height: 0;
            width: 100%;
            height: 100%;
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
