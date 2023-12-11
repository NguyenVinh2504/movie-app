import MediaItems from '../MediaItems';
import { Grid, Box, Stack } from '@mui/material';
import MediaItemSekeleton from '../MediaItemSekeleton';
import { SvgSpinners3DotsBounce } from '../Icon';
function Media({ medias, isLoading, mediaType }) {
    return (
        <Box sx={{ px: '0', mt: '1rem' }}>
            <Grid container spacing={{ xs: 1, sm: 1.5 }}>
                {medias?.map((item, index) => (
                    <Grid item xl={2.4} lg={3} md={4} sm={6} xs={6} key={index}>
                        <MediaItems item={item} mediaType={mediaType}></MediaItems>
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

export default Media;
