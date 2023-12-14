import { memo, useEffect, useRef, useState } from 'react';
import { Box, Typography, useMediaQuery, Skeleton } from '@mui/material';
import uiConfigs from '~/config/ui.config';
function OverviewMovieDetail({ loading, dataDetail }) {
    const pointDownSm = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const [seeMore, setSeeMore] = useState(false);
    const [heightBody, setHightBody] = useState(null);
    const bodyText = useRef();
    useEffect(() => {
        if (bodyText.current) {
            const getElement = bodyText.current.getBoundingClientRect();
            setHightBody(getElement.height);
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
                    <Box sx={{ height: heightBody ? 'auto' : 47.35, overflow: 'hidden' }}>
                        <Typography
                            ref={bodyText}
                            variant={pointDownSm ? 'body2' : 'body1'}
                            sx={{ ...uiConfigs.style.typoLines(!seeMore && heightBody > 47.4 ? 2 : 'none') }}
                        >
                            {dataDetail.overview}
                        </Typography>
                    </Box>
                    {heightBody > 47.4 && (
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
