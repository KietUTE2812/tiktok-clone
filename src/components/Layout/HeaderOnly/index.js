import Header from "../components/Header";
import styles from './HeaderOnly.module.css';

function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className={styles.container}>
                <div className={styles.content}>
                    {children}
                </div>
            </div>


        </div>);
}

export default HeaderOnly;