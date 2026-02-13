import { motion, type Variants } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const certifications = [
    {
        title: "Oracle Database SQL Certified Specialist",
        institute: "Oracle",
        link: "https://www.oracle.com/education/certification/" // Placeholder link
    },
    {
        title: "Ethical Hacking",
        institute: "NPTEL",
        link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/106/noc25-cs142/Course/NPTEL25CS142S105401012110923334.pdf"
    },
    {
        title: "Privacy and Security in Online Social Media",
        institute: "NPTEL",
        link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/106/noc25-cs117/Course/NPTEL25CS117S57520223710923334.pdf"
    },
    {
        title: "AI Essentials",
        institute: "Udemy",
        link: "https://www.udemy.com/certificate/UC-b117b845-5407-4b8a-acb7-bbb8057794bd/" // Placeholder link
    },
    {
        title: "Microsoft Power BI",
        institute: "Udemy",
        link: "https://www.udemy.com/certificate/UC-0fc18b8f-1334-481a-822b-3b6c7d202efb/" // Placeholder link
    },
    {
        title: "Generative AI",
        institute: "Udemy",
        link: "https://www.udemy.com/certificate/UC-9c5da8cb-7dc6-4368-9f12-9e4238eb9a5e/" // Placeholder link
    },
    {
        title: "Fundamentals of Gen AI",
        institute: "Google Cloud",
        link: "https://www.cloudskillsboost.google/course_templates/539" // Specific link for Gen AI
    }
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" }
    },
    hover: {
        y: -10,
        transition: { duration: 0.3, ease: "easeOut" }
    }
};

const Certifications = () => {
    return (
        <section id="certifications">
            <div className="max-w-4xl mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]"
                >
                    Certifications
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover="hover"
                            className="relative group p-8 bg-[var(--color-background)]/40 backdrop-blur-sm rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-primary)]/50 transition-colors duration-300 flex flex-col justify-between hover:shadow-[0_10px_30px_-10px_var(--color-primary)]/10"
                        >
                            {/* Card Link Overlay */}
                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute inset-0 z-0 rounded-2xl"
                                aria-label={`View ${cert.title}`}
                            />

                            <div className="relative z-10 pointer-events-none">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="h-2 w-12 bg-[var(--color-primary)] rounded-full group-hover:w-24 transition-all duration-300" />
                                    <ExternalLink size={18} className="text-[var(--color-secondary)] group-hover:text-[var(--color-primary)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                                </div>

                                <h3 className="text-lg font-medium text-[var(--color-text)] leading-relaxed group-hover:text-[var(--color-primary)] transition-colors mb-2">
                                    {cert.title}
                                </h3>
                                <p className="text-sm text-[var(--color-secondary)] mb-4">
                                    {cert.institute}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Certifications;
