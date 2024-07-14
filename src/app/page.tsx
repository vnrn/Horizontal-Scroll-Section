"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import HorizontalSection from "./sections/HorizontalSection";
import { useLayoutEffect } from "react";
// import LocomotiveScroll from "locomotive-scroll";

export default function Home() {
  //adding smooth scroll
  useLayoutEffect(() => {
    let scroll:any;
    if (typeof window !== 'undefined') {
        import('locomotive-scroll').then((LocomotiveScroll) => {
            scroll = new LocomotiveScroll.default();
        });
    }
    return () => {
        if (scroll) scroll.destroy();
    };
}, []);
  return (
    <main className={styles.main}>
      <div className={styles.space}>
          <h3>scroll to bottom</h3>
      </div>
      <HorizontalSection />
      <div className={styles.space}>
        <h3>that's it✨</h3>
      </div>
    </main>
  );
}
