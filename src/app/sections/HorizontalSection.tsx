"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import styles from './styles.module.scss'

export default function HorizontalSection() {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const triggerRef = useRef<HTMLDivElement | null>(null);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const pin = gsap.fromTo(
            sectionRef.current,
            {
                translateX: 0,
            },
            {
                translateX: "-300vw",
                ease: "none",
                duration: 1,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: "2000 top",
                    scrub: 0.6,
                    pin: true,
                },
            }
        );
        
        return () => {
            // A return function for killing the animation on component unmount
            pin.kill();
        };
    }, []);

    return (
        <main className={styles.scrollSectionOuter}>
            <div ref={triggerRef}>
                <div ref={sectionRef} className={styles.scrollSectionInner}>
                    <div className={styles.scrollSection}>
                        <h2>Fashion is more than just clothing; it&apos;s a form of self-expression and an art that transcends time</h2>
                    </div>
                </div>
            </div>
        </main>
    );
}
