import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, MousePointer2 } from "lucide-react";
import { LogoMark } from "./Logo";
import { WIKU_URL } from "../constants/site";

const HERO_IMG =
    "https://images.unsplash.com/photo-1680992044138-ce4864c2b962?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHw0fHxmaWJlciUyMG9wdGljJTIwbmV0d29yayUyMGNhYmxlcyUyMHNlcnZlciUyMHJvb20lMjBkYXJrJTIwZ2xvd2luZ3xlbnwwfHx8fDE3OTQ0MzI5NjR8MA&ixlib=rb-4.1.0&q=85";

const lineReveal = {
    hidden: { y: "115%" },
    show: (i) => ({
        y: "0%",
        transition: { delay: 0.3 + i * 0.13, duration: 1, ease: [0.25, 1, 0.5, 1] },
    }),
};

const LINES = ["Jaringan Cepat.", "Koneksi Stabil.", "Tanpa Henti."];

export default function KineticHero() {
    const sectionRef = useRef(null);
    const tiltRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
    const contentFade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

    const mx = useMotionValue(0);
    const my = useMotionValue(0);
    const rotateX = useSpring(my, { stiffness: 120, damping: 16 });
    const rotateY = useSpring(mx, { stiffness: 120, damping: 16 });

    const onTilt = (e) => {
        const r = tiltRef.current?.getBoundingClientRect();
        if (!r) return;
        mx.set(((e.clientX - r.left) / r.width - 0.5) * 14);
        my.set(((e.clientY - r.top) / r.height - 0.5) * -14);
    };
    const resetTilt = () => {
        mx.set(0);
        my.set(0);
    };

    return (
        <section
            ref={sectionRef}
            data-testid="hero-section"
            className="relative flex min-h-[100svh] items-center overflow-hidden"
        >
            <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110" data-testid="hero-parallax-bg">
                <img
                    src={HERO_IMG}
                    alt="Infrastruktur jaringan fiber optic"
                    className="h-full w-full object-cover opacity-35"
                />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B0E14]/80 via-[#0B0E14]/85 to-[#0B0E14]" />
            <div className="hero-dot-grid absolute inset-0" />
            <div className="pointer-events-none absolute -left-40 top-1/4 h-[480px] w-[480px] rounded-full bg-orange-600/10 blur-[140px]" />
            <div className="pointer-events-none absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-red-600/10 blur-[140px]" />

            <motion.div
                style={{ opacity: contentFade }}
                className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 pb-24 pt-32 sm:px-8 lg:grid-cols-[1.25fr_0.75fr] lg:pt-24"
            >
                <div>
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.8 }}
                        className="inline-flex items-center gap-2.5 rounded-full border border-orange-500/25 bg-orange-500/10 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.3em] text-orange-300 sm:text-[11px]"
                        data-testid="hero-badge"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-orange-400" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-400" />
                        </span>
                        Amaray Networking Technology
                    </motion.p>

                    <h1 className="mt-8 font-display text-[2.6rem] font-bold leading-[1.06] tracking-tight text-white sm:text-6xl lg:text-[4.4rem]">
                        {LINES.map((line, i) => (
                            <span key={line} className="block overflow-hidden pb-1">
                                <motion.span
                                    custom={i}
                                    variants={lineReveal}
                                    initial="hidden"
                                    animate="show"
                                    className={`block ${i === 2 ? "text-brand-gradient" : ""}`}
                                >
                                    {line}
                                </motion.span>
                            </span>
                        ))}
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.85, duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
                        className="mt-7 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg"
                        data-testid="hero-subtitle"
                    >
                        ARNETECH menghadirkan jasa konsultasi, instalasi, dan maintenance jaringan
                        WiFi untuk rumah dan usaha Anda.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
                        className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
                    >
                        <a
                            href={WIKU_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="hero-cta-register"
                            className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-brand-gradient px-8 py-4 text-sm font-bold uppercase tracking-widest text-[#0B0E14] transition-all duration-300 hover:shadow-[0_12px_44px_rgba(249,115,22,0.45)]"
                        >
                            Daftar WiFi
                            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                        <Link
                            to="/jasa"
                            data-testid="hero-cta-services"
                            className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/15 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white/85 transition-all duration-300 hover:border-orange-500/50 hover:bg-white/5 hover:text-white"
                        >
                            Lihat Jasa Kami
                        </Link>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7, duration: 1.1, ease: [0.25, 1, 0.5, 1] }}
                    className="relative hidden justify-center lg:flex"
                >
                    <motion.div
                        ref={tiltRef}
                        onMouseMove={onTilt}
                        onMouseLeave={resetTilt}
                        style={{ rotateX, rotateY, transformPerspective: 900 }}
                        data-testid="hero-logo-panel"
                        className="animate-float-slow relative flex h-80 w-80 cursor-default flex-col items-center justify-center rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-xl"
                    >
                        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-red-500/15 via-transparent to-amber-400/10" />
                        <div className="relative">
                            <span className="absolute inset-0 -m-6 animate-ping-slow rounded-full border border-orange-500/30" />
                            <LogoMark className="h-36 w-36" />
                        </div>
                        <p className="relative mt-8 font-mono text-[10px] uppercase tracking-[0.4em] text-white/50">
                            arnetech.net
                        </p>
                        <p className="relative mt-2 flex items-center gap-2 text-[11px] text-white/30">
                            <MousePointer2 className="h-3 w-3" />
                            Gerakkan kursor Anda
                        </p>
                    </motion.div>
                </motion.div>
            </motion.div>

            <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block">
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
                    className="h-10 w-5 rounded-full border border-white/20 p-1"
                >
                    <div className="mx-auto h-2 w-1 rounded-full bg-orange-400" />
                </motion.div>
            </div>
        </section>
    );
}
