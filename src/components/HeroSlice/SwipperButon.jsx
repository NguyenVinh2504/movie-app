import { IconButton, styled } from '@mui/material';

const SwiperButton = styled(IconButton)(({ theme }) => ({
    borderRadius: '100px',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    width: '50px',
    height: '50px',
    padding: '10px',
    position: 'absolute',
    zIndex: '10',
    top: '50%',
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    '@media (hover: none)': {
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
        },
    },
    '&:active': {
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
    },
    transform: 'translateY(-50%)',
    [theme.breakpoints.down('lg')]: {
        width: '50px',
        height: '50px',
    },
}));

export default SwiperButton;
