import styles from './SearchAccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faEllipsis } from '@fortawesome/free-solid-svg-icons';

function SearchAccountItem({ account }) {
    return (
        <div className={styles.container}>
            <img className={styles.avatar} src={account.avatar} alt="avatar" />
            <div className={styles.info}>
                <p>{account.full_name}
                    <span className={styles.icon}>{account.tick ? <FontAwesomeIcon icon={faCheckCircle} /> : ''}</span>
                </p>
                <span>{account.nickname}</span>
            </div>
            <span className={styles.ellipsis}><FontAwesomeIcon icon={faEllipsis} /></span>
        </div>
    );
}

export default SearchAccountItem;