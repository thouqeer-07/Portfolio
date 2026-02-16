import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const isManualScroll = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Active section logic
            if (isManualScroll.current) return;

            const currentPosition = window.scrollY + 120; // Improved offset for header assignment

            for (const item of navItems) {
                const sectionId = item.href.substring(1);
                const element = document.getElementById(sectionId);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (currentPosition >= offsetTop && currentPosition < offsetTop + offsetHeight) {
                        setActiveSection(sectionId);
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        setIsOpen(false);
        const sectionId = href.substring(1);
        setActiveSection(sectionId);
        isManualScroll.current = true;

        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else if (href === '#hero') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        setTimeout(() => {
            isManualScroll.current = false;
        }, 1000);
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[var(--color-background)]/80 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] cursor-pointer"
                    onClick={() => scrollToSection('#hero')}
                >
                    Portfolio
                </motion.div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 relative items-center">
                    {navItems.map((item, index) => (
                        <div key={item.name} className="relative">
                            <motion.button
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => scrollToSection(item.href)}
                                className={`text-sm font-medium uppercase tracking-wider transition-colors ${activeSection === item.href.substring(1) ? 'text-[var(--color-primary)]' : 'text-[var(--color-secondary)] hover:text-[var(--color-primary)]'
                                    }`}
                            >
                                {item.name}
                            </motion.button>
                            {activeSection === item.href.substring(1) && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--color-primary)]"
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                        </div>
                    ))}

                    {/* Theme Toggle Button */}
                    <motion.button
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={toggleTheme}
                        className="p-2 rounded-full bg-[var(--color-background)] border border-[var(--color-border)] text-[var(--color-text)] hover:shadow-lg transition-colors"
                    >
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </motion.button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-4">
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={toggleTheme}
                        className="text-[var(--color-text)] focus:outline-none"
                    >
                        {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
                    </motion.button>

                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-[var(--color-text)] focus:outline-none"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden bg-[var(--color-background)]/95 backdrop-blur-md border-t border-[var(--color-border)]"
                >
                    <div className="flex flex-col items-center py-8 gap-6">
                        {navItems.map((item) => (
                            <motion.button
                                key={item.name}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => scrollToSection(item.href)}
                                className={`text-xl font-medium transition-colors ${activeSection === item.href.substring(1) ? 'text-[var(--color-primary)]' : 'text-[var(--color-secondary)]'
                                    }`}
                            >
                                {item.name}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
