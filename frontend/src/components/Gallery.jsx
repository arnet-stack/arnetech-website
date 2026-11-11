import { Reveal, SectionHeading } from "./Reveal";

const PHOTOS = [
    {
        src: "https://images.unsplash.com/photo-1581092919535-7146ff1a590b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTN8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwZW5naW5lZXIlMjBpbnN0YWxsaW5nJTIwY2FibGVzfGVufDB8fHx8MTc5NDQzNDM4Nnww&ixlib=rb-4.1.0&q=85",
        label: "Instalasi Patch Panel",
        testid: "gallery-photo-1",
    },
    {
        src: "https://images.unsplash.com/photo-1629837093109-11325d6e7afd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTN8MHwxfHNlYXJjaHwyfHxuZXR3b3JrJTIwZW5naW5lZXIlMjBpbnN0YWxsaW5nJTIwY2FibGVzfGVufDB8fHx8MTc5NDQzNDM4Nnww&ixlib=rb-4.1.0&q=85",
        label: "Penataan Kabel Jaringan",
        testid: "gallery-photo-2",
    },
    {
        src: "https://images.unsplash.com/photo-1785682117028-6fcf2c0b515b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTN8MHwxfHNlYXJjaHw0fHxuZXR3b3JrJTIwZW5naW5lZXIlMjBpbnN0YWxsaW5nJTIwY2FibGVzfGVufDB8fHx8MTc5NDQzNDM4Nnww&ixlib=rb-4.1.0&q=85",
        label: "Maintenance Perangkat",
        testid: "gallery-photo-3",
    },
    {
        src: "https://images.unsplash.com/photo-1698668975271-2ba9a323be6b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTB8MHwxfHNlYXJjaHwzfHxmaWJlciUyMG9wdGljJTIwdGVjaG5pY2lhbiUyMHNlcnZlciUyMHJhY2t8ZW58MHx8fHwxNzk0NDM0Mzg3fDA&ixlib=rb-4.1.0&q=85",
        label: "Instalasi Fiber & LAN",
        testid: "gallery-photo-4",
    },
    {
        src: "https://images.unsplash.com/photo-1629836149344-3c51a772fe35?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTN8MHwxfHNlYXJjaHwzfHxuZXR3b3JrJTIwZW5naW5lZXIlMjBpbnN0YWxsaW5nJTIwY2FibGVzfGVufDB8fHx8MTc5NDQzNDM4Nnww&ixlib=rb-4.1.0&q=85",
        label: "Pemeriksaan Rutin",
        testid: "gallery-photo-5",
    },
    {
        src: "https://images.unsplash.com/photo-1667264501379-c1537934c7ab?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTB8MHwxfHNlYXJjaHw0fHxmaWJlciUyMG9wdGljJTIwdGVjaG5pY2lhbiUyMHNlcnZlciUyMHJhY2t8ZW58MHx8fHwxNzk0NDM0Mzg3fDA&ixlib=rb-4.1.0&q=85",
        label: "Perakitan Perangkat",
        testid: "gallery-photo-6",
    },
];

export default function Gallery() {
    return (
        <section className="relative border-t border-white/5 py-24 sm:py-28" data-testid="gallery-section">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
                <SectionHeading
                    eyebrow="Galeri Hasil Kerja"
                    title="Hasil pemasangan & perawatan jaringan kami"
                    sub="Dokumentasi pekerjaan teknisi ARNETECH — rapi, aman, dan teruji."
                    testid="gallery-heading"
                />
                <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-3">
                    {PHOTOS.map((p, i) => (
                        <Reveal key={p.src} delay={(i % 3) * 0.08}>
                            <figure
                                data-testid={p.testid}
                                className="group relative overflow-hidden rounded-2xl border border-white/5"
                            >
                                <img
                                    src={p.src}
                                    alt={p.label}
                                    loading="lazy"
                                    className="h-44 w-full object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 sm:h-56"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14]/85 via-transparent to-transparent" />
                                <figcaption className="absolute bottom-4 left-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.24em] text-white/80 sm:text-[11px]">
                                    <span className="h-1 w-1 rounded-full bg-orange-400" />
                                    {p.label}
                                </figcaption>
                            </figure>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
