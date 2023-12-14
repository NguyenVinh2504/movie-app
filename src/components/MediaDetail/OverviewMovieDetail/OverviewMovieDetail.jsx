import { memo, useEffect, useRef, useState } from 'react';
import { Box, Typography, useMediaQuery, Skeleton } from '@mui/material';
import uiConfigs from '~/config/ui.config';
function OverviewMovieDetail({ loading, dataDetail }) {
    const pointDownSm = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const [seeMore, setSeeMore] = useState(false);
    const [heightBody, setHightBody] = useState(true);
    const bodyText = useRef();
    useEffect(() => {
        if (bodyText.current) {
            setHightBody(bodyText.current.scrollHeight !== bodyText.current.clientHeight);
        }
    }, [loading]);
    return (
        <Box sx={{ marginTop: 3 }}>
            <Typography variant={pointDownSm ? 'h6' : 'h5'} fontWeight={'500'}>
                Mô tả
            </Typography>
            {loading ? (
                <Skeleton variant="rounded" height={'150px'} width={'100%'} />
            ) : (
                <Box onClick={() => setSeeMore(!seeMore)} sx={{ cursor: 'pointer' }}>
                    <Typography
                        ref={bodyText}
                        variant={pointDownSm ? 'body2' : 'body1'}
                        sx={{ ...uiConfigs.style.typoLines(seeMore ? 'none' : 2) }}
                    >
                        {dataDetail.overview}
                    </Typography>
                    {heightBody && (
                        <Typography variant={pointDownSm ? 'body2' : 'body1'} fontWeight={'500'}>
                            {seeMore ? 'Ẩn bớt' : 'Xem Thêm'}
                        </Typography>
                    )}
                </Box>
            )}
        </Box>
    );
}

export default memo(OverviewMovieDetail);
