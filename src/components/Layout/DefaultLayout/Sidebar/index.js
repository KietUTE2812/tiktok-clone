import { useState } from 'react';

import styles from './Sidebar.module.css';

import icon_home from './icon_home.svg';
import icon_explore from './icon_explore.svg';
import icon_following from './icon_following.svg';
import icon_friends from './icon_friends.svg';
import icon_live from './icon_live.svg';
function Sidebar() {
    // const arrayButton = ['icon_home', 'icon_explore', 'icon_following', 'icon_friends', 'icon_live'];
    const [activeIndex, setActiveIndex] = useState(null);
    const handleClick = (index) => {
        setActiveIndex(index);
    }
    return (
        <div className={styles.sidebar}>
            <div className={styles.groupButton}>
                <a className={`${styles.btnSidebar} ${activeIndex === 0 ? styles.active : ''}`}
                    onClick={() => handleClick(0)}
                >
                    <img id={styles.icon} src={icon_home} />
                    Trang chủ
                </a>
                <a className={`${styles.btnSidebar} ${activeIndex === 1 ? styles.active : ''}`}
                    onClick={() => handleClick(1)}
                >
                    <img id={styles.icon} src={icon_explore} />
                    Khám phá
                </a>
                <a className={`${styles.btnSidebar} ${activeIndex === 2 ? styles.active : ''}`}
                    onClick={() => handleClick(2)}
                >
                    <img id={styles.icon} src={icon_following} />
                    Đang theo dõi
                </a>
                <a className={`${styles.btnSidebar} ${activeIndex === 3 ? styles.active : ''}`}
                    onClick={() => handleClick(3)}
                >
                    <img id={styles.icon} src={icon_friends} />
                    Bạn bè
                </a>
                <a className={`${styles.btnSidebar} ${activeIndex === 4 ? styles.active : ''}`}
                    onClick={() => handleClick(4)}
                >
                    <img id={styles.icon} src={icon_live} />
                    LIVE
                </a>
                <a className={`${styles.btnSidebar} ${activeIndex === 5 ? styles.active : ''}`}
                    onClick={() => handleClick(5)}
                >
                    <img id={styles.avatar} src="https://www.w3schools.com/howto/img_avatar.png" />
                    Hồ sơ
                </a>

            </div>

        </div >
    );
}
export default Sidebar;