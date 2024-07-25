import styles from './WrapperVideos.module.scss';
function WrapperVideos({ children }) {
    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    );
}

export default WrapperVideos;