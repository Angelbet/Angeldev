import { useEffect, useRef } from 'react';

// ? STYLES
import styles from '@/styles/Home.module.css'

// ? FONTS
import { bold, extraLight, light, medium, regular, semiBold } from '@/fonts/fonts';

// ? GSAP
import { gsap } from 'gsap';


function SkillsHome() {

    // ! =====> | Marquee | <=====
    useEffect(() => {
        gsap.set('.wrapper2', { xPercent: -120, yPercent: 0 });
        // gsap.set('#no03', { xPercent: 0, yPercent: 0 });

        var boxWidth = 2100,
            totalWidth = boxWidth * 3, // 17 es el número de cajas, 10 es el espacio entre las cajas
            no01 = document.querySelectorAll("#no01 .box"),
            // no03 = document.querySelectorAll("#no03 .box"),
            dirFromLeft = "+=" + totalWidth;
            // dirFromRight = "-=" + totalWidth;

        var mod = gsap.utils.wrap(0, totalWidth);

        function marquee(which, time, direction) {
            gsap.set(which, {
                x: function (i) {
                    return i * boxWidth;
                }
            });
            var action = gsap.timeline()
                .to(which, {
                    x: direction,
                    modifiers: {
                        x: x => mod(parseFloat(x)) + "px"
                    },
                    duration: time, ease: 'none',
                    repeat: -1,
                });
            return action;
        }

        var master = gsap.timeline()
            .add(marquee(no01, 90, dirFromLeft), 1)
            // .add(marquee(no03, 35, dirFromRight), 1);
    }, []);




    return (
        <div id='no01' className={`wrapper ${styles.scroll_wrap} ${styles.all_projects} ${bold.className}`}>

            <div className={`${styles.scroll_holder} wrapper2 box `}>

                <div className={`${styles.scroll_item_wrap} `}>
                    <div className={styles.scroll_item}>
                        <div className={styles.ds_heading}>Front-End Web Developer</div>
                        <img
                            src="https://assets.website-files.com/619d1b36c25b9868dcd0ca89/619dde99cebc8e34f58e29df_Scrolling%20diamond.svg"
                            loading="lazy"
                            alt=""
                            className={styles.scroll_item_divider}
                        />
                        <div className={styles.ds_heading}>UX/UI Design</div>
                        <img
                            src="https://assets.website-files.com/619d1b36c25b9868dcd0ca89/619dde99cebc8e34f58e29df_Scrolling%20diamond.svg"
                            loading="lazy"
                            alt=""
                            className={styles.scroll_item_divider}
                        />
                        <div className={styles.ds_heading}>Responsive Web Design</div>
                        <img
                            src="https://assets.website-files.com/619d1b36c25b9868dcd0ca89/619dde99cebc8e34f58e29df_Scrolling%20diamond.svg"
                            loading="lazy"
                            alt=""
                            className={styles.scroll_item_divider}
                        />
                    </div>
                </div>
                <div className={`${styles.scroll_item_wrap} `}>
                    <div className={styles.scroll_item}>
                        <div className={styles.ds_heading}>Front-End Web Developer</div>
                        <img
                            src="https://assets.website-files.com/619d1b36c25b9868dcd0ca89/619dde99cebc8e34f58e29df_Scrolling%20diamond.svg"
                            loading="lazy"
                            alt=""
                            className={styles.scroll_item_divider}
                        />
                        <div className={styles.ds_heading}>UX/UI Design</div>
                        <img
                            src="https://assets.website-files.com/619d1b36c25b9868dcd0ca89/619dde99cebc8e34f58e29df_Scrolling%20diamond.svg"
                            loading="lazy"
                            alt=""
                            className={styles.scroll_item_divider}
                        />
                        <div className={styles.ds_heading}>Responsive Web Design</div>
                        <img
                            src="https://assets.website-files.com/619d1b36c25b9868dcd0ca89/619dde99cebc8e34f58e29df_Scrolling%20diamond.svg"
                            loading="lazy"
                            alt=""
                            className={styles.scroll_item_divider}
                        />
                    </div>
                </div>
                <div className={`${styles.scroll_item_wrap} `}>
                    <div className={styles.scroll_item}>
                        <div className={styles.ds_heading}>Front-End Web Developer</div>
                        <img
                            src="https://assets.website-files.com/619d1b36c25b9868dcd0ca89/619dde99cebc8e34f58e29df_Scrolling%20diamond.svg"
                            loading="lazy"
                            alt=""
                            className={styles.scroll_item_divider}
                        />
                        <div className={styles.ds_heading}>UX/UI Design</div>
                        <img
                            src="https://assets.website-files.com/619d1b36c25b9868dcd0ca89/619dde99cebc8e34f58e29df_Scrolling%20diamond.svg"
                            loading="lazy"
                            alt=""
                            className={styles.scroll_item_divider}
                        />
                        <div className={styles.ds_heading}>Responsive Web Design</div>
                        <img
                            src="https://assets.website-files.com/619d1b36c25b9868dcd0ca89/619dde99cebc8e34f58e29df_Scrolling%20diamond.svg"
                            loading="lazy"
                            alt=""
                            className={styles.scroll_item_divider}
                        />
                    </div>
                </div>
            </div>

            <div className={`${styles.scroll_holder} wrapper2 box `}>

                <div className={`${styles.scroll_item_wrap} `}>
                    <div className={styles.scroll_item}>
                        <div className={styles.ds_heading}>Front-End Web Developer</div>
                        <img
                            src="https://assets.website-files.com/619d1b36c25b9868dcd0ca89/619dde99cebc8e34f58e29df_Scrolling%20diamond.svg"
                            loading="lazy"
                            alt=""
                            className={styles.scroll_item_divider}
                        />
                        <div className={styles.ds_heading}>UX/UI Design</div>
                        <img
                            src="https://assets.website-files.com/619d1b36c25b9868dcd0ca89/619dde99cebc8e34f58e29df_Scrolling%20diamond.svg"
                            loading="lazy"
                            alt=""
                            className={styles.scroll_item_divider}
                        />
                        <div className={styles.ds_heading}>Responsive Web Design</div>
                        <img
                            src="https://assets.website-files.com/619d1b36c25b9868dcd0ca89/619dde99cebc8e34f58e29df_Scrolling%20diamond.svg"
                            loading="lazy"
                            alt=""
                            className={styles.scroll_item_divider}
                        />
                    </div>
                </div>
                <div className={`${styles.scroll_item_wrap} `}>
                    <div className={styles.scroll_item}>
                        <div className={styles.ds_heading}>Front-End Web Developer</div>
                        <img
                            src="https://assets.website-files.com/619d1b36c25b9868dcd0ca89/619dde99cebc8e34f58e29df_Scrolling%20diamond.svg"
                            loading="lazy"
                            alt=""
                            className={styles.scroll_item_divider}
                        />
                        <div className={styles.ds_heading}>UX/UI Design</div>
                        <img
                            src="https://assets.website-files.com/619d1b36c25b9868dcd0ca89/619dde99cebc8e34f58e29df_Scrolling%20diamond.svg"
                            loading="lazy"
                            alt=""
                            className={styles.scroll_item_divider}
                        />
                        <div className={styles.ds_heading}>Responsive Web Design</div>
                        <img
                            src="https://assets.website-files.com/619d1b36c25b9868dcd0ca89/619dde99cebc8e34f58e29df_Scrolling%20diamond.svg"
                            loading="lazy"
                            alt=""
                            className={styles.scroll_item_divider}
                        />
                    </div>
                </div>
                <div className={`${styles.scroll_item_wrap} `}>
                    <div className={styles.scroll_item}>
                        <div className={styles.ds_heading}>Front-End Web Developer</div>
                        <img
                            src="https://assets.website-files.com/619d1b36c25b9868dcd0ca89/619dde99cebc8e34f58e29df_Scrolling%20diamond.svg"
                            loading="lazy"
                            alt=""
                            className={styles.scroll_item_divider}
                        />
                        <div className={styles.ds_heading}>UX/UI Design</div>
                        <img
                            src="https://assets.website-files.com/619d1b36c25b9868dcd0ca89/619dde99cebc8e34f58e29df_Scrolling%20diamond.svg"
                            loading="lazy"
                            alt=""
                            className={styles.scroll_item_divider}
                        />
                        <div className={styles.ds_heading}>Responsive Web Design</div>
                        <img
                            src="https://assets.website-files.com/619d1b36c25b9868dcd0ca89/619dde99cebc8e34f58e29df_Scrolling%20diamond.svg"
                            loading="lazy"
                            alt=""
                            className={styles.scroll_item_divider}
                        />
                    </div>
                </div>
            </div>

            <div className={`${styles.scroll_holder} wrapper2 box `}>

                <div className={`${styles.scroll_item_wrap} `}>
                    <div className={styles.scroll_item}>
                        <div className={styles.ds_heading}>Front-End Web Developer</div>
                        <img
                            src="https://assets.website-files.com/619d1b36c25b9868dcd0ca89/619dde99cebc8e34f58e29df_Scrolling%20diamond.svg"
                            loading="lazy"
                            alt=""
                            className={styles.scroll_item_divider}
                        />
                        <div className={styles.ds_heading}>UX/UI Design</div>
                        <img
                            src="https://assets.website-files.com/619d1b36c25b9868dcd0ca89/619dde99cebc8e34f58e29df_Scrolling%20diamond.svg"
                            loading="lazy"
                            alt=""
                            className={styles.scroll_item_divider}
                        />
                        <div className={styles.ds_heading}>Responsive Web Design</div>
                        <img
                            src="https://assets.website-files.com/619d1b36c25b9868dcd0ca89/619dde99cebc8e34f58e29df_Scrolling%20diamond.svg"
                            loading="lazy"
                            alt=""
                            className={styles.scroll_item_divider}
                        />
                    </div>
                </div>
                <div className={`${styles.scroll_item_wrap} `}>
                    <div className={styles.scroll_item}>
                        <div className={styles.ds_heading}>Front-End Web Developer</div>
                        <img
                            src="https://assets.website-files.com/619d1b36c25b9868dcd0ca89/619dde99cebc8e34f58e29df_Scrolling%20diamond.svg"
                            loading="lazy"
                            alt=""
                            className={styles.scroll_item_divider}
                        />
                        <div className={styles.ds_heading}>UX/UI Design</div>
                        <img
                            src="https://assets.website-files.com/619d1b36c25b9868dcd0ca89/619dde99cebc8e34f58e29df_Scrolling%20diamond.svg"
                            loading="lazy"
                            alt=""
                            className={styles.scroll_item_divider}
                        />
                        <div className={styles.ds_heading}>Responsive Web Design</div>
                        <img
                            src="https://assets.website-files.com/619d1b36c25b9868dcd0ca89/619dde99cebc8e34f58e29df_Scrolling%20diamond.svg"
                            loading="lazy"
                            alt=""
                            className={styles.scroll_item_divider}
                        />
                    </div>
                </div>
                <div className={`${styles.scroll_item_wrap} `}>
                    <div className={styles.scroll_item}>
                        <div className={styles.ds_heading}>Front-End Web Developer</div>
                        <img
                            src="https://assets.website-files.com/619d1b36c25b9868dcd0ca89/619dde99cebc8e34f58e29df_Scrolling%20diamond.svg"
                            loading="lazy"
                            alt=""
                            className={styles.scroll_item_divider}
                        />
                        <div className={styles.ds_heading}>UX/UI Design</div>
                        <img
                            src="https://assets.website-files.com/619d1b36c25b9868dcd0ca89/619dde99cebc8e34f58e29df_Scrolling%20diamond.svg"
                            loading="lazy"
                            alt=""
                            className={styles.scroll_item_divider}
                        />
                        <div className={styles.ds_heading}>Responsive Web Design</div>
                        <img
                            src="https://assets.website-files.com/619d1b36c25b9868dcd0ca89/619dde99cebc8e34f58e29df_Scrolling%20diamond.svg"
                            loading="lazy"
                            alt=""
                            className={styles.scroll_item_divider}
                        />
                    </div>
                </div>
            </div>

        </div >
    )
}

export default SkillsHome

