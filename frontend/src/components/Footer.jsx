import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowUpRight, Mail, MapPin, MessageCircle } from "lucide-react";
import { LogoMark } from "./Logo";
import {
    ADDRESS,
    EMAIL,
    WA_NUMBER_DISPLAY,
    WA_URL,
    WIKU_URL,
} from "../constants/site";

export default function Footer() {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const year = new Date().getFullYear();

    const links = [
        { label: "Home", to: "/" },
        { label: "Jasa Kami", to: "/jasa" },
        { label: "Kebijakan & Privasi", to: "/kebijakan-privasi" },
    ];

    return (
        <footer id="kontak" data-testid="footer-contact" className="relative border-t border-white/5 bg-[#080A0F]">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
            <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
                <div className="grid gap-12 lg:grid-cols-[1.3fr_0.8fr_1.2fr]">
                    <div>
                        <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.32em] text-orange-400">
                            <span className="h-px w-8 bg-gradient-to-r from-red-500 to-amber-400" />
                            Hubungi Kami
                        </p>
                        <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                            Contact Us
                        </h2>
                        <div className="mt-8 flex items-center gap-3">
                            <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                                <LogoMark className="h-8 w-8" />
                            </span>
                            <div>
                                <p className="font-display text-sm font-bold tracking-[0.18em] text-white">
                                    ARNETECH
                                </p>
                                <p className="mt-1 text-xs leading-relaxed text-white/45">
                                    {BRAND_NAME}
                                </p>
                            </div>
                        </div>
                        <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/50">
                            Melayani jasa konsultasi, instalasi, dan maintenance jaringan internet
                            untuk pelanggan umum di Serui, Kepulauan Yapen, dan sekitarnya.
                        </p>
                    </div>

                    <div>
                        <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-white/40">
                            Navigasi
                        </p>
                        <ul className="mt-6 space-y-4">
                            {links.map((l) => (
                                <li key={l.label}>
                                    <Link
                                        to={l.to}
                                        data-testid={`footer-nav-${l.to === "/" ? "home" : l.to.replace("/", "")}`}
                                        className={`text-sm transition-colors duration-300 hover:text-orange-400 ${
                                            pathname === l.to ? "text-orange-400" : "text-white/65"
                                        }`}
                                    >
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <a
                                    href={WIKU_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    data-testid="footer-nav-daftar-wifi"
                                    className="inline-flex items-center gap-1.5 text-sm text-white/65 transition-colors duration-300 hover:text-orange-400"
                                >
                                    Daftar WiFi
                                    <ArrowUpRight className="h-3.5 w-3.5" />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-5">
                        <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-white/40">
                            Kontak
                        </p>
                        <a
                            href={WA_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="footer-whatsapp-link"
                            className="group flex items-start gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-4 transition-all duration-300 hover:border-orange-500/40 hover:bg-white/[0.05]"
                        >
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-orange-400">
                                <MessageCircle className="h-5 w-5" />
                            </span>
                            <span>
                                <span className="block text-xs uppercase tracking-widest text-white/40">
                                    WhatsApp
                                </span>
                                <span className="mt-1 block text-sm font-semibold text-white transition-colors group-hover:text-orange-400">
                                    {WA_NUMBER_DISPLAY}
                                </span>
                            </span>
                        </a>
                        <a
                            href={`mailto:${EMAIL}`}
                            data-testid="footer-email-link"
                            className="group flex items-start gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-4 transition-all duration-300 hover:border-orange-500/40 hover:bg-white/[0.05]"
                        >
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-orange-400">
                                <Mail className="h-5 w-5" />
                            </span>
                            <span className="min-w-0">
                                <span className="block text-xs uppercase tracking-widest text-white/40">
                                    Email
                                </span>
                                <span className="mt-1 block break-all text-sm font-semibold text-white transition-colors group-hover:text-orange-400">
                                    {EMAIL}
                                </span>
                            </span>
                        </a>
                        <div
                            data-testid="footer-address-text"
                            className="flex items-start gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-4"
                        >
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-orange-400">
                                <MapPin className="h-5 w-5" />
                            </span>
                            <span>
                                <span className="block text-xs uppercase tracking-widest text-white/40">
                                    Alamat
                                </span>
                                <span className="mt-1 block text-sm leading-relaxed text-white/80">
                                    {ADDRESS}
                                </span>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row sm:items-center">
                    <p className="text-xs leading-relaxed text-white/35">
                        © {year} Amaray Networking Technology (ARNETECH). Seluruh hak cipta.
                    </p>
                    <p className="font-mono text-xs tracking-[0.28em] text-white/35">
                        arnetech.net
                    </p>
                </div>
            </div>
        </footer>
    );
}

const BRAND_NAME = "Amaray Networking Technology";
