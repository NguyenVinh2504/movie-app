import { Box, Container, Typography, useMediaQuery } from '@mui/material';
import Search from './Search';
import Media from '~/components/Media';

function MediaSearch() {
    const pointDownLg = useMediaQuery((theme) => theme.breakpoints.down('lg'));
    return (
        <Container maxWidth={'auto'} sx={{ px: '0' }}>
            <Container maxWidth={'xl'}>
                {pointDownLg && (
                    <Box mb={'20px'}>
                        <Search />
                    </Box>
                )}
                <Typography variant={pointDownLg ? 'h5' : 'h4'} fontWeight={500} mb={'4px'} display={'block'}>
                    Kết quả tìm kiếm: 
                </Typography>
                <Media />
            </Container>
        </Container>
    );
}

export default MediaSearch;
