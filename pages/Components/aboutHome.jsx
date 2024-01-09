import Image from 'next/image'
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

// ? STYLES
import styles from '@/styles/Home.module.css'

// ? FONTS
import { bold, extraLight, light, medium, regular, semiBold } from '@/fonts/fonts';

// ? GSAP
import { gsap } from 'gsap';

// ? IMAGES
import perfi_circle from '@/public/perfi_circle.jpg'

// ? TRANSLATION
import enData from '@/public/locales/en/en.json';
import esData from '@/public/locales/es/es.json';
import deData from '@/public/locales/de/de.json';

export function AboutHome() {

    // ! =====> | Translation EN-ES-DE | <=====
    const router = useRouter();
    const { locale } = router;

    const data = locale === 'en' ? enData : locale === 'es' ? esData : deData;

    const title_1_1 = data[0].home[1].AboutHome[0].title_1_1;
    const title_1_2 = data[0].home[1].AboutHome[0].title_1_2;
    const content_1 = data[0].home[1].AboutHome[0].content_1;


    const wordReveal1 = useRef(null);
    const wordReveal2 = useRef(null);

    const nameRef = useRef(null);
    const personReveral = useRef(null);
    const accentReveral = useRef(null);
    const contentReveral = useRef(null);
    const buttonsCv = useRef(null);
    const buttonsMore = useRef(null);

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

        // ! =====> | Accent Reveal | <=====
        tl.add(() => {
            if (accentReveral.current) {
                gsap.fromTo(
                    accentReveral.current,
                    { opacity: 0, duration: 1, },
                    {
                        opacity: 1,
                        duration: 1,
                        delay: .7,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: accentReveral.current,
                            start: 'top 80%',
                            end: 'bottom 20%',
                        },
                    }
                );
            }
        }, 1);

        // ! =====> | Hey Reveal | <=====
        tl.to(wordReveal2.current, {
            x: -600, // Move 100px to the right
            duration: .6, // Over 1 second
            ease: 'power1.inOut',
            delay: .4 // Use an ease function for a more natural motion
        }, 1);
        tl.to(wordReveal2.current, {
            x: -200, // Move 100px to the right
            duration: .6, // Over 1 second
            ease: 'power1.inOut',
            opacity: 1, // Use an ease function for a more natural motion
        });
        tl.to(wordReveal2.current, {
            x: 0, // Move back to the original position
            duration: 0.5, // Over 0.5 seconds
            ease: 'bounce.out' // Use a bounce ease function for a bouncing effect
        });

        // ! =====> | Soy Reveal | <=====
        tl.to(wordReveal1.current, {
            y: -600, // Move 100px to the right
            duration: .6, // Over 1 second
            ease: 'power1.inOut',
            delay: .4  // Use an ease function for a more natural motion
        }, 1);
        tl.to(wordReveal1.current, {
            y: -200, // Move 100px to the right
            duration: .6, // Over 1 second
            ease: 'power1.inOut',
            opacity: 1, // Use an ease function for a more natural motion
        });
        tl.to(wordReveal1.current, {
            y: 0, // Move back to the original position
            duration: 0.5, // Over 0.5 seconds
            ease: 'bounce.out' // Use a bounce ease function for a bouncing effect
        });

        // ! =====> | Angel Reveal | <=====
        tl.to(nameRef.current, {
            x: 600, // Move 100px to the right
            duration: 1, // Over 1 second
            ease: 'power1.inOut',
            delay: .4  // Use an ease function for a more natural motion
        }, 2);
        tl.to(nameRef.current, {
            x: 200, // Move 100px to the right
            duration: 1, // Over 1 second
            ease: 'power1.inOut',
            opacity: 1,
            delay: .4  // Use an ease function for a more natural motion
        });
        tl.to(nameRef.current, {
            x: 0, // Move back to the original position
            duration: 0.5, // Over 0.5 seconds
            ease: 'bounce.out' // Use a bounce ease function for a bouncing effect
        });

        // ! =====> | Content Reveal | <=====
        tl.add(() => {
            if (contentReveral.current) {
                gsap.fromTo(
                    contentReveral.current,
                    { y: '50px', opacity: 0, duration: .6, },
                    {
                        y: '0',
                        opacity: 1,
                        duration: .6,
                        delay: .5,
                        ease: 'power3.inOut',
                        scrollTrigger: {
                            trigger: accentReveral.current,
                            start: 'top 80%',
                            end: 'bottom 20%',
                        },
                    }
                );
            }
        }, 4);

        // ! =====> | Buttons CV Reveal | <=====
        tl.add(() => {
            if (buttonsCv.current) {
                gsap.fromTo(
                    buttonsCv.current,
                    { y: '50px', opacity: 0, duration: .6, },
                    {
                        y: '0',
                        opacity: 1,
                        duration: .6,
                        delay: .8,
                        ease: 'bounce.out',
                        scrollTrigger: {
                            trigger: buttonsCv.current,
                            start: 'top bottom',
                            end: 'bottom 20%',
                        },
                    }
                );
            }
        }, 4);

        // ! =====> | Button More Reveal | <=====
        tl.add(() => {
            if (buttonsMore.current) {
                gsap.fromTo(
                    buttonsMore.current,
                    { y: '50px', opacity: 0, duration: .6, },
                    {
                        y: '0',
                        opacity: 1,
                        duration: .6,
                        delay: .8,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: buttonsMore.current,
                            start: 'top bottom',
                            end: 'bottom 20%',
                        },
                    }
                );
            }
        }, 5);


    }, []);

    return (
        <div className={`${styles.section_about} ${styles.hero_home_a}`}>
            <div className={`${styles.main_container} ${styles.w_container}`}>
                <div className={`${styles.heading_wrap_home_a} ${light.className}`}>

                    <h1 ref={wordReveal2} className={`${styles.effect} ${styles.mega_h1} ${styles.hero_a_one}`}>
                        Hey!
                    </h1>
                    <h1 ref={wordReveal1} className={`${styles.effect} ${styles.mega_h1} ${styles.hero_a_two}`}>
                        {title_1_1}
                    </h1>
                    <div className={`${styles.image_wrap_hero_home_a}`}>
                        {/* <img
                            src="https://assets.website-files.com/622fbc5a718ac3417fcd3d75/62326876f08f3412b5a688bf_john-carter-footer-avatar-developer-webflow-ecommerce-template.jpg"
                            alt=""
                            ref={personReveral}
                            className={`${styles.effect} ${styles.image_hero_home_a}`}
                        /> */}
                        <Image
                            src={perfi_circle}
                            alt="Angeldev"
                            placeholder='blur'
                            ref={personReveral}
                            className={`${styles.effect} ${styles.image_hero_home_a}`}
                        />
                        <img
                            src="https://assets.website-files.com/63c288b3f449c659a89baadb/63c28c3cdd3beb6a234ffa54_Accent.svg"
                            alt="Accent"
                            ref={accentReveral}
                            className={`${styles.effect} ${styles.accent_hero_home_a}`}
                        />
                    </div>
                    <h1 ref={nameRef} className={`${styles.effect} ${styles.mega_h1} ${styles.hero_a_three}`}>
                        {title_1_2}
                    </h1>
                </div>
                <div className={styles.wrap_subtitle_hero}>
                    <div ref={contentReveral} className={`${styles.effect} ${styles.big_text} ${styles.subtitle_hero} ${regular.className}`}>
                        {content_1}
                    </div>
                </div>
                <div className={styles.space_80} />
                <div className={styles.wrap_links_hero}>
                    <div ref={buttonsCv} className={`${styles.effect} ${styles.left_links_hero_a}`}>
                        <a href="./cv/angeldev_cv_en.pdf" target='_blank' className={`${styles.button} ${styles.w_button} ${styles.mg_top_auto} ${styles.cv_download} ${bold.className}`}>
                            Download CV | EN
                        </a>
                        <a href="./cv/angeldev_cv_es.pdf" target="_blank" className={`${styles.button} ${styles.w_button} ${styles.mg_top_auto} ${styles.cv_download} ${bold.className}`}>
                            Descargar CV | ES
                        </a>
                        <a href="./cv/angeldev_cv_de.pdf" target="_blank" className={`${styles.button} ${styles.w_button} ${styles.mg_top_auto} ${styles.cv_download} ${bold.className}`}>
                            CV herunterladen | DE
                        </a>
                    </div>
                    {/* <div ref={buttonsMore} className={`${styles.effect} ${styles.right_links_hero_a}`}>
                        <a href="#" className={`${styles.button} ${styles.w_button} ${styles.mg_top_auto} ${bold.className}`}>
                            Saber más
                        </a>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default AboutHome