import useQueryParams from "./useQueryParams"
import { omitBy, isUndefined } from 'lodash'
export default function useQueryConfig() {
    const queryParams = useQueryParams()
    const queryConfig = omitBy(
        {
            query: queryParams.query,
            media_type: queryParams.media_type,
            id: queryParams.id,
            category: queryParams.category
        },
        isUndefined
    )
    return queryConfig
}