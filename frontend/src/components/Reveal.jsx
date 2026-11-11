import { motion } from "framer-motion";

export function Reveal({ children, className = "", delay = 0, testid }) {
    return (
        <motion.div
            data-testid={testid}
            className={className}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, delay, ease: [0.25, 1, 0.5, 1] }}
        >
            {children}
        </motion.div>
    );
}

export function SectionHeading({ eyebrow, title, sub, testid }) {
    return (
        <Reveal className="max-w-2xl" testid={testid}>
            <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.32em] text-orange-400">
                <span className="h-px w-8 bg-gradient-to-r from-red-500 to-amber-400" />
                {eyebrow}
            </p>
            <h2 className="mt-5 font-display text-2xl font-bold leading-snug tracking-tight text-white sm:text-3xl lg:text-4xl">
                {title}
            </h2>
            {sub ? (
                <p className="mt-4 text-base leading-relaxed text-white/55">{sub}</p>
            ) : null}
        </Reveal>
    );
}

export default Reveal;
