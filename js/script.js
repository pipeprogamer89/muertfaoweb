// script.js - Versión Mejorada

document.addEventListener('DOMContentLoaded', function() {
    
    // =====================
    // PRELOADER
    // =====================
    const preloader = document.querySelector('.preloader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }, 1500);
    });
    
    // =====================
    // MENÚ RESPONSIVE
    // =====================
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.innerHTML = navLinks.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
    
    // Cerrar menú al hacer clic en enlace
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
    
    // =====================
    // ANIMACIÓN 3D DEL FÉNIX
    // =====================
    function initPhoenixAnimation() {
        const canvas = document.getElementById('phoenixCanvas');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        let particles = [];
        const colors = ['#FF6B35', '#FF8C53', '#FFD166', '#FFEA00'];
        
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 5 + 2;
                this.speedX = Math.random() * 3 - 1.5;
                this.speedY = Math.random() * 3 - 1.5;
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.alpha = Math.random() * 0.5 + 0.3;
                this.wave = Math.random() * Math.PI * 2;
            }
            
            update() {
                this.x += this.speedX + Math.sin(this.wave) * 0.5;
                this.y += this.speedY + Math.cos(this.wave) * 0.3;
                this.wave += 0.05;
                
                if (this.x > canvas.width) this.x = 0;
                else if (this.x < 0) this.x = canvas.width;
                
                if (this.y > canvas.height) this.y = 0;
                else if (this.y < 0) this.y = canvas.height;
                
                // Efecto de brillo pulsante
                this.alpha = 0.3 + Math.sin(this.wave) * 0.2;
            }
            
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.globalAlpha = this.alpha;
                ctx.fill();
                
                // Efecto de resplandor
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
                const gradient = ctx.createRadialGradient(
                    this.x, this.y, this.size,
                    this.x, this.y, this.size * 3
                );
                gradient.addColorStop(0, this.color);
                gradient.addColorStop(1, 'transparent');
                ctx.fillStyle = gradient;
                ctx.fill();
            }
        }
        
        // Crear partículas
        function initParticles() {
            particles = [];
            const particleCount = Math.min(150, Math.floor(canvas.width * canvas.height / 10000));
            
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }
        
        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Fondo degradado
            const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
            gradient.addColorStop(0, '#05111F');
            gradient.addColorStop(1, '#0A1929');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // Dibujar partículas
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });
            
            // Conectar partículas cercanas
            ctx.globalAlpha = 0.1;
            ctx.strokeStyle = '#FF6B35';
            ctx.lineWidth = 1;
            
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
            
            ctx.globalAlpha = 1;
            requestAnimationFrame(animateParticles);
        }
        
        // Inicializar y animar
        initParticles();
        animateParticles();
        
        // Redimensionar canvas
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        });
    }
    
    // =====================
    // PARTICLES.JS BACKGROUND
    // =====================
    function initParticlesBackground() {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: ['#FF6B35', '#FFD166', '#1A2B3C']
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    }
                },
                opacity: {
                    value: 0.5,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#FF6B35',
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 0.3
                        }
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
    }
    
    // =====================
    // COPIAR IP AL CLIC
    // =====================
    document.querySelectorAll('.copy-btn').forEach(button => {
        button.addEventListener('click', function() {
            const ip = this.getAttribute('data-ip');
            const originalText = this.innerHTML;
            const originalBg = this.style.background;
            
            navigator.clipboard.writeText(ip).then(() => {
                // Efecto visual de copiado
                this.innerHTML = '<i class="fas fa-check"></i> ¡COPIADO!';
                this.style.background = 'linear-gradient(45deg, #4CAF50, #66BB6A)';
                
                // Notificación emergente
                showNotification('¡IP copiada al portapapeles!', 'success');
                
                // Restaurar después de 2 segundos
                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.style.background = originalBg;
                }, 2000);
            }).catch(err => {
                showNotification('Error al copiar la IP', 'error');
                console.error('Error al copiar:', err);
            });
        });
    });
    
    // =====================
    // NOTIFICACIONES
    // =====================
    function showNotification(message, type) {
        // Crear elemento de notificación
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
            <span>${message}</span>
        `;
        
        // Estilos para la notificación
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '15px 25px',
            background: type === 'success' ? '#4CAF50' : '#f44336',
            color: 'white',
            borderRadius: '10px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
            zIndex: '9999',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            transform: 'translateX(150%)',
            transition: 'transform 0.3s ease-out'
        });
        
        document.body.appendChild(notification);
        
        // Mostrar notificación
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 10);
        
        // Ocultar después de 3 segundos
        setTimeout(() => {
            notification.style.transform = 'translateX(150%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
    
    // =====================
    // CONTADOR DE ESTADÍSTICAS
    // =====================
    function initCounters() {
        const counters = document.querySelectorAll('.stat-number');
        const speed = 200; // Velocidad del contador
        
        counters.forEach(counter => {
            const updateCount = () => {
                const target = parseInt(counter.getAttribute('data-count'));
                const count = parseInt(counter.innerText);
                const increment = Math.ceil(target / speed);
                
                if (count < target) {
                    counter.innerText = (count + increment).toLocaleString();
                    setTimeout(updateCount, 10);
                } else {
                    counter.innerText = target.toLocaleString();
                }
            };
            
            // Iniciar contador cuando sea visible
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        updateCount();
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            observer.observe(counter);
        });
    }
    
    // =====================
    // GALERÍA INTERACTIVA
    // =====================
    function initGallery() {
        const galleryItems = document.querySelectorAll('.gallery-item');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        let currentIndex = 0;
        
        // Mostrar imagen en modal al hacer clic
        galleryItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                currentIndex = index;
                showImageModal(item.querySelector('img').src);
            });
        });
        
        // Navegación con botones
        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
                scrollToGalleryItem(currentIndex);
            });
            
            nextBtn.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % galleryItems.length;
                scrollToGalleryItem(currentIndex);
            });
        }
        
        function scrollToGalleryItem(index) {
            galleryItems[index].scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });
        }
    }
    
    // =====================
    // MODAL DE VIDEO
    // =====================
    const trailerBtn = document.getElementById('trailerBtn');
    const videoModal = document.querySelector('.video-modal');
    const closeModal = document.querySelector('.close-modal');
    
    if (trailerBtn) {
        trailerBtn.addEventListener('click', () => {
            const videoFrame = document.getElementById('trailerVideo');
            videoFrame.src = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'; // Reemplazar con video real
            videoModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
    
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            const videoFrame = document.getElementById('trailerVideo');
            videoFrame.src = '';
            videoModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }
    
    // Cerrar modal al hacer clic fuera
    videoModal.addEventListener('click', (e) => {
        if (e.target === videoModal) {
            const videoFrame = document.getElementById('trailerVideo');
            videoFrame.src = '';
            videoModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // =====================
    // BOTÓN VOLVER ARRIBA
    // =====================
    const backToTopBtn = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // =====================
    // ANIMACIONES AOS
    // =====================
    AOS.init({
        duration: 1000,
        once: false,
        offset: 100,
        easing: 'ease-in-out'
    });
    
    // =====================
    // EFECTO TYPING
    // =====================
    function initTypingEffect() {
        const subtitle = document.querySelector('.typing-effect');
        if (subtitle) {
            const text = subtitle.textContent;
            subtitle.textContent = '';
            subtitle.style.borderRight = '3px solid var(--primary)';
            
            let i = 0;
            const typeWriter = () => {
                if (i < text.length) {
                    subtitle.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 50);
                } else {
                    // Parpadeo infinito del cursor
                    subtitle.style.animation = 'blink 0.75s step-end infinite';
                }
            };
            
            // Iniciar después de un delay
            setTimeout(typeWriter, 1000);
        }
    }
    
    // =====================
    // SIMULADOR DE ACTIVIDAD DISCORD
    // =====================
    function simulateDiscordActivity() {
        const messages = document.querySelectorAll('.message-text');
        if (messages.length === 0) return;
        
        const sampleMessages = [
            "¡Acabo de encontrar una nueva dimensión secreta!",
            "¿Alguien para un dungeon? Necesito equipo",
            "Evento de construcción este domingo, ¡no falten!",
            "Vendo materiales raros, preguntar por DM",
            "¡Servidor increíble! Llevo una semana jugando",
            "¿Cómo se consigue el logro 'Fénix Renacido'?",
            "Gracias al staff por la ayuda con mi problema",
            "Nuevo record en el parkour: 45 segundos!"
        ];
        
        // Cambiar mensajes cada 10 segundos
        setInterval(() => {
            messages.forEach(msg => {
                if (Math.random() > 0.7) { // 30% de probabilidad de cambio
                    const original = msg.textContent;
                    const newMsg = sampleMessages[Math.floor(Math.random() * sampleMessages.length)];
                    
                    // Efecto de fade out/in
                    msg.style.opacity = '0';
                    setTimeout(() => {
                        msg.textContent = newMsg;
                        msg.style.opacity = '1';
                    }, 300);
                }
            });
        }, 10000);
    }
    
    // =====================
    // INICIALIZAR TODO
    // =====================
    initPhoenixAnimation();
    initParticlesBackground();
    initCounters();
    initGallery();
    initTypingEffect();
    simulateDiscordActivity();
    
    // Smooth scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Actualizar contador de jugadores en tiempo real (simulado)
    setInterval(() => {
        const playerCount = document.querySelector('.player-count');
        if (playerCount) {
            const current = parseInt(playerCount.textContent);
            const change = Math.floor(Math.random() * 5) - 2; // -2 a +2
            const newCount = Math.max(120, Math.min(135, current + change));
            playerCount.textContent = `${newCount} jugadores activos`;
        }
    }, 30000);
    
    // Efecto parallax en secciones
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax');
        
        parallaxElements.forEach(element => {
            const speed = element.getAttribute('data-speed') || 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
    
    // Consola de bienvenida
    console.log('%c🔥 PHOENIX UPRISING 🔥', 'color: #FF6B35; font-size: 24px; font-weight: bold;');
    console.log('%cBienvenido al servidor más épico de Minecraft', 'color: #FFD166; font-size: 16px;');
    console.log('%cIP: dr01.dragonhosting.lat:19853', 'color: #4CAF50;');
});
