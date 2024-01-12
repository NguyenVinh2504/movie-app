import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import Media from '~/components/Media';
// import { updateUser } from '~/redux/features/userSlice';
import { favoritesValue } from '~/redux/selectors';

function FavoriteMovieList() {
    const favorites = useSelector(favoritesValue);
    return (
        <>
            <Typography variant="h6">{`YOUR FAVORITES (${favorites?.length})`}</Typography>
            <Media medias={favorites}></Media>
        </>
    );
}

export default FavoriteMovieList;
