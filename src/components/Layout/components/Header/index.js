
import styles from './Header.module.css';

import logo from './tiktok_logo.svg';

import icon_plus from './icon_plus.svg';
import icon_send from './icon_send.svg';
import Search from '../Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';


function Header() {

    return (
        <header>
            <nav className={styles.container}>
                <a className={styles.groupLogo} href="/">
                    <img className={styles.logo} src={logo} alt="logo" />
                    TikTok
                </a>
                <div className={styles.wrapWithoutLogo}>
                    <Search />
                    <a className={styles.upload} href="/upload">
                        <img src={icon_plus} alt="upload icon" />
                        <span>Tải lên</span>
                    </a>
                    <div className={styles.groupAvatar}>
                        <a href="/messages">
                            <img src={icon_send} alt="send icon" />
                        </a>

                        <button id="btn-mail" >
                            <FontAwesomeIcon size='2xl' icon={faMessage} />
                            <sup>1</sup>
                        </button>

                        <img className={styles.avatar} src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" />
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
