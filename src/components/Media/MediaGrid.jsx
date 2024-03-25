import { Button, Grid, Stack } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { favoritesValue } from '~/redux/selectors';
import MediaItems from '../MediaItems';
import { SvgSpinners3DotsBounce } from '../Icon';
import MediaItemSekeleton from '../MediaItemSekeleton';

function MediaList({ medias, mediaType }) {
    const favorites = useSelector(favoritesValue);

    return medias?.map((item) => {
        const itemId = item?.id || item?.mediaId;
        return (
            <Grid item xl={2.4} lg={3} md={4} sm={6} xs={6} key={itemId}>
                <MediaItems
                    item={item}
                    mediaType={mediaType}
                    favoriteStore={favorites?.find((e) => e.mediaId === itemId)?._id}
                    checkedLike={item.isFavorite}
                />
            </Grid>
        );
    });
}

const MediaGrid = ({ medias, isLoadingSekeleton, mediaType, isLoadingButton, onLoadingMore }) => {
    return (
        <>
            <Grid container spacing={{ xs: 1, sm: 1.5 }}>
                {medias
                    ? medias?.pages.map((media, index) => (
                          <MediaList key={index} medias={media?.results} mediaType={mediaType} />
                      ))
                    : undefined}
                {isLoadingSekeleton && <MediaItemSekeleton cardNumber={10} />}
                {isLoadingSekeleton && (
                    <Stack mt={2} alignItems={'center'} width={'100%'}>
                        <SvgSpinners3DotsBounce />
                    </Stack>
                )}
            </Grid>
            {isLoadingButton && (
                <Stack mt={2} justifyContent={'center'} flexDirection={'row'}>
                    <Button variant="contained" color="secondary" onClick={onLoadingMore}>
                        View More
                    </Button>
                </Stack>
            )}
        </>
    );
};

export default MediaGrid;
