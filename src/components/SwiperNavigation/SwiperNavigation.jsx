import { Box } from '@mui/material';
function SwiperNavigation({ children }) {
    return (
        <Box
            sx={{
                width: '100%',
                '.swiper-button-next, .swiper-button-prev': {
                    color: 'white',
                    borderRadius: '100px',
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    width: '50px',
                    height: '50px',
                    '&::after': {
                        fontSize: 21,
                    },
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
                },
            }}
        >
            {children}
        </Box>
    );
}

export default SwiperNavigation;
