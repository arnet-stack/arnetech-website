export const BRAND = {
    name: "Amaray Networking Technology",
    short: "ARNETECH",
    domain: "arnetech.net",
    tagline: "Konsultasi, Instalasi & Maintenance Jaringan",
};

export const WIKU_URL = "https://wiku.app/register/223897802?memberType=ppoe";
export const WA_NUMBER_DISPLAY = "081343285565";
export const WA_URL = "https://wa.me/6281343285565";
export const WA_CONSULT_URL =
    "https://wa.me/6281343285565?text=Halo%20Tim%20ARNETECH%2C%20saya%20ingin%20konsultasi%20mengenai%20jasa%20jaringan";
export const EMAIL = "amaraynetworking@gmail.com";
export const ADDRESS =
    "Jl. Diponegoro, Pasir Hitam, Tarau, Yapen Selatan, Kepulauan Yapen, Serui, Papua 98625";
export const MAP_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;

export function scrollToKontak(navigate, pathname) {
    const go = () => {
        const el = document.getElementById("kontak");
        if (!el) return;
        if (window.__lenis) window.__lenis.scrollTo(el, { offset: -12, duration: 1.4 });
        else el.scrollIntoView({ behavior: "smooth" });
    };
    if (pathname !== "/") {
        navigate("/");
        setTimeout(go, 500);
    } else {
        go();
    }
}
