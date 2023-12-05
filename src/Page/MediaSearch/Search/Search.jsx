import Input from '~/components/Input';
import { CloseIcon, SearchIcon } from '~/components/Icon';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import routes from '~/config/routes';
function Search({ round }) {
    const props = {
        round,
    };

    const [searchValue, setSearchValue] = useState('');
    const location = useNavigate();

    useEffect(() => {
        if (searchValue !== '') {
            location(routes.search);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchValue]);
    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
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
