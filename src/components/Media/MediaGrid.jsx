import React, { memo } from 'react';
import { Grid, Box, Stack } from '@mui/material';
import MediaItems from '../MediaItems';
import MediaItemSekeleton from '../MediaItemSekeleton';
import { SvgSpinners3DotsBounce } from '../Icon';
import { useSelector } from 'react-redux';
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
        <Box sx={{ px: '0', mt: '1rem' }}>
            <Grid container spacing={{ xs: 1, sm: 1.5 }}>
                {!isLoading && renderMediaItems()}
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

export default memo(Media);
