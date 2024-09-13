import { useSelector } from 'react-redux';
import { favoritesValue } from '~/redux/selectors';
import _ from 'lodash';
const useMediaList = (data) => {
    const favorites = useSelector(favoritesValue);
    const mapFavorites = favorites?.reduce((map, favorite) => {
        map[favorite.mediaId] = favorite;
        return map;
    }, {});
    if (!data) return;
    const newdata = _.cloneDeep(data);
    newdata.pages.forEach((page) => {
        page.results.forEach((movie) => {
            const isFavorite = mapFavorites[movie.id];

            movie.isFavorite = !!isFavorite;
            // Chọn favoriteId nếu isFavorite tồn tại
            if (isFavorite) {
                movie.favoriteId = isFavorite._id;
            }
        });
    });
    // const newDate = {
    //     ...data,
    //     pages: data.pages.map((page) => ({
    //         ...page,
    //         results: page.results.map((movie) => {
    //             const isFavorite = mapFavorites[movie.id];
    //             const newItemResult = {
    //                 ...movie,
    //                 isFavorite: !!isFavorite,
    //             };

    //             // Chỉ thêm favoriteId nếu isFavorite tồn tại
    //             if (isFavorite) {
    //                 newItemResult.favoriteId = isFavorite._id;
    //             }

    //             return newItemResult;
    //         }),
    //     })),
    // };
    return newdata;
};

export default useMediaList;
