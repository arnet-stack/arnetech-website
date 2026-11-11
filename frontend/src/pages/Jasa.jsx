import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Check, MessageCircle } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { WA_CONSULT_URL, WIKU_URL } from "../constants/site";

const SERVICES = [
    {
        num: "01",
        title: "Konsultasi & Desain Jaringan WiFi",
        desc: "Kami menganalisis lokasi rumah, kantor, atau tempat usaha Anda untuk merancang peta titik akses dan arsitektur bandwidth yang optimal tanpa blind spot.",
        points: [
            "Survei kelayakan sinyal & pemetaan lokasi",
            "Rekomendasi perangkat router & switch sesuai kebutuhan",
            "Optimasi alokasi kecepatan (Quality of Service)",
        ],
        img: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDZ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3aWZpJTIwcm91dGVyJTIwc21hcnQlMjBob21lJTIwbmV0d29yayUyMHRlY2h8ZW58MHx8fHwxNzk0NDMyOTcxfDA&ixlib=rb-4.1.0&q=85",
        testid: "service-detail-konsultasi",
    },
    {
        num: "02",
        title: "Instalasi Jaringan & Kabel Fiber/LAN",
        desc: "Pemasangan profesional kabel jaringan, perakitan perangkat, hingga pengujian koneksi agar siap digunakan dengan aman dan rapi.",
        points: [
            "Penataan kabel (cable management) rapi & aman",
            "Pemasangan access point indoor & outdoor",
            "Pengujian stabilitas koneksi dan kecepatan",
        ],
        img: "https://images.unsplash.com/photo-1660330589693-99889d60181e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNzl8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwZW5naW5lZXIlMjB0ZWNobmljaWFuJTIwZmliZXIlMjBpbnRlcm5ldCUyMGluc3RhbGxhdGlvbnxlbnwwfHx8fDE3OTQ0MzI5NzF8MA&ixlib=rb-4.1.0&q=85",
        testid: "service-detail-instalasi",
    },
    {
        num: "03",
        title: "Perawatan & Pemeliharaan Jaringan (Maintenance)",
        desc: "Layanan pemeliharaan berkala dan perbaikan cepat saat terjadi penurunan kualitas sinyal atau kendala teknis pada perangkat jaringan Anda.",
        points: [
            "Pemeriksaan kesehatan jaringan rutin",
            "Penanganan gangguan koneksi (troubleshooting)",
            "Pembaruan firmware & peningkatan keamanan router",
        ],
        img: "https://images.unsplash.com/photo-1624965439943-09e0238644e2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNzl8MHwxfHNlYXJjaHwzfHxuZXR3b3JrJTIwZW5naW5lZXIlMjB0ZWNobmljaWFuJTIwZmliZXIlMjBpbnRlcm5ldCUyMGluc3RhbGxhdGlvbnxlbnwwfHx8fDE3OTQ0MzI5NzF8MA&ixlib=rb-4.1.0&q=85",
        testid: "service-detail-maintenance",
    },
];

export default function Jasa() {
    return (
        <div className="grain" data-testid="jasa-page">
            <section className="relative overflow-hidden pb-16 pt-36 sm:pb-20 sm:pt-44">
                <div className="hero-dot-grid absolute inset-0" />
                <div className="pointer-events-none absolute -right-40 top-10 h-[420px] w-[420px] rounded-full bg-orange-600/10 blur-[130px]" />
                <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
                    <Reveal>
                        <button
                            type="button"
                            onClick={() => window.history.back()}
                            data-testid="jasa-back-button"
                            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.28em] text-white/40 transition-colors hover:text-orange-400"
                        >
                            <ArrowLeft className="h-3.5 w-3.5" />
                            Kembali
                        </button>
                    </Reveal>
                    <Reveal delay={0.08}>
                        <p className="mt-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.32em] text-orange-400">
                            <span className="h-px w-8 bg-gradient-to-r from-red-500 to-amber-400" />
                            Jasa Kami
                        </p>
                        <h1 className="mt-5 max-w-3xl font-display text-3xl font-bold leading-snug tracking-tight text-white sm:text-4xl lg:text-5xl" data-testid="jasa-heading">
                            Layanan & Jasa Teknologi Jaringan
                        </h1>
                        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/55 sm:text-lg" data-testid="jasa-subheading">
                            ARNETECH menyediakan solusi end-to-end untuk kebutuhan internet dan
                            infrastruktur WiFi Anda — dari perencanaan
                            awal hingga perawatan jangka panjang.
                        </p>
                    </Reveal>
                </div>
            </section>

            <section className="relative border-t border-white/5 py-16 sm:py-20">
                <div className="mx-auto max-w-7xl space-y-20 px-5 sm:px-8">
                    {SERVICES.map((s, i) => (
                        <Reveal key={s.num} testid={s.testid}>
                            <article
                                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                                    i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                                }`}
                            >
                                <div className="relative overflow-hidden rounded-3xl border border-white/5">
                                    <img
                                        src={s.img}
                                        alt={s.title}
                                        loading="lazy"
                                        className="h-64 w-full object-cover opacity-75 sm:h-80"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14]/80 via-transparent to-transparent" />
                                    <span className="absolute left-6 top-6 font-mono text-sm tracking-[0.3em] text-orange-400">
                                        {s.num}
                                    </span>
                                </div>
                                <div>
                                    <h2 className="font-display text-xl font-bold leading-snug tracking-tight text-white sm:text-2xl" data-testid={`${s.testid}-title`}>
                                        {s.title}
                                    </h2>
                                    <p className="mt-4 text-base leading-relaxed text-white/55" data-testid={`${s.testid}-desc`}>
                                        {s.desc}
                                    </p>
                                    <ul className="mt-7 space-y-3.5">
                                        {s.points.map((p) => (
                                            <li key={p} className="flex items-start gap-3 text-sm text-white/75" data-testid={`${s.testid}-point`}>
                                                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-500/15 text-orange-400">
                                                    <Check className="h-3 w-3" />
                                                </span>
                                                {p}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </section>

            <section className="relative border-t border-white/5 py-20 sm:py-24">
                <div className="mx-auto max-w-7xl px-5 sm:px-8">
                    <Reveal>
                        <div className="border-brand-gradient relative overflow-hidden rounded-3xl px-8 py-14 sm:px-14 sm:py-16" data-testid="jasa-consultation-cta">
                            <div className="hero-dot-grid absolute inset-0 opacity-60" />
                            <div className="pointer-events-none absolute right-0 top-0 h-56 w-[420px] rounded-full bg-orange-500/15 blur-[100px]" />
                            <div className="relative max-w-2xl">
                                <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.32em] text-orange-400">
                                    <span className="h-px w-8 bg-gradient-to-r from-red-500 to-amber-400" />
                                    Langkah Selanjutnya
                                </p>
                                <h2 className="mt-5 font-display text-2xl font-bold leading-snug tracking-tight text-white sm:text-3xl" data-testid="jasa-consultation-title">
                                    Konsultasikan dengan tim kami
                                </h2>
                                <p className="mt-4 text-base leading-relaxed text-white/55" data-testid="jasa-consultation-desc">
                                    Belum yakin mulai dari mana? Ceritakan kebutuhan internet Anda —
                                    tim ARNETECH siap membantu merekomendasikan layanan terbaik,
                                    mulai dari konsultasi, pendaftaran WiFi, hingga jadwal instalasi.
                                </p>
                                <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                                    <a
                                        href={WA_CONSULT_URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        data-testid="jasa-whatsapp-cta-button"
                                        className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-brand-gradient px-8 py-4 text-sm font-bold uppercase tracking-widest text-[#0B0E14] transition-all duration-300 hover:shadow-[0_12px_44px_rgba(249,115,22,0.45)]"
                                    >
                                        <MessageCircle className="h-4 w-4" />
                                        Contact via WhatsApp
                                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </a>
                                    <a
                                        href={WIKU_URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        data-testid="jasa-register-button"
                                        className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/15 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white/85 transition-all duration-300 hover:border-orange-500/50 hover:bg-white/5"
                                    >
                                        Daftar WiFi
                                    </a>
                                </div>
                                <Link
                                    to="/"
                                    data-testid="jasa-home-link"
                                    className="mt-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.28em] text-white/40 transition-colors hover:text-orange-400"
                                >
                                    <ArrowLeft className="h-3.5 w-3.5" />
                                    Kembali ke Home
                                </Link>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
