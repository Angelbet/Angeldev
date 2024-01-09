import Image from 'next/image'
import { Children, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

// ? STYLES
import styles from '@/styles/Home.module.css'

// ? FONTS
import { bold, extraLight, light, medium, regular, semiBold } from '@/fonts/fonts';

// ? GSAP
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// ? TRANSLATION
import enData from '@/public/locales/en/en.json';
import esData from '@/public/locales/es/es.json';
import deData from '@/public/locales/de/de.json';


gsap.registerPlugin(ScrollTrigger);

function EducationHome() {

    // ! =====> | Translation EN-ES-DE | <=====
    const router = useRouter();
    const { locale } = router;

    const data = locale === 'en' ? enData : locale === 'es' ? esData : deData;

    const title_1_1 = data[0].home[2].EducationHome[0].title_1_1;
    const title_1_2 = data[0].home[2].EducationHome[0].title_1_2;
    const content_1 = data[0].home[2].EducationHome[0].content_1;

    const edu_title_1 = data[0].home[2].EducationHome[0].edu_elements[0].edu_title_1;
    const edu_content_1 = data[0].home[2].EducationHome[0].edu_elements[0].edu_content_1;
    const edu_title_2 = data[0].home[2].EducationHome[0].edu_elements[1].edu_title_2;
    const edu_content_2 = data[0].home[2].EducationHome[0].edu_elements[1].edu_content_2;
    const edu_title_3 = data[0].home[2].EducationHome[0].edu_elements[2].edu_title_3;
    const edu_content_3 = data[0].home[2].EducationHome[0].edu_elements[2].edu_content_3;
    const edu_title_4 = data[0].home[2].EducationHome[0].edu_elements[3].edu_title_4;
    const edu_content_4 = data[0].home[2].EducationHome[0].edu_elements[3].edu_content_4;
    const edu_title_5 = data[0].home[2].EducationHome[0].edu_elements[4].edu_title_5;
    const edu_content_5 = data[0].home[2].EducationHome[0].edu_elements[4].edu_content_5;
    const edu_title_6 = data[0].home[2].EducationHome[0].edu_elements[5].edu_title_6;
    const edu_content_6 = data[0].home[2].EducationHome[0].edu_elements[5].edu_content_6;

    const lineVertical1 = useRef(null);
    const lineVertical2 = useRef(null);
    const lineVertical2_1 = useRef(null);
    const lineVertical3 = useRef(null);
    const lineVertical4 = useRef(null);
    const lineVertical4_1 = useRef(null);
    const lineVertical5 = useRef(null);
    const lineVertical6 = useRef(null);
    const lineVertical6_1 = useRef(null);

    // ! =====> | LINE 1 | <=====
    useEffect(() => {
        const line = lineVertical1.current;
        if (line) {
            gsap.to(line, {
                width: "2px",
                height: "100%",
                duration: 1,
                ease: "power1.inOut",
                delay: 0.1,
                scrollTrigger: {
                    trigger: line,
                    start: "top center", // inicia la animación cuando el borde superior del elemento entre en la vista
                    end: "bottom top", // termina la animación cuando el borde inferior del elemento salga de la vista
                    scrub: false, // ajusta la animación a la velocidad de desplazamiento
                },
            });
        }
    }, []);

    // ! =====> | LINE 2 | <=====
    useEffect(() => {
        const line = lineVertical2.current;
        if (line) {
            gsap.to(line, {
                width: "2px",
                height: "100%",
                duration: 1,
                ease: "power1.inOut",
                delay: 0.1,
                scrollTrigger: {
                    trigger: line,
                    start: "top center", // inicia la animación cuando el borde superior del elemento entre en la vista
                    end: "bottom top", // termina la animación cuando el borde inferior del elemento salga de la vista
                    scrub: false, // ajusta la animación a la velocidad de desplazamiento
                },
            });
        }
    }, []);

    // ! =====> | LINE 2_1 | <=====
    useEffect(() => {
        const line = lineVertical2_1.current;
        if (line) {
            gsap.to(line, {
                width: "100%",
                height: "2px",
                duration: 1,
                ease: "power1.inOut",
                delay: 0.1,
                scrollTrigger: {
                    trigger: line,
                    start: "top 80%", // inicia la animación cuando el borde superior del elemento entre en la vista
                    end: "bottom top", // termina la animación cuando el borde inferior del elemento salga de la vista
                    scrub: false, // ajusta la animación a la velocidad de desplazamiento
                },
            });
        }
    }, []);

    // ! =====> | LINE 3 | <=====
    useEffect(() => {
        const line = lineVertical3.current;
        if (line) {
            gsap.to(line, {
                width: "100%",
                height: "2px",
                duration: 1,
                ease: "power1.inOut",
                delay: 0.1,
                scrollTrigger: {
                    trigger: line,
                    start: "top 80%", // inicia la animación cuando el borde superior del elemento entre en la vista
                    end: "bottom top", // termina la animación cuando el borde inferior del elemento salga de la vista
                    scrub: false, // ajusta la animación a la velocidad de desplazamiento
                },
            });
        }
    }, []);

    // ! =====> | LINE 4 | <=====
    useEffect(() => {
        const line = lineVertical4.current;
        if (line) {
            gsap.to(line, {
                width: "2px",
                height: "100%",
                duration: 1,
                ease: "power1.inOut",
                delay: 0.1,
                scrollTrigger: {
                    trigger: line,
                    start: "top 80%", // inicia la animación cuando el borde superior del elemento entre en la vista
                    end: "bottom top", // termina la animación cuando el borde inferior del elemento salga de la vista
                    scrub: false, // ajusta la animación a la velocidad de desplazamiento
                },
            });
        }
    }, []);

    // ! =====> | LINE 4_1 | <=====
    useEffect(() => {
        const line = lineVertical4_1.current;
        if (line) {
            gsap.to(line, {
                width: "100%",
                height: "2px",
                duration: 1,
                ease: "power1.inOut",
                delay: 0.1,
                scrollTrigger: {
                    trigger: line,
                    start: "top 80%", // inicia la animación cuando el borde superior del elemento entre en la vista
                    end: "bottom top", // termina la animación cuando el borde inferior del elemento salga de la vista
                    scrub: false, // ajusta la animación a la velocidad de desplazamiento
                },
            });
        }
    }, []);

    // ! =====> | LINE 5 | <=====
    useEffect(() => {
        const line = lineVertical5.current;
        if (line) {
            gsap.to(line, {
                width: "100%",
                height: "2px",
                duration: 1,
                ease: "power1.inOut",
                delay: 0.1,
                scrollTrigger: {
                    trigger: line,
                    start: "top 80%", // inicia la animación cuando el borde superior del elemento entre en la vista
                    end: "bottom top", // termina la animación cuando el borde inferior del elemento salga de la vista
                    scrub: false, // ajusta la animación a la velocidad de desplazamiento
                },
            });
        }
    }, []);

    // ! =====> | LINE 6 | <=====
    useEffect(() => {
        const line = lineVertical6.current;
        if (line) {
            gsap.to(line, {
                width: "2px",
                height: "100%",
                duration: 1,
                ease: "power1.inOut",
                delay: 0.1,
                scrollTrigger: {
                    trigger: line,
                    start: "top center", // inicia la animación cuando el borde superior del elemento entre en la vista
                    end: "bottom 80%", // termina la animación cuando el borde inferior del elemento salga de la vista
                    scrub: false, // ajusta la animación a la velocidad de desplazamiento
                },
            });
        }
    }, []);

    // ! =====> | LINE 6_1 | <=====
    useEffect(() => {
        const line = lineVertical6_1.current;
        if (line) {
            gsap.to(line, {
                width: "100%",
                height: "2px",
                duration: 1,
                ease: "power1.inOut",
                delay: 0.1,
                scrollTrigger: {
                    trigger: line,
                    start: "top 80%", // inicia la animación cuando el borde superior del elemento entre en la vista
                    end: "bottom top", // termina la animación cuando el borde inferior del elemento salga de la vista
                    scrub: false, // ajusta la animación a la velocidad de desplazamiento
                },
            });
        }
    }, []);


    const titleReveal1 = useRef(null);
    const contentReveal1 = useRef(null);
    const arrowReveal = useRef(null);
    const buttonReveal = useRef(null);
    const titleReveal2 = useRef(null);
    const contentReveal2 = useRef(null);
    const titleReveal3 = useRef(null);
    const contentReveal3 = useRef(null);
    const titleReveal4 = useRef(null);
    const contentReveal4 = useRef(null);
    const titleReveal5 = useRef(null);
    const contentReveal5 = useRef(null);
    const titleReveal6 = useRef(null);
    const contentReveal6 = useRef(null);
    const titleReveal7 = useRef(null);
    const contentReveal7 = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        // ! =====> | Title 1 Reveal | <=====
        tl.add(() => {
            if (titleReveal1.current) {
                gsap.fromTo(
                    titleReveal1.current,
                    { y: '50px', opacity: 0, duration: .6, },
                    {
                        y: '0',
                        opacity: 1,
                        duration: .6,
                        delay: .8,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: titleReveal1.current,
                            start: 'top bottom',
                            end: 'bottom 20%',
                        },
                    }
                );
            }
        },);

        // ! =====> | Arrow Reveal | <=====
        tl.add(() => {
            if (arrowReveal.current) {
                gsap.fromTo(
                    arrowReveal.current,
                    { y: '30px', opacity: 0, duration: .8, },
                    {
                        y: '0',
                        opacity: 1,
                        duration: .8,
                        delay: .8,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: arrowReveal.current,
                            start: 'top bottom',
                            end: 'bottom 20%',
                        },
                    }
                );
            }
        },);

        // ! =====> | Content 1 Reveal | <=====
        tl.add(() => {
            if (contentReveal1.current) {
                gsap.fromTo(
                    contentReveal1.current,
                    { y: '40px', opacity: 0, duration: .6, },
                    {
                        y: '0',
                        opacity: 1,
                        duration: .6,
                        delay: .8,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: contentReveal1.current,
                            start: 'top 80%',
                            end: 'bottom 20%',
                        },
                    }
                );
            }
        }, 1);

        // ! =====> | Button Reveal | <=====
        tl.add(() => {
            if (buttonReveal.current) {
                gsap.fromTo(
                    buttonReveal.current,
                    { y: '-40px', opacity: 0, duration: .6, },
                    {
                        y: '0',
                        opacity: 1,
                        duration: .6,
                        delay: .8,
                        ease: 'power3.in',
                        scrollTrigger: {
                            trigger: buttonReveal.current,
                            start: 'top 80%',
                            end: 'bottom 20%',
                            // markers: true
                        },
                    }
                );
            }
        }, 1);

        // ! =====> | 000000000000 | <=====

        // ! =====> | Title 2 Reveal | <=====
        tl.add(() => {
            if (titleReveal2.current) {
                gsap.fromTo(
                    titleReveal2.current,
                    { y: '50px', opacity: 0, duration: .6, },
                    {
                        y: '0',
                        opacity: 1,
                        duration: .6,
                        delay: .8,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: titleReveal2.current,
                            start: 'top 80%',
                            end: 'bottom 20%',
                        },
                    }
                );
            }
        }, 2);

        // ! =====> | Content 2 Reveal | <=====
        tl.add(() => {
            if (contentReveal2.current) {
                gsap.fromTo(
                    contentReveal2.current,
                    { y: '40px', opacity: 0, duration: .6, },
                    {
                        y: '0',
                        opacity: 1,
                        duration: .6,
                        delay: .8,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: contentReveal2.current,
                            start: 'top 80%',
                            end: 'bottom 20%',
                        },
                    }
                );
            }
        }, 2);

        // ! =====> | Title 3 Reveal | <=====
        tl.add(() => {
            if (titleReveal3.current) {
                gsap.fromTo(
                    titleReveal3.current,
                    { y: '50px', opacity: 0, duration: .6, },
                    {
                        y: '0',
                        opacity: 1,
                        duration: .6,
                        delay: .8,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: titleReveal3.current,
                            start: 'top 80%',
                            end: 'bottom 20%',
                        },
                    }
                );
            }
        }, 2);

        // ! =====> | Content 3 Reveal | <=====
        tl.add(() => {
            if (contentReveal3.current) {
                gsap.fromTo(
                    contentReveal3.current,
                    { y: '40px', opacity: 0, duration: .6, },
                    {
                        y: '0',
                        opacity: 1,
                        duration: .6,
                        delay: .8,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: contentReveal3.current,
                            start: 'top 80%',
                            end: 'bottom 20%',
                        },
                    }
                );
            }
        }, 2);

        // ! =====> | Title 4 Reveal | <=====
        tl.add(() => {
            if (titleReveal4.current) {
                gsap.fromTo(
                    titleReveal4.current,
                    { y: '50px', opacity: 0, duration: .6, },
                    {
                        y: '0',
                        opacity: 1,
                        duration: .6,
                        delay: .8,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: titleReveal4.current,
                            start: 'top 80%',
                            end: 'bottom 20%',
                        },
                    }
                );
            }
        }, 2);

        // ! =====> | Content 4 Reveal | <=====
        tl.add(() => {
            if (contentReveal4.current) {
                gsap.fromTo(
                    contentReveal4.current,
                    { y: '40px', opacity: 0, duration: .6, },
                    {
                        y: '0',
                        opacity: 1,
                        duration: .6,
                        delay: .8,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: contentReveal4.current,
                            start: 'top 80%',
                            end: 'bottom 20%',
                        },
                    }
                );
            }
        }, 2);

        // ! =====> | Title 5 Reveal | <=====
        tl.add(() => {
            if (titleReveal5.current) {
                gsap.fromTo(
                    titleReveal5.current,
                    { y: '50px', opacity: 0, duration: .6, },
                    {
                        y: '0',
                        opacity: 1,
                        duration: .6,
                        delay: .8,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: titleReveal5.current,
                            start: 'top 80%',
                            end: 'bottom 20%',
                        },
                    }
                );
            }
        }, 2);

        // ! =====> | Content 5 Reveal | <=====
        tl.add(() => {
            if (contentReveal5.current) {
                gsap.fromTo(
                    contentReveal5.current,
                    { y: '40px', opacity: 0, duration: .6, },
                    {
                        y: '0',
                        opacity: 1,
                        duration: .6,
                        delay: .8,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: contentReveal5.current,
                            start: 'top 80%',
                            end: 'bottom 20%',
                        },
                    }
                );
            }
        }, 2);

        // ! =====> | Title 6 Reveal | <=====
        tl.add(() => {
            if (titleReveal6.current) {
                gsap.fromTo(
                    titleReveal6.current,
                    { y: '50px', opacity: 0, duration: .6, },
                    {
                        y: '0',
                        opacity: 1,
                        duration: .6,
                        delay: .8,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: titleReveal6.current,
                            start: 'top 80%',
                            end: 'bottom 20%',
                        },
                    }
                );
            }
        }, 2);

        // ! =====> | Content 6 Reveal | <=====
        tl.add(() => {
            if (contentReveal6.current) {
                gsap.fromTo(
                    contentReveal6.current,
                    { y: '40px', opacity: 0, duration: .6, },
                    {
                        y: '0',
                        opacity: 1,
                        duration: .6,
                        delay: .8,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: contentReveal6.current,
                            start: 'top 80%',
                            end: 'bottom 20%',
                        },
                    }
                );
            }
        }, 2);

        // ! =====> | Title 7 Reveal | <=====
        tl.add(() => {
            if (titleReveal7.current) {
                gsap.fromTo(
                    titleReveal7.current,
                    { y: '50px', opacity: 0, duration: .6, },
                    {
                        y: '0',
                        opacity: 1,
                        duration: .6,
                        delay: .8,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: titleReveal7.current,
                            start: 'top 80%',
                            end: 'bottom 20%',
                        },
                    }
                );
            }
        }, 2);

        // ! =====> | Content 7 Reveal | <=====
        tl.add(() => {
            if (contentReveal7.current) {
                gsap.fromTo(
                    contentReveal7.current,
                    { y: '40px', opacity: 0, duration: .6, },
                    {
                        y: '0',
                        opacity: 1,
                        duration: .6,
                        delay: .8,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: contentReveal7.current,
                            start: 'top 80%',
                            end: 'bottom 20%',
                        },
                    }
                );
            }
        }, 2);

    }, []);

    return (
        <section className={styles.section_home_services}>
            <div className={styles.padding_global}>
                <div className={`${styles.padding_vertical} ${styles.padding_xlarge}`}>
                    <div className={styles.home_services_grid}>
                        <div
                            id={styles["w-node-_9a1e8923-3478-3afe-0a0b-c8f15c478f98-553db89c"]}
                            className={styles.home_services_grid_left}
                        >
                            <div className={styles.flex_horizontal_stretch}>
                                <div className={styles.heading_style_h3}>
                                    <h2 ref={titleReveal1} className={`${styles.effect} ${styles.display_2_education} ${styles.margin_bottom_25} ${light.className}`}>
                                        {title_1_1} <span className={`${styles.text_emphasize} ${semiBold.className}`}>{title_1_2}</span>
                                    </h2>

                                    <p ref={contentReveal1} className={`${styles.effect} ${styles.paragraph_large} ${styles.margin_bottom_40} ${regular.className}`}>
                                        {content_1}
                                    </p>

                                    {/* <div ref={buttonReveal} className={styles.effect}>
                                        <a href="#" className={`${styles.button} ${styles.w_button} ${styles.mg_top_auto} ${bold.className}`}>
                                            Saber más
                                        </a>
                                    </div> */}
                                </div>

                                <div ref={arrowReveal} className={`${styles.effect} ${styles.icon_1x1_large} ${styles.w_embed}`}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M14.5895 16.0032L5.98291 7.39664L7.39712 5.98242L16.0037 14.589V7.00324H18.0037V18.0032H7.00373V16.0032H14.5895Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/*// ! =====> | LINE 1 tablet | <===== */}
                        <div
                            id={styles["w-node-_94fc19d0-d825-2c52-c42d-fa808984ede5-553db89c"]}
                            className={`${styles.line_vertical} ${styles.hide_tablet}`}
                            style={{ width: 2, height: "0%" }}
                            ref={lineVertical1}
                        />

                        <div
                            id={styles["w-node-_073e5582-bec2-8a31-9350-ecbd37f0ed93-553db89c"]}
                            className={styles.home_services_grid_right}
                        >
                            <div className={styles.home_services_grid_inner}>
                                <div id={styles["w-node-_5ff2f897-54c1-b32b-ae5e-1db3b955a0d5-553db89c"]}>
                                    <div className={`${styles.margin_bottom} ${styles.margin_xsmall}`}>
                                        <h2 ref={titleReveal2} className={`${styles.effect} ${styles.heading_style_h2} ${semiBold.className}`}>
                                            {edu_title_1}
                                        </h2>
                                    </div>
                                    <div ref={contentReveal2} className={`${styles.text_grid} ${styles.effect} ${styles.text_color_muted} ${regular.className}`}>
                                        {edu_content_1}
                                        <strong className={styles.since}>2020 - 2023.</strong>
                                    </div>
                                </div>

                                {/*// ! =====> | LINE 2 | <===== */}
                                <div
                                    id={styles["w-node-_04b6f89c-4dbb-7241-8589-253ac0f1d405-553db89c"]}
                                    className={`${styles.line_vertical} ${styles.hide_mobile_landscape}`}
                                    style={{ width: 2, height: "0%" }}
                                    ref={lineVertical2}
                                />

                                {/*// ! =====> | LINE 2_1 | <===== */}
                                <div
                                    ref={lineVertical2_1}
                                    className={`${styles.line} ${styles.show_mobile_landscape}`}
                                    style={{ width: "0%", height: 2 }}
                                />

                                <div id={styles["w-node-_073e5582-bec2-8a31-9350-ecbd37f0ed99-553db89c"]}>
                                    <div className={`${styles.margin_bottom} ${styles.margin_xsmall}`}>
                                        <h2 ref={titleReveal3} className={`${styles.effect} ${styles.heading_style_h2} ${semiBold.className}`}>
                                            {edu_title_2}
                                        </h2>
                                    </div>
                                    <div ref={contentReveal3} className={`${styles.text_grid} ${styles.effect} ${styles.text_color_muted} ${regular.className}`}>
                                        {edu_content_2}
                                        <strong className={styles.since}>2022 - 2022.</strong>
                                    </div>
                                </div>
                            </div>

                            {/*// ! =====> | LINE 3 | <===== */}
                            <div ref={lineVertical3} className={styles.line} style={{ width: "0%", height: 2 }} />

                            <div className={styles.home_services_grid_inner}>
                                <div id={styles["w-node-_5ce53944-fe85-b6e6-0982-675c802475be-553db89c"]}>
                                    <div className={`${styles.margin_bottom} ${styles.margin_xsmall}`}>
                                        <h2 ref={titleReveal4} className={`${styles.effect} ${styles.heading_style_h2} ${semiBold.className}`}>
                                            {edu_title_3}
                                        </h2>
                                    </div>
                                    <div ref={contentReveal4} className={`${styles.text_grid} ${styles.effect} ${styles.text_color_muted} ${regular.className}`}>
                                        {edu_content_3}
                                        <strong className={styles.since}>2022 - 2022.</strong>
                                    </div>
                                </div>

                                {/*// ! =====> | LINE 4 | <===== */}
                                <div
                                    id={styles["w-node-_5ce53944-fe85-b6e6-0982-675c802475c4-553db89c"]}
                                    className={`${styles.line_vertical} ${styles.hide_mobile_landscape}`}
                                    style={{ width: 2, height: "0%" }}
                                    ref={lineVertical4}
                                />

                                {/*// ! =====> | LINE 4_1 | <===== */}
                                <div
                                    ref={lineVertical4_1}
                                    className={`${styles.line} 00' ${styles.show_mobile_landscape}`}
                                    style={{ width: "0%", height: 2 }}
                                />

                                <div id="w-node-_5ce53944-fe85-b6e6-0982-675c802475c5-553db89c">
                                    <div className={`${styles.margin_bottom} ${styles.margin_xsmall}`}>
                                        <h2 ref={titleReveal5} className={`${styles.effect} ${styles.heading_style_h2} ${semiBold.className}`}>
                                            {edu_title_4}
                                        </h2>
                                    </div>
                                    <div ref={contentReveal5} className={`${styles.text_grid} ${styles.effect} ${styles.text_color_muted} ${regular.className}`}>
                                        {edu_content_4}
                                        <strong className={styles.since}>2022 - 2022.</strong>
                                    </div>
                                </div>
                            </div>

                            {/*// ! =====> | LINE 5 | <===== */}
                            <div ref={lineVertical5} className={styles.line} style={{ width: "0%", height: 2 }} />

                            <div className={styles.home_services_grid_inner}>
                                <div id={styles["w-node-_5ff2f897-54c1-b32b-ae5e-1db3b955a0d5-553db89c"]}>
                                    <div className={`${styles.margin_bottom} ${styles.margin_xsmall}`}>
                                        <h2 ref={titleReveal6} className={`${styles.effect} ${styles.heading_style_h2} ${semiBold.className}`}>
                                            {edu_title_5}
                                        </h2>
                                    </div>
                                    <div ref={contentReveal6} className={`${styles.text_grid} ${styles.effect} ${styles.text_color_muted} ${regular.className}`}>
                                        {edu_content_5}
                                        <strong className={styles.since}>2022 - 2022.</strong>
                                    </div>
                                </div>

                                {/*// ! =====> | LINE 6 | <===== */}
                                <div
                                    id={styles["w-node-_04b6f89c-4dbb-7241-8589-253ac0f1d405-553db89c"]}
                                    className={`${styles.line_vertical} ${styles.hide_mobile_landscape}`}
                                    style={{ width: 2, height: "0%" }}
                                    ref={lineVertical6}
                                />

                                {/*// ! =====> | LINE 6_1 | <===== */}
                                <div
                                    ref={lineVertical6_1}
                                    className={`${styles.line} ${styles.show_mobile_landscape}`}
                                    style={{ width: "0%", height: 2 }}
                                />

                                <div id={styles["w-node-_073e5582-bec2-8a31-9350-ecbd37f0ed99-553db89c"]}>
                                    <div className={`${styles.margin_bottom} ${styles.margin_xsmall}`}>
                                        <h2 ref={titleReveal7} className={`${styles.effect} ${styles.heading_style_h2} ${semiBold.className}`}>
                                            {edu_title_6}
                                        </h2>
                                    </div>
                                    <div ref={contentReveal7} className={`${styles.text_grid} ${styles.effect} ${styles.text_color_muted} ${regular.className}`}>
                                        {edu_content_6}
                                        <strong className={styles.since}>2022 - 2022.</strong>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EducationHome