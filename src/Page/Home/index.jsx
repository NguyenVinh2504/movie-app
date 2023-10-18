import HeroSlice from '~/components/HeroSlice';
import TabItems from '~/components/TabItems';
import Media from '~/components/Media';
import { homeTabItems } from '~/config/TabMenuItems';
function Home() {
    return (
        // <div
        //     style={
        //         {
        //             // width: '100%',
        //             // height: '100vh',
        //             // // background: 'rgb(2,0,36)',
        //             // backgroundSize: 'cover',
        //             // backgroundImage: 'url("https://image.tmdb.org/t/p/original/2zzaJ9jzyK1Am8XoS0dFjmP8V0L.jpg")',
        //             // backgroundImage: 'linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(1,0,18,0) 50%, rgba(0,0,0,1) 100%)',
        //         }
        //     }
        //     className={cx('background')}
        // >
        //     <img src="https://image.tmdb.org/t/p/original/2zzaJ9jzyK1Am8XoS0dFjmP8V0L.jpg" alt="g" width={'100%'} />
        // </div>
        <>
            <HeroSlice />
            <TabItems contentItems={homeTabItems} />
            <Media />
        </>
    );
}

export default Home;
