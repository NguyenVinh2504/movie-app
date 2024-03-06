import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import Wrapper from '~/components/Wrapper';
import uiConfigs from '~/config/ui.config';
// import TitleMatchMovie from './TitleMatchMovie';
// import OverviewWatchMovie from './OverviewWatchMovie';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isLoggedIn } from '~/redux/selectors';
import config from '~/config';

const WatchMovie = () => {
    let { movieId, showId, ssId, epId } = useParams();
    const user = useSelector(isLoggedIn);
    // console.log(user);
    const location = useNavigate();
    useEffect(() => {
        if (!user) {
            location(config.routes.login);
        }
    }, [user, location]);
    // const genres = ['Hành động', 'Phiêu Lưu', 'Lịch sử'];
    // const dataDetail = {
    //     vote_average: 8.4,
    //     release_date: '2024-03-12',
    //     runtime: 124,
    //     title: 'Napoleon',
    //     overview:
    //         'Carol Danvers, aka Captain Marvel, has reclaimed her identity from the tyrannical Kree and taken revenge on the Supreme Intelligence. But unintended consequences see Carol shouldering the burden of a destabilized universe. When her duties send her to an anomalous wormhole linked to a Kree revolutionary, her powers become entangled with that of Jersey City super-fan Kamala Khan, aka Ms. Marvel, and Carol’s estranged niece, now S.A.B.E.R. astronaut Captain Monica Rambeau. Together, this unlikely trio must team up and learn to work in concert to save the universe.',
    // };
    return (
        <Wrapper>
            {/* <Typography variant='h4'>Admin Lười Nên Chưa Có Phần Xem Phim. Sẽ Cập Nhật Trong Thời Gian Sắp Tới Nha. Yêu!!!</Typography> */}
            <Box
                sx={{
                    position: 'relative',
                    pt: 'calc(9/16*100%)',
                    borderRadius: 2,
                    overflow: 'hidden',
                    backgroundColor: 'secondary.main',
                }}
            >
                <Box sx={{ position: 'absolute', ...uiConfigs.style.positionFullSize }}>
                    <iframe
                        src={
                            movieId
                                ? `https://vidsrc.xyz/embed/movie/${movieId}`
                                : `https://vidsrc.xyz/embed/tv?tmdb=${showId}&season=${ssId}&episode=${epId}`
                        }
                        title="watch"
                        allowFullScreen={true}
                        referrerPolicy="origin"
                        // sandbox="allow-modals allow-orientation-lock allow-pointer-lock allow-presentation allow-scripts allow-top-navigation allow-forms"
                        style={{ width: '100%', height: '100%', border: '0px' }}
                    ></iframe>
                </Box>
            </Box>
            {/* title */}
            {/* <Box>
                <TitleMatchMovie dataDetail={dataDetail} genres={genres} />
            </Box> */}
            {/* title */}
            {/* <Box>
                <OverviewWatchMovie dataDetail={dataDetail} />
            </Box> */}
        </Wrapper>
    );
};

export default WatchMovie;
