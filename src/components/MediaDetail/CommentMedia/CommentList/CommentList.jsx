import { Box, Button, Stack, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import CommentItem from '../CommentItem';
import { SvgSpinners3DotsBounce } from '~/components/Icon';

function CommentList({
    listComment,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    onLoadingMore,
}) {
    const pointDownSm = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    return (
        <>
            {!isLoading &&
                (listComment.length > 0 ? (
                    <Box mt={1}>
                        {listComment?.map((item) => (
                            <CommentItem key={item._id} {...item} />
                        ))}
                    </Box>
                ) : (
                    <Typography
                        variant={pointDownSm ? 'body1' : 'h6'}
                        component={'p'}
                        mt={2}
                        textAlign={'center'}
                    >
                        Chưa có bình luận nào
                    </Typography>
                ))}
            {(isLoading || isFetchingNextPage) && (
                <Stack mt={1} alignItems={'center'} width={'100%'}>
                    <SvgSpinners3DotsBounce />
                </Stack>
            )}
            {!isFetchingNextPage && hasNextPage && !isLoading && (
                <Stack mt={1} justifyContent={'center'} flexDirection={'row'}>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={onLoadingMore}
                    >
                        Xem Thêm
                    </Button>
                </Stack>
            )}
        </>
    );
}

export default CommentList;
