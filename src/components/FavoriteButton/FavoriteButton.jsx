import React, { useEffect, useState, memo } from 'react';
import { useDispatch } from 'react-redux';
import { Box, IconButton, Tooltip } from '@mui/material';
import { useConfirm } from 'material-ui-confirm';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { toast } from 'react-toastify';
import {
    // ArchiveIcon, ArchiveIconActive,
    HeartIcon,
    HeartIconActive,
} from '../Icon';
import favoriteApi from '~/api/module/favorite.api';
import { deleteFavorite, addFavorite } from '~/redux/features/favoritesSlice';
import theme from '~/theme';

// Hàm con để thêm yêu thích
const addItemToFavorite = async (item, mediaType, setLiked, setDisabled, setAnimation, dispatch) => {
    const newFavorite = {
        media_type: item.media_type ?? mediaType,
        mediaId: item.id,
        title: item.title || item.name,
        poster_path: item.poster_path,
        vote_average: item.vote_average,
        release_date: item.release_date ?? item.first_air_date,
    };

    setLiked(true);
    setAnimation(true);
    const { response, err } = await favoriteApi.addFavorite(newFavorite);
    setDisabled(false);

    if (response) {
        dispatch(addFavorite(response.favorites));
        toast.success('Đã thêm vào mục yêu thích');
    }

    if (err) {
        if (err.statusCode === 401) {
            toast.error('Vui lòng đăng nhập');
        }
        setAnimation(false);
        setLiked(false);
    }
};

// Hàm con để xóa khỏi danh sách yêu thích
const removeItemFromFavorite = async (confirm, favoriteStore, setLiked, setAnimation, setDisabled, dispatch) => {
    confirm({
        title: 'Xóa phim yêu thích?',
        description: 'Phim sẽ được xóa khỏi mục yêu thích.',
    })
        .then(async () => {
            setDisabled(false);
            setLiked(false);
            setAnimation(true);
            const { response, err } = await favoriteApi.removeFavorite(favoriteStore);

            if (response) {
                const { favorites } = response;
                dispatch(deleteFavorite(favorites));
                toast.success('Xóa phim yêu thích thành công');
            } else if (err) {
                setAnimation(false);
                setLiked(true);
            }
        })
        .catch(() => {
            setDisabled(false);
        });
};

const animationStyles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    svg: {
        display: 'block',
    },
    animation: '0.8s ease-in-out 0s 1 normal forwards',
};

function FavoriteButton({ item, mediaType, checkedLike, favoriteStore }) {
    const confirm = useConfirm();
    const dispatch = useDispatch();

    const [liked, setLiked] = useState(checkedLike);
    const [disabled, setDisabled] = useState(false);
    const [animation, setAnimation] = useState(false);

    useEffect(() => {
        setLiked(checkedLike);
    }, [checkedLike]);

    const handleItemAction = () => {
        setDisabled(true);
        liked
            ? removeItemFromFavorite(confirm, favoriteStore, setLiked, setAnimation, setDisabled, dispatch)
            : addItemToFavorite(item, mediaType, setLiked, setDisabled, setAnimation, dispatch);
    };

    return (
        <Tooltip title={liked ? 'Hủy yêu thích' : 'Yêu thích'}>
            <span>
                <IconButton color="neutral" disabled={disabled} onClick={handleItemAction}>
                    <Box sx={{ position: 'relative', height: '24px', width: '24px' }}>
                        {liked ? (
                            <Box
                                sx={{
                                    ...animationStyles,
                                    animationName: animation && 'show-popup',
                                    '@keyframes show-popup': {
                                        '0%': { transform: 'translate(-50%, -50%)\n\t\tscale(.7)' },
                                        '45%': { transform: 'translate(-50%, -50%)\n\t\tscale(1.3)' },
                                        '80%': { transform: 'translate(-50%, -50%)\n\t\tscale(.95)' },
                                        '100%': { transform: 'translate(-50%, -50%)\n\t\tscale(1)' },
                                    },
                                }}
                            >
                                <HeartIconActive fill={theme.palette.primary.main} />
                            </Box>
                        ) : (
                            <Box
                                sx={{
                                    ...animationStyles,
                                    animationName: animation && 'out-popup',
                                    '@keyframes out-popup': {
                                        '0%': { transform: 'translate(-50%, -50%)\n\t\tscale(.7)' },
                                        '45%': { transform: 'translate(-50%, -50%)\n\t\tscale(1.2)' },
                                        '80%': { transform: 'translate(-50%, -50%)\n\t\tscale(.95)' },
                                        '100%': { transform: 'translate(-50%, -50%)\n\t\tscale(1)' },
                                    },
                                }}
                            >
                                <HeartIcon />
                            </Box>
                        )}
                    </Box>
                </IconButton>
            </span>
        </Tooltip>
    );
}

export default memo(FavoriteButton);
