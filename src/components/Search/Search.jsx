import Input from '~/components/Input';
import { CloseIcon, SearchIcon } from '~/components/Icon';
import { memo } from 'react';
import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom';
import config from '~/config';
import { useQueryConfig } from '~/Hooks';
// import { useDebounce } from '~/Hooks';
function Search({ round = false, inHeader = false }) {
    const props = {
        round,
    };

    // const [searchValue, setSearchValue] = useState('');
    const [, setSearchParams] = useSearchParams();

    const location = useNavigate();
    const { query, ...configQuery } = useQueryConfig();
    const handleChange = (e) => {
        const value = e.target.value;
        if (!value.startsWith(' ') && value.trim()) {
            location({
                pathname: config.routes.searchPage,
                search: createSearchParams({ query: value, ...configQuery }).toString(),
            });
        } else {
            if (inHeader) {
                location(config.routes.home);
            } else {
                setSearchParams(() => {
                    const { query, ...newQuery } = configQuery;
                    return { ...newQuery };
                });
            }
        }
    };

    const handleClear = () => {
        // setSearchValue('');
        // location({
        //     search: `?${createSearchParams({ query: '' })}`,
        // });
        setSearchParams(() => {
            const { query, ...newQuery } = configQuery;
            return { ...newQuery };
        });
    };
    let valueSearch = query ?? '';
    return (
        <Input
            {...props}
            placeholder={'Tìm kiếm phim rạp, phim bộ,...'}
            leftIcon={<SearchIcon />}
            rightIcon={<CloseIcon />}
            inputEvent={{
                value: valueSearch,
                onChange: handleChange,
            }}
            iconRightEvent={{
                onClick: handleClear,
            }}
        />
    );
}

export default memo(Search);
