import HeroSlice from '~/components/HeroSlice';
import Media from '~/components/Media';
import { genres } from '~/config/TabMenuItems';
import TabItems from '~/components/TabItems';
import { Container } from '@mui/material';

function MediaList() {
    return (
        <>
            <HeroSlice />
            <Container maxWidth={'xl'}>
                <TabItems contentItems={genres} />
                <Media />
            </Container>
        </>
    );
}

export default MediaList;
