import { motion } from 'framer-motion';

const skills = [
    { category: "Languages", items: ["Python", "C/C++", "SQL"] },
    { category: "Data & ML", items: ["Machine Learning", "Power BI", "Microsoft Excel", "Weka", "R Studio", "Google AI Studio"] },
    { category: "Core Concepts", items: ["Data Structures", "Operating Systems", "Computer Networks"] },
    { category: "Tools & Others", items: ["Git/GitHub", "VS Code", "CISCO Packet Tracer"] }
];

const Skills = () => {
    return (
        <section id="skills">
            <div className="max-w-6xl mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]"
                >
                    Technical Skills
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    {skills.map((group, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[var(--color-background)]/50 backdrop-blur-md rounded-2xl p-6 md:p-8 hover:bg-[var(--color-background)]/80 transition-colors border border-[var(--color-border)] hover:border-[var(--color-primary)]/50 group"
                        >
                            <h3 className="text-xl md:text-2xl font-bold text-[var(--color-text)] mb-6 flex items-center gap-3">
                                <span className="w-2 h-8 rounded-full bg-[var(--color-primary)]" />
                                {group.category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {group.items.map((skill, i) => (
                                    <motion.span
                                        key={i}
                                        whileHover={{ scale: 1.1, y: -5 }}
                                        className="px-4 py-2 bg-[var(--color-background)]/50 rounded-xl text-[var(--color-secondary)] hover:text-[var(--color-background)] hover:bg-[var(--color-primary)] text-sm font-medium border border-[var(--color-border)] hover:shadow-[0_0_15px_var(--color-primary)]/30 transition-colors duration-300 cursor-default block"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
