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
import { memo, useRef, useState } from 'react';

function ButtonAddFavorite({ item, mediaType }) {
    const user = useSelector(userValue);
    const [liked, setLiked] = useState(false);
    const dispatch = useDispatch();
    const checkedLike = user?.favorites?.some((favorite) => favorite.mediaId === item.id || item.mediaId);

    // useEffect(() => {
    //     if (checkedLike) {
    //         setLiked(true);
    //     } else {
    //         setLiked(false);
    //     }
    // }, [item, user?.favorites]);
    let btnRef = useRef();
    const addFavorite = async (item) => {
        if (!user) return toast.error('Vui lòng đăng nhập');
        if (checkedLike) {
            removeFavorite(item);
            setLiked(false);
            return;
        }
        if (btnRef.current) {
            btnRef.current.setAttribute('disabled', 'disabled');
        }
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
        if (err) {
            toast.error(err.message);
        }
        if (response) {
            dispatch(updateUser(response));
            toast.success('Đã thêm vào mục yêu thích');
            if (btnRef.current) {
                btnRef.current.removeAttribute('disabled');
            }
        }
    };
    const removeFavorite = async (item) => {
        const favorite = user?.favorites?.find((e) => e.mediaId === (item.id || item.mediaId));
        const { response, err } = await favoriteApi.removeFavorite(favorite._id);
        if (btnRef.current) {
            btnRef.current.setAttribute('disabled', 'disabled');
        }
        if (err) {
            toast.success(err);
        }
        if (response) {
            const newUser = { ...user };
            newUser.favorites = newUser?.favorites?.filter((f) => f.mediaId !== (item.mediaId || item.id));
            dispatch(updateUser(newUser));
            toast.success(response.removeFavorite);
            if (btnRef.current) {
                btnRef.current.removeAttribute('disabled');
            }
        }
    };
    return (
        <Tooltip title={'Thêm phim yêu thích'}>
            <IconButton
                ref={btnRef}
                color="neutral"
                onClick={() => {
                    addFavorite(item);
                }}
                sx={{ svg: { fill: checkedLike || liked ? theme.mediaItems.iconHeart : 'transparent' } }}
            >
                <HeartIcon stroke={checkedLike || liked ? theme.mediaItems.iconHeart : '#fff'} />
            </IconButton>
        </Tooltip>
    );
}

export default memo(ButtonAddFavorite);