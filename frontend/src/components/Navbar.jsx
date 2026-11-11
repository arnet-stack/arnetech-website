import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Logo from "./Logo";
import { WIKU_URL, scrollToKontak } from "../constants/site";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { pathname } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => setOpen(false), [pathname]);

    const contact = () => {
        setOpen(false);
        scrollToKontak(navigate, pathname);
    };

    const links = [
        { label: "Home", to: "/", testid: "nav-link-home" },
        { label: "Jasa Kami", to: "/jasa", testid: "nav-link-jasa" },
        { label: "Hubungi Kami", action: contact, testid: "nav-link-hubungi" },
        { label: "Kebijakan & Privasi", to: "/kebijakan-privasi", testid: "nav-link-kebijakan-privasi" },
    ];

    const isActive = (to) => pathname === to;

    return (
        <header
            data-testid="navbar"
            className={`sticky top-0 z-50 border-b transition-colors duration-500 ${
                scrolled
                    ? "border-white/10 bg-[#0B0E14]/85 backdrop-blur-xl"
                    : "border-transparent bg-transparent"
            }`}
        >
            <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
                <Logo onClick={() => navigate("/")} />

                <div className="hidden items-center gap-8 lg:flex">
                    {links.map((l) =>
                        l.to ? (
                            <Link
                                key={l.label}
                                to={l.to}
                                data-testid={l.testid}
                                className={`group relative font-mono text-[11px] uppercase tracking-[0.24em] transition-colors duration-300 ${
                                    isActive(l.to) ? "text-orange-400" : "text-white/60 hover:text-white"
                                }`}
                            >
                                {l.label}
                                <span
                                    className={`absolute -bottom-2 left-0 h-px bg-gradient-to-r from-red-500 to-amber-400 transition-all duration-300 ${
                                        isActive(l.to) ? "w-full" : "w-0 group-hover:w-full"
                                    }`}
                                />
                            </Link>
                        ) : (
                            <button
                                key={l.label}
                                type="button"
                                onClick={l.action}
                                data-testid={l.testid}
                                className="group relative font-mono text-[11px] uppercase tracking-[0.24em] text-white/60 transition-colors duration-300 hover:text-white"
                            >
                                {l.label}
                                <span className="absolute -bottom-2 left-0 h-px w-0 bg-gradient-to-r from-red-500 to-amber-400 transition-all duration-300 group-hover:w-full" />
                            </button>
                        ),
                    )}
                    <a
                        href={WIKU_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="nav-link-daftar-wifi"
                        className="group inline-flex items-center gap-2 rounded-full bg-brand-gradient px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-[#0B0E14] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(249,115,22,0.4)]"
                    >
                        Daftar WiFi
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                </div>

                <button
                    type="button"
                    onClick={() => setOpen((v) => !v)}
                    data-testid="nav-mobile-toggle"
                    aria-label="Buka menu navigasi"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden"
                >
                    {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
            </nav>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                        data-testid="nav-mobile-menu"
                        className="overflow-hidden border-t border-white/10 bg-[#0B0E14]/95 backdrop-blur-xl lg:hidden"
                    >
                        <div className="flex flex-col gap-1 px-5 py-6">
                            {links.map((l) =>
                                l.to ? (
                                    <Link
                                        key={l.label}
                                        to={l.to}
                                        data-testid={`${l.testid}-mobile`}
                                        className={`rounded-lg px-3 py-3 font-mono text-xs uppercase tracking-[0.24em] ${
                                            isActive(l.to) ? "text-orange-400" : "text-white/70"
                                        }`}
                                    >
                                        {l.label}
                                    </Link>
                                ) : (
                                    <button
                                        key={l.label}
                                        type="button"
                                        onClick={contact}
                                        data-testid={`${l.testid}-mobile`}
                                        className="rounded-lg px-3 py-3 text-left font-mono text-xs uppercase tracking-[0.24em] text-white/70"
                                    >
                                        {l.label}
                                    </button>
                                ),
                            )}
                            <a
                                href={WIKU_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-testid="nav-link-daftar-wifi-mobile"
                                className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient px-5 py-3.5 text-xs font-bold uppercase tracking-widest text-[#0B0E14]"
                            >
                                Daftar WiFi
                                <ArrowUpRight className="h-4 w-4" />
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
