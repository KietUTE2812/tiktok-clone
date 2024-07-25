import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './VideoItem.module.scss';
import { faBookmark, faCommentDots, faEllipsis, faHeart, faPlusCircle, faShare } from '@fortawesome/free-solid-svg-icons';
import ButtonActionItem from '~/components/ButtonActionItem';

function VideoItem({ video }) {
    return (
        <div className={styles.container}>
            <div className={styles.wrapperVideo}>
                <video className={styles.video}>
                    <source src={video.src} type="video/mp4" />
                </video>
                <div className={styles.wrapperInfo}>
                    <h2 className={styles.ownVideo}>{video.own.name}</h2>
                    <p className={styles.title}>{video.title}</p>
                </div>
                <div className={styles.iconDetail}>
                    <FontAwesomeIcon size='2xl' icon={faEllipsis} />
                </div>
            </div>
            <div className={styles.wrappperAction}>
                <div className={styles.avatarActionContainer}>
                    <img className={styles.avatarAction} src={video.own.avatar} alt="Avatar" />
                    <button className={styles.buttonFollow}><FontAwesomeIcon size='xl' icon={faPlusCircle} style={{ color: 'var(--primary-color)' }}></FontAwesomeIcon></button>
                </div>
                <ButtonActionItem
                    icon={<FontAwesomeIcon size='2xl' icon={faHeart} />}
                    content="100K"
                    isVertical={true}
                />
                <ButtonActionItem
                    icon={<FontAwesomeIcon size='2xl' icon={faCommentDots} />}
                    content="100K"
                    isVertical={true}
                />
                <ButtonActionItem
                    icon={<FontAwesomeIcon size='2xl' icon={faBookmark} />}
                    content="100K"
                    isVertical={true}
                />
                <ButtonActionItem
                    icon={<FontAwesomeIcon size='2xl' icon={faShare} />}
                    content="100K"
                    isVertical={true}
                />
            </div>

        </div >

    );
}

export default VideoItem;