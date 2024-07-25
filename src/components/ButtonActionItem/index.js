import styles from './ButtonActionItem.module.scss';
function ButtonActionItem({ icon, content, isVertical, onClick }) {
    return (

        <div className={styles.container}>
            <button className={styles.button}
                style={isVertical ? {
                    display: 'flex',
                    flexDirection: 'column',
                } : {
                    display: 'flex',
                    flexDirection: 'row'
                }}
                onClick={onClick} >
                <span className={styles.icon} > {icon} </span>

            </button>
            <span className={styles.content} > {content} </span>
        </div>
    );
}
export default ButtonActionItem;