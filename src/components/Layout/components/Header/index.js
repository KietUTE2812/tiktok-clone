import { Fragment } from "react";
import styles from './Header.module.css';
import logo from './tiktok_logo.svg';
import icon_search from './icon_search.svg';
import icon_plus from './icon_plus.svg';
import icon_send from './icon_send.svg';
import icon_notification from './icon_notification.svg';
function Header() {
    return (
        <Fragment>
            <nav className={styles.container}>
                <a className={styles.groupLogo} href="/" >
                    <img className={styles.logo} src={logo}></img>
                    TikTok
                </a>
                <div className={styles.wrapWithoutLogo}>
                    <div className={styles.groupSearch}>
                        <input className={styles.inputSearch} type="text" placeholder="Tìm kiếm" />
                        <button className={styles.btnSearch} ><img src={icon_search} /></button></div>
                    <a className={styles.upload} href="/upload" ><img src={icon_plus} />
                        <span>Tải lên</span>
                    </a>
                    <div className={styles.groupAvatar}>
                        <a href="/messages" ><img src={icon_send} /></a>
                        <button id="btn-mail"><img src={icon_notification} />
                            <sup >1</sup>
                        </button>
                        <img className={styles.avatar} src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" />
                    </div>
                </div>
            </nav>
        </Fragment>
    );
}

export default Header;