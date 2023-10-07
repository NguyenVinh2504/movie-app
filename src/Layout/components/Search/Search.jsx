import Input from '~/components/Input';
import { CloseIcon, SearchIcon } from '~/components/Icon';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
function Search({ round }) {
    const props = {
        round,
    };

    const [searchValue, setSearchValue] = useState('');
    const location = useNavigate();
    const inputRef = useRef();
    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
            location('/search');
        }
        if (searchValue === '') {
            location('/');
        }
    };
    const handleClear = () => {
        inputRef.current.focus();
        setSearchValue('');
    };
    return (
        <Input
            {...props}
            leftIcon={<SearchIcon />}
            rightIcon={<CloseIcon />}
            inputEvent={{
                ref: inputRef,
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
