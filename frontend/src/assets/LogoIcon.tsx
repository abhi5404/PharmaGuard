import React from 'react';
import { motion } from 'framer-motion';

const LogoIcon: React.FC<{ size?: number; className?: string }> = ({
    size = 40,
    className = '',
}) => {
    return (
        <motion.svg
            width={size}
            height={size}
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            whileHover={{ scale: 1.12, rotate: 6 }}
            whileTap={{ scale: 0.93 }}
            transition={{ type: 'spring', stiffness: 320, damping: 18 }}
            style={{ cursor: 'pointer', filter: 'drop-shadow(0 2px 12px rgba(20,184,166,0.45))' }}
        >
            <defs>
                <linearGradient id="pg-bg" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#0B2D30" />
                    <stop offset="100%" stopColor="#050F12" />
                </linearGradient>
                <linearGradient id="pg-s1" x1="0" y1="0" x2="0" y2="44" gradientUnits="userSpaceOnUse">
                    <stop offset="0%"   stopColor="#22D3EE" stopOpacity="0.9" />
                    <stop offset="50%"  stopColor="#14B8A6" stopOpacity="1" />
                    <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.9" />
                </linearGradient>
                <linearGradient id="pg-s2" x1="0" y1="0" x2="0" y2="44" gradientUnits="userSpaceOnUse">
                    <stop offset="0%"   stopColor="#14B8A6" stopOpacity="0.9" />
                    <stop offset="50%"  stopColor="#22D3EE" stopOpacity="1" />
                    <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.9" />
                </linearGradient>
                <filter id="pg-glow" x="-40%" y="-40%" width="180%" height="180%">
                    <feGaussianBlur stdDeviation="1.4" result="blur" />
                    <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {/* Background */}
            <rect width="44" height="44" rx="11" ry="11" fill="url(#pg-bg)" />
            <rect width="44" height="44" rx="11" ry="11" fill="none"
                stroke="rgba(20,184,166,0.3)" strokeWidth="1" />

            {/* Shield outline */}
            <path
                d="M22 5.5 L7.5 11 v9.5 c0 8 6.5 13.5 14.5 13.5 s14.5-5.5 14.5-13.5 V11 Z"
                fill="rgba(20,184,166,0.05)"
                stroke="rgba(20,184,166,0.2)"
                strokeWidth="0.7"
            />

            {/* Left strand — flows downward */}
            <motion.path
                d="M17 9.5 C17 9.5,20.5 12,20.5 15 C20.5 18,17 20,17 20 C17 20,20.5 22,20.5 25 C20.5 28,17 30.5,17 30.5"
                stroke="url(#pg-s1)"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="12 6"
                filter="url(#pg-glow)"
                animate={{ strokeDashoffset: [0, -60] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'linear' as const }}
            />

            {/* Right strand — flows upward */}
            <motion.path
                d="M27 9.5 C27 9.5,23.5 12,23.5 15 C23.5 18,27 20,27 20 C27 20,23.5 22,23.5 25 C23.5 28,27 30.5,27 30.5"
                stroke="url(#pg-s2)"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="12 6"
                filter="url(#pg-glow)"
                animate={{ strokeDashoffset: [0, 60] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'linear' as const }}
            />

            {/* Top rung */}
            <motion.line x1="20.5" y1="12.5" x2="23.5" y2="12.5"
                stroke="rgba(34,211,238,0.7)" strokeWidth="1.2" strokeLinecap="round"
                animate={{ opacity: [0.25, 0.85, 0.25], scaleX: [0.5, 1, 0.5] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' as const, delay: 0 }}
            />
            {/* Middle rung */}
            <motion.line x1="17" y1="20" x2="27" y2="20"
                stroke="rgba(20,184,166,0.85)" strokeWidth="1.4" strokeLinecap="round"
                animate={{ opacity: [0.25, 0.85, 0.25], scaleX: [0.5, 1, 0.5] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' as const, delay: 0.8 }}
            />
            {/* Bottom rung */}
            <motion.line x1="20.5" y1="27.5" x2="23.5" y2="27.5"
                stroke="rgba(34,211,238,0.7)" strokeWidth="1.2" strokeLinecap="round"
                animate={{ opacity: [0.25, 0.85, 0.25], scaleX: [0.5, 1, 0.5] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' as const, delay: 1.6 }}
            />

            {/* Node dots */}
            <motion.circle cx="20.5" cy="15" r="2.2" fill="#22D3EE" filter="url(#pg-glow)"
                animate={{ opacity: [0.7, 1, 0.7], scale: [0.85, 1.15, 0.85] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' as const, delay: 0 }}
            />
            <motion.circle cx="23.5" cy="15" r="2.2" fill="#14B8A6"
                animate={{ opacity: [0.7, 1, 0.7], scale: [0.85, 1.15, 0.85] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' as const, delay: 0.4 }}
            />
            <motion.circle cx="17" cy="20" r="2.3" fill="#14B8A6" filter="url(#pg-glow)"
                animate={{ opacity: [0.7, 1, 0.7], scale: [0.85, 1.15, 0.85] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' as const, delay: 0.8 }}
            />
            <motion.circle cx="27" cy="20" r="2.3" fill="#22D3EE"
                animate={{ opacity: [0.7, 1, 0.7], scale: [0.85, 1.15, 0.85] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' as const, delay: 1.2 }}
            />
            <motion.circle cx="20.5" cy="25" r="2.2" fill="#22D3EE"
                animate={{ opacity: [0.7, 1, 0.7], scale: [0.85, 1.15, 0.85] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' as const, delay: 1.6 }}
            />
            <motion.circle cx="23.5" cy="25" r="2.2" fill="#14B8A6" filter="url(#pg-glow)"
                animate={{ opacity: [0.7, 1, 0.7], scale: [0.85, 1.15, 0.85] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' as const, delay: 2.0 }}
            />

            {/* Shield tip dot */}
            <motion.circle cx="22" cy="35" r="1.3" fill="rgba(20,184,166,0.55)"
                animate={{ opacity: [0.4, 0.9, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' as const }}
            />
        </motion.svg>
    );
};

export default LogoIcon;
