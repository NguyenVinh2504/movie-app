import { memo, useEffect, useRef, useState } from 'react';
import { Box, Typography, useMediaQuery, Skeleton } from '@mui/material';
import uiConfigs from '~/config/ui.config';

function OverviewMovieDetail({ loading = false, content }) {
    const pointDownSm = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const [seeMore, setSeeMore] = useState(false);
    const [heightBody, setHightBody] = useState(false);
    const bodyText = useRef();

    useEffect(() => {
        if (bodyText.current) {
            setHightBody(
                bodyText.current.scrollHeight !== bodyText.current.clientHeight,
            );
        }
    }, [loading]);
    return (
        <>
            {loading ? (
                <Skeleton variant="rounded" height={'150px'} width={'100%'} />
            ) : (
                <Box
                    onClick={() => {
                        if (heightBody) setSeeMore(!seeMore);
                    }}
                    sx={{ cursor: heightBody ? 'pointer' : 'initial' }}
                >
                    <Typography
                        ref={bodyText}
                        variant={pointDownSm ? 'body2' : 'body1'}
                        sx={{
                            ...uiConfigs.style.typoLines(seeMore ? 'none' : 2),
                            wordBreak: 'break-word',
                        }}
                    >
                        {content || 'Không có nội dung'}
                    </Typography>
                    {heightBody && (
                        <Typography
                            variant={pointDownSm ? 'body2' : 'body1'}
                            fontWeight={'500'}
                        >
                            {seeMore ? 'Ẩn bớt' : 'Xem Thêm'}
                        </Typography>
                    )}
                </Box>
            )}
        </>
    );
}

export default memo(OverviewMovieDetail);
