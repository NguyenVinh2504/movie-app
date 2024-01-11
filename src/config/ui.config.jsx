const uiConfigs = {
    style: {
        transformIn: `
            from {
                transform: translateX(-200%);
            }
            to {
                transform: translateX(0);
            }       
        `,
        transformOut: `
            from {
                transform: translateX(0);
            }
            to {
                transform: translateX(200%);
            }       
        `,
        typoLines: (lines) => ({
            display: '-webkit-box',
            overflow: 'hidden',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: lines,
            whiteSpace: 'normal',
            textOverflow: 'ellipsis',
        }),
        positionFullSize: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
        },
        centerAlight: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        },
        gradientBgImage: {
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
        },
        scroll: {
            '&::-webkit-scrollbar': {
                width: {xs: '0px',sm: '8px'},
            },
            '&::-webkit-scrollbar-track': {
                backgroundColor: 'transparent',
            },
            '&::-webkit-scrollbar-thumb': {
                backgroundColor: 'rgba(255,255,255,0.5)',
                borderRadius: '6px',
                width: {xs: '0px',sm: '8px'},
            },
        },
    },
};

export default uiConfigs;
