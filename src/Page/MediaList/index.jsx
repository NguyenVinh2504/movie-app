import HeroSlice from '~/components/HeroSlice';
import Media from '~/components/Media';
import { genres } from '~/config/TabMenuItems';
import TabItems from '~/components/TabItems';

function MediaList() {
    return (
        <>
            <HeroSlice />
            <TabItems contentItems={genres} />
            <Media />
        </>
    );
}

export default MediaList;
