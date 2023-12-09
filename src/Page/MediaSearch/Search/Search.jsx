import Input from '~/components/Input';
import { CloseIcon, SearchIcon } from '~/components/Icon';
import { useEffect, useState } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';
import config from '~/config';
function Search({ round }) {
    const props = {
        round,
    };
    const [searchValue, setSearchValue] = useState('');
    const location = useNavigate();

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchValue]);
    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
            if (searchValue.trim()) {
                location({
                    pathname: config.routes.search,
                    search: `?${createSearchParams({ query: searchValue })}`,
                });
            } else if (!searchValue.trim()) {
                location({
                    pathname: config.routes.search,
                    search: null,
                });
            }
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
            inputEvent={{
                value: searchValue,
                onChange: handleChange,
            }}
            iconRightEvent={{
                onClick: handleClear,
            }}
        />
    );
}

export default Search;
