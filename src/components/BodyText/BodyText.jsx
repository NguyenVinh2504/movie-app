import { memo, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Box, Typography, useMediaQuery, Skeleton } from '@mui/material';
import uiConfigs from '~/config/ui.config';

function BodyText({ loading = false, content }) {
    const pointDownSm = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    const [isExpanded, setIsExpanded] = useState(false);
    const [isOverflowing, setIsOverflowing] = useState(false);

    const bodyText = useRef();

    useLayoutEffect(() => {
        if (bodyText.current) {
            setIsOverflowing(
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
                        if (isOverflowing) setIsExpanded(!isExpanded);
                    }}
                    sx={{ cursor: isOverflowing ? 'pointer' : 'initial' }}
                >
                    <Typography
                        ref={bodyText}
                        variant={pointDownSm ? 'body2' : 'body1'}
                        sx={{
                            ...uiConfigs.style.typoLines(
                                isExpanded ? 'none' : 2,
                            ),
                            wordBreak: 'break-word',
                        }}
                    >
                        {content || 'Không có nội dung'}
                    </Typography>
                    {isOverflowing && (
                        <Typography
                            variant={pointDownSm ? 'body2' : 'body1'}
                            fontWeight={'500'}
                        >
                            {isExpanded ? 'Ẩn bớt' : 'Xem Thêm'}
                        </Typography>
                    )}
                </Box>
            )}
        </>
    );
}

export default memo(BodyText);
