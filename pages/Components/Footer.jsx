import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import style from "../../styles/Home.module.css";
import Image from 'next/image';
import { useRouter } from 'next/router';

// ? ICONS
import { UilGithub } from '@iconscout/react-unicons'
import { UilEnvelopeAlt } from '@iconscout/react-unicons'
import { UilLinkedin } from '@iconscout/react-unicons'
import { UilInstagram } from '@iconscout/react-unicons'
import { UilFacebook } from '@iconscout/react-unicons'
import { UilArrowRight } from '@iconscout/react-unicons'

// ? FONTS
import { bold, extraLight, light, medium, regular, semiBold } from '@/fonts/fonts';

// ? GSAP
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// ? IMAGES
import perfi_circle from '@/public/perfi_circle.jpg'

// ? TRANSLATION
import enData from '@/public/locales/en/en.json';
import esData from '@/public/locales/es/es.json';
import deData from '@/public/locales/de/de.json';


gsap.registerPlugin(ScrollTrigger);

export default function Footer() {

    // ! =====> | Translation EN-ES-DE | <=====
    const router = useRouter();
    const { locale } = router;

    const data = locale === 'en' ? enData : locale === 'es' ? esData : deData;

    const title_0 = data[0].home[5].Footer[0].title_0;
    const title_1 = data[0].home[5].Footer[0].title_1;
    const title_2_1 = data[0].home[5].Footer[0].title_2_1;
    const title_2_2 = data[0].home[5].Footer[0].title_2_2;



    const wordReveal2 = useRef(null);
    const personReveral = useRef(null);
    const titleReveal1 = useRef(null);
    const contentReveal1 = useRef(null);
    const socialReveral = useRef(null);
    const titleReveal2 = useRef(null);
    const titleReveal3 = useRef(null);
    const contentReveal2 = useRef(null);
    const titleReveal4 = useRef(null);
    const contentReveal3 = useRef(null);
    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: wordReveal2.current,
                start: 'top 80%', // La animación comienza cuando el elemento entra en el 80% superior del viewport
                end: 'bottom 20%', // La animación termina cuando el elemento sale del 20% inferior del viewport
                // scrub: true, // Descomenta esta línea para hacer que la animación se ajuste a la posición de desplazamiento
            },
        });

        // ! =====> | Person Reveal | <=====
        tl.add(() => {
            if (personReveral.current) {
                gsap.fromTo(
                    personReveral.current,
                    { y: '100px', opacity: 0, duration: 1, },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        delay: .7,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: personReveral.current,
                            start: 'top 80%',
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
        }, 1);

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
        }, 3);

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
                            start: 'top bottom',
                            end: 'bottom 20%',
                        },
                    }
                );
            }
        }, 1);

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
                            start: 'top bottom',
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
                    { y: '50px', opacity: 0, duration: .6, },
                    {
                        y: '0',
                        opacity: 1,
                        duration: .6,
                        delay: .8,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: contentReveal2.current,
                            start: 'top bottom',
                            end: 'bottom 20%',
                        },
                    }
                );
            }
        }, 3);

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
                            start: 'top bottom',
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
                    { y: '50px', opacity: 0, duration: .6, },
                    {
                        y: '0',
                        opacity: 1,
                        duration: .6,
                        delay: .8,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: contentReveal3.current,
                            start: 'top bottom',
                            end: 'bottom 20%',
                        },
                    }
                );
            }
        }, 3);

    }, []);

    return (
        <>
            <footer id='footer' className={style.footer_wrapper}>
                <div className={style.container_footer}>
                    <div className={style.footer_top}>
                        <div className={`${style.w_layout_grid} ${style.grid_2_columns} ${style.footer_grid_top}`}>
                            <div className={style.grid_1}>
                                <div className={`${style.flex} ${style.align_center} ${style.mg_bottom_40px}`}>
                                    {/* <img
                                        src="https://assets.website-files.com/622fbc5a718ac3417fcd3d75/62326876f08f3412b5a688bf_john-carter-footer-avatar-developer-webflow-ecommerce-template.jpg"
                                        alt="Angel Becerra - Web Developer"
                                        className={`${style.avatar_circle} ${style._05} ${style.mg_right_24px}`}
                                    /> */}

                                    <Image
                                        src={perfi_circle}
                                        ref={personReveral}
                                        alt="Angel Becerra - Web Developer"
                                        className={`${style.effect} ${style.avatar_circle} ${style._05} ${style.mg_right_24px}`}
                                    />
                                    <div>
                                        <div ref={titleReveal1} className={`${style.effect} ${style.display_5} ${style.mg_bottom_8px} ${regular.className}`}>
                                            Angel Becerra
                                        </div>
                                        <div ref={contentReveal1} className={`${style.effect} ${style.text_400} ${style.medium} ${style.color_neutral_500} ${medium.className}`}>
                                            {title_0}
                                        </div>
                                    </div>
                                </div>
                                <div ref={socialReveral} className={`${style.effect} ${style.w_layout_grid} ${style.social_media_grid_top}`}>
                                    {LinkIcons.map((item, Index) => {
                                        return (
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                key={Index}
                                                className={`${style.social_icon} ${style.w_inline_block}`}
                                            >
                                                <div className={style.social_icon_font}>{item.icon}</div>
                                            </a>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className={`${style.grid_2} ${style.inner_container} ${style._522px}`}>
                                <a
                                    href="#"
                                    ref={titleReveal2}
                                    className={`${style.effect} ${style.display_3} ${style.text_decoration_none} ${style.mg_bottom_40px} ${style.w_inline_block}`}
                                >
                                    <div className={`${style.color_neutral_100} ${style.display_block} ${bold.className}`}>
                                        {title_1}
                                    </div>
                                    <div className={`${style.line_square_icon} ${style.link_icon_right} ${style.color_accent_1}`}>
                                        <UilArrowRight size="50" />
                                    </div>
                                </a>
                                <div className={`${style.grid_2_columns} ${style.footer_contact_links}`}>
                                    <div>
                                        <div ref={titleReveal3} className={`${style.effect} ${style.text_100} ${style.bold} ${style.text_uppercase} ${light.className}`}>
                                            <span className={style.color_neutral_400}>
                                                {title_2_1}
                                            </span>
                                        </div>
                                        <a
                                            ref={contentReveal2}
                                            href="mailto:angelfabian.becerra@gmail.com"
                                            className={`${style.effect} ${style.link_wrapper} ${style.white} ${style.mg_top_16px} ${style.w_inline_block}`}
                                        >
                                            <div className={`${style.link_text} ${style.heading_h4_size} ${semiBold.className}`}>
                                                angelfabian.becerra@gmail.com
                                            </div>
                                            <div className={style.link_underline_wrapper}>
                                                <div className={style.link_underline} />
                                            </div>
                                        </a>
                                    </div>
                                    <div className={style.grid_s}>
                                        <div ref={titleReveal4} className={`${style.effect} ${style.text_100} ${style.bold} ${style.text_uppercase} ${light.className}`}>
                                            <span className={style.color_neutral_400}>
                                                {title_2_2}
                                            </span>
                                        </div>
                                        <a
                                            ref={contentReveal3}
                                            href="tel:(424)232-0154"
                                            className={`${style.effect} ${style.link_wrapper} ${style.white} ${style.mg_top_16px} ${style.w_inline_block}`}
                                        >
                                            <div className={`${style.link_text} ${style.heading_h4_size} ${semiBold.className}`}>
                                                +58 (424) 232 - 0154
                                            </div>
                                            <div className={style.link_underline_wrapper}>
                                                <div className={style.link_underline} />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.footer_bottom}>
                        <div className={`${style.w_layout_grid} ${style.grid_footer_bottom}`}>
                            <div className={regular.className}>
                                {/* <a
                                    href="/"
                                    className={`${style.footer_link}`}
                                >
                                    Inicio
                                </a>
                                <a
                                    href="/"
                                    className={`${style.footer_link}`}
                                >
                                    About
                                </a>
                                <a
                                    href="/"
                                    className={`${style.footer_link}`}
                                >
                                    Portafolio
                                </a>
                                <a
                                    href="/"
                                    className={`${style.footer_link} ${style.last}`}
                                >
                                    Contact
                                </a> */}
                            </div>
                            <div className={`${style.text_right} ${style.text_center_tablet}`}>
                                <p className={`${style.color_neutral_100} ${style.mg_bottom_0} ${regular.className}`}>
                                    Copyright © {new Date().getFullYear()} &nbsp;|&nbsp; Designed by
                                    <a className={`${style.link_f} ${semiBold.className}`} href="#">
                                        Angeldev
                                    </a>&nbsp;
                                    -&nbsp;&nbsp;Powered by{" "}
                                    <a className={`${style.link_f} ${semiBold.className}`} href="#" target="_blank">
                                        NextJS
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export const LinkIcons = [
    {
        // Gmail
        link: "mailto:angelfabian.becerra@gmail.com",
        icon: (<UilEnvelopeAlt />),
    },
    {
        // Linkedin
        link: "http://linkedin.com/in/angel-becerra-2a4435202",
        icon: (<UilLinkedin />),
    },
    // {
    //     // Instagram
    //     link: "https://www.instagram.com/angil_b3/",
    //     icon: (<UilInstagram />),
    // },
    // {
    //     // Facebook
    //     link: "https://www.facebook.com/AngelBecerra13",
    //     icon: (<UilFacebook />),
    // },
    {
        // Github
        link: "https://github.com/Angelbet",
        icon: (<UilGithub />),
    },
]







