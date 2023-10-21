const uiConfigs = {
    style: {
        typoLines: (lines) => ({
            display: '-webkit-box',
            overflow: 'hidden',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: lines,
            whiteSpace: 'normal',
            textOverflow: 'ellipsis',
        }),
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
                width: '8px',
            },
            '&::-webkit-scrollbar-track': {
                backgroundColor: 'transparent',
            },
            '&::-webkit-scrollbar-thumb': {
                backgroundColor: 'rgba(255,255,255,0.5)',
                borderRadius: '6px',
                width: '8px',
            },
        },
    },
};

export default uiConfigs;
