import { Paper, Typography } from '@mui/material';
import { Helmet } from 'react-helmet';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import userApi from '~/api/module/user.api';
// import { updateUser } from '~/redux/features/userSlice';
// import { accessToken } from '~/redux/selectors';
function AboutUs() {
    // const dispatch = useDispatch();
    //     const token = useSelector(accessToken);
    //     useEffect(() => {
    //         const authUser = async () => {
    //             const { response } = await userApi.getInfo();
    //             if (response) dispatch(updateUser(response));
    //         };
    //         if (token) {
    //             authUser();
    //         }
    //         // eslint-disable-next-line react-hooks/exhaustive-deps
    //     }, []);
    return (
        <>
            <Helmet>
                <title>{'Giới thiệu'}</title>
                <meta
                    name="description"
                    content="- Đây là trang web được lập nên nhằm mục đich học tập. Không phục vụ cho mục đích thương mại.
                    - Trang Viejoy là một trang web cung cấp cho người dùng khả năng xem phim trực tuyến. Trang web có một thư viện phim khổng lồ, bao gồm các bộ phim mới nhất, phim cũ, phim bom tấn, phim nghệ thuật,...Nguồn phim được cung cấp từ trang Themoviedb. Người dùng có thể tìm kiếm phim theo thể loại, quốc gia, diễn viên, đạo diễn,... và xem phim miễn phí.
                    - Trang website xem phim là một giải pháp tiện lợi và tiết kiệm cho những người yêu thích điện ảnh. Với sự đa dạng về tính năng và nội dung, các trang website xem phim đang ngày càng trở nên phổ biến và được nhiều người sử dụng."
                />
            </Helmet>
            <Paper variant="outlined" sx={{ p: 3 }}>
                <Typography variant="h4" fontWeight={'500'}>
                    Giới Thiệu
                </Typography>
                <Typography variant="body1" mt={3} fontWeight={'400'}>
                    - Đây là trang web được lập nên nhằm mục đich học tập. Không phục vụ cho mục đích thương mại.
                    <br />- Trang Viejoy là một trang web cung cấp cho người dùng khả năng xem phim trực tuyến. Trang
                    web có một thư viện phim khổng lồ, bao gồm các bộ phim mới nhất, phim cũ, phim bom tấn, phim nghệ
                    thuật,...Nguồn phim được cung cấp từ trang{' '}
                    <a href="https://www.themoviedb.org" style={{ color: 'red' }}>
                        Themoviedb
                    </a>
                    . Người dùng có thể tìm kiếm phim theo thể loại, quốc gia, diễn viên, đạo diễn,... và xem phim miễn
                    phí.
                    <br />- Trang website xem phim là một giải pháp tiện lợi và tiết kiệm cho những người yêu thích điện
                    ảnh. Với sự đa dạng về tính năng và nội dung, các trang website xem phim đang ngày càng trở nên phổ
                    biến và được nhiều người sử dụng.
                </Typography>
            </Paper>
        </>
    );
}

export default AboutUs;
