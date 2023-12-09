import Input from '~/components/Input';
import { CloseIcon, SearchIcon } from '~/components/Icon';
import { useState, useEffect, memo } from 'react';
import { createSearchParams, useLocation, useNavigate } from 'react-router-dom';
import config from '~/config';
// import { useDebounce } from '~/Hooks';
function Search({ round }) {
    const props = {
        round,
    };

    const [searchValue, setSearchValue] = useState('');
    // const [toPageSearch, setToPageSearch] = useState(false);
    const location = useNavigate();
    const { pathname } = useLocation();
    // const debounce = useDebounce(searchValue, 100);
    // useEffect(() => {
    //     if (pathname !== config.routes.search) setToPageSearch(false);
    // }, [pathname]);
    // useEffect(() => {
    //     if (debounce !== '') setToPageSearch(true);
    // }, [debounce]);
    useEffect(() => {
        if (!searchValue.trim() && pathname === config.routes.search) {
            location(config.routes.home);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchValue]);

    useEffect(() => {
        if (searchValue.trim()) {
            location({
                pathname: config.routes.search,
                search: `?${createSearchParams({ query: searchValue })}`,
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchValue]);
    const handleChange = (e) => {
        const value = e.target.value;
        if (!value.startsWith(' ')) {
            setSearchValue(value);
        }
    };
    const handleClear = () => {
        setSearchValue('');
    };
    return (
        <Input
            {...props}
            leftIcon={<SearchIcon />}
            rightIcon={<CloseIcon />}
            // ref={inputRef}
            inputEvent={{
                value: searchValue,
                onChange: handleChange,
            }}
            placeholder={'Tìm kiếm'}
            iconRightEvent={{
                onClick: handleClear,
            }}
        />
    );
}

export default memo(Search);
