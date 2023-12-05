import Input from '~/components/Input';
import { CloseIcon, SearchIcon } from '~/components/Icon';
import { useState, useRef, useEffect, memo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import routes from '~/config/routes';
import config from '~/config';
function Search({ round }) {
    const props = {
        round,
    };

    const [searchValue, setSearchValue] = useState('');
    const [toPageSearch, setToPageSearch] = useState(false);
    const location = useNavigate();
    const inputRef = useRef();
    let { pathname } = useLocation();

    useEffect(() => {
        console.log('reess');
        if (toPageSearch) {
            location(routes.search);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [toPageSearch]);
    // useEffect(() => {
    //     if (pathname !== config.routes.search && searchValue !== '') {
    //         console.log('set');
    //         // setToPageSearch(false);
    //     }
    // }, [pathname, searchValue]);
    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setToPageSearch(true);
            setSearchValue(searchValue);
        }
        if (searchValue === '') {
            location(routes.home);
            setToPageSearch(false);
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
            ref={inputRef}
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
