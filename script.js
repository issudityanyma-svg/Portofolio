// --- 1. DETEKSI SCROLL UNTUK NAVBAR GLASS ---
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('main-nav');
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });

        // --- 2. GANTI TEMA ---
        const themeBtn = document.getElementById('theme-toggle');
        const themeIcon = document.getElementById('theme-icon');
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-theme');
            const isLight = document.body.classList.contains('light-theme');
            themeIcon.innerHTML = isLight 
                ? '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line>'
                : '<path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />';
        });

        // --- 3. SMOOTH SCROLL + CLICK ANIMATION ---
        document.querySelectorAll('.nav-item').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const target = document.querySelector(targetId);
                if (target) {
                    window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
                    
                    target.classList.remove('click-reveal');
                    void target.offsetWidth; 
                    target.classList.add('click-reveal');
                }
            });
        });

       // --- 4. ANIMASI REVEAL & SKILLS PROGRESS BAR ---
        const observerOptions = {
            threshold: 0.15 
        };

        const mainObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Munculkan elemen (About, Cards, dll)
                    entry.target.classList.add('active');
                    
                    // Khusus untuk bagian Skills: Isi progress bar
                    const bar = entry.target.querySelector('.progress-fill');
                    if (bar) {
                        const targetPercent = bar.getAttribute('data-percent');
                        bar.style.width = targetPercent;
                    }
                } else {
                    // Reset saat di-scroll menjauh (opsional)
                    entry.target.classList.remove('active');
                    
                    const bar = entry.target.querySelector('.progress-fill');
                    if (bar) bar.style.width = '0%';
                }
            });
        }, observerOptions);

        // Daftarkan semua elemen .reveal ke observer tunggal ini
        document.querySelectorAll('.reveal').forEach(el => mainObserver.observe(el));

        // MOBILE MENU
            const menuBtn = document.getElementById('menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');

            menuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });

             document.addEventListener("DOMContentLoaded", () => {
        const arc = document.querySelector(".arc");

        if (arc) {
            arc.style.display = "none";
        }
    });