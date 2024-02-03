import { Box, Grid, Stack, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { SvgSpinners3DotsBounce } from '~/components/Icon';
import MediaItemSekeleton from '~/components/MediaItemSekeleton';
import MediaItems from '~/components/MediaItems';
// import { updateUser } from '~/redux/features/userSlice';
import { favoritesValue } from '~/redux/selectors';

function Media({ medias, isLoading, mediaType }) {
    const favorites = useSelector(favoritesValue);

    const renderMediaItems = () => {
        if (!medias || !favorites) {
            return null;
        }

        return medias.map((item) => {
            const itemId = item?.id || item?.mediaId;

            return (
                <Grid item xl={2.4} lg={3} md={4} sm={6} xs={6} key={itemId}>
                    <MediaItems
                        item={item}
                        mediaType={mediaType}
                        favoriteStore={favorites.find((e) => e.mediaId === itemId)?._id}
                        checkedLike={favorites.some((favorite) => favorite?.mediaId === itemId)}
                    />
                </Grid>
            );
        });
    };

    return (
        <Box sx={{ px: '0' }}>
            <Grid container spacing={{ xs: 1, sm: 1.5 }}>
                {renderMediaItems()}
                {isLoading && <MediaItemSekeleton cardNumber={10} />}
                {isLoading && (
                    <Stack mt={2} alignItems={'center'} width={'100%'}>
                        <SvgSpinners3DotsBounce />
                    </Stack>
                )}
            </Grid>
        </Box>
    );
}

function FavoriteMovieList() {
    const favorites = useSelector(favoritesValue);
    return (
        <>
            <Typography variant="h6" mb={2}>{`YOUR FAVORITES (${favorites?.length})`}</Typography>
            <Media medias={favorites}></Media>
        </>
    );
}

export default FavoriteMovieList;
