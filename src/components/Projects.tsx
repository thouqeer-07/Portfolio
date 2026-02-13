import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: "PDF BOT Using RAG",
        description: "An intelligent document retrieval system using Retrieval-Augmented Generation (RAG). It allows users to query PDF documents and get accurate, context-aware answers.",
        tech: ["Python", "LangChain", "Qdrant", "MongoDB Atlas", "Gemini", "Streamlit"],
        link: "https://pdfbot--rag.streamlit.app/", // Placeholder as per request
        github: "https://github.com/thouqeer-07/PDF.BOT--RAG"
    },
    {
        title: "AI Business Intelligence",
        description: "Advanced analytics and business intelligence solution powered by AI to derive actionable insights from complex datasets.",
        tech: ["Python", "Apache Superset", "Gemini", "Supabase", "Streamlit", "Docker"],
        link: "https://bi-bot.streamlit.app/", // Placeholder as per request
        github: "https://github.com/thouqeer-07/POWERBI_BOT"
    }
];

const Projects = () => {
    return (
        <section id="projects">
            <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]"
            >
                Featured Projects
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        whileHover={{ y: -10 }}
                        className="bg-[var(--color-background)]/50 backdrop-blur-md rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-xl group hover:border-[var(--color-primary)] transition-colors duration-300"
                    >
                        <div className="p-8 h-full flex flex-col">
                            <h3 className="text-2xl font-bold text-[var(--color-text)] mb-4 group-hover:text-[var(--color-secondary)] transition-colors">{project.title}</h3>
                            <p className="text-[var(--color-secondary)] mb-6 flex-grow">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="px-3 py-1 bg-[var(--color-background)]/50 text-[var(--color-secondary)] text-sm rounded-full border border-[var(--color-border)]">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                <motion.a
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-secondary)] text-[var(--color-secondary)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all duration-300"
                                >
                                    <Github size={18} /> Code
                                </motion.a>
                                <motion.a
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary)] text-[var(--color-background)] font-medium hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-[var(--color-primary)]/30"
                                >
                                    <ExternalLink size={18} /> Live Demo
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
