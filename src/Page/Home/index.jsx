// import classNames from 'classnames/bind';
// import styles from './Home.module.scss';
// import { Container } from '@mui/material';
import HeroSlice from '~/components/HeroSlice';
import TabGenres from '~/components/TabGenres';
import Media from '~/components/Media';
// const cx = classNames.bind(styles);

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
            <TabGenres />
            <Media />
        </>
    );
}

export default Home;