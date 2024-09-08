import { Box, Divider, Typography, useMediaQuery } from '@mui/material';
import WrapperMovieDetail from '../components/WrapperMovieDetail';
import CategoryMovieDetail from '../components/CategoryMovieDetail';
import TextFieldComment from './TextFieldComment';

import {
    useInfiniteQuery,
    keepPreviousData,
    useMutation,
} from '@tanstack/react-query';

import { memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { isAuthenticated } from '~/redux/selectors';

import commentApi from '~/api/module/comment.api';
import CommentList from './CommentList/CommentList';

function CommentMedia({ movieId, mediaType }) {
    const pointDownSm = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    // const socket = useSocket();
    const isLogged = useSelector(isAuthenticated);
    const [listComment, setListComment] = useState([]);
    const [totalComment, setTotalComment] = useState(0);

    const addCommentMutation = useMutation({
        mutationFn: (body) => commentApi.addComment(body),
    });

    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
        useInfiniteQuery({
            queryKey: ['LIST_COMMENT', movieId, mediaType],
            queryFn: async ({ pageParam }) => {
                const response = await commentApi.getListComment({
                    mediaType,
                    movieId,
                    pageParam,
                });
                return response;
            },
            staleTime: 0,
            enabled: !!movieId && !!mediaType,
            getNextPageParam: (lastPage) => {
                return lastPage?.page === lastPage?.totalPage
                    ? undefined
                    : lastPage?.page + 1;
            },
            initialPageParam: 1,
            placeholderData: keepPreviousData,
        });
    const handleLoadingMore = () => {
        fetchNextPage();
    };
    // const { data } = useQuery({
    //     queryKey: ['LIST_COMMENT', movieId],
    //     queryFn: async () => {
    //         const response = await publicClient.get(
    //             `${API_ROOT}/api/v1/comment/get-comment/${mediaType}/${movieId}`,
    //         );
    //         return response;
    //     },
    //     staleTime: 0,
    //     enabled: !!movieId,
    // });
    // const sortComment = (data) => {
    //     if (!Array.isArray(data)) return [];
    //     const newDataSort = [...data].sort((a, b) => {
    //         return new Date(b.createAt) - new Date(a.createAt);
    //     });
    //     return newDataSort;
    // };
    useEffect(() => {
        if (!data) return;
        // const newDataSort = sortComment(data);
        setTotalComment(data.pages[0].totalComment);
        const pageFlatMath = data.pages.flatMap((page) => page.listComment);
        setListComment(pageFlatMath);
    }, [data]);

    useEffect(() => {
        // console.table(listComment);
        // console.log('movieId', movieId);
        console.log('data', data);
        console.log('isLoading', isLoading);
        console.log('isFetchingNextPage', isFetchingNextPage);
        console.log('hasNextPage', hasNextPage);
        // console.log('socket', socket);
    });

    // useEffect(() => {
    //     if (!movieId || !socket) return;
    //     // socket.emit('joinMovieRoom', movieId);
    //     socket.on('newListComments', (newComment) => {
    //         // Cập nhật giao diện với danh sách bình luận mới
    //         console.log('Received new comments:', newComment);
    //         // const newDataSort = sortComment(newComments);
    //         setListComment((prevComments) => [newComment, ...prevComments]);
    //     });
    // }, [movieId, socket]);

    const handleSubmit = async (values) => {
        addCommentMutation.mutate(
            {
                movieId,
                movieType: mediaType,
                content: values.comment,
            },
            {
                onSuccess: (newComment) => {
                    // Cập nhật giao diện với danh sách bình luận
                    console.log('Received new comments:', newComment);
                    // const newDataSort = sortComment(newComments);
                    setListComment((prevComments) => [
                        newComment.data,
                        ...prevComments,
                    ]);
                    setTotalComment((prevTotal) => prevTotal + 1);
                },
            },
        );
        // socket.emit('addComment', {
        //     movieId,
        //     movieType: mediaType,
        //     content: values.comment,
        // });
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
                    {`${totalComment} bình luận`}
                </Typography>
                {/* List Comment  */}
                <CommentList
                    listComment={listComment}
                    isFetchingNextPage={isFetchingNextPage}
                    isLoading={isLoading}
                    hasNextPage={hasNextPage}
                    onLoadingMore={handleLoadingMore}
                />
            </Box>
        </WrapperMovieDetail>
    );
}

export default memo(CommentMedia);
