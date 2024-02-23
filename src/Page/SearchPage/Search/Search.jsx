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
            setSearchParams('');
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
    return (
        <Input
            {...props}
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
