// import { Box, Typography } from '@mui/material';
// import images from '~/assets/image';
// import { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { globalLoadingValue } from '~/redux/selectors';
// import uiConfigs from '~/config/ui.config';
// import theme from '~/theme';

// function GlobalLoading() {
//     // const [isLoading, setIsLoading] = useState(true);
//     // const [shouldRender, setRender] = useState(true);
//     // const globalLoading = useSelector(globalLoadingValue);
//     // useEffect(() => {
//     //     if (globalLoading) {
//     //         // document.querySelector('body').style.cssText = 'overflow: hidden';
//     //         setIsLoading(true);
//     //     } else {
//     //         setTimeout(() => {
//     //             setIsLoading(false);
//     //             document.querySelector('body').removeAttribute('style');
//     //         }, 500);
//     //     }
//     // }, [globalLoading]);
//     // const handleOnAnimationEnd = () => {
//     //     if (!isLoading) setRender(false);
//     // };
//     return (
//         // shouldRender && (
//         //     <Box
//         //         sx={{
//         //             opacity: isLoading ? 1 : 0,
//         //             transition: `opacity 0.3s ${theme.transitions.easing.easeOut}`,
//         //             ...uiConfigs.style.positionFullSize,
//         //             position: 'fixed',
//         //             bottom: 0,
//         //             zIndex: '10000',
//         //             background: 'black',
//         //             flexDirection: 'column',
//         //             display: 'flex',
//         //             justifyContent: 'center',
//         //             alignItems: 'center',
//         //         }}
//         //         onTransitionEnd={handleOnAnimationEnd}
//         //     >
//         //         <Box sx={{ width: { xs: '45%', sm: 'auto' }, mt: { xs: '-20%', sm: '0' } }}>
//         //             <img src={images.logo} alt="Logos" loading="lazy" />
//         //         </Box>
//         //         <Typography position={'absolute'} bottom={0} mb={2} variant="subtitle2">
//         //             Powered by Nguyen Vinh
//         //         </Typography>
//         //         {/* <Box
//         //         sx={{
//         //             width: '110px',
//         //             height: '60px',
//         //             padding: '10px',
//         //             // boxSizing: 'border-box',
//         //             display: 'flex',
//         //             justifyContent: 'space-between',
//         //             background: 'black',
//         //             filter: 'blur(5px) contrast(10) hue-rotate(60deg)',
//         //             ':before,\n:after': {
//         //                 content: '""',
//         //                 width: '30px',
//         //                 height: '30px',
//         //                 borderRadius: '50%',
//         //                 background: '#ff00ff',
//         //                 animation: 'l3 0.8s infinite alternate',
//         //             },
//         //             ':after': { '--s': '-1' },
//         //             '@keyframes l3': {
//         //                 '90%,100%': { transform: 'translate(calc(var(--s,1)*30px))' },
//         //             },
//         //         }}
//         //     ></Box> */}
//         //     </Box>
//         // )
//         <></>
//     );
// }

// export default GlobalLoading;
