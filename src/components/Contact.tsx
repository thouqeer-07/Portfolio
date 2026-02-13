import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, Loader2 } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            const response = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams({
                    'form-name': 'contact',
                    ...formData
                }).toString()
            });

            if (response.ok) {
                setIsSubmitted(true);
                setFormData({ name: '', email: '', message: '' });
            } else {
                throw new Error('Form submission failed');
            }
        } catch (err) {
            setError('Something went wrong. Please try again later.');
            console.error(err);
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <section id="contact">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]"
            >
                Get In Touch
            </motion.h2>

            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                >
                    <h3 className="text-2xl font-bold text-[var(--color-text)]">Let's Connect</h3>
                    <p className="text-[var(--color-secondary)] text-lg">
                        I'm currently looking for new opportunities and would love to hear from you.
                        Whether you have a question or just want to say hi, feel free to reach out!
                    </p>

                    <div className="space-y-4">
                        <motion.a
                            href="mailto:thouqeerahmed07@gmail.com"
                            whileHover={{ scale: 1.02, x: 5 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center gap-4 text-[var(--color-secondary)] hover:text-[var(--color-background)] hover:bg-[var(--color-primary)] transition-all duration-300 p-4 bg-[var(--color-background)]/50 rounded-xl border border-[var(--color-border)] group"
                        >
                            <Mail className="text-[#ea4335] group-hover:text-[var(--color-background)] transition-colors duration-300" />
                            <span>thouqeerahmed07@gmail.com</span>
                        </motion.a>
                        <motion.a
                            href="https://linkedin.com/in/syed-thouqeer-ahmed-a-8359b9301"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02, x: 5 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center gap-4 text-[var(--color-secondary)] hover:text-[var(--color-background)] hover:bg-[var(--color-primary)] transition-all duration-300 p-4 bg-[var(--color-background)]/50 rounded-xl border border-[var(--color-border)] group"
                        >
                            <Linkedin className="text-[#0077b5] group-hover:text-[var(--color-background)] transition-colors duration-300" />
                            <span>LinkedIn Profile</span>
                        </motion.a>
                        <motion.a
                            href="https://github.com/thouqeer-07"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02, x: 5 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center gap-4 text-[var(--color-secondary)] hover:text-[var(--color-background)] hover:bg-[var(--color-primary)] transition-all duration-300 p-4 bg-[var(--color-background)]/50 rounded-xl border border-[var(--color-border)] group"
                        >
                            <Github className="text-[var(--color-primary)] group-hover:text-[var(--color-background)] transition-colors duration-300" />
                            <span>GitHub Profile</span>
                        </motion.a>
                    </div>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                    onSubmit={handleSubmit}
                    name="contact"
                    method="POST"
                    data-netlify="true"
                >
                    <input type="hidden" name="form-name" value="contact" />
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-[var(--color-secondary)] mb-2">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full bg-[var(--color-background)]/50 border border-[var(--color-border)] rounded-lg px-4 py-3 text-[var(--color-text)] focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                            placeholder="Your Name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[var(--color-secondary)] mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full bg-[var(--color-background)]/50 border border-[var(--color-border)] rounded-lg px-4 py-3 text-[var(--color-text)] focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                            placeholder="your@email.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-[var(--color-secondary)] mb-2">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={4}
                            className="w-full bg-[var(--color-background)]/50 border border-[var(--color-border)] rounded-lg px-4 py-3 text-[var(--color-text)] focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                            placeholder="Your message..."
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    {isSubmitted && <p className="text-green-500 text-sm">Message sent successfully!</p>}

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.95 }}
                        disabled={isSubmitting}
                        className="w-full bg-[var(--color-primary)] text-[var(--color-background)] font-bold py-3 rounded-lg hover:opacity-90 hover:shadow-[0_0_20px_var(--color-primary)]/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? (
                            <>Sending... <Loader2 className="animate-spin" size={18} /></>
                        ) : (
                            <>Send Message <Send size={18} /></>
                        )}
                    </motion.button>

                </motion.form>
            </div>
        </section>
    );
};

export default Contact;
