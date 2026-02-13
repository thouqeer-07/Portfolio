import { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

const AnimatedBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { theme } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const particles: Particle[] = [];
        const particleCount = width < 768 ? 40 : 100;
        const connectionDistance = 150;
        let animationFrameId: number;

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.50;
                this.vy = (Math.random() - 0.5) * 0.10;
                this.size = Math.random() * 2 + 1;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off edges with robust logic
                if (this.x < 0) {
                    this.x = 0;
                    this.vx = Math.abs(this.vx);
                } else if (this.x > width) {
                    this.x = width;
                    this.vx = -Math.abs(this.vx);
                }

                if (this.y < 0) {
                    this.y = 0;
                    this.vy = Math.abs(this.vy);
                } else if (this.y > height) {
                    this.y = height;
                    this.vy = -Math.abs(this.vy);
                }
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = theme === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)';
                ctx.fill();
            }
        }

        // Initialize particles
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, width, height);

            // Draw particles and connections
            particles.forEach((particle, i) => {
                particle.update();
                particle.draw();

                // Connect particles (start from i + 1 to avoid redundant checks)
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        ctx.beginPath();
                        ctx.strokeStyle = theme === 'dark'
                            ? `rgba(255, 255, 255, ${1 - distance / connectionDistance})`
                            : `rgba(0, 0, 0, ${1 - distance / connectionDistance})`;
                        ctx.lineWidth = 1;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        // Event Listeners
        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            // Reposition particles that might be out of bounds after resize
            particles.forEach(p => {
                if (p.x > width) p.x = width;
                if (p.y > height) p.y = height;
            });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [theme]); // Re-run when theme changes

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 bg-[var(--color-background)] transition-colors duration-300"
        />
    );
};

export default AnimatedBackground;
