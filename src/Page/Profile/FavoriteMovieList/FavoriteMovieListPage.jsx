import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import Media from '~/components/Media';
// import { updateUser } from '~/redux/features/userSlice';
import { userValue } from '~/redux/selectors';

function FavoriteMovieList() {
    const user = useSelector(userValue);
    return (
        <>
            <Typography variant="h6">{`YOUR FAVORITES (${user?.favorites?.length})`}</Typography>
            <Media medias={user?.favorites}></Media>
        </>
    );
}

export default FavoriteMovieList;
