import { useRef } from "react";

function TabPost({ styles }) {
    const arrayButton = ['Video', 'Bài Đăng Lại', 'Yêu Thích', 'Đã Thích'];
    const refBottomTab = useRef();
    const handleMouseMove = (event) => {
        const btnTab = event.target;
        const rect = btnTab.getBoundingClientRect();
        const offset = rect.left + window.scrollX - 341; // Lấy vị trí chính xác của btnTab

        refBottomTab.current.style.transform = `translateX(${offset}px)`;
        refBottomTab.current.style.width = `${rect.width + 82}px`;

    }
    return (
        <div className={styles.wrapTabPost}>
            <div className={styles.tabPost}>
                {arrayButton.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className={styles.btnTab}

                            onMouseOver={handleMouseMove}
                        >{item}</div>
                    );
                })}
            </div>
            <div ref={refBottomTab} className={styles.bottomTabPost}></div>
        </div>
    );
}

export default TabPost;