import { useId } from "react";

export function LogoMark({ className = "h-10 w-10" }) {
    const id = useId().replace(/[^a-zA-Z0-9]/g, "");
    const grad = `arn-${id}`;
    return (
        <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
            <defs>
                <linearGradient id={grad} x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#EF4444" />
                    <stop offset="50%" stopColor="#F97316" />
                    <stop offset="100%" stopColor="#EAB308" />
                </linearGradient>
            </defs>
            <circle cx="50" cy="76" r="9" fill={`url(#${grad})`} />
            <path
                d="M30 57 A 28 28 0 0 1 70 57"
                stroke={`url(#${grad})`}
                strokeWidth="8"
                strokeLinecap="round"
                fill="none"
            />
            <path
                d="M17 39 A 45 45 0 0 1 83 39"
                stroke={`url(#${grad})`}
                strokeWidth="8"
                strokeLinecap="round"
                fill="none"
            />
            <circle cx="50" cy="39" r="5" fill="#EAB308" />
        </svg>
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
                <LogoMark className="h-7 w-7" />
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
