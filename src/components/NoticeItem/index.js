import styles from './NoticeItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faEllipsis } from '@fortawesome/free-solid-svg-icons';

function NoticeItem({ notice }) {
    return (
        <div className={styles.container}>
            <img className={styles.avatar} src={notice.avatar} alt="avatar" />
            <div className={styles.info}>
                <p>{notice.name}
                    <span className={styles.icon}>{notice.isVerified ? <FontAwesomeIcon icon={faCheckCircle} /> : ''}</span>
                </p>
                <span>{notice.userId}</span>
            </div>
            <span className={styles.ellipsis}><FontAwesomeIcon icon={faEllipsis} /></span>
        </div>
    );
}

export default NoticeItem;