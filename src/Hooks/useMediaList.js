import { useSelector } from "react-redux";
import { favoritesValue } from "~/redux/selectors";

const useMediaList = (data) => {
    const favorites = useSelector(favoritesValue);
    const mapFavorites = favorites.reduce((map, favorite) => {
        map[favorite.mediaId] = favorite
        return map
    }, {})
    data?.pages?.forEach((itemList) => {
        itemList.results.forEach((itemResult) => {
            const isFavorite = mapFavorites[itemResult.id]
            // const isFavorite = favorites.find((element) => element.mediaId === itemResult.id);
            if (isFavorite) {
                itemResult.isFavorite = true;
                itemResult.favoriteId = isFavorite._id;
            } else {
                itemResult.isFavorite = false;
            }
        });
    });
    return data
}

export default useMediaList