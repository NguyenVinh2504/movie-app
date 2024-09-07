/* eslint-disable no-unused-vars */
import { Box } from '@mui/material';
import React from 'react';
import Wrapper from '~/components/Wrapper';
import uiConfigs from '~/config/ui.config';
// import TitleMatchMovie from './TitleMatchMovie';
// import OverviewWatchMovie from './OverviewWatchMovie';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const WatchMovie = () => {
    let { slugifyMovieName, epNumber } = useParams();

    // console.log(user);
    // const genres = ['Hành động', 'Phiêu Lưu', 'Lịch sử'];
    // const dataDetail = {
    //     vote_average: 8.4,
    //     release_date: '2024-03-12',
    //     runtime: 124,
    //     title: 'Napoleon',
    //     overview:
    //         'Carol Danvers, aka Captain Marvel, has reclaimed her identity from the tyrannical Kree and taken revenge on the Supreme Intelligence. But unintended consequences see Carol shouldering the burden of a destabilized universe. When her duties send her to an anomalous wormhole linked to a Kree revolutionary, her powers become entangled with that of Jersey City super-fan Kamala Khan, aka Ms. Marvel, and Carol’s estranged niece, now S.A.B.E.R. astronaut Captain Monica Rambeau. Together, this unlikely trio must team up and learn to work in concert to save the universe.',
    // };
    const getLinkMovie = (value) => {
        return axios.get(`https://ophim1.com/phim/${value}`, {
            withCredentials: false,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    };
    const { data } = useQuery({
        queryKey: ['Search Phim', slugifyMovieName],
        queryFn: () => getLinkMovie(slugifyMovieName),
        enabled: Boolean(slugifyMovieName),
    });

    const linkMovie = epNumber
        ? data?.data?.episodes[0]?.server_data?.find((item) => {
              return item.name === epNumber;
          })?.link_embed
        : data?.data?.episodes[0]?.server_data[0]?.link_embed ?? '';

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
                <Box
                    sx={{
                        position: 'absolute',
                        ...uiConfigs.style.positionFullSize,
                    }}
                >
                    <video width={'100%'} height={'100%'} controls={true}>
                        <source
                            src={
                                'http://localhost:2504/api/v1/files/video-stream/97483167-6f1a-4f88-8db3-1898bc30cf6e.mp4'
                            }
                            type="video/mp4"
                        />
                    </video>
                    {/*  <iframe
                        src={
                            // movieId
                            //     ? `https://vidsrc.xyz/embed/movie/${movieId}`
                            //     : `https://vidsrc.xyz/embed/tv?tmdb=${showId}&season=${ssId}&episode=${epId}`
                            linkMovie
                        }
                        title="watch"
                        allowFullScreen={true}
                        // sandbox="allow-modals allow-orientation-lock allow-pointer-lock allow-presentation allow-scripts allow-top-navigation allow-forms"
                        style={{ width: '100%', height: '100%', border: '0px' }}
                    ></iframe> */}
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
