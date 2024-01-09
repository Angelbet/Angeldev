import Image from 'next/image'
import { useEffect, useRef, useState } from 'react';
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

function ProyectsHome() {

    // ! =====> | Translation EN-ES-DE | <=====
    const router = useRouter();
    const { locale } = router;

    const data = locale === 'en' ? enData : locale === 'es' ? esData : deData;

    const projects = data[0].home[4].ProyectsHome[0].proyects;
    const development_0 = data[0].home[4].ProyectsHome[0].development_0;

    // ! =====> | Cursor | <=====
    const areaRef = useRef();
    const cursorRef = useRef();
    useEffect(() => {
        const area = areaRef.current;
        const cursor = cursorRef.current;

        area.addEventListener("mousemove", (e) => {
            gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.5, ease: "Power1.easeOut" });
        });

        area.addEventListener("mouseleave", () => {
            gsap.fromTo(cursor, { opacity: 1 }, { opacity: 0, duration: 0.5 });
            cursor.style.display = "none";
        });

        area.addEventListener("mouseenter", () => {
            gsap.fromTo(cursor, { opacity: 0 }, { opacity: 1, duration: 0.5 });
            cursor.style.display = "flex";
        });
    }, []);



    const proyectReveal = useRef(null);
    const titleReveal1 = useRef(null);
    const contentReveal1 = useRef(null);
    const imageReveal = useRef(null);
    useEffect(() => {
        const tl = gsap.timeline();

        // ! =====> | Proyect  Reveal | <=====
        tl.add(() => {
            if (proyectReveal.current) {
                gsap.fromTo(
                    proyectReveal.current,
                    { y: '150px', opacity: 0, duration: .6, },
                    {
                        y: '0',
                        opacity: 1,
                        duration: .6,
                        delay: .4,
                        ease: 'power1.out',
                        scrollTrigger: {
                            trigger: proyectReveal.current,
                            start: 'top 30%',
                            end: 'bottom 20%',
                        },
                    }
                );
            }
        },);

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

        // ! =====> | Image Reveal | <=====
        tl.add(() => {
            if (imageReveal.current) {
                gsap.fromTo(
                    imageReveal.current,
                    { y: '40px', opacity: 0, duration: .6, },
                    {
                        y: '0',
                        opacity: 1,
                        duration: .6,
                        delay: .8,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: imageReveal.current,
                            start: 'top 80%',
                            end: 'bottom 20%',
                        },
                    }
                );
            }
        }, 1);

    }, []);




    return (
        <section id="Projects" className={`${styles.section_work} ${styles.projects}`}>
            <div ref={proyectReveal} className={`${styles.effect} ${styles.container_work}`}>
                <div className={`${styles.projects_wrapper} ${styles.w_dyn_list}`}>
                    <div ref={areaRef} className={`${styles.projects_list} ${styles.w_dyn_items}`}>

                        <div className={`${styles.projects_item} ${styles.w_dyn_item}`}>
                            <a
                                href="https://aquaklinonline.com/"
                                className={`${styles.work_card} ${styles.w_inline_block}`}
                            >
                                <div className={styles.gradient_work} />

                                <div className={styles.work_card_image_wrapper}>
                                    <Image
                                        src="https://res.cloudinary.com/drg26w50h/image/upload/v1704329242/ab_portfolio/aquaklinonline_xl8m05.webp"
                                        alt="Aquaklin"
                                        width={2932}
                                        height={1872}
                                        ref={imageReveal}
                                        className={`${styles.effect} ${styles.work_card_image}`}
                                    />
                                </div>
                                <div className={styles.work_card_overlay} />
                                <div className={styles.work_card_content}>
                                    <h2 ref={titleReveal1} className={`${styles.effect} ${styles.text_color_white} ${styles.work} ${bold.className}`}>
                                        Aquaklin
                                    </h2>
                                    <div ref={contentReveal1} className={`${styles.effect} ${styles.work_card_info} ${styles.text_color_white} ${styles.text_extra_large} ${regular.className}`}>
                                        <p>{development_0}</p>
                                        <p>&nbsp;/&nbsp;</p>
                                        <p>2023</p>
                                    </div>
                                </div>
                            </a>
                        </div>



                        {projects.map((project, id) => (
                            <div key={id} className={`${styles.projects_item} ${styles.w_dyn_item}`}>

                                <a
                                    href={project.url}
                                    className={`${styles.work_card} ${styles.w_inline_block}`}
                                >
                                    <div className={styles.gradient_work} />

                                    <div className={styles.work_card_image_wrapper}>
                                        <Image
                                            src={project.src}
                                            width={2932}
                                            height={1872}
                                            alt={project.company}
                                            className={styles.work_card_image}
                                        />
                                    </div>
                                    <div className={styles.work_card_overlay} />
                                    <div className={styles.work_card_content}>
                                        <h2 className={`${styles.text_color_white} ${styles.work} ${bold.className}`}>
                                            {project.company}
                                        </h2>
                                        <div className={`${styles.work_card_info} ${styles.text_color_white} ${styles.text_extra_large} ${regular.className}`}>
                                            <p>{project.development}</p>
                                            <p>&nbsp;/&nbsp;</p>
                                            <p>{project.date}</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                        {/* 
                        <div className={`${styles.projects_item} ${styles.w_dyn_item}`}>
                            <a
                                href="#3"
                                className={`${styles.work_card} ${styles.w_inline_block}`}
                            >
                                <div className={styles.work_card_image_wrapper}>
                                    <img
                                        src="https://assets.website-files.com/646b40e7e667b95269558193/64773878e45b8de2e062abba_space%20runners.webp"
                                        loading="lazy"
                                        alt=""
                                        className={styles.work_card_image}
                                    />
                                </div>
                                <div className={styles.work_card_overlay} />
                                <div className={styles.work_card_content}>
                                    <h2 className={styles.text_color_white}>
                                        Ferralca
                                    </h2>
                                    <div className={`${styles.work_card_info} ${styles.text_color_white} ${styles.text_extra_large}`}>
                                        <p>Branding</p>
                                        <p>&nbsp;/&nbsp;</p>
                                        <p>space runners project</p>
                                        <p>&nbsp;/&nbsp;</p>
                                        <p>2022</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className={`${styles.projects_item} ${styles.w_dyn_item}`}>
                            <a
                                href="#4"
                                className={`${styles.work_card} ${styles.w_inline_block}`}
                            >
                                <div className={styles.work_card_image_wrapper}>
                                    <img
                                        src="https://assets.website-files.com/646b40e7e667b95269558193/64773a5721462d0f31c47673_Unibranes.webp"
                                        loading="lazy"
                                        alt=""
                                        className={styles.work_card_image}
                                    />
                                </div>
                                <div className={styles.work_card_overlay} />
                                <div className={styles.work_card_content}>
                                    <h2 className={styles.text_color_white}>
                                        Comproy
                                    </h2>
                                    <div className={`${styles.work_card_info} ${styles.text_color_white} ${styles.text_extra_large}`}>
                                        <p>Development</p>
                                        <p>&nbsp;/&nbsp;</p>
                                        <p>Unibranes project </p>
                                        <p>&nbsp;/&nbsp;</p>
                                        <p>2022</p>
                                    </div>
                                </div>
                            </a>
                        </div> */}

                    </div>

                </div>
            </div>

            <div
                className={`${styles.cursor} ${styles.pointer_events_none} `}
                ref={cursorRef}
            >
                <div ref={cursorRef} className={`${styles.link_cursor}`}>
                    <div className={`${styles.link_cursor_wrapper}`}>
                        <img
                            src="https://assets.website-files.com/646339d86eb49fdc1bcab917/646b6d1a58c24f745d38cffd_Arrow%20Top%20Right.svg"
                            width={59}
                            height={59}
                            alt="arrow"
                        />
                    </div>
                </div>
            </div>


        </section>
    )
}

export default ProyectsHome