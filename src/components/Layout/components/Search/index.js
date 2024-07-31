import React, { useEffect, useRef, useState } from 'react';
import styles from './Search.module.scss';
import { Wrapper as PopperWrapper } from "~/components/Popper";
import SearchAccountItem from "~/components/SearchAccountItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faMagnifyingGlass, faSpinner } from "@fortawesome/free-solid-svg-icons";
import Tippy from '@tippyjs/react/headless';
import { useDebounce } from '~/hook';
import axios from 'axios';

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const inputRef = useRef();
    const [isShowSearchResult, setIsShowSearchResult] = useState(false);
    const [searchResult, setSearchResult] = useState([]);
    const [iconLoading, setIconLoading] = useState(false);

    const debouncedSearchValue = useDebounce(searchValue, 300);

    useEffect(() => {
        if (debouncedSearchValue.trim() === '') {
            setSearchResult([]);
            setIconLoading(false);
            return;
        }

        axios.get(`https://tiktok.fullstack.edu.vn/api/users/search`, {
            params: {
                q: debouncedSearchValue,
                type: 'less'
            }
        })
            .then(data => {
                setSearchResult(data.data.data);
                setIconLoading(false);
            }).catch(err => {
                setIsShowSearchResult(false);
                setIconLoading(false);
                console.log(err);
            });
    }, [debouncedSearchValue]);

    const handleChange = (e) => {
        setIconLoading(true);
        setSearchValue(e.target.value);
    }

    const handleClick = () => {
        setSearchValue('');
        inputRef.current.focus();
    }



    return (
        <Tippy
            interactive
            visible={isShowSearchResult && searchResult.length > 0}
            render={attrs => (
                <div className={styles.searchResult} tabIndex="-1" {...attrs}>
                    <PopperWrapper data-popper-arrow>
                        <h4 className={styles.searchTitle}>Accounts</h4>
                        {searchResult.length > 0 ? searchResult.map((account, index) => (
                            <SearchAccountItem key={index} account={account} />
                        )) : <p className={styles.noResult}>No result</p>}


                    </PopperWrapper>
                </div>
            )}
        >
            <div className={styles.groupSearchWrapper}>
                <div className={styles.groupSearch}>
                    <div className={styles.inputArea}>
                        <input
                            ref={inputRef}
                            className={styles.inputSearch}
                            type="text"
                            placeholder="Tìm kiếm"
                            spellCheck="false"
                            value={searchValue}
                            onFocus={() => setIsShowSearchResult(true)}
                            onBlur={() => setIsShowSearchResult(false)}
                            onChange={(e) => handleChange(e)}>
                        </input>
                        {!!searchValue && !iconLoading && <FontAwesomeIcon onClick={handleClick} color="white" icon={faCircleXmark} className={styles.iconClear} />}
                        {iconLoading && <FontAwesomeIcon color="white" icon={faSpinner} className={styles.iconLoading} />}
                    </div>
                    <button className={styles.btnSearch}>
                        <FontAwesomeIcon color="white" size='2xl' icon={faMagnifyingGlass} />
                    </button>
                </div>
            </div>
        </Tippy>
    );
}

export default Search;