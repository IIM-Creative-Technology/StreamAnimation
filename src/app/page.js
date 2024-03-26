'use client'

import { useGSAP } from "@gsap/react";
import styles from "./page.module.css";
import { gsap} from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const circle = useRef();
  const container = useRef();
  useGSAP(() => {
  gsap.to(".box", {x: 360});
  }, { scope: container }); 

  return (
    <main className={styles.main}>
      <h1>Hello, Next !</h1>
      <div ref={container} className="">
        <h1 className="text-5xl">HOME PAGE </h1>
        <a href="/about" className="text-2xl">ABOUT </a>
        <div ref={circle} className="box">YOLO </div>
      </div>
    </main>
  );
}
