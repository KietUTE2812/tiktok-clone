import styles from './SearchAccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faEllipsis } from '@fortawesome/free-solid-svg-icons';

function SearchAccountItem({ account, appendTo }) {
    return (
        <div className={styles.container}>
            <img className={styles.avatar} src={account.avatar} alt="avatar" />
            <div className={styles.info}>
                <p>{account.name}
                    <span className={styles.icon}>{account.isVerified ? <FontAwesomeIcon icon={faCheckCircle} /> : ''}</span>
                </p>
                <span>{account.userId}</span>
            </div>
            <span className={styles.ellipsis}><FontAwesomeIcon icon={faEllipsis} /></span>
        </div>
    );
}

export default SearchAccountItem;