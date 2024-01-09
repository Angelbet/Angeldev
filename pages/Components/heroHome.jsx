import Image from 'next/image'
import { useEffect, useRef, useState } from 'react';

import { LinkIcons } from '../Components/Footer'

// ? STYLES
import styles from '@/styles/Home.module.css'

// ? FONTS
import { bold, extraLight, light, medium, regular, semiBold } from '@/fonts/fonts';

// ? GSAP
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// ? IMAGES
import human from '@/public/human.png'
import { useRouter } from 'next/router';

// ? TRANSLATION
import enData from '@/public/locales/en/en.json';
import esData from '@/public/locales/es/es.json';
import deData from '@/public/locales/de/de.json';

gsap.registerPlugin(ScrollTrigger);

function HeroHome() {

    // ! =====> | Translation EN-ES-DE | <=====
    const router = useRouter();
    const { locale } = router;

    const data = locale === 'en' ? enData : locale === 'es' ? esData : deData;

    const title_1 = data[0].home[0].HeroHome[0].title_1;
    const title_1_2 = data[0].home[0].HeroHome[0].title_1_2;
    const title_1_3 = data[0].home[0].HeroHome[0].title_1_3;
    const content_1 = data[0].home[0].HeroHome[0].content_1;
    const title_2 = data[0].home[0].HeroHome[0].title_2;
    const content_2 = data[0].home[0].HeroHome[0].content_2;
    const title_3 = data[0].home[0].HeroHome[0].title_3;
    const content_3 = data[0].home[0].HeroHome[0].content_3;
    const title_4 = data[0].home[0].HeroHome[0].title_4;



    // ! =====> | LINE 1 | <=====
    const line1 = useRef(null);
    const line2 = useRef(null);
    const line3 = useRef(null);
    useEffect(() => {
        const line = line1.current;
        if (line) {
            gsap.to(line, {
                maxWidth: "148px",
                height: "8px",
                duration: 1,
                ease: "power1.inOut",
                delay: 0.1,
                scrollTrigger: {
                    trigger: line,
                    start: "bottom bottom", // inicia la animación cuando el borde superior del elemento entre en la vista
                    end: "bottom top", // termina la animación cuando el borde inferior del elemento salga de la vista
                    scrub: false, // ajusta la animación a la velocidad de desplazamiento
                },
            });
        }
    }, []);


    // ! =====> | Efecto Person Reveral | <=====
    const personReveral = useRef(null);
    useEffect(() => {
        if (personReveral.current) {
            gsap.fromTo(
                personReveral.current,
                { y: '100px', opacity: 0, duration: 2, },
                {
                    y: 0,
                    opacity: 1,
                    duration: 2,
                    delay: .5,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: personReveral.current,
                        start: 'top 80%',
                        end: 'bottom 20%',
                    },
                }
            );
        }
    }, []);



    const textRef = useRef(null);
    const textReveralRef = useRef(null);
    const scrollReveral = useRef(null);
    const titleReveral1 = useRef(null);
    const textReveral1 = useRef(null);
    const buttonReveral1 = useRef(null);
    const titleReveral2 = useRef(null);
    const textReveral2 = useRef(null);
    const buttonReveral2 = useRef(null);
    const titleReveral3 = useRef(null);
    const socialReveral = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        // ! =====> | Efecto Escritura | <=====
        tl.add(() => {
            const text = textRef.current;
            if (text) {
                const textArray = text.innerText.split('');
                text.innerText = '';

                textArray.forEach((char, index) => {
                    setTimeout(() => {
                        text.innerText += char;
                    }, index * 100); // Ajusta el retraso para controlar la velocidad de la animación
                });
            }
        });

        // ! =====> | Efecto Text Reveral | <=====
        tl.add(() => {
            if (textReveralRef.current) {
                gsap.fromTo(
                    textReveralRef.current,
                    { y: '-100px', opacity: 0, duration: 1, },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: textReveralRef.current,
                            start: 'top 80%',
                            end: 'bottom 20%',
                            // scrub: true,
                        },
                    }
                );
            }
        }, 3); // Retraso de 3 segundos antes de ejecutar la animación

        // ! =====> | Efecto Scroll Reveral | <=====
        tl.add(() => {
            if (scrollReveral.current) {
                gsap.fromTo(
                    scrollReveral.current,
                    { opacity: 0, duration: 1, },
                    {
                        opacity: 1,
                        duration: 1,
                        ease: 'power2.inOut',
                        scrollTrigger: {
                            trigger: scrollReveral.current,
                            start: 'top 80%',
                            end: 'bottom 20%',
                            // scrub: true,
                        },
                    }
                );
            }
        }, 2);

        // ! =====> | 00000000000000000 | <=====

        // ! =====> | Efecto Titulo 1 Reveral | <=====
        tl.add(() => {
            if (titleReveral1.current) {
                gsap.fromTo(
                    titleReveral1.current,
                    { x: '-100px', opacity: 0, duration: 1, },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 1,
                        delay: .7,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: titleReveral1.current,
                            start: 'top 80%',
                            end: 'bottom 20%',
                        },
                    }
                );
            }
        }, 2);

        // ! =====> | Efecto Text 1 Reveral | <=====
        tl.add(() => {
            if (textReveral1.current) {
                gsap.fromTo(
                    textReveral1.current,
                    { x: '-100px', opacity: 0, duration: 1, },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 1,
                        delay: .5,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: textReveral1.current,
                            start: 'top 80%',
                            end: 'bottom 20%',
                        },
                    }
                );
            }
        }, 2);

        // ! =====> | Efecto Button 1 Reveral | <=====
        tl.add(() => {
            if (buttonReveral1.current) {
                gsap.fromTo(
                    buttonReveral1.current,
                    { opacity: 0, duration: .7, },
                    {
                        delay: .3,
                        opacity: 1,
                        duration: .7,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: buttonReveral1.current,
                            start: 'top 80%',
                            end: 'bottom 20%',
                        },
                    }
                );
            }
        }, 2);

        // ! =====> | LINE 2 | <=====
        tl.add(() => {
            const line = line2.current;
            if (line) {
                gsap.to(line, {
                    width: "100%",
                    height: "2px",
                    duration: 1,
                    ease: "power1.inOut",
                    delay: 0.1,
                    scrollTrigger: {
                        trigger: line,
                        start: "bottom bottom", // inicia la animación cuando el borde superior del elemento entre en la vista
                        end: "bottom top", // termina la animación cuando el borde inferior del elemento salga de la vista
                        scrub: false, // ajusta la animación a la velocidad de desplazamiento
                    },
                });
            }
        }, 2);

        // ! =====> | Efecto Titulo 2 Reveral | <=====
        tl.add(() => {
            if (titleReveral2.current) {
                gsap.fromTo(
                    titleReveral2.current,
                    { x: '-100px', opacity: 0, duration: 1, },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 1,
                        delay: .7,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: titleReveral2.current,
                            start: 'top 80%',
                            end: 'bottom 20%',
                        },
                    }
                );
            }
        }, 2);

        // ! =====> | Efecto Text 2 Reveral | <=====
        tl.add(() => {
            if (textReveral2.current) {
                gsap.fromTo(
                    textReveral2.current,
                    { x: '-100px', opacity: 0, duration: 1, },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 1,
                        delay: .5,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: textReveral2.current,
                            start: 'top 80%',
                            end: 'bottom 20%',
                        },
                    }
                );
            }
        }, 2);

        // ! =====> | Efecto Button 2 Reveral | <=====
        tl.add(() => {
            if (buttonReveral2.current) {
                gsap.fromTo(
                    buttonReveral2.current,
                    { opacity: 0, duration: .7, },
                    {
                        delay: .3,
                        opacity: 1,
                        duration: .7,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: buttonReveral2.current,
                            start: 'top 80%',
                            end: 'bottom 20%',
                        },
                    }
                );
            }
        }, 2);

        // ! =====> | LINE 3 | <=====
        tl.add(() => {
            const line = line3.current;
            if (line) {
                gsap.to(line, {
                    width: "100%",
                    height: "2px",
                    duration: 1,
                    ease: "power1.inOut",
                    delay: 0.1,
                    scrollTrigger: {
                        trigger: line,
                        start: "bottom bottom", // inicia la animación cuando el borde superior del elemento entre en la vista
                        end: "bottom top", // termina la animación cuando el borde inferior del elemento salga de la vista
                        scrub: false, // ajusta la animación a la velocidad de desplazamiento
                    },
                });
            }
        }, 2);

        // ! =====> | Efecto Titulo 3 Reveral | <=====
        tl.add(() => {
            if (titleReveral3.current) {
                gsap.fromTo(
                    titleReveral3.current,
                    { x: '-100px', opacity: 0, duration: 1, },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 1,
                        delay: .7,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: titleReveral3.current,
                            start: 'top 80%',
                            end: 'bottom 20%',
                        },
                    }
                );
            }
        }, 2);

        // ! =====> | Efecto Social Reveral | <=====
        tl.add(() => {
            if (socialReveral.current) {
                gsap.fromTo(
                    socialReveral.current,
                    { y: '100px', opacity: 0, duration: 1, },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        delay: .7,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: socialReveral.current,
                            start: 'top bottom',
                            end: 'bottom 20%',
                        },
                    }
                );
            }
        }, 2);


    }, []);



    return (
        <div className={`${styles.section_1} ${styles.top_bg_image} ${styles.wf_section}`}>
            <img
                src="https://assets-global.website-files.com/651aa8b4feb6490e2b81db9a/651bc4f67fe4e6d1b7895f3a_grid-hero.svg"
                loading="lazy"
                alt=""
                className={styles.image_3}
            />
            <div className={styles.hero_white_overland} />


            <div className={`${styles.container_default} ${styles.z_index_1} ${styles.w_container_1}`}>
                <div className={`${styles.grid_2_columns} ${styles.hero_bg_image_grid}`}>
                    <div className={styles.hero_bg_image_left_container}>

                        {/*// ! =====> | LINE 1 | <===== */}
                        <div ref={line1} className={`${styles.heading_top_line} ${styles.large}`} />

                        <h1 ref={textRef} className={`${styles.display_2} ${styles.mg_bottom_12px} ${extraLight.className}`}>
                            {title_1} <br />{title_1_2}<br />{title_1_3}
                        </h1>

                        <div className={`${styles.inner_container} ${styles._504px} ${styles._100_tablet}`}>
                            <p ref={textReveralRef} className={`${styles.effect} ${styles.mg_bottom_0} ${regular.className}`}>
                                {content_1}
                            </p>
                        </div>
                        <a
                            href="#footer"
                            className={`${styles.scroll_down_wrapper} ${styles.w_inline_block}`}
                        >
                            <div className="elementor-element elementor-element-a0dfc24 elementor-widget__width-initial elementor-absolute elementor-widget elementor-widget-coco-scroll">
                                <div ref={scrollReveral} className={`${styles.effect} elementor-widget-container`}>
                                    <div className="icon-scroll" />
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className={`${styles.hero_bg_image_right_container} ${styles.left_container_1}`}>
                        <div className={`${styles.grid_2_columns_mbl} ${styles._1_col_mbp} ${styles.gap_0_mbp}`}>
                            <div className={`${styles.flex_vertical} ${styles.start}`}>
                                <div className={styles.mg_bottom_16px}>
                                    <div ref={titleReveral1} className={`${styles.effect} ${styles.text_200} ${styles.bold} ${styles.text_uppercase} ${light.className}`}>
                                        {title_2}
                                    </div>
                                </div>
                                <p ref={textReveral1} className={`${styles.effect} ${styles.mg_bottom_32px} ${regular.className}`}>
                                    {content_2}
                                </p>

                                {/* <a href="#" ref={buttonReveral1} className={`${styles.effect} ${styles.button} ${styles.w_button} ${styles.mg_top_auto} ${bold.className}`}>
                                    Más información
                                </a> */}

                            </div>

                            {/*// ! =====> | LINE 2 | <===== */}
                            <div className={`${styles.hidden_on_mbl} ${styles.show_on_mbp}`}>
                                <div ref={line2} className={`${styles.divider} ${styles._50px} ${styles.bg_neutral_700}`} />
                            </div>

                            <div className={`${styles.flex_vertical} ${styles.start}`}>
                                <div className={styles.mg_bottom_16px}>
                                    <div ref={titleReveral2} className={`${styles.effect} ${styles.text_200} ${styles.bold} ${styles.text_uppercase} ${light.className}`}>
                                        {title_3}
                                    </div>
                                </div>
                                <p ref={textReveral2} className={`${styles.effect} ${styles.mg_bottom_32px} ${regular.className}`}>
                                    {content_3}
                                </p>

                                {/* <a ref={buttonReveral2} href="#" className={`${styles.effect} ${styles.button} ${styles.w_button} ${styles.mg_top_auto} ${bold.className}`}>
                                    Ver portafolio
                                </a> */}

                            </div>
                        </div>

                        {/*// ! =====> | LINE 3 | <===== */}
                        <div ref={line3} className={`${styles.divider} ${styles._50px} ${styles.bg_neutral_700}`} />

                        <div className={styles.mg_bottom_24px}>
                            <div ref={titleReveral3} className={`${styles.effect} ${styles.text_200} ${styles.bold} ${styles.text_uppercase} ${light.className}`}>
                                {title_4}
                            </div>
                        </div>

                        <div ref={socialReveral} className={`${styles.effect} ${styles.w_layout_grid} ${styles.social_media_grid_top}`}>
                            {LinkIcons.map((item, Index) => {
                                return (
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        key={Index}
                                        className={`${styles.social_icon} ${styles.w_inline_block}`}
                                    >
                                        <div className={styles.social_icon_font}>{item.icon}</div>
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div ref={personReveral} className={styles.hero_bg_image_wrapper}>
                {/* <img
                    src="https://assets.website-files.com/622fbc5a718ac3417fcd3d75/6230e4ff69a8f142114d0d12_home-hero-bg-image-developer-webflow-ecommerce-template.png"
                    loading="eager"
                    alt="Angeldev"
                    className={styles.hero_bg_image}
                /> */}
                <Image
                    src={human}
                    width={996}
                    placeholder='blur'
                    alt="Angeldev"
                    className={styles.hero_bg_image}
                />
            </div>
        </div>
    )
}

export default HeroHome