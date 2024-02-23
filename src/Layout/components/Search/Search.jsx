import Input from '~/components/Input';
import { CloseIcon, SearchIcon } from '~/components/Icon';
import { memo } from 'react';
import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom';
import config from '~/config';
import { useQueryConfig } from '~/Hooks';
// import { useDebounce } from '~/Hooks';
function Search({ round }) {
    const props = {
        round,
    };

    // const [searchValue, setSearchValue] = useState('');
    const [, setSearchParams] = useSearchParams();

    const location = useNavigate();
    const { query } = useQueryConfig();

    const handleChange = (e) => {
        const value = e.target.value;
        if (!value.startsWith(' ') && value.trim()) {
            location({
                pathname: config.routes.searchMovie,
                search: createSearchParams({ query: value }).toString(),
            });
        } else {
            location(config.routes.home);
        }
    };

    const handleClear = () => {
        // setSearchValue('');
        // location({
        //     search: `?${createSearchParams({ query: '' })}`,
        // });
        setSearchParams('');
    };
    let valueSearch = query ?? '';
    // console.log(Object.fromEntries([...searchParams]));
    return (
        <Input
            {...props}
            leftIcon={<SearchIcon />}
            rightIcon={<CloseIcon />}
            // ref={inputRef}
            inputEvent={{
                value: valueSearch,
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
