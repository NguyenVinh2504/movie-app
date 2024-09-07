import { Box, Divider, Typography, useMediaQuery } from '@mui/material';
import WrapperMovieDetail from '../components/WrapperMovieDetail';
import CategoryMovieDetail from '../components/CategoryMovieDetail';
import TextFieldComment from './TextFieldComment';
import CommentItem from './CommentItem';
import { useQuery } from '@tanstack/react-query';
import publicClient from '~/api/client/public.client';
import { API_ROOT } from '~/utils/constants';
import { memo, useEffect, useState } from 'react';
import privateClient from '~/api/client/private.client';
import { useSelector } from 'react-redux';
import { isAuthenticated } from '~/redux/selectors';

import { socket } from '~/context/Socket';

function CommentMedia({ movieId, mediaType }) {
    const pointDownSm = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const isLogged = useSelector(isAuthenticated);
    const [listComment, setListComment] = useState([]);
    const { data } = useQuery({
        queryKey: ['LIST_COMMENT', movieId],
        queryFn: async () => {
            const response = await publicClient.get(
                `${API_ROOT}/api/v1/comment/get-comment/${mediaType}/${movieId}`,
            );
            return response.data;
        },
        staleTime: 0,
        enabled: !!movieId,
    });
    const sortComment = (data) => {
        if (!Array.isArray(data)) return [];
        const newDataSort = [...data].sort((a, b) => {
            return new Date(b.createAt) - new Date(a.createAt);
        });
        return newDataSort;
    };
    useEffect(() => {
        if (!data) return;
        const newDataSort = sortComment(data);
        setListComment(newDataSort);
    }, [data]);

    // useEffect(() => {
    //     console.table(listComment);
    //     console.log('movieId', movieId);
    //     console.log('data', data);
    // });

    useEffect(() => {
        if (!movieId) return;
        socket.connect();
        socket.emit('joinMovieRoom', movieId);
        socket.on('newComment', (newComments) => {
            // Cập nhật giao diện với danh sách bình luận mới
            console.log('Received new comments:', newComments);
            setListComment(sortComment(newComments));
        });
        return () => {
            socket.disconnect();
        };
    }, [movieId]);

    const handleSubmit = async (values) => {
        try {
            await privateClient.post(`${API_ROOT}/api/v1/comment/add-comment`, {
                movieId,
                movieType: mediaType,
                content: values.comment,
            });
        } catch (error) {}
    };

    return (
        <WrapperMovieDetail>
            <CategoryMovieDetail valueTitle={'Bình luận'} />
            <Box mt={2}>
                {/* input comment */}
                {isLogged && (
                    <>
                        <TextFieldComment onSubmit={handleSubmit} />
                        <Divider sx={{ my: 2 }} />
                    </>
                )}
                <Typography
                    variant={pointDownSm ? 'body1' : 'h6'}
                    fontWeight={500}
                    component={'p'}
                    mt={2}
                >
                    {`${listComment?.length} bình luận`}
                </Typography>
                {/* List Comment  */}
                {listComment.length > 0 ? (
                    <Box mt={1}>
                        {/* Comment User  */}
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
                )}
            </Box>
        </WrapperMovieDetail>
    );
}

export default memo(CommentMedia);
