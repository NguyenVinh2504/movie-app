import MediaItems from '../MediaItems';
import { movie } from '../HeroSlice/movie';
import { Grid, Container } from '@mui/material';
function Media() {
    return (
        <Container maxWidth="xl" sx={{ px: '0', mt: '1rem' }}>
            <Grid container spacing={{ xs: 1, sm: 1.5 }}>
                {movie.map((item, index) => (
                    <Grid item xl={2.4} lg={3} md={4} sm={6} xs={6} key={index}>
                        <MediaItems item={item}></MediaItems>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Media;
