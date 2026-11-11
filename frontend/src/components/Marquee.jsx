const ITEMS = [
    "Konsultasi Jaringan",
    "Instalasi WiFi & Fiber",
    "Maintenance 24/7",
    "Jaringan Rumah & Usaha",
    "Serui — Kepulauan Yapen",
    "arnetech.net",
];

function Row({ hidden }) {
    return (
        <div aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
            {ITEMS.map((item) => (
                <span
                    key={item}
                    className="flex items-center whitespace-nowrap font-mono text-xs uppercase tracking-[0.32em] text-white/45 sm:text-sm"
                >
                    <span className="px-8">{item}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-red-500 to-amber-400" />
                </span>
            ))}
        </div>
    );
}

export default function Marquee() {
    return (
        <div
            data-testid="marquee-band"
            className="relative overflow-hidden border-y border-white/5 bg-[#0D1119] py-6"
        >
            <div className="marquee-track">
                <Row />
                <Row hidden />
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0B0E14] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0B0E14] to-transparent" />
        </div>
    );
}
