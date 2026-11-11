import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, MessageCircle, ShieldCheck, Wrench, Zap } from "lucide-react";
import KineticHero from "../components/KineticHero";
import Marquee from "../components/Marquee";
import Gallery from "../components/Gallery";
import { Reveal, SectionHeading } from "../components/Reveal";
import { WA_CONSULT_URL, WIKU_URL } from "../constants/site";

const WHY_US = [
    {
        icon: Zap,
        title: "Koneksi Cepat & Stabil",
        desc: "Optimasi bandwidth dan konfigurasi router berstandar tinggi untuk performa tanpa hambatan.",
        testid: "why-us-item-speed",
    },
    {
        icon: ShieldCheck,
        title: "Teknisi Lokal Berpengalaman",
        desc: "Tim profesional siap terjun langsung ke lokasi Anda untuk pemasangan dan perbaikan.",
        testid: "why-us-item-tech",
    },
    {
        icon: Wrench,
        title: "Perawatan Berkala",
        desc: "Monitoring proaktif dan penanganan gangguan jaringan dengan respon cepat.",
        testid: "why-us-item-maintenance",
    },
    {
        icon: MessageCircle,
        title: "Pengingat Tagihan via WhatsApp",
        desc: "Notifikasi tagihan praktis langsung ke WhatsApp Anda, tanpa ribet dan selalu tepat waktu.",
        testid: "why-us-item-whatsapp",
    },
];

const SERVICES = [
    {
        num: "01",
        title: "Konsultasi Jaringan",
        desc: "Survei lokasi, analisis sinyal, dan desain jaringan WiFi yang optimal untuk rumah & usaha Anda.",
        img: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDZ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3aWZpJTIwcm91dGVyJTIwc21hcnQlMjBob21lJTIwbmV0d29yayUyMHRlY2h8ZW58MHx8fHwxNzk0NDMyOTcxfDA&ixlib=rb-4.1.0&q=85",
        testid: "service-card-konsultasi",
    },
    {
        num: "02",
        title: "Instalasi Jaringan",
        desc: "Pemasangan kabel, access point, dan perangkat jaringan secara rapi, aman, dan siap pakai.",
        img: "https://images.unsplash.com/photo-1660330589693-99889d60181e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNzl8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwZW5naW5lZXIlMjB0ZWNobmljaWFuJTIwZmliZXIlMjBpbnRlcm5ldCUyMGluc3RhbGxhdGlvbnxlbnwwfHx8fDE3OTQ0MzI5NzF8MA&ixlib=rb-4.1.0&q=85",
        testid: "service-card-instalasi",
    },
    {
        num: "03",
        title: "Maintenance Jaringan",
        desc: "Perawatan berkala dan penanganan gangguan dengan respon cepat agar koneksi selalu stabil.",
        img: "https://images.unsplash.com/photo-1624965439943-09e0238644e2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNzl8MHwxfHNlYXJjaHwzfHxuZXR3b3JrJTIwZW5naW5lZXIlMjB0ZWNobmljaWFuJTIwZmliZXIlMjBpbnRlcm5ldCUyMGluc3RhbGxhdGlvbnxlbnwwfHx8fDE3OTQ0MzI5NzF8MA&ixlib=rb-4.1.0&q=85",
        testid: "service-card-maintenance",
    },
];

export default function Home() {
    return (
        <div className="grain" data-testid="home-page">
            <KineticHero />
            <Marquee />

            <section className="relative py-24 sm:py-28" data-testid="why-us-section">
                <div className="mx-auto max-w-7xl px-5 sm:px-8">
                    <SectionHeading
                        eyebrow="Kenapa Pilih Kami"
                        title="Jaringan andal, ditangani langsung oleh tim lokal"
                        sub="Infrastruktur modern dan pelayanan teknis berpengalaman siap menangani jaringan Anda."
                        testid="why-us-heading"
                    />
                    <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {WHY_US.map((item, i) => (
                            <Reveal key={item.title} delay={i * 0.08} className="h-full">
                                <motion.div
                                    whileHover={{ y: -6 }}
                                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                                    data-testid={item.testid}
                                    className="group flex h-full flex-col rounded-2xl border border-white/5 bg-inkcard p-7 transition-colors duration-300 hover:border-orange-500/40"
                                >
                                    <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-orange-500/25 bg-orange-500/10 text-orange-400 transition-all duration-300 group-hover:bg-brand-gradient group-hover:text-[#0B0E14]">
                                        <item.icon className="h-5 w-5" />
                                    </span>
                                    <h3 className="mt-6 text-lg font-bold leading-snug text-white">
                                        {item.title}
                                    </h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/50">
                                        {item.desc}
                                    </p>
                                </motion.div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative border-t border-white/5 py-24 sm:py-28" data-testid="services-preview-section">
                <div className="mx-auto max-w-7xl px-5 sm:px-8">
                    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                        <SectionHeading
                            eyebrow="Jasa Kami"
                            title="Layanan utama kami"
                            sub="Solusi komprehensif dari konsultasi hingga perawatan rutin jaringan internet Anda."
                            testid="services-preview-heading"
                        />
                        <Reveal delay={0.1}>
                            <Link
                                to="/jasa"
                                data-testid="services-preview-more-btn"
                                className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white/80 transition-all duration-300 hover:border-orange-500/50 hover:text-white"
                            >
                                Lihat Detail Jasa Kami
                                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </Reveal>
                    </div>

                    <div className="mt-14 grid gap-6 md:grid-cols-3">
                        {SERVICES.map((s, i) => (
                            <Reveal key={s.num} delay={i * 0.1} className="h-full">
                                <motion.article
                                    whileHover={{ y: -6 }}
                                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                                    data-testid={s.testid}
                                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-inkcard transition-colors duration-300 hover:border-orange-500/40"
                                >
                                    <div className="relative h-44 overflow-hidden">
                                        <img
                                            src={s.img}
                                            alt={s.title}
                                            loading="lazy"
                                            className="h-full w-full object-cover opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-90"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-inkcard via-transparent to-transparent" />
                                        <span className="absolute left-5 top-4 font-mono text-xs tracking-[0.3em] text-orange-400">
                                            {s.num}
                                        </span>
                                    </div>
                                    <div className="flex flex-1 flex-col p-7 pt-4">
                                        <h3 className="text-xl font-bold text-white">{s.title}</h3>
                                        <p className="mt-3 text-sm leading-relaxed text-white/50">
                                            {s.desc}
                                        </p>
                                    </div>
                                </motion.article>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <Gallery />

            <section className="relative border-t border-white/5 py-24 sm:py-28" data-testid="cta-section">
                <div className="mx-auto max-w-7xl px-5 sm:px-8">
                    <Reveal>
                        <div className="border-brand-gradient relative overflow-hidden rounded-3xl px-8 py-14 text-center sm:px-14 sm:py-20">
                            <div className="hero-dot-grid absolute inset-0 opacity-60" />
                            <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[520px] -translate-x-1/2 rounded-full bg-orange-500/15 blur-[110px]" />
                            <h2 className="relative mx-auto max-w-2xl font-display text-2xl font-bold leading-snug tracking-tight text-white sm:text-3xl lg:text-4xl" data-testid="cta-band-title">
                                Siap terhubung dengan internet yang andal?
                            </h2>
                            <p className="relative mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/55" data-testid="cta-band-sub">
                                Daftar layanan WiFi sekarang, atau konsultasikan kebutuhan jaringan
                                Anda dengan tim kami terlebih dahulu.
                            </p>
                            <div className="relative mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                                <a
                                    href={WIKU_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    data-testid="cta-band-register"
                                    className="group inline-flex items-center gap-2.5 rounded-full bg-brand-gradient px-8 py-4 text-sm font-bold uppercase tracking-widest text-[#0B0E14] transition-all duration-300 hover:shadow-[0_12px_44px_rgba(249,115,22,0.45)]"
                                >
                                    Daftar WiFi
                                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </a>
                                <a
                                    href={WA_CONSULT_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    data-testid="cta-band-whatsapp"
                                    className="inline-flex items-center gap-2.5 rounded-full border border-white/15 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white/85 transition-all duration-300 hover:border-orange-500/50 hover:bg-white/5"
                                >
                                    <MessageCircle className="h-4 w-4" />
                                    Chat WhatsApp
                                </a>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
