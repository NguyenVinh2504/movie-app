export const MovieTabItems = [
    {
        name: 'Phim Ưa Thích',
        key: 'get-list',
        mediaCategory: 'popular',
        mediaType: 'movie',
    },
    {
        name: 'Phim Đang chiếu',
        key: 'get-list',
        mediaCategory: 'now_playing',
        mediaType: 'movie',
    },
    {
        name: 'Phim Top rate',
        key: 'get-list',
        mediaCategory: 'top_rated',
        mediaType: 'movie',
    },
    {
        id: 28,
        name: 'Phim Hành Động',
        key: 'get-genres',
        mediaType: 'movie',
    },
    {
        id: 12,
        name: 'Phim Phiêu Lưu',
        key: 'get-genres',
        mediaType: 'movie',
    },
    {
        id: 16,
        name: 'Phim Hoạt Hình',
        key: 'get-genres',
        mediaType: 'movie',
    },
    {
        id: 35,
        name: 'Phim Hài',
        key: 'get-genres',
        mediaType: 'movie',
    },
    {
        id: 80,
        name: 'Phim Hình Sự',
        key: 'get-genres',
        mediaType: 'movie',
    },
    {
        id: 99,
        name: 'Phim Tài Liệu',
        key: 'get-genres',
        mediaType: 'movie',
    },
    {
        id: 18,
        name: 'Phim Chính Kịch',
        key: 'get-genres',
        mediaType: 'movie',
    },
    {
        id: 10751,
        name: 'Phim Gia Đình',
        key: 'get-genres',
        mediaType: 'movie',
    },
    {
        id: 14,
        name: 'Phim Giả Tượng',
        key: 'get-genres',
        mediaType: 'movie',
    },
    {
        id: 36,
        name: 'Phim Lịch Sử',
        key: 'get-genres',
        mediaType: 'movie',
    },
    {
        id: 27,
        name: 'Phim Kinh Dị',
        key: 'get-genres',
        mediaType: 'movie',
    },
    {
        id: 10402,
        name: 'Phim Nhạc',
        key: 'get-genres',
        mediaType: 'movie',
    },
    {
        id: 9648,
        name: 'Phim Bí Ẩn',
        key: 'get-genres',
        mediaType: 'movie',
    },
    {
        id: 10749,
        name: 'Phim Lãng Mạn',
        key: 'get-genres',
        mediaType: 'movie',
    },
    {
        id: 878,
        name: 'Phim Khoa Học Viễn Tưởng',
        key: 'get-genres',
        mediaType: 'movie',
    },
    {
        id: 10770,
        name: 'Chương Trình Truyền Hình',
        key: 'get-genres',
        mediaType: 'movie',
    },
    {
        id: 53,
        name: 'Phim Gây Cấn',
        key: 'get-genres',
        mediaType: 'movie',
    },
    {
        id: 10752,
        name: 'Phim Chiến Tranh',
        key: 'get-genres',
        mediaType: 'movie',
    },
    {
        id: 37,
        name: 'Phim Miền Tây',
        key: 'get-genres',
        mediaType: 'movie',
    },
];

MovieTabItems.forEach((item) => {
    const path = `/${item.mediaType}/${item.key}/${item.mediaCategory ? item.mediaCategory : item.id}`;
    item['path'] = path;
});
