import Image from 'next/image'
import { Children, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

// ? STYLES
import styles from '@/styles/Home.module.css'

// ? COMPONENTS
import EducationHome from '@/pages/Components/educationHome'

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

function SkillHome() {

    // ! =====> | Translation EN-ES-DE | <=====
    const router = useRouter();
    const { locale } = router;

    const data = locale === 'en' ? enData : locale === 'es' ? esData : deData;

    const title_1_1 = data[0].home[3].SkillHome[0].title_1_1;
    const title_1_2 = data[0].home[3].SkillHome[0].title_1_2;
    const content_1 = data[0].home[3].SkillHome[0].content_1;
    const title_skill_1 = data[0].home[3].SkillHome[0].title_skill_1;
    const title_skill_2 = data[0].home[3].SkillHome[0].title_skill_2;

    const skill_1 = data[0].home[3].SkillHome[0].skill_1;
    const skill_2 = data[0].home[3].SkillHome[0].skill_2;
    const skill_3 = data[0].home[3].SkillHome[0].skill_3;


    const lineVertical = useRef(null);
    const lineHorizontal = useRef(null);

    const titleReveal1 = useRef(null);
    const contentReveal1 = useRef(null);
    const arrowReveal = useRef(null);
    const titleReveal2 = useRef(null);
    const skillReveal1 = useRef(null);
    const titleReveal3 = useRef(null);
    const skillReveal2 = useRef(null);
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

        // ! =====> | LINE 1 | <=====
        tl.add(() => {
            const line = lineVertical.current;
            if (lineVertical.current) {
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
        },);

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

        // ! =====> | Skill 2 Reveal | <=====
        tl.add(() => {
            if (skillReveal1.current) {
                gsap.fromTo(
                    skillReveal1.current,
                    { x: '40px', opacity: 0, duration: .6, },
                    {
                        x: '0',
                        opacity: 1,
                        duration: .6,
                        delay: .9,
                        ease: 'bounce.out',
                        scrollTrigger: {
                            trigger: skillReveal1.current,
                            start: 'top 80%',
                            end: 'bottom 20%',
                        },
                    }
                );
            }
        }, 2);

        // ! =====> | LINE 2 | <=====
        tl.add(() => {
            const line = lineHorizontal.current;
            if (lineHorizontal.current) {
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
        },);

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

        // ! =====> | Skill 2 Reveal | <=====
        tl.add(() => {
            if (skillReveal2.current) {
                gsap.fromTo(
                    skillReveal2.current,
                    { x: '40px', opacity: 0, duration: .6, },
                    {
                        x: '0',
                        opacity: 1,
                        duration: .6,
                        delay: .9,
                        ease: 'bounce.out',
                        scrollTrigger: {
                            trigger: skillReveal2.current,
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
                    <div className={`${styles.home_services_grid}`}>
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
                        <div
                            id={styles["w-node-_94fc19d0-d825-2c52-c42d-fa808984ede5-553db89c"]}
                            className={`${styles.line_vertical} ${styles.hide_tablet}`}
                            style={{ width: 2, height: "0%" }}
                            ref={lineVertical}
                        />
                        <div
                            id={styles["w-node-_073e5582-bec2-8a31-9350-ecbd37f0ed93-553db89c"]}
                            className={styles.home_services_grid_right}
                        >
                            <div className={`${styles.home_services_grid_inner} ${styles.skills_grid}`}>
                                <div id={styles["w-node-_5ff2f897-54c1-b32b-ae5e-1db3b955a0d5-553db89c"]}>
                                    <div className={`${styles.margin_bottom} ${styles.margin_xsmall}`}>
                                        <h2 ref={titleReveal2} className={`${styles.effect} ${styles.heading_style_h2} ${semiBold.className}`}>
                                            {title_skill_1}
                                        </h2>
                                    </div>

                                    {/* 00000000000000 SKILLS 00000000000000 */}
                                    <div ref={skillReveal1} className={`${styles.effect} ${styles.text_color_muted} ${semiBold.className} ${styles.skill_structure}`}>
                                        <div className={styles.block_highlight}>
                                            <div className={styles.text_block_highlight}>JavaScript</div>
                                        </div>
                                        <div className={styles.block_highlight}>
                                            <div className={styles.text_block_highlight}>Node.JS</div>
                                        </div>
                                        <div className={styles.block_highlight}>
                                            <div className={styles.text_block_highlight}>Express.JS</div>
                                        </div>
                                        <div className={styles.block_highlight}>
                                            <div className={styles.text_block_highlight}>Next.JS</div>
                                        </div>
                                        <div className={styles.block_highlight}>
                                            <div className={styles.text_block_highlight}>React.JS</div>
                                        </div>
                                        <div className={styles.block_highlight}>
                                            <div className={styles.text_block_highlight}>REST API</div>
                                        </div>
                                        <div className={styles.block_highlight}>
                                            <div className={styles.text_block_highlight}>APIs</div>
                                        </div>
                                        <div className={styles.block_highlight}>
                                            <div className={styles.text_block_highlight}>MongoDB</div>
                                        </div>
                                        <div className={styles.block_highlight}>
                                            <div className={styles.text_block_highlight}>CSS</div>
                                        </div>
                                        <div className={styles.block_highlight}>
                                            <div className={styles.text_block_highlight}>SASS</div>
                                        </div>
                                        <div className={styles.block_highlight}>
                                            <div className={styles.text_block_highlight}>GSAP</div>
                                        </div>
                                        <div className={styles.block_highlight}>
                                            <div className={styles.text_block_highlight}>Three.JS</div>
                                        </div>
                                        <div className={styles.block_highlight}>
                                            <div className={styles.text_block_highlight}>Git</div>
                                        </div>
                                        <div className={styles.block_highlight}>
                                            <div className={styles.text_block_highlight}>GitHub</div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/*// ! =====> | LINE 2 | <===== */}
                            <div ref={lineHorizontal} className={styles.line} style={{ width: "0%", height: 2 }} />

                            <div className={`${styles.home_services_grid_inner} ${styles.skills_grid}`}>
                                <div id={styles["w-node-_5ce53944-fe85-b6e6-0982-675c802475be-553db89c"]}>
                                    <div className={`${styles.margin_bottom} ${styles.margin_xsmall}`}>
                                        <h2 ref={titleReveal3} className={`${styles.effect} ${styles.heading_style_h2} ${semiBold.className}`}>
                                            {title_skill_2}
                                        </h2>
                                    </div>
                                    <div ref={skillReveal2} className={`${styles.effect} ${styles.text_color_muted} ${semiBold.className} ${styles.skill_structure}`}>
                                        <div className={styles.block_highlight}>
                                            <div className={styles.text_block_highlight}>Front-End</div>
                                        </div>
                                        <div className={styles.block_highlight}>
                                            <div className={styles.text_block_highlight}>Back-End</div>
                                        </div>
                                        <div className={styles.block_highlight}>
                                            <div className={styles.text_block_highlight}>Diseño UX/UI</div>
                                        </div>
                                        <div className={styles.block_highlight}>
                                            <div className={styles.text_block_highlight}>Photoshop</div>
                                        </div>
                                        <div className={styles.block_highlight}>
                                            <div className={styles.text_block_highlight}>Figma</div>
                                        </div>
                                        <div className={styles.block_highlight}>
                                            <div className={styles.text_block_highlight}>Notion</div>
                                        </div>
                                        <div className={styles.block_highlight}>
                                            <div className={styles.text_block_highlight}>Diseño Web Responsivo</div>
                                        </div>
                                        <div className={styles.block_highlight}>
                                            <div className={styles.text_block_highlight}>Illustrator</div>
                                        </div>
                                        <div className={styles.block_highlight}>
                                            <div className={styles.text_block_highlight}>Hosting</div>
                                        </div>
                                        <div className={styles.block_highlight}>
                                            <div className={styles.text_block_highlight}>Linux</div>
                                        </div>
                                        <div className={styles.block_highlight}>
                                            <div className={styles.text_block_highlight}>Flutter</div>
                                        </div>
                                        <div className={styles.block_highlight}>
                                            <div className={styles.text_block_highlight}>AWS</div>
                                        </div>
                                        <div className={styles.block_highlight}>
                                            <div className={styles.text_block_highlight}>Postman</div>
                                        </div>
                                        <div className={styles.block_highlight}>
                                            <div className={styles.text_block_highlight}>Vercel</div>
                                        </div>
                                        <div className={styles.block_highlight}>
                                            <div className={styles.text_block_highlight}>Heroku</div>
                                        </div>
                                        <div className={styles.block_highlight}>
                                            <div className={styles.text_block_highlight}>Netlify</div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    id={styles["w-node-_5ce53944-fe85-b6e6-0982-675c802475c4-553db89c"]}
                                    className={`${styles.line_vertical} ${styles.hide_mobile_landscape}`}
                                    style={{ width: 2, height: "100%" }}
                                />
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SkillHome