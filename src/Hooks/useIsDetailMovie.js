const { default: useQueryConfig } = require("./useQueryConfig");

const useDetailMovie = () => {
    const queryConfig = useQueryConfig();
    const { category: detailMovie } = queryConfig;
    return detailMovie
}

export default useDetailMovie