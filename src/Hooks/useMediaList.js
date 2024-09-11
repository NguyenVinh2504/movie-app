import { useSelector } from 'react-redux';
import { favoritesValue } from '~/redux/selectors';

const useMediaList = (data) => {
    const favorites = useSelector(favoritesValue);
    const mapFavorites = favorites?.reduce((map, favorite) => {
        map[favorite.mediaId] = favorite;
        return map;
    }, {});
    if (!data) return;

    const newDate = {
        ...data,
        pages: data.pages.map((page) => ({
            ...page,
            results: page.results.map((movie) => {
                const isFavorite = mapFavorites[movie.id];
                const newItemResult = {
                    ...movie,
                    isFavorite: !!isFavorite,
                };

                // Chỉ thêm favoriteId nếu isFavorite tồn tại
                if (isFavorite) {
                    newItemResult.favoriteId = isFavorite._id;
                }

                return newItemResult;
            }),
        })),
    };
    return newDate;
};

export default useMediaList;
