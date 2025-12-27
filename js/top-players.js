// top-players.js

document.addEventListener('DOMContentLoaded', function() {
    
    // =====================
    // CONFIGURACIÓN DE DATOS
    // =====================
    const topPlayers = [
        {
            position: 1,
            username: "EpicSans5716",
            displayName: "EpicSans (Gonza)",
            points: 5250,
            kills: 98,
            deaths: 156,
            kdr: (982/156).toFixed(2),
            wins: 245,
            playtime: "425h",
            status: "online",
            category: "pvp",
            joinDate: "2025-12-01",
            achievements: 47
        },
        {
            position: 2,
            username: "itzrealme",
            displayName: "itzrealme",
            points: 4850,
            kills: 75,
            deaths: 210,
            kdr: (745/210).toFixed(2),
            wins: 198,
            playtime: "380h",
            status: "online",
            category: "dungeons",
            joinDate: "2025-12-02",
            achievements: 42
        },
        {
            position: 3,
            username: "Brastin",
            displayName: "Brastin",
            points: 4650,
            kills: 61,
            deaths: 189,
            kdr: (621/189).toFixed(2),
            wins: 176,
            playtime: "345h",
            status: "offline",
            category: "builders",
            joinDate: "2025-12-05",
            achievements: 38
        },
        {
            position: 4,
            username: "pipeprogamer89,
            displayName: "pipeprogamer89",
            points: 4450,
            kills: 53,
            deaths: 201,
            kdr: (534/201).toFixed(2),
            wins: 165,
            playtime: "5999h",
            status: "online",
            category: "builders",
            joinDate: "2025-12-05",
            achievements: 51
        },
        {
            position: 5,
            username: "Justicia000",
            displayName: "Justicia000",
            points: 4250,
            kills: 40,
            deaths: 178,
            kdr: (689/178).toFixed(2),
            wins: 201,
            playtime: "395h",
            status: "online",
            category: "pvp",
            joinDate: "2025-12-01",
            achievements: 39
        },
        {
            position: 6,
            username: "julian_osorio28",
            displayName: "julian_osorio28",
            points: 4050,
            kills: 39,
            deaths: 195,
            kdr: (512/195).toFixed(2),
            wins: 154,
            playtime: "3200h",
            status: "offline",
            category: "builders",
            joinDate: "2025-12-01",
            achievements: 34
        },
        {
            position: 7,
            username: "RODMASTER247",
            displayName: "RODMASTER247",
            points: 3950,
            kills: 8,
            deaths: 167,
            kdr: (598/167).toFixed(2),
            wins: 187,
            playtime: "365h",
            status: "online",
            category: "dungeons",
            joinDate: "2025-12-05",
            achievements: 41
        },
        {
            position: 8,
            username: "Elbellako",
            displayName: "Elbellako",
            points: 3850,
            kills: 6,
            deaths: 203,
            kdr: (478/203).toFixed(2),
            wins: 142,
            playtime: "295h",
            status: "online",
            category: "dungeons",
            joinDate: "2025-12-09",
            achievements: 29
        },
        {
            position: 9,
            username: "ChumToadCSX",
            displayName: "ChumToadCSX",
            points: 3750,
            kills: 0,
            deaths: 0,
            kdr: "0.00",
            wins: 0,
            playtime: "0h",
            status: "offline",
            category: "none",
            joinDate: "---",
            achievements: 0
        },
        {
            position: 10,
            username: "ShadowEDF",
            displayName: "ShadowEDF",
            points: 3650,
            kills: 0,
            deaths: 0,
            kdr: "0.00",
            wins: 0,
            playtime: "0h",
            status: "offline",
            category: "none",
            joinDate: "---",
            achievements: 0
        }
    ];
    
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
    // PARTICLES BACKGROUND
    // =====================
    function initParticles() {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 60,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: ['#FF6B35', '#FFD166', '#4CAF50', '#FF5252']
                },
                shape: {
                    type: 'circle'
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
                    distance: 120,
                    color: '#FF6B35',
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1.5,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
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
                }
            },
            retina_detect: true
        });
    }
    
    // =====================
    // ANIMACIÓN DE RANKING
    // =====================
    function initLeaderboardAnimation() {
        const canvas = document.getElementById('leaderboardCanvas');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        let particles = [];
        const colors = ['#FF6B35', '#FFD166', '#FFD700', '#C0C0C0'];
        
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 4 + 1;
                this.speedX = Math.random() * 2 - 1;
                this.speedY = Math.random() * 2 - 1;
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.alpha = Math.random() * 0.5 + 0.2;
            }
            
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                
                if (this.x > canvas.width) this.x = 0;
                else if (this.x < 0) this.x = canvas.width;
                
                if (this.y > canvas.height) this.y = 0;
                else if (this.y < 0) this.y = canvas.height;
                
                // Efecto de brillo
                this.alpha = 0.2 + Math.sin(Date.now() * 0.001 + this.x * 0.01) * 0.3;
            }
            
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.globalAlpha = this.alpha;
                ctx.fill();
                
                // Efecto de aura
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
        
        function init() {
            particles = [];
            for (let i = 0; i < 80; i++) {
                particles.push(new Particle());
            }
        }
        
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Fondo con gradiente
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
            
            requestAnimationFrame(animate);
        }
        
        init();
        animate();
        
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init();
        });
    }
    
    // =====================
    // RENDERIZAR TOP 10
    // =====================
    function renderTop10List() {
        const container = document.querySelector('.top10-list');
        if (!container) return;
        
        container.innerHTML = '';
        
        topPlayers.forEach(player => {
            const playerCard = document.createElement('div');
            playerCard.className = 'player-card';
            playerCard.dataset.username = player.username;
            playerCard.dataset.category = player.category;
            playerCard.dataset.status = player.status;
            
            // Determinar clase de posición
            let positionClass = '';
            if (player.position === 1) positionClass = 'first-place';
            else if (player.position === 2) positionClass = 'second-place';
            else if (player.position === 3) positionClass = 'third-place';
            
            playerCard.innerHTML = `
                <div class="player-position">#${player.position}</div>
                <div class="player-main">
                    <img src="https://mc-heads.net/avatar/${player.username}/80" 
                         alt="${player.displayName}" 
                         class="player-img ${positionClass}">
                    <div class="player-details">
                        <h3 class="player-username">${player.displayName}</h3>
                        <div class="player-status">
                            <span class="status-dot ${player.status}"></span>
                            <span>${player.status === 'online' ? 'En línea' : 'Desconectado'}</span>
                        </div>
                    </div>
                </div>
                <div class="player-stats">
                    <div class="stat-item">
                        <div class="stat-value">${player.points.toLocaleString()}</div>
                        <div class="stat-label">PUNTOS</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-value">${player.kdr}</div>
                        <div class="stat-label">KDR</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-value">${player.wins}</div>
                        <div class="stat-label">VICTORIAS</div>
                    </div>
                </div>
                <div class="player-actions">
                    <button class="action-btn view-profile" title="Ver perfil">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="action-btn compare-stats" title="Comparar">
                        <i class="fas fa-chart-bar"></i>
                    </button>
                </div>
            `;
            
            container.appendChild(playerCard);
        });
        
        // Añadir event listeners a los botones
        document.querySelectorAll('.view-profile').forEach(btn => {
            btn.addEventListener('click', function() {
                const username = this.closest('.player-card').dataset.username;
                const player = topPlayers.find(p => p.username === username);
                if (player) showPlayerModal(player);
            });
        });
        
        document.querySelectorAll('.compare-stats').forEach(btn => {
            btn.addEventListener('click', function() {
                const username = this.closest('.player-card').dataset.username;
                alert(`Comparando estadísticas con ${username}...`);
            });
        });
    }
    
    // =====================
    // FILTRAR JUGADORES
    // =====================
    function initFilters() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remover clase activa de todos los botones
                filterBtns.forEach(b => b.classList.remove('active'));
                // Añadir clase activa al botón clickeado
                this.classList.add('active');
                
                const filter = this.dataset.filter;
                filterPlayers(filter);
            });
        });
    }
    
    function filterPlayers(filter) {
        const playerCards = document.querySelectorAll('.player-card');
        
        playerCards.forEach(card => {
            switch(filter) {
                case 'all':
                    card.style.display = 'grid';
                    break;
                case 'online':
                    card.style.display = card.dataset.status === 'online' ? 'grid' : 'none';
                    break;
                case 'pvp':
                    card.style.display = card.dataset.category === 'pvp' ? 'grid' : 'none';
                    break;
                case 'builders':
                    card.style.display = card.dataset.category === 'builders' ? 'grid' : 'none';
                    break;
                default:
                    card.style.display = 'grid';
            }
        });
    }
    
    // =====================
    // RENDERIZAR ESTADÍSTICAS
    // =====================
    function renderStats() {
        const statsGrid = document.querySelector('.stats-grid');
        if (!statsGrid) return;
        
        // Calcular estadísticas generales
        const totalPoints = topPlayers.reduce((sum, player) => sum + player.points, 0);
        const totalKills = topPlayers.reduce((sum, player) => sum + player.kills, 0);
        const avgKDR = (topPlayers.reduce((sum, player) => sum + parseFloat(player.kdr), 0) / 8).toFixed(2); // Solo los 8 definidos
        const onlinePlayers = topPlayers.filter(player => player.status === 'online').length;
        
        statsGrid.innerHTML = `
            <div class="stat-card">
                <h4>PUNTOS TOTALES</h4>
                <div class="value">${totalPoints.toLocaleString()}</div>
                <div class="change positive">+5.2% esta semana</div>
            </div>
            <div class="stat-card">
                <h4>KILLS TOTALES</h4>
                <div class="value">${totalKills.toLocaleString()}</div>
                <div class="change positive">+12.7%</div>
            </div>
            <div class="stat-card">
                <h4>KDR PROMEDIO</h4>
                <div class="value">${avgKDR}</div>
                <div class="change positive">+0.4</div>
            </div>
            <div class="stat-card">
                <h4>JUGADORES ACTIVOS</h4>
                <div class="value">${onlinePlayers}/10</div>
                <div class="change ${onlinePlayers > 5 ? 'positive' : 'negative'}">
                    ${onlinePlayers > 5 ? '+2' : '-1'} desde ayer
                </div>
            </div>
        `;
        
        // Renderizar barras de progreso
        const progressBars = document.querySelector('.progress-bars');
        if (progressBars) {
            const categories = [
                { label: 'PvP Skill', value: 85 },
                { label: 'Construcción', value: 72 },
                { label: 'Dungeons', value: 68 },
                { label: 'Economía', value: 79 },
                { label: 'Social', value: 63 }
            ];
            
            progressBars.innerHTML = categories.map(cat => `
                <div class="progress-item">
                    <div class="progress-label">${cat.label}</div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${cat.value}%"></div>
                    </div>
                    <div class="progress-value">${cat.value}%</div>
                </div>
            `).join('');
        }
    }
    
    // =====================
    // GRÁFICO DE RANKING
    // =====================
    function initRankingChart() {
        const canvas = document.getElementById('rankingChart');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = 300;
        
        // Datos para el gráfico
        const labels = ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4'];
        const datasets = [
            {
                label: 'itzrealme',
                data: [4800, 4950, 5100, 5250],
                borderColor: '#FFD700',
                backgroundColor: 'rgba(255, 215, 0, 0.1)',
                tension: 0.4,
                fill: true
            },
            {
                label: 'Brastin',
                data: [4500, 4650, 4750, 4850],
                borderColor: '#C0C0C0',
                backgroundColor: 'rgba(192, 192, 192, 0.1)',
                tension: 0.4,
                fill: true
            },
            {
                label: 'Jahir',
                data: [4200, 4350, 4500, 4650],
                borderColor: '#CD7F32',
                backgroundColor: 'rgba(205, 127, 50, 0.1)',
                tension: 0.4,
                fill: true
            }
        ];
        
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: datasets
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            color: '#F8F9FA',
                            font: {
                                family: 'Rajdhani',
                                size: 14
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: '#F8F9FA'
                        }
                    },
                    y: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: '#F8F9FA'
                        }
                    }
                }
            }
        });
    }
    
    // =====================
    // MODAL DE JUGADOR
    // =====================
    function showPlayerModal(player) {
        const modal = document.getElementById('playerModal');
        const modalBody = document.querySelector('.modal-body');
        
        // Formatear fecha
        const joinDate = player.joinDate === '---' ? '---' : new Date(player.joinDate).toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        modalBody.innerHTML = `
            <div class="player-modal-content">
                <div class="modal-header">
                    <div class="modal-player-info">
                        <div class="modal-avatar">
                            <img src="https://mc-heads.net/avatar/${player.username}/150" alt="${player.displayName}">
                            <div class="modal-rank-badge">
                                #${player.position}
                            </div>
                        </div>
                        <div class="modal-details">
                            <h2>${player.displayName}</h2>
                            <div class="modal-status">
                                <span class="status-dot ${player.status}"></span>
                                <span>${player.status === 'online' ? 'En línea ahora' : 'Última conexión: 2h atrás'}</span>
                            </div>
                            <div class="modal-points">
                                <i class="fas fa-trophy"></i>
                                <span>${player.points.toLocaleString()} puntos</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="modal-stats-grid">
                    <div class="modal-stat">
                        <div class="modal-stat-label">KILLS</div>
                        <div class="modal-stat-value">${player.kills.toLocaleString()}</div>
                    </div>
                    <div class="modal-stat">
                        <div class="modal-stat-label">MUERTES</div>
                        <div class="modal-stat-value">${player.deaths.toLocaleString()}</div>
                    </div>
                    <div class="modal-stat">
                        <div class="modal-stat-label">KDR</div>
                        <div class="modal-stat-value">${player.kdr}</div>
                    </div>
                    <div class="modal-stat">
                        <div class="modal-stat-label">VICTORIAS</div>
                        <div class="modal-stat-value">${player.wins}</div>
                    </div>
                    <div class="modal-stat">
                        <div class="modal-stat-label">LOGROS</div>
                        <div class="modal-stat-value">${player.achievements}</div>
                    </div>
                    <div class="modal-stat">
                        <div class="modal-stat-label">TIEMPO</div>
                        <div class="modal-stat-value">${player.playtime}</div>
                    </div>
                </div>
                
                <div class="modal-info">
                    <h3>INFORMACIÓN DEL JUGADOR</h3>
                    <div class="info-grid">
                        <div class="info-item">
                            <span class="info-label">Se unió</span>
                            <span class="info-value">${joinDate}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Categoría principal</span>
                            <span class="info-value">${getCategoryName(player.category)}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Posición más alta</span>
                            <span class="info-value">#${player.position}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Racha actual</span>
                            <span class="info-value">${player.position <= 8 ? '15 victorias' : '---'}</span>
                        </div>
                    </div>
                </div>
                
                ${player.position <= 8 ? `
                <div class="modal-achievements">
                    <h3>LOGROS DESTACADOS</h3>
                    <div class="achievements-list">
                        <div class="achievement">
                            <i class="fas fa-crown gold"></i>
                            <span>Top #${player.position} Global</span>
                        </div>
                        <div class="achievement">
                            <i class="fas fa-skull-crossbones"></i>
                            <span>+${Math.floor(player.kills/100)*100} kills totales</span>
                        </div>
                        <div class="achievement">
                            <i class="fas fa-hourglass-half"></i>
                            <span>${player.playtime} jugadas</span>
                        </div>
                    </div>
                </div>
                ` : ''}
            </div>
        `;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Cerrar modal
        const closeBtn = document.querySelector('.close-modal');
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
        
        // Cerrar al hacer clic fuera
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    function getCategoryName(category) {
        switch(category) {
            case 'pvp': return 'PvP Master';
            case 'builders': return 'Builder Elite';
            case 'dungeons': return 'Dungeon Explorer';
            default: return 'Por definir';
        }
    }
    
    // =====================
    // ACTUALIZAR RANKING
    // =====================
    function initRefreshButton() {
        const refreshBtn = document.getElementById('refreshRanking');
        if (!refreshBtn) return;
        
        refreshBtn.addEventListener('click', function() {
            const originalText = this.innerHTML;
            const originalIcon = '<i class="fas fa-sync-alt"></i>';
            
            // Mostrar animación de carga
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ACTUALIZANDO...';
            this.disabled = true;
            
            // Simular actualización
            setTimeout(() => {
                // Cambiar estado de algunos jugadores
                topPlayers.forEach(player => {
                    if (Math.random() > 0.7) {
                        player.status = player.status === 'online' ? 'offline' : 'online';
                    }
                });
                
                // Re-renderizar lista
                renderTop10List();
                
                // Restaurar botón
                this.innerHTML = originalIcon + ' RANKING ACTUALIZADO';
                
                // Mostrar notificación
                showNotification('¡Ranking actualizado correctamente!', 'success');
                
                // Restaurar después de 2 segundos
                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.disabled = false;
                }, 2000);
            }, 1500);
        });
    }
    
    // =====================
    // NOTIFICACIONES
    // =====================
    function showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
            <span>${message}</span>
        `;
        
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
            transition: 'transform 0.3s ease-out',
            fontFamily: 'var(--font-primary)',
            fontWeight: '600'
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
    // ANIMACIONES AOS
    // =====================
    function initAnimations() {
        AOS.init({
            duration: 1000,
            once: false,
            offset: 100,
            easing: 'ease-in-out'
        });
    }
    
    // =====================
    // SIMULAR ACTIVIDAD EN VIVO
    // =====================
    function simulateLiveActivity() {
        // Cambiar estado de jugadores aleatoriamente
        setInterval(() => {
            const randomPlayerIndex = Math.floor(Math.random() * 8); // Solo los 8 definidos
            const player = topPlayers[randomPlayerIndex];
            
            if (player && player.username !== 'sin definir') {
                const wasOnline = player.status === 'online';
                player.status = Math.random() > 0.7 ? (wasOnline ? 'offline' : 'online') : player.status;
                
                // Si cambió el estado, actualizar la lista
                if (wasOnline !== (player.status === 'online')) {
                    renderTop10List();
                }
            }
        }, 30000); // Cada 30 segundos
    }
    
    // =====================
    // INICIALIZAR TODO
    // =====================
    function init() {
        initParticles();
        initLeaderboardAnimation();
        renderTop10List();
        initFilters();
        renderStats();
        initRankingChart();
        initRefreshButton();
        initAnimations();
        simulateLiveActivity();
        
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
        
        // Actualizar hora de última actualización
        const lastUpdated = document.querySelector('.last-updated span');
        if (lastUpdated) {
            const now = new Date();
            const timeString = now.toLocaleTimeString('es-ES', { 
                hour: '2-digit', 
                minute: '2-digit' 
            });
            lastUpdated.textContent = `Actualizado a las ${timeString}`;
        }
        
        // Consola de bienvenida
        console.log('%c🏆 TOP 10 JUGADORES 🏆', 'color: #FF6B35; font-size: 24px; font-weight: bold;');
        console.log('%cRanking oficial de MuertFao Phoenix Uprising', 'color: #FFD166; font-size: 16px;');
    }
    
    // Iniciar cuando el DOM esté listo
    init();
});
