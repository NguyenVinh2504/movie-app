import React, { useEffect, useState, memo } from 'react';
import { useDispatch } from 'react-redux';
import { IconButton, Tooltip } from '@mui/material';
import { useConfirm } from 'material-ui-confirm';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { toast } from 'react-toastify';
import theme from '~/theme';
import { HeartIcon } from '../Icon';
import favoriteApi from '~/api/module/favorite.api';
import { deleteFavorite, addFavorite } from '~/redux/features/favoritesSlice';

// Hàm con để thêm yêu thích
const addItemToFavorite = async (item, mediaType, setLiked, setDisabled, dispatch) => {
    setDisabled(true);

    const newFavorite = {
        media_type: item.media_type ?? mediaType,
        mediaId: item.id,
        title: item.title || item.name,
        poster_path: item.poster_path,
        vote_average: item.vote_average,
        release_date: item.release_date ?? item.first_air_date,
    };

    setLiked(true);
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
        setLiked(false);
    }
};

// Hàm con để xóa khỏi danh sách yêu thích
const removeItemFromFavorite = async (confirm, favoriteStore, setLiked, setDisabled, dispatch) => {
    confirm({
        title: 'Xóa phim yêu thích?',
        description: 'Phim sẽ được xóa khỏi mục yêu thích.',
    })
        .then(async () => {
            setDisabled(false);
            setLiked(false);
            const { response, err } = await favoriteApi.removeFavorite(favoriteStore);

            if (response) {
                const { favorites } = response;
                dispatch(deleteFavorite(favorites));
                toast.success('Xóa phim yêu thích thành công');
            } else if (err) {
                setLiked(true);
            }
        })
        .catch(() => {
            setDisabled(false);
        });
};

function FavoriteButton({ item, mediaType, checkedLike, favoriteStore }) {
    const confirm = useConfirm();
    const dispatch = useDispatch();

    const [liked, setLiked] = useState(checkedLike);
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        setLiked(checkedLike);
    }, [checkedLike]);

    const handleItemAction = () => {
        liked
            ? removeItemFromFavorite(confirm, favoriteStore, setLiked, setDisabled, dispatch)
            : addItemToFavorite(item, mediaType, setLiked, setDisabled, dispatch);
    };

    return (
        <Tooltip title={liked ? 'Hủy yêu thích' : 'Yêu thích'}>
            <span>
                <IconButton
                    color="neutral"
                    disabled={disabled}
                    onClick={handleItemAction}
                    sx={{ svg: { fill: liked ? theme.mediaItems.iconHeart : 'transparent' } }}
                >
                    <HeartIcon stroke={liked ? theme.mediaItems.iconHeart : '#fff'} />
                </IconButton>
            </span>
        </Tooltip>
    );
}

export default memo(FavoriteButton);
