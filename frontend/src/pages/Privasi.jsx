import { Link } from "react-router-dom";
import { ArrowLeft, Mail, MessageCircle, ShieldCheck } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { ADDRESS, EMAIL, WA_NUMBER_DISPLAY, WA_URL } from "../constants/site";

const POINTS = [
    {
        title: "Pengumpulan Data Terbatas",
        desc: "Kami hanya mengumpulkan data yang diperlukan untuk registrasi layanan internet, verifikasi alamat pemasangan, serta komunikasi operasional.",
        testid: "privacy-point-collection",
    },
    {
        title: "Penggunaan Data Spesifik",
        desc: "Data pelanggan hanya digunakan untuk layanan internet dan pengiriman pengingat tagihan WiFi melalui WhatsApp — tidak untuk tujuan lain di luar layanan ARNETECH.",
        testid: "privacy-point-usage",
    },
    {
        title: "Pengingat Tagihan via WhatsApp",
        desc: "Pengingat tagihan bulanan dikirim langsung melalui WhatsApp resmi ARNETECH agar Anda tidak pernah melewatkan jadwal pembayaran.",
        testid: "privacy-point-billing",
    },
    {
        title: "Perlindungan Data",
        desc: "Kami tidak menjual, menyewakan, atau membagikan data pribadi Anda kepada pihak ketiga untuk kepentingan komersial atau pemasaran.",
        testid: "privacy-point-protection",
    },
    {
        title: "Keamanan Informasi",
        desc: "Seluruh data pelanggan disimpan pada sistem yang aman dengan akses terbatas hanya untuk staf operasional yang berwenang.",
        testid: "privacy-point-security",
    },
];

export default function Privasi() {
    return (
        <div className="grain" data-testid="privacy-page">
            <section className="relative overflow-hidden pb-14 pt-36 sm:pt-44">
                <div className="hero-dot-grid absolute inset-0" />
                <div className="pointer-events-none absolute -left-40 top-10 h-[380px] w-[380px] rounded-full bg-red-600/10 blur-[130px]" />
                <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
                    <Reveal>
                        <Link
                            to="/"
                            data-testid="privacy-back-button"
                            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.28em] text-white/40 transition-colors hover:text-orange-400"
                        >
                            <ArrowLeft className="h-3.5 w-3.5" />
                            Kembali ke Home
                        </Link>
                    </Reveal>
                    <Reveal delay={0.08}>
                        <p className="mt-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.32em] text-orange-400">
                            <span className="h-px w-8 bg-gradient-to-r from-red-500 to-amber-400" />
                            Legal
                        </p>
                        <h1 className="mt-5 font-display text-3xl font-bold leading-snug tracking-tight text-white sm:text-4xl" data-testid="privacy-heading">
                            Kebijakan & Privasi
                        </h1>
                        <p className="mt-6 text-base leading-relaxed text-white/55" data-testid="privacy-intro">
                            Di ARNETECH (Amaray Networking Technology), kami sangat menghargai
                            privasi dan keamanan data pelanggan. Halaman ini menjelaskan bagaimana
                            data pribadi Anda dikumpulkan, digunakan, dan dilindungi.
                        </p>
                    </Reveal>

                    <Reveal delay={0.15}>
                        <div
                            data-testid="privacy-core-statement"
                            className="border-brand-gradient mt-10 rounded-2xl p-7"
                        >
                            <ShieldCheck className="h-7 w-7 text-orange-400" />
                            <p className="mt-4 text-lg font-semibold leading-relaxed text-white">
                                Data pelanggan hanya digunakan untuk layanan internet dan pengiriman
                                pengingat tagihan WiFi melalui WhatsApp.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </section>

            <section className="relative border-t border-white/5 py-16">
                <div className="mx-auto max-w-3xl px-5 sm:px-8">
                    <div className="space-y-4">
                        {POINTS.map((p, i) => (
                            <Reveal key={p.title} delay={i * 0.06}>
                                <div
                                    data-testid={p.testid}
                                    className="group flex gap-5 rounded-2xl border border-white/5 bg-inkcard p-6 transition-colors duration-300 hover:border-orange-500/35"
                                >
                                    <span className="font-mono text-sm text-orange-400/80">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <div>
                                        <h3 className="text-base font-bold text-white">{p.title}</h3>
                                        <p className="mt-2 text-sm leading-relaxed text-white/55">
                                            {p.desc}
                                        </p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    <Reveal delay={0.1}>
                        <div className="mt-14 border-t border-white/5 pt-10" data-testid="privacy-closing">
                            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-orange-400">
                                Persetujuan
                            </p>
                            <p className="mt-5 text-sm leading-relaxed text-white/60">
                                Dengan menggunakan layanan internet dan konsultasi WiFi dari
                                ARNETECH, Anda dianggap telah membaca dan menyetujui ketentuan
                                dalam Kebijakan & Privasi ini. Kebijakan ini dapat diperbarui dari
                                waktu ke waktu untuk mengikuti perkembangan layanan dan peraturan
                                yang berlaku; setiap pembaruan akan diumumkan melalui saluran resmi
                                kami. Jika Anda memiliki pertanyaan, ingin memperbarui data, atau
                                meminta penghapusan informasi Anda, silakan hubungi tim kami
                                melalui WhatsApp {WA_NUMBER_DISPLAY} atau email {EMAIL}.
                            </p>
                            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                <a
                                    href={WA_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    data-testid="privacy-whatsapp-button"
                                    className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/15 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white/85 transition-all duration-300 hover:border-orange-500/50 hover:bg-white/5"
                                >
                                    <MessageCircle className="h-4 w-4" />
                                    WhatsApp {WA_NUMBER_DISPLAY}
                                </a>
                                <a
                                    href={`mailto:${EMAIL}`}
                                    data-testid="privacy-email-button"
                                    className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/15 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white/85 transition-all duration-300 hover:border-orange-500/50 hover:bg-white/5"
                                >
                                    <Mail className="h-4 w-4" />
                                    {EMAIL}
                                </a>
                            </div>
                            <p className="mt-10 text-xs leading-relaxed text-white/35">
                                Terakhir diperbarui: 2026 • Alamat kami: {ADDRESS}
                            </p>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
