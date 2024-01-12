import MediaItems from '../MediaItems';
import { Grid, Box, Stack } from '@mui/material';
import MediaItemSekeleton from '../MediaItemSekeleton';
import { SvgSpinners3DotsBounce } from '../Icon';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { favoritesValue } from '~/redux/selectors';
function Media({ medias, isLoading, mediaType }) {
    const favorites = useSelector(favoritesValue);
    return (
        <Box sx={{ px: '0', mt: '1rem' }}>
            <Grid container spacing={{ xs: 1, sm: 1.5 }}>
                {!isLoading &&
                    medias?.map((item) => (
                        <Grid item xl={2.4} lg={3} md={4} sm={6} xs={6} key={item.id || item.mediaId}>
                            <MediaItems
                                item={item}
                                mediaType={mediaType}
                                favoriteStore={favorites?.find((e) => e.mediaId === (item.id || item.mediaId))?._id}
                                checkedLike={favorites?.some(
                                    (favorite) => favorite?.mediaId === item.id || item.mediaId,
                                )}
                            ></MediaItems>
                        </Grid>
                    ))}
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
