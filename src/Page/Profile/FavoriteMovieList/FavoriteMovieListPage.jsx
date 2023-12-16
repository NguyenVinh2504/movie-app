import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Media from '~/components/Media';
// import { updateUser } from '~/redux/features/userSlice';
import { userValue } from '~/redux/selectors';

function FavoriteMovieList() {
    const user = useSelector(userValue);
    const [count, setCount] = useState(0);
    // const dispatch = useDispatch();
    useEffect(() => {
        if (user) setCount(user?.favorites?.length);
    }, [user]);
    return (
        <>
            <Typography variant="h6">{`YOUR FAVORITES (${count})`}</Typography>
            <Media medias={user?.favorites}></Media>
        </>
    );
}

export default FavoriteMovieList;
