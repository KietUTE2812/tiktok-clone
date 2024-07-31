import { useState } from 'react';

import styles from './Sidebar.module.css';

import icon_home from './icon_home.svg';
import icon_explore from './icon_explore.svg';
import icon_following from './icon_following.svg';
import icon_friends from './icon_friends.svg';
import icon_live from './icon_live.svg';
import { Link } from 'react-router-dom';
function Sidebar() {
    // const arrayButton = ['icon_home', 'icon_explore', 'icon_following', 'icon_friends', 'icon_live'];
    const [activeIndex, setActiveIndex] = useState(null);
    const handleClick = (index) => {
        setActiveIndex(index);
    }
    return (
        <div className={styles.sidebar}>
            <div className={styles.groupButton}>
                <Link className={`${styles.btnSidebar} ${activeIndex === 0 ? styles.active : ''}`}
                    onClick={() => handleClick(0)}
                    to='/'
                >
                    <img id={styles.icon} src={icon_home} alt='icon' />
                    Trang chủ
                </Link>
                <Link className={`${styles.btnSidebar} ${activeIndex === 1 ? styles.active : ''}`}
                    onClick={() => handleClick(1)}
                    to='/'
                >
                    <img id={styles.icon} src={icon_explore} alt='icon' />
                    Khám phá
                </Link>
                <Link className={`${styles.btnSidebar} ${activeIndex === 2 ? styles.active : ''}`}
                    onClick={() => handleClick(2)}
                    to='/'
                >
                    <img id={styles.icon} src={icon_following} alt='icon' />
                    Đang theo dõi
                </Link>
                <Link className={`${styles.btnSidebar} ${activeIndex === 3 ? styles.active : ''}`}
                    onClick={() => handleClick(3)}
                    to='/'
                >
                    <img id={styles.icon} src={icon_friends} alt='icon' />
                    Bạn bè
                </Link>
                <Link className={`${styles.btnSidebar} ${activeIndex === 4 ? styles.active : ''}`}
                    onClick={() => handleClick(4)}
                    to='/'
                >
                    <img id={styles.icon} src={icon_live} alt='icon' />
                    LIVE
                </Link>
                <Link className={`${styles.btnSidebar} ${activeIndex === 5 ? styles.active : ''}`}
                    onClick={() => handleClick(5)}
                    to='/profile'
                >
                    <img id={styles.avatar} src="https://www.w3schools.com/howto/img_avatar.png" alt='avatar' />
                    Hồ sơ
                </Link>

            </div>

        </div >
    );
}
export default Sidebar;