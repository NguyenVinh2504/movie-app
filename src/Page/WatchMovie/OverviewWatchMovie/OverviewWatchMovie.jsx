import { memo, useEffect, useRef, useState } from 'react';
import { Box, Typography, useMediaQuery, Skeleton, Paper } from '@mui/material';
import uiConfigs from '~/config/ui.config';

function OverviewWatchMovie({dataDetail}) {
    const pointDownSm = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const [seeMore, setSeeMore] = useState(false);
    const [heightBody, setHightBody] = useState(true);
    const bodyText = useRef();
    useEffect(() => {
        if (bodyText.current) {
            setHightBody(bodyText.current.scrollHeight !== bodyText.current.clientHeight);
        }
    }, []);
    return (
        <Paper variant="outlined" sx={{ mt: 1, p: 2 }}>
            <Typography variant={pointDownSm ? 'h6' : 'h5'} fontWeight={'500'} mb={1}>
                Mô tả
            </Typography>
            {false ? (
                <Skeleton variant="rounded" height={'150px'} width={'100%'} />
            ) : (
                <Box onClick={() => setSeeMore(!seeMore)} sx={{ cursor: 'pointer' }}>
                    <Typography
                        ref={bodyText}
                        variant={pointDownSm ? 'body2' : 'body1'}
                        sx={{ ...uiConfigs.style.typoLines(seeMore ? 'none' : 2) }}
                    >
                        {dataDetail.overview !== '' || dataDetail.overview === null
                            ? dataDetail.overview
                            : 'Không có nội dung'}
                    </Typography>
                    {heightBody && (
                        <Typography variant={pointDownSm ? 'body2' : 'body1'} fontWeight={'500'}>
                            {seeMore ? 'Ẩn bớt' : 'Xem Thêm'}
                        </Typography>
                    )}
                </Box>
            )}
        </Paper>
    );
}

export default OverviewWatchMovie;
