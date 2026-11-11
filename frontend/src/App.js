import { Component, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Jasa from "./pages/Jasa";
import Privasi from "./pages/Privasi";
import "./App.css";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { error: null };
    }
    static getDerivedStateFromError(error) {
        return { error };
    }
    render() {
        if (this.state.error) {
            return (
                <div className="flex min-h-screen items-center justify-center bg-[#0B0E14] p-8 text-center">
                    <div>
                        <p className="font-display text-xl font-bold text-white">ARNETECH</p>
                        <p className="mt-3 text-sm text-white/50">
                            Terjadi kesalahan saat menampilkan halaman. Muat ulang halaman ini.
                        </p>
                    </div>
                </div>
            );
        }
        return this.props.children;
    }
}

function SmoothScroll() {
    useEffect(() => {
        const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
        window.__lenis = lenis;
        let raf;
        const loop = (t) => {
            lenis.raf(t);
            raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);
        return () => {
            cancelAnimationFrame(raf);
            lenis.destroy();
            window.__lenis = null;
        };
    }, []);
    return null;
}

function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true });
        else window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

export default function App() {
    return (
        <ErrorBoundary>
            <BrowserRouter>
                <SmoothScroll />
                <ScrollToTop />
                <div className="min-h-screen bg-[#0B0E14] font-sans text-[#F9FAFB] antialiased">
                    <Navbar />
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/jasa" element={<Jasa />} />
                            <Route path="/kebijakan-privasi" element={<Privasi />} />
                            <Route path="*" element={<Home />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </BrowserRouter>
        </ErrorBoundary>
    );
}
