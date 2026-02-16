import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about">
            <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]"
            >
                About Me
            </motion.h2>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto bg-[var(--color-background)]/50 backdrop-blur-md p-8 rounded-2xl border border-[var(--color-border)] shadow-xl hover:border-[var(--color-primary)] transition-colors duration-300 hover:shadow-2xl hover:shadow-[var(--color-primary)]/10"
            >
                <p className="text-lg text-[var(--color-secondary)] leading-relaxed mb-6">
                    I’m an <span className="text-[var(--color-primary)] font-semibold">Artificial Intelligence & Data Science</span> undergraduate driven by curiosity and creativity, with a strong passion for building intelligent systems and dynamic web applications that solve real-world problems.
                </p>
                <p className="text-lg text-[var(--color-secondary)] leading-relaxed mb-6">
                    I enjoy working at the intersection of data, algorithms, and modern web technologies, transforming ideas into impactful AI-powered applications. From predictive models and deep learning systems to responsive full-stack web solutions, I focus on creating work that is both technically strong and user-centric.
                </p>
                <p className="text-lg text-[var(--color-secondary)] leading-relaxed">
                    I believe in continuous learning, experimentation, and growth. My goal is to evolve as an AI engineer while contributing to projects that create meaningful change through technology.
                </p>
            </motion.div>
        </section>
    );
};

export default About;
