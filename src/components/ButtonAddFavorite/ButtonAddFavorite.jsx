import { IconButton, Tooltip } from '@mui/material';
import theme from '~/theme';
import { HeartIcon } from '../Icon';
import { useDispatch } from 'react-redux';
import 'react-lazy-load-image-component/src/effects/blur.css';
import favoriteApi from '~/api/module/favorite.api';
import { toast } from 'react-toastify';
import { memo, useEffect, useState } from 'react';
import { useConfirm } from 'material-ui-confirm';
import { deleteFavorite, addFavorite } from '~/redux/features/favoritesSlice';

function ButtonAddFavorite({ item, mediaType, checkedLike, favoriteStore }) {
    const confirm = useConfirm();
    const [liked, setLiked] = useState(checkedLike);
    const [disabled, setDisabled] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        if (checkedLike) {
            setLiked(true);
        } else {
            setLiked(false);
        }
    }, [checkedLike]);
    const addItem = async (item) => {
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
                toast.success('Vui lòng đăng nhập');
            }
            setLiked(false);
        }
    };
    const removeFavorite = async () => {
        confirm({ title: 'Xóa phim yêu thích?', description: 'Phim sẽ được xóa khỏi mục yêu thích.' })
            .then(async () => {
                setDisabled(false);
                setLiked(false);
                // const favorite = user?.favorites?.find((e) => e.mediaId === (item.id || item.mediaId));
                const { response, err } = await favoriteApi.removeFavorite(favoriteStore);
                if (response) {
                    // const newUser = { ...user };
                    const { favorites } = response;
                    // newUser.favorites = newUser?.favorites?.filter((f) => f.mediaId !== (item.mediaId || item.id));
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
    const handleItemAction = ({ item }) => {
        if (liked) {
            removeFavorite(); // Nếu đã thêm vào giỏ hàng, xóa sản phẩm
        } else {
            addItem(item); // Nếu chưa thêm vào giỏ hàng, thêm sản phẩm vào giỏ hàng
        }
    };
    return (
        <Tooltip title={liked ? 'Hủy yêu thích' : 'Yêu thích'}>
            <span>
                <IconButton
                    color="neutral"
                    disabled={disabled}
                    onClick={() => {
                        handleItemAction({ item });
                    }}
                    sx={{ svg: { fill: liked ? theme.mediaItems.iconHeart : 'transparent' } }}
                >
                    <HeartIcon stroke={liked ? theme.mediaItems.iconHeart : '#fff'} />
                </IconButton>
            </span>
        </Tooltip>
    );
}

export default memo(ButtonAddFavorite);
