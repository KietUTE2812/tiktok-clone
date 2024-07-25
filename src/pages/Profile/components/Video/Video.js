import React, { useRef, useState, useCallback } from 'react';
import styles from './Video.module.css';
import icon_play from './icon_play.svg';

function Video({ props }) {
    const [isVideoVisible, setIsVideoVisible] = useState(false);
    const refVideo = useRef(null);
    const timeoutRef = useRef(null);

    const handleMouseOver = useCallback(() => {
        setIsVideoVisible(true);

        timeoutRef.current = setTimeout(() => {

            if (refVideo.current && refVideo.current.paused) {
                refVideo.current.currentTime = 0;
                refVideo.current.play().catch((error) => {
                    console.error('Error attempting to play', error);
                });
            }
        }, 100);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setIsVideoVisible(false);

        if (refVideo.current) {
            refVideo.current.pause();
        }
        // Xóa setTimeout nếu có
        if (timeoutRef.current) {

            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
    }, []);

    return (
        <div className={styles.wrapVideo}>
            <div
                className={styles.video}
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}
            >
                <img
                    className={styles.thumbNail}
                    src={props.image}
                    alt="video"
                    style={{ display: isVideoVisible ? 'none' : 'block' }}
                />
                <div className={styles.grBtnPlay}>
                    <img src={icon_play} alt="play" />
                    <span>{props.views} views</span>
                </div>
                <video
                    ref={refVideo}
                    playsInline
                    autoPlay
                    muted
                    preload="auto"
                    style={{ display: isVideoVisible ? 'block' : 'none' }}
                    src={props.src}
                />
                <div className={styles.videoName}>
                    <p>{props.title}</p>
                </div>
            </div>
        </div>
    );
}

export default Video;
