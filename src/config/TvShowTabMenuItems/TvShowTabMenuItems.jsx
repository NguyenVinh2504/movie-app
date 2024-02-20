// import config from "..";

export const TvTabItems = [
    {
        name: 'Phim Bộ Phổ biến',
        key: 'get-list',
        mediaCategory: 'popular',
        mediaType: 'tv',
    },
    {
        name: 'Phim Bộ Đang chiếu',
        key: 'get-list',
        mediaType: 'tv',
        mediaCategory: 'airing_today',
    },
    {
        name: 'Phim Bộ Top rate',
        key: 'get-list',
        mediaCategory: 'top_rated',
        mediaType: 'tv',
    },
    {
        id: 10759,
        name: 'Action & Adventure',
        key: 'get-genres',
        mediaType: 'tv',
    },
    {
        id: 16,
        name: 'Phim Hoạt Hình',
        key: 'get-genres',
        mediaType: 'tv',
    },
    {
        id: 35,
        name: 'Phim Hài',
        key: 'get-genres',
        mediaType: 'tv',
    },
    {
        id: 80,
        name: 'Phim Hình Sự',
        key: 'get-genres',
        mediaType: 'tv',
    },
    {
        id: 99,
        name: 'Phim Tài Liệu',
        key: 'get-genres',
        mediaType: 'tv',
    },
    {
        id: 18,
        name: 'Phim Chính Kịch',
        key: 'get-genres',
        mediaType: 'tv',
    },
    {
        id: 10751,
        name: 'Phim Gia Đình',
        key: 'get-genres',
        mediaType: 'tv',
    },
    {
        id: 10762,
        name: 'Kids',
        key: 'get-genres',
        mediaType: 'tv',
    },
    {
        id: 9648,
        name: 'Phim Bí Ẩn',
        key: 'get-genres',
        mediaType: 'tv',
    },
    {
        id: 10763,
        name: 'News',
        key: 'get-genres',
        mediaType: 'tv',
    },
    {
        id: 10764,
        name: 'Reality',
        key: 'get-genres',
        mediaType: 'tv',
    },
    {
        id: 10765,
        name: 'Sci-Fi & Fantasy',
        key: 'get-genres',
        mediaType: 'tv',
    },
    {
        id: 10766,
        name: 'Soap',
        key: 'get-genres',
        mediaType: 'tv',
    },
    {
        id: 10767,
        name: 'Talk',
        key: 'get-genres',
        mediaType: 'tv',
    },
    {
        id: 10768,
        name: 'War & Politics',
        key: 'get-genres',
        mediaType: 'tv',
    },
    {
        id: 37,
        name: 'Phim Miền Tây',
        key: 'get-genres',
        mediaType: 'tv',
    },
];
TvTabItems.forEach((item) => {
    const path = `/${item.mediaType}/${item.key}/${item.mediaCategory ? item.mediaCategory : item.id}`;
    item['path'] = path;
});
