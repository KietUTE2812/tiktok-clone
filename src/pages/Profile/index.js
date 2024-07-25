import styles from './Profile.module.css';
import icon_edit from './icon_edit.svg';
import icon_share from './icon_share.svg';


import TabPost from './components/TabPost/TabPost';
import Video from './components/Video/Video';

function Profile({ props, videos }) {

    return (
        <div className={styles.container}>

            {/* Info Part */}
            <div className={styles.info}>

                <div className={styles.grInfo}>
                    <img className={styles.avatar} src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" />
                    <div className={styles.grName}>
                        <h1>{props.id}</h1>
                        <h2>{props.name}</h2>
                        <button className={styles.btnEdit}>
                            <img src={icon_edit} className={styles.editIcon} alt='icon_edit'></img>
                            Sửa hồ sơ</button>
                    </div>
                    <button className={styles.btnShare}>
                        <img src={icon_share} className={styles.shareIcon} alt='icon_share'></img>
                    </button>
                </div>

                <div className={styles.countInfo}>
                    <div className={styles.following}>
                        <strong>{props.following}</strong>
                        <span>Đang follow</span>
                    </div>
                    <div className={styles.follower}>
                        <strong>{props.follower}</strong>
                        <span>Follower</span>
                    </div>
                    <div className={styles.like}>
                        <strong>{props.like}</strong>
                        <span>Thích</span>
                    </div>
                </div>
                <p className="description">{props.description}</p>
            </div>
            {/* Post Part */}

            <TabPost styles={styles} />
            <div className={styles.wrapContainerVideo}>
                {
                    videos.map((item, index) => {
                        return (
                            <Video key={index} props={item} />
                        );
                    })
                }
            </div>

        </div>
    );
}

export default Profile;
