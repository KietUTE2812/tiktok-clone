import { useEffect, useState } from "react";
import styles from './Header.module.css';
import Tippy from '@tippyjs/react/headless';

import logo from './tiktok_logo.svg';
import icon_search from './icon_search.svg';
import icon_plus from './icon_plus.svg';
import icon_send from './icon_send.svg';
import icon_notification from './icon_notification.svg';
import { Wrapper as PopperWrapper } from "~/components/Popper";
import SearchAccountItem from "~/components/SearchAccountItem";

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 3000);
    }, []);
    const [isNoticeVisible, setIsNoticeVisible] = useState(false);
    const handleClickNotice = () => {
        setIsNoticeVisible(!isNoticeVisible);
    };

    return (
        <header>
            <nav className={styles.container}>
                <a className={styles.groupLogo} href="/">
                    <img className={styles.logo} src={logo} alt="logo" />
                    TikTok
                </a>
                <div className={styles.wrapWithoutLogo}>
                    <Tippy
                        interactive
                        visible={searchResult.length > 0}
                        render={attrs => (
                            <div className={styles.searchResult} tabIndex="-1" {...attrs}>
                                <PopperWrapper data-popper-arrow>
                                    <h4 className={styles.searchTitle}>Accounts</h4>

                                    <SearchAccountItem account={{ name: 'Đào Tấn Kiệt', userId: 'tankiet', avatar: 'https://www.w3schools.com/howto/img_avatar.png', isVerified: true }} />
                                    <SearchAccountItem account={{ name: 'Đào Tấn Kiệt', userId: 'tankiet', avatar: 'https://www.w3schools.com/howto/img_avatar.png', isVerified: true }} />
                                    <SearchAccountItem account={{ name: 'Đào Tấn Kiệt', userId: 'tankiet', avatar: 'https://www.w3schools.com/howto/img_avatar.png', isVerified: true }} />

                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <div className={styles.groupSearchWrapper}>
                            <div className={styles.groupSearch}>
                                <input className={styles.inputSearch} type="text" placeholder="Tìm kiếm" />
                                <button className={styles.btnSearch}>
                                    <img src={icon_search} alt="search icon" />
                                </button>
                            </div>
                        </div>
                    </Tippy>
                    <a className={styles.upload} href="/upload">
                        <img src={icon_plus} alt="upload icon" />
                        <span>Tải lên</span>
                    </a>
                    <div className={styles.groupAvatar}>
                        <a href="/messages">
                            <img src={icon_send} alt="send icon" />
                        </a>
                        <Tippy
                            interactive
                            visible={isNoticeVisible}

                            render={attrs => (
                                <div className={styles.noticeResult} tabIndex="-1" {...attrs}>
                                    <PopperWrapper data-popper-arrow>
                                        <h4 className={styles.searchTitle}>Thông báo</h4>

                                        <SearchAccountItem account={{ name: 'Đào Tấn Kiệt', userId: 'tankiet', avatar: 'https://www.w3schools.com/howto/img_avatar.png', isVerified: true }} />
                                        <SearchAccountItem account={{ name: 'Đào Tấn Kiệt', userId: 'tankiet', avatar: 'https://www.w3schools.com/howto/img_avatar.png', isVerified: true }} />
                                        <SearchAccountItem account={{ name: 'Đào Tấn Kiệt', userId: 'tankiet', avatar: 'https://www.w3schools.com/howto/img_avatar.png', isVerified: true }} />

                                    </PopperWrapper>
                                </div>
                            )}
                        >
                            <button id="btn-mail" onClick={handleClickNotice}>
                                <img src={icon_notification} alt="notification icon" />
                                <sup>1</sup>
                            </button>
                        </Tippy>
                        <img className={styles.avatar} src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" />
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
