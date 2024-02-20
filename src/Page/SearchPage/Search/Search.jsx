import Input from '~/components/Input';
import { CloseIcon, SearchIcon } from '~/components/Icon';
import { useEffect, useState } from 'react';
import { createSearchParams, useLocation, useNavigate } from 'react-router-dom';
// import config from '~/config';
function Search({ round }) {
    const props = {
        round,
    };
    const [searchValue, setSearchValue] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        const parts = location.search.split('=');
        // parts[1] sẽ là "name=John Doe&age=21"
        const param = parts[1];
        if (!param) {
            setSearchValue('');
        }
    }, [location.search]);
    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
            if (searchValue.trim()) {
                navigate({
                    search: `?${createSearchParams({ query: searchValue })}`,
                });
            } else if (!searchValue.trim()) {
                navigate({
                    search: `?${createSearchParams({ query: '' })}`,
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
