import Header from "../components/Header";
import Sidebar from "./Sidebar";
import styles from './DefaultLayout.module.css';

function DefaultLayout({ children }) {
    return (
        <div className={styles.wrapperWeb}>
            <Header />
            <div className={styles.container}>
                <Sidebar />
                <div className={styles.content}>
                    {children}
                </div>
            </div>


        </div>);
}

export default DefaultLayout;