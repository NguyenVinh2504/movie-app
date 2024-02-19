
export const homeTabItems = [
    {
        name: 'Thịnh Hành',
        mediaType: 'all',
        mediaCategory: 'day',
    },
    {
        name: 'Phim Lẻ Mới Nhất',
        mediaType: 'movie',
        mediaCategory: 'now_playing',
    },
    {
        name: 'Phim Bộ Mới Nhất',
        mediaType: 'tv',
        mediaCategory: 'airing_today',
    },
    {
        name: 'Phim Lẻ Phổ Biến',
        mediaType: 'movie',
        mediaCategory: 'popular',
    },
    {
        name: 'Phim Bộ Phổ Biến',
        mediaType: 'tv',
        mediaCategory: 'popular',
    },
];

homeTabItems.forEach((item) => {
    const path = `/home/${item.mediaType}/${item.mediaCategory}`;
    item['path'] = path;
});
