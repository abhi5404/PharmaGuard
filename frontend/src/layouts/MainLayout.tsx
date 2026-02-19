import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '../pages/Navbar';
import Footer from '../pages/Footer';
import { FloatingBadges } from '../pages/InnovativeFeatures';
import dnaDarkBg from '../assets/image copy.png';  // Black bg + blue glowing DNA — dark mode

const MainLayout: React.FC = () => {
    const location = useLocation();

    return (
        <div className="min-h-screen flex flex-col relative overflow-hidden">

            {/* ── Layer 1: Solid base color ─────────────────────────────────── */}
            <div className="fixed inset-0 z-[-3]" style={{ background: 'var(--bg-main)' }} />

            {/* ── Layer 2: DNA image ────────────────────────────────────────── */}
            <div
                className="dna-bg-img dna-bg-movable fixed inset-0 z-[-2] pointer-events-none"
                style={{
                    backgroundImage: `url(${dnaDarkBg})`,
                    backgroundSize: '116% 116%',
                    backgroundPosition: '50% 50%',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'scroll',
                    opacity: 0.74,
                    filter: 'blur(1.2px) saturate(1.1)',
                    transition: 'opacity 0.6s ease, filter 0.6s ease',
                }}
            />

            {/* ── Layer 3: Readability overlay (dark tint / light wash) ─────── */}
            <div
                className="fixed inset-0 z-[-1] pointer-events-none"
                style={{
                    background: 'linear-gradient(135deg, rgba(0,0,0,0.42) 0%, rgba(0,4,10,0.36) 50%, rgba(0,0,0,0.42) 100%)',
                    transition: 'background 0.6s ease',
                }}
            />

            {/* ── Layer 4: Radial vignette for depth ───────────────────────── */}
            <div
                className="fixed inset-0 z-[-1] pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at 50% 0%, rgba(13,115,119,0.08) 0%, transparent 60%)',
                }}
            />

            <Navbar />
            <FloatingBadges />

            <main className="flex-1 relative z-10">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Outlet />
                    </motion.div>
                </AnimatePresence>
            </main>

            <Footer />
        </div>
    );
};

export default MainLayout;
