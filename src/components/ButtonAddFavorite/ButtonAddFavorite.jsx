import { IconButton, Tooltip } from '@mui/material';
import theme from '~/theme';
import { HeartIcon } from '../Icon';
// import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { updateUser } from '~/redux/features/userSlice';
import favoriteApi from '~/api/module/favorite.api';
import { toast } from 'react-toastify';
import { userValue } from '~/redux/selectors';
import { memo, useEffect, useMemo, useState } from 'react';
import { useConfirm } from 'material-ui-confirm';

function ButtonAddFavorite({ item, mediaType }) {
    const user = useSelector(userValue);
    const confirm = useConfirm();
    const checkedLike = useMemo(() => {
        if (user?.favorites) {
            return user?.favorites?.some((favorite) => favorite?.mediaId === item.id || item.mediaId);
        }
    }, [item.id, item.mediaId, user?.favorites]);
    const [liked, setLiked] = useState(checkedLike);
    const [disabled, setDisabled] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        if (checkedLike) {
            setLiked(true);
        } else {
            setLiked(false);
        }
    }, [checkedLike, user?.favorites]);
    const addFavorite = async (item) => {
        if (!user) return toast.error('Vui lòng đăng nhập');
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
            dispatch(updateUser(response));
            toast.success('Đã thêm vào mục yêu thích');
        }
        if (err) {
            setLiked(false);
        }
    };
    const removeFavorite = (item) => {
        confirm({ title: 'Xóa phim yêu thích?', description: 'Phim sẽ được xóa khỏi mục yêu thích.' })
            .then(async () => {
                setDisabled(false);
                setLiked(false);
                const favorite = user?.favorites?.find((e) => e.mediaId === (item.id || item.mediaId));
                const { response, err } = await favoriteApi.removeFavorite(favorite?._id);
                if (response) {
                    const newUser = { ...user };
                    newUser.favorites = newUser?.favorites?.filter((f) => f.mediaId !== (item.mediaId || item.id));
                    dispatch(updateUser(newUser));
                    toast.success(response.removeFavorite);
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
            removeFavorite(item); // Nếu đã thêm vào giỏ hàng, xóa sản phẩm
        } else {
            addFavorite(item); // Nếu chưa thêm vào giỏ hàng, thêm sản phẩm vào giỏ hàng
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
