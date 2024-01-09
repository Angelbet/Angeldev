import Image from 'next/image'
import { Children, useEffect, useRef, useState } from 'react';

// ? STYLES
import styles from '@/styles/Home.module.css'

// ? COMPONENTS
import EducationHome from '@/pages/Components/educationHome'

// ? FONTS
import { bold, extraLight, light, medium, regular, semiBold } from '@/fonts/fonts';

// ? GSAP
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function LinesSection() {

    const lineRef = useRef(null);
    const line2Tablet = useRef(null);

    // ! =====> | LINE 1 | <=====
    useEffect(() => {
        const line = lineRef.current;
        if (line) {
            gsap.to(line, {
                width: "100%",
                height: "2px",
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

    // ! =====> | LINE 2 tablet | <=====
    useEffect(() => {
        const line = line2Tablet.current;
        if (line) {
            gsap.to(line, {
                width: "100%",
                height: "2px",
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

    return (
        <>
            <div className={styles.padding_global}>
                <div ref={lineRef} className={styles.line} style={{ width: "0%", height: 2 }} />
            </div>

            <EducationHome />

            <div className={styles.padding_global}>
                <div ref={line2Tablet} className={`${styles.line} ${styles.hide_tablet}`} style={{ width: "0%", height: 2 }} />
            </div>
        </>
    )
}

export default LinesSection