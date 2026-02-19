import { motion, type Variants } from 'framer-motion';
import { Github, Linkedin, Mail, Code2, FileText } from 'lucide-react';

const Hero = () => {
    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const socialVariants: Variants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { type: "spring", stiffness: 260, damping: 20 }
        }
    };

    return (
        <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center relative">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-8 z-10"
            >
                {/* Glowing Background Effect behind name */}
                <div className="relative inline-block">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1.1 }}
                        transition={{ delay: 0.5, duration: 3, repeat: Infinity, repeatType: "reverse" }}
                        className="absolute -inset-16 bg-[var(--color-primary)]/10 rounded-full blur-[80px] -z-10"
                    />

                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl md:text-8xl font-bold tracking-tight"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-primary)] to-[#fbbf24] drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                            Syed Thouqeer
                        </span>
                        <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#fbbf24] to-[var(--color-primary)] drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                            Ahmed A
                        </span>
                    </motion.h1>
                </div>

                <motion.h2
                    variants={itemVariants}
                    className="text-xl md:text-3xl font-light text-[var(--color-secondary)] flex flex-col md:flex-row gap-2 justify-center items-center"
                >
                    <span>AI & Data Science Student</span>
                    <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
                    <span className="text-[var(--color-primary)]">Aspiring AI Engineer</span>
                </motion.h2>

                <motion.p
                    variants={itemVariants}
                    className="max-w-2xl mx-auto text-[var(--color-secondary)] text-lg leading-relaxed px-4"
                >
                    Turning data into intelligent decisions and ideas into real-world solutions.Focused on building <span className="text-[var(--color-primary)] font-medium">AI-powered systems</span>,
                    <span className="text-[var(--color-primary)] font-medium"> machine learning models</span>, and
                    <span className="text-[var(--color-primary)] font-medium"> scalable data-driven solutions</span>.

                </motion.p>

                <motion.div
                    className="flex justify-center gap-4 md:gap-8 pt-8 flex-wrap"
                >
                    {[
                        { name: "GitHub", icon: Github, href: "https://github.com/thouqeer-07", color: "hover:text-[var(--color-primary)]" },
                        { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/syed-thouqeer-ahmed-a-8359b9301", color: "hover:text-[#0077b5]" },
                        { name: "LeetCode", icon: Code2, href: "https://leetcode.com/u/Syed_Thouqeer_Ahmed/", color: "hover:text-[#ffa116]" },
                        { name: "Resume", icon: FileText, href: "certificates/Resume.pdf", color: "hover:text-[Green]", download: true },
                        { name: "Email", icon: Mail, href: "mailto:thouqeerahmed07@gmail.com", color: "hover:text-[#ea4335]" }
                    ].map((item, index) => (
                        <motion.a
                            key={index}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            download={item.download}
                            variants={socialVariants}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            className={`group relative p-4 bg-[var(--color-background)]/50 backdrop-blur-sm border border-[var(--color-border)] rounded-2xl text-[var(--color-secondary)] transition-colors duration-300 ${item.color} shadow-lg hover:shadow-[var(--color-primary)]/10`}
                        >
                            <item.icon size={28} />

                            {/* Tooltip */}
                            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-[var(--color-primary)] text-[var(--color-background)] text-xs font-bold rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">
                                {item.name}
                                {/* Tooltip Arrow */}
                                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[var(--color-primary)]" />
                            </span>
                        </motion.a>
                    ))}
                </motion.div>
            </motion.div>


        </section>
    );
};

export default Hero;
