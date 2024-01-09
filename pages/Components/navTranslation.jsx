import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

// ? STYLES
import { bold, extraLight, light, medium, regular, semiBold } from '@/fonts/fonts'
import style from '@/pages/Components/navTranslation.module.scss'
import styles from '@/styles/Home.module.css'

// ? TRANSLATION
import enData from '@/public/locales/en/en.json';
import esData from '@/public/locales/es/es.json';
import deData from '@/public/locales/de/de.json';

// ? GSAP
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// ? IMAGES
import logo from '@/public/l0go.png'
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

function NavTranslation() {

    // ! =====> | Translation EN-ES-DE | <=====
    const router = useRouter();
    const { locale } = router;

    const changeLanguage = (language) => {
        router.push(router.pathname, router.asPath, { locale: language });
    };

    const data = locale === 'en' ? enData : locale === 'es' ? esData : deData;

    const navReveal = useRef(null);
    useEffect(() => {
        if (navReveal.current) {
            gsap.fromTo(
                navReveal.current,
                { x: '150px', opacity: 0, duration: .6 },
                {
                    x: '0',
                    opacity: 1,
                    duration: .6,
                    delay: .4,
                    ease: 'power1.out',
                    scrollTrigger: {
                        trigger: navReveal.current,
                        start: '+=200',
                        end: 'bottom',
                        // markers: true,
                        toggleActions: "play none none reverse", // Controla el comportamiento de aparición y desaparición
                    },
                }
            );
        }
    }, []);

    return (
        <div ref={navReveal} className={`${styles.effect} ${style.secondary_navigation_bar}`}>
            <a
                href="#"
                className={`${style.nav_menu_link} ${style.w_inline_block} ${style.w__current}`}
            >
                <Image
                    src={logo}
                    width={35}
                    priority
                    alt="logo"
                    className={style.image_2}
                />
            </a>
            <div className={style.secondary_nav_main_links}>
                <button onClick={() => changeLanguage('en')} className={`${style.nav_menu_link} ${style.w_inline_block}`}>
                    <div className={style.animation_rotate_text_container}>
                        <div className={style.animation_rotate_text_one}>
                            <div className={`${style.nav_menu_text_2} ${semiBold.className}`}>
                                EN&nbsp;&nbsp;🇺🇸
                            </div>
                        </div>
                    </div>
                </button>
                <button onClick={() => changeLanguage('es')} className={`${style.nav_menu_link} ${style.w_inline_block}`}>
                    <div className={style.animation_rotate_text_container}>
                        <div className={style.animation_rotate_text_one}>
                            <div className={`${style.nav_menu_text_2} ${semiBold.className}`}>
                                ES&nbsp;&nbsp;🇪🇸
                            </div>
                        </div>
                    </div>
                </button>
                <button onClick={() => changeLanguage('de')} className={`${style.nav_menu_link} ${style.w_inline_block}`}>
                    <div className={style.animation_rotate_text_container}>
                        <div className={style.animation_rotate_text_one}>
                            <div className={`${style.nav_menu_text_2} ${semiBold.className}`}>
                                DE&nbsp;&nbsp;🇩🇪
                            </div>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default NavTranslation