import { memo, useEffect, useRef, useState } from 'react';
import { Box, Typography, useMediaQuery, Skeleton, ButtonBase } from '@mui/material';
import uiConfigs from '~/config/ui.config';
function OverviewMovieDetail({ loading, dataDetail }) {
    const pointDownSm = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const [seeMore, setSeeMore] = useState(false);
    const [heightBody, setHightBody] = useState(null);
    const bodyText = useRef();
    useEffect(() => {
        if (bodyText.current) {
            const heightBody = bodyText.current.getBoundingClientRect();
            setHightBody(heightBody.height);
        }
    }, [loading]);
    return (
        <Box sx={{ marginTop: 3 }}>
            <Typography variant={pointDownSm ? 'h6' : 'h5'} mb={1} fontWeight={'500'}>
                Mô tả
            </Typography>
            {loading ? (
                <Skeleton variant="rounded" height={'150px'} width={'100%'} />
            ) : (
                <>
                    <Box ref={bodyText}>
                        <Typography
                            variant={pointDownSm ? 'body2' : 'body1'}
                            sx={{ ...uiConfigs.style.typoLines(!seeMore && heightBody > 41.6 ? 2 : 'none') }}
                        >
                            {dataDetail.overview}
                        </Typography>
                    </Box>
                    {heightBody > 41.6 && (
                        <ButtonBase onClick={() => setSeeMore(!seeMore)}>
                            <Typography variant={pointDownSm ? 'body2' : 'body1'} fontWeight={'500'}>
                                {seeMore ? 'Ẩn bớt' : 'Xem Thêm'}
                            </Typography>
                        </ButtonBase>
                    )}
                </>
            )}
        </Box>
    );
}

export default memo(OverviewMovieDetail);
