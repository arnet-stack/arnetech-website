export function LogoMark({ className = "h-10 w-10" }) {
    return (
        <img
            src={`${process.env.PUBLIC_URL}/logo.png`}
            alt="Logo ARNETECH"
            className={`${className} object-contain`}
            draggable={false}
        />
    );
}

export default function Logo({ onClick, testid = "logo-home-link" }) {
    return (
        <button
            type="button"
            onClick={onClick}
            data-testid={testid}
            className="group flex items-center gap-3 text-left"
        >
            <span className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-colors duration-300 group-hover:border-orange-500/40">
                <LogoMark className="h-8 w-8" />
            </span>
            <span className="leading-none">
                <span className="block font-display text-base font-bold tracking-[0.18em] text-white">
                    ARNETECH
                </span>
                <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.28em] text-white/40">
                    arnetech.net
                </span>
            </span>
        </button>
    );
}
