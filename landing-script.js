// Landing Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initializeLoadingScreen();
    initializeNavigation();
    initializeDropdowns();
    initializeThemeToggle();
    initializeCarousel();
    initializeScrollEffects();
    initializeContactForm();
    loadContentFromAdmin();
    initializeBackToTop();
    initializeTestimonials();
    initializeFAQ();
    initializeAdminIntegration();
});

// Navigation functionality
function initializeNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links (only for anchor links)
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Only prevent default for anchor links (#)
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    // Close mobile menu if open
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                    
                    // Scroll to section
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Load content for the section
                    loadSectionContent(targetId);
                }
            }
            // For external links (.html), let them navigate normally
        });
    });
    
    // Handle dropdown item clicks (only for anchor links)
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(item => {
        item.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Only prevent default for anchor links (#)
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    // Close mobile menu if open
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                    
                    // Scroll to section
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Load content for the section
                    loadSectionContent(targetId);
                }
            }
            // For external links (.html), let them navigate normally
        });
    });

    // Active navigation highlighting
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

// Load section content from admin data
function loadSectionContent(sectionId) {
    const contentElement = document.querySelector(`${sectionId}-content`);
    if (!contentElement) return;
    
    // Get section name from ID
    const sectionName = sectionId.replace('#', '').replace('-', '_');
    
    // Try to load content from localStorage (admin data)
    const adminData = localStorage.getItem('adminData');
    if (adminData) {
        try {
            const data = JSON.parse(adminData);
            const sectionData = data[sectionName];
            
            if (sectionData && sectionData.content) {
                contentElement.innerHTML = sectionData.content;
                return;
            }
        } catch (e) {
            console.log('Error parsing admin data:', e);
        }
    }
    
    // Default content if no admin data
    loadDefaultContent(sectionId, contentElement);
}

// Load default content for sections
function loadDefaultContent(sectionId, contentElement) {
    const defaultContent = {
        'visi-misi': `
            <div class="content-grid">
                <div class="content-item">
                    <h3>Visi</h3>
                    <p>Menjadi puskesmas terdepan dalam memberikan pelayanan kesehatan yang berkualitas, terjangkau, dan berorientasi pada kepuasan masyarakat.</p>
                </div>
                <div class="content-item">
                    <h3>Misi</h3>
                    <ul>
                        <li>Menyelenggarakan pelayanan kesehatan yang bermutu dan terjangkau</li>
                        <li>Meningkatkan derajat kesehatan masyarakat melalui upaya promotif, preventif, kuratif, dan rehabilitatif</li>
                        <li>Mengembangkan sumber daya manusia yang profesional dan berdedikasi</li>
                        <li>Menerapkan manajemen yang transparan dan akuntabel</li>
                    </ul>
                </div>
            </div>
        `,
        'motto-layanan': `
            <div class="content-item">
                <h3>Motto Layanan</h3>
                <p><strong>"Melayani dengan Hati, Berbakti untuk Negeri"</strong></p>
                <p>Kami berkomitmen untuk memberikan pelayanan kesehatan terbaik dengan pendekatan yang humanis dan profesional.</p>
            </div>
        `,
        'struktur-organisasi': `
            <div class="content-item">
                <h3>Struktur Organisasi</h3>
                <p>Struktur organisasi Puskesmas Modern terdiri dari berbagai unit yang saling mendukung untuk memberikan pelayanan kesehatan yang optimal.</p>
                <div class="org-chart">
                    <div class="org-level">
                        <div class="org-position">Kepala Puskesmas</div>
                    </div>
                    <div class="org-level">
                        <div class="org-position">Wakil Kepala</div>
                        <div class="org-position">Koordinator Pelayanan</div>
                    </div>
                </div>
            </div>
        `,
        'maklumat-pelayanan': `
            <div class="content-item">
                <h3>Maklumat Pelayanan</h3>
                <p>Informasi lengkap tentang pelayanan yang kami sediakan untuk masyarakat.</p>
                <div class="service-info">
                    <h4>Jam Pelayanan</h4>
                    <p>Senin - Jumat: 08:00 - 16:00 WIB</p>
                    <p>Sabtu: 08:00 - 12:00 WIB</p>
                    <p>Minggu: Tutup</p>
                </div>
            </div>
        `,
        'kompensasi-layanan': `
            <div class="content-item">
                <h3>Kompensasi Layanan</h3>
                <p>Kami menyediakan kompensasi dan ganti rugi sesuai dengan standar pelayanan kesehatan yang berlaku.</p>
            </div>
        `
    };
    
    const content = defaultContent[sectionId.replace('#', '')] || `
        <div class="content-item">
            <h3>Konten ${sectionId.replace('#', '').replace('-', ' ')}</h3>
            <p>Konten ini akan diisi melalui panel admin. Silakan login ke admin panel untuk mengelola konten ini.</p>
        </div>
    `;
    
    contentElement.innerHTML = content;
}

// Dropdown functionality
function initializeDropdowns() {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    
    dropdownToggles.forEach(toggle => {
        const dropdown = toggle.closest('.nav-dropdown');
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        
        // Desktop hover functionality
        dropdown.addEventListener('mouseenter', function() {
            if (window.innerWidth > 768) {
                dropdownMenu.style.display = 'block';
            }
        });
        
        dropdown.addEventListener('mouseleave', function() {
            if (window.innerWidth > 768) {
                dropdownMenu.style.display = 'none';
            }
        });
        
        // Mobile click functionality
        toggle.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdown.classList.toggle('active');
                
                // Close other dropdowns
                document.querySelectorAll('.nav-dropdown').forEach(otherDropdown => {
                    if (otherDropdown !== dropdown) {
                        otherDropdown.classList.remove('active');
                    }
                });
            }
        });
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            if (!e.target.closest('.nav-dropdown')) {
                document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
                    dropdown.classList.remove('active');
                });
            }
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
}

// Theme Toggle functionality
function initializeThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const mobileThemeIcon = document.getElementById('mobile-theme-icon');
    const body = document.body;
    
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', currentTheme);
    
    // Update icons based on current theme
    updateThemeIcons(currentTheme);
    
    // Desktop theme toggle event listener
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            toggleTheme();
        });
    }
    
    // Mobile theme toggle event listener
    if (mobileThemeToggle) {
        mobileThemeToggle.addEventListener('click', function() {
            toggleTheme();
        });
    }
    
    function toggleTheme() {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Update theme
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Update icons
        updateThemeIcons(newTheme);
        
        // Add transition effect
        body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        setTimeout(() => {
            body.style.transition = '';
        }, 300);
    }
    
    function updateThemeIcons(theme) {
        if (theme === 'dark') {
            if (themeIcon) {
                themeIcon.className = 'fas fa-sun';
            }
            if (mobileThemeIcon) {
                mobileThemeIcon.className = 'fas fa-sun';
            }
            if (themeToggle) {
                themeToggle.title = 'Switch to Light Mode';
            }
            if (mobileThemeToggle) {
                mobileThemeToggle.title = 'Switch to Light Mode';
            }
        } else {
            if (themeIcon) {
                themeIcon.className = 'fas fa-moon';
            }
            if (mobileThemeIcon) {
                mobileThemeIcon.className = 'fas fa-moon';
            }
            if (themeToggle) {
                themeToggle.title = 'Switch to Dark Mode';
            }
            if (mobileThemeToggle) {
                mobileThemeToggle.title = 'Switch to Dark Mode';
            }
        }
    }
}

// Carousel functionality
function initializeCarousel() {
    const carousel = document.getElementById('hero-carousel');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const indicators = document.getElementById('carousel-indicators');
    
    // Skip if no carousel elements exist
    if (!carousel || !prevBtn || !nextBtn || !indicators) {
        console.log('Carousel elements not found, skipping carousel initialization');
        return;
    }
    
    let currentSlide = 0;
    let slides = [];
    let autoSlideInterval;

    // Load carousel images from admin data
    function loadCarouselImages() {
        // Try to get hero images from localStorage
        const heroData = localStorage.getItem('content_hero');
        if (heroData) {
            const data = JSON.parse(heroData);
            if (data.images && Array.isArray(data.images)) {
                slides = data.images;
            }
        }

        // Default images if no admin data
        if (slides.length === 0) {
            slides = [
                {
                    url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
                    title: 'Layanan Kesehatan Terbaik',
                    subtitle: 'Tim medis profesional siap melayani Anda'
                },
                {
                    url: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
                    title: 'Fasilitas Modern',
                    subtitle: 'Peralatan medis terbaru untuk diagnosis akurat'
                },
                {
                    url: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
                    title: 'Pelayanan Ramah',
                    subtitle: 'Staf yang ramah dan profesional'
                }
            ];
        }

        createCarouselSlides();
        createIndicators();
        startAutoSlide();
    }

    function createCarouselSlides() {
        carousel.innerHTML = '';
        slides.forEach((slide, index) => {
            const slideElement = document.createElement('div');
            slideElement.className = 'carousel-item';
            if (index === 0) slideElement.classList.add('active');
            slideElement.style.backgroundImage = `url(${slide.url})`;
            carousel.appendChild(slideElement);
        });
    }

    function createIndicators() {
        indicators.innerHTML = '';
        slides.forEach((_, index) => {
            const indicator = document.createElement('div');
            indicator.className = 'indicator';
            if (index === 0) indicator.classList.add('active');
            indicator.addEventListener('click', () => goToSlide(index));
            indicators.appendChild(indicator);
        });
    }

    function goToSlide(slideIndex) {
        const slideElements = document.querySelectorAll('.carousel-item');
        const indicatorElements = document.querySelectorAll('.indicator');

        // Remove active class from all slides and indicators
        slideElements.forEach(slide => slide.classList.remove('active'));
        indicatorElements.forEach(indicator => indicator.classList.remove('active'));

        // Add active class to current slide and indicator
        slideElements[slideIndex].classList.add('active');
        indicatorElements[slideIndex].classList.add('active');

        currentSlide = slideIndex;
    }

    function nextSlide() {
        const nextIndex = (currentSlide + 1) % slides.length;
        goToSlide(nextIndex);
    }

    function prevSlide() {
        const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
        goToSlide(prevIndex);
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    // Event listeners
    nextBtn.addEventListener('click', () => {
        nextSlide();
        stopAutoSlide();
        startAutoSlide();
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        stopAutoSlide();
        startAutoSlide();
    });

    // Pause auto-slide on hover
    carousel.addEventListener('mouseenter', stopAutoSlide);
    carousel.addEventListener('mouseleave', startAutoSlide);

    // Initialize carousel
    loadCarouselImages();
}

// Scroll effects
function initializeScrollEffects() {
    // Animate stats on scroll
    const statNumbers = document.querySelectorAll('.stat-number');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumber(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    statNumbers.forEach(stat => {
        observer.observe(stat);
    });

    // Header background on scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });
}

function animateNumber(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Contact form
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Simulate form submission
        showNotification('Pesan berhasil dikirim! Kami akan segera menghubungi Anda.', 'success');
        
        // Reset form
        contactForm.reset();
    });
}

// Load content from admin panel
function loadContentFromAdmin() {
    loadHeroContent();
    loadAboutContent();
    loadServicesContent();
    loadGalleryContent();
    loadContactContent();
    loadNavigationContent();
}

// Load content for navigation sections
function loadNavigationContent() {
    const sections = [
        'visi-misi', 'motto-layanan', 'struktur-organisasi', 'maklumat-pelayanan', 'kompensasi-layanan',
        'jangka-waktu-pelayanan', 'mekanisme-pengaduan', 'pengelola-petugas', 'sarana-pengaduan',
        'persyaratan', 'alur-mekanisme', 'biaya-layanan', 'survey-kepuasan', 'produk-layanan',
        'berita', 'infografis', 'tentang', 'kontak'
    ];
    
    sections.forEach(sectionId => {
        const contentElement = document.querySelector(`#${sectionId}-content`);
        if (contentElement && !contentElement.innerHTML.trim()) {
            loadDefaultContent(`#${sectionId}`, contentElement);
        }
    });
}

function loadHeroContent() {
    console.log('Loading hero content...');
    
    // Load hero content from admin
    const heroData = localStorage.getItem('content_hero');
    const titleElement = document.getElementById('hero-title');
    const subtitleElement = document.getElementById('hero-subtitle');
    
    console.log('Hero elements found:', { titleElement, subtitleElement });
    
    if (heroData) {
        try {
            const data = JSON.parse(heroData);
            if (data.title && titleElement) {
                titleElement.textContent = data.title;
                console.log('Hero title updated from admin data');
            }
            if (data.description && subtitleElement) {
                subtitleElement.textContent = data.description;
                console.log('Hero subtitle updated from admin data');
            }
        } catch (e) {
            console.log('Error parsing hero data:', e);
        }
    }
    
    // Ensure hero content is visible even without admin data
    if (titleElement && !titleElement.textContent.trim()) {
        titleElement.textContent = 'Selamat Datang di Puskesmas Modern';
        console.log('Hero title set to default');
    }
    if (subtitleElement && !subtitleElement.textContent.trim()) {
        subtitleElement.textContent = 'Layanan kesehatan terbaik untuk keluarga Anda';
        console.log('Hero subtitle set to default');
    }
    
    console.log('Hero content loaded:', {
        title: titleElement?.textContent,
        subtitle: subtitleElement?.textContent
    });
}

function loadAboutContent() {
    // Load vision and mission from admin
    const visiMisiData = localStorage.getItem('content_visi-misi');
    if (visiMisiData) {
        const data = JSON.parse(visiMisiData);
        const aboutContent = document.getElementById('vision-mission-content');
        if (aboutContent && data.description) {
            aboutContent.innerHTML = formatContent(data.description);
        }
    }
}

function loadServicesContent() {
    // Load services from admin
    const servicesData = [
        { id: 'persyaratan', title: 'Persyaratan Layanan', icon: 'fas fa-clipboard-list' },
        { id: 'alur-mekanisme', title: 'Alur Mekanisme', icon: 'fas fa-route' },
        { id: 'biaya-layanan', title: 'Biaya Layanan', icon: 'fas fa-money-bill-wave' },
        { id: 'survey-kepuasan', title: 'Survey Kepuasan', icon: 'fas fa-star' },
        { id: 'produk-layanan', title: 'Produk Layanan', icon: 'fas fa-box' }
    ];

    const servicesGrid = document.getElementById('services-content');
    servicesGrid.innerHTML = '';

    servicesData.forEach(service => {
        const serviceData = localStorage.getItem(`content_${service.id}`);
        let description = 'Layanan kesehatan berkualitas untuk masyarakat';
        
        if (serviceData) {
            const data = JSON.parse(serviceData);
            if (data.description) {
                description = data.description.substring(0, 150) + '...';
            }
        }

        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        serviceCard.innerHTML = `
            <div class="service-icon">
                <i class="${service.icon}"></i>
            </div>
            <h3 class="service-title">${service.title}</h3>
            <p class="service-description">${description}</p>
            <div class="service-price">Gratis</div>
        `;
        servicesGrid.appendChild(serviceCard);
    });
}

function loadGalleryContent() {
    // Load gallery content from admin
    const galleryData = [
        { id: 'berita', title: 'Berita', icon: 'fas fa-newspaper' },
        { id: 'infografis', title: 'Infografis', icon: 'fas fa-chart-bar' }
    ];

    const galleryGrid = document.getElementById('gallery-content');
    galleryGrid.innerHTML = '';

    galleryData.forEach(item => {
        const itemData = localStorage.getItem(`content_${item.id}`);
        let title = item.title;
        let description = 'Informasi terkini dari Puskesmas Modern';
        
        if (itemData) {
            const data = JSON.parse(itemData);
            if (data.title) title = data.title;
            if (data.description) {
                description = data.description.substring(0, 100) + '...';
            }
        }

        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <div class="gallery-image" style="background: linear-gradient(135deg, #2c5aa0, #4a90e2); display: flex; align-items: center; justify-content: center; color: white; font-size: 3rem;">
                <i class="${item.icon}"></i>
            </div>
            <div class="gallery-content">
                <h3 class="gallery-title">${title}</h3>
                <p class="gallery-description">${description}</p>
                <div class="gallery-date">${new Date().toLocaleDateString('id-ID')}</div>
            </div>
        `;
        galleryGrid.appendChild(galleryItem);
    });
}

function loadContactContent() {
    // Load contact information from admin
    const contactData = localStorage.getItem('content_kontak');
    if (contactData) {
        const data = JSON.parse(contactData);
        if (data.description) {
            // Parse contact information from description
            const lines = data.description.split('\n');
            lines.forEach(line => {
                if (line.includes('Alamat:')) {
                    document.getElementById('contact-address').textContent = line.replace('Alamat:', '').trim();
                } else if (line.includes('Telepon:')) {
                    document.getElementById('contact-phone').textContent = line.replace('Telepon:', '').trim();
                } else if (line.includes('Email:')) {
                    document.getElementById('contact-email').textContent = line.replace('Email:', '').trim();
                } else if (line.includes('Jam:')) {
                    document.getElementById('contact-hours').textContent = line.replace('Jam:', '').trim();
                }
            });
        }
    }
}

function formatContent(content) {
    // Format content with proper HTML structure
    return content
        .replace(/\n/g, '<br>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>');
}

// Back to top button
function initializeBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 2rem;
        right: 2rem;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 1002;
        animation: slideIn 0.3s ease;
        max-width: 300px;
    `;

    const colors = {
        success: '#28a745',
        error: '#dc3545',
        warning: '#ffc107',
        info: '#2c5aa0'
    };
    notification.style.backgroundColor = colors[type] || colors.info;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Loading screen functionality
function initializeLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    
    if (!loadingScreen) return; // Skip if no loading screen element
    
    // Hide loading screen after page loads
    window.addEventListener('load', function() {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }, 1500); // Show loading for 1.5 seconds
    });
}

// Testimonials functionality
function initializeTestimonials() {
    const slider = document.getElementById('testimonials-slider');
    const prevBtn = document.getElementById('testimonial-prev');
    const nextBtn = document.getElementById('testimonial-next');
    
    if (!slider || !prevBtn || !nextBtn) return;
    
    let currentIndex = 0;
    const items = slider.querySelectorAll('.testimonial-item');
    const itemWidth = 350; // Width of each testimonial item
    const gap = 32; // Gap between items
    const visibleItems = Math.floor(slider.offsetWidth / (itemWidth + gap));
    
    function updateSlider() {
        const translateX = -currentIndex * (itemWidth + gap);
        slider.style.transform = `translateX(${translateX}px)`;
        
        // Update button states
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex >= items.length - visibleItems;
    }
    
    prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });
    
    nextBtn.addEventListener('click', function() {
        if (currentIndex < items.length - visibleItems) {
            currentIndex++;
            updateSlider();
        }
    });
    
    // Initialize
    updateSlider();
    
    // Auto-scroll testimonials
    setInterval(() => {
        if (currentIndex < items.length - visibleItems) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlider();
    }, 5000);
}

// FAQ functionality
function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            if (isActive) {
                item.classList.remove('active');
            } else {
                item.classList.add('active');
            }
        });
    });
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Admin Integration System
function initializeAdminIntegration() {
    // Check if we're on a content page
    const contentBody = document.querySelector('.content-body[id$="-content"]');
    
    if (contentBody) {
        loadAdminContent();
    }
}

function loadAdminContent() {
    // Get current page ID from content body
    const contentBody = document.querySelector('.content-body[id$="-content"]');
    if (!contentBody) return;
    
    const pageId = contentBody.id.replace('-content', '');
    
    // Try to load from localStorage (admin data)
    const adminData = localStorage.getItem('adminContent');
    if (adminData) {
        try {
            const data = JSON.parse(adminData);
            if (data[pageId]) {
                contentBody.innerHTML = data[pageId];
                return;
            }
        } catch (e) {
            console.log('Error parsing admin data:', e);
        }
    }
    
    // Fallback to default content
    loadDefaultContent(pageId, contentBody);
}

function loadDefaultContent(pageId, contentElement) {
    const defaultContent = {
        'maklumat-pelayanan': `
            <div class="content-item">
                <h3><i class="fas fa-info-circle"></i> Maklumat Pelayanan</h3>
                <p>Informasi lengkap tentang pelayanan yang disediakan oleh Puskesmas Modern.</p>
                <div class="content-grid">
                    <div class="content-item">
                        <h4><i class="fas fa-clock"></i> Jam Operasional</h4>
                        <p>Senin - Jumat: 07:00 - 16:00<br>Sabtu: 07:00 - 12:00<br>Minggu: Tutup</p>
                    </div>
                    <div class="content-item">
                        <h4><i class="fas fa-phone"></i> Kontak Darurat</h4>
                        <p>Hotline: 0812-3456-7890<br>Email: emergency@puskesmasmodern.com</p>
                    </div>
                </div>
            </div>
        `,
        'persyaratan': `
            <div class="content-item">
                <h3><i class="fas fa-clipboard-list"></i> Persyaratan Pelayanan</h3>
                <p>Berikut adalah persyaratan yang harus dipenuhi untuk mendapatkan pelayanan kesehatan.</p>
                <div class="content-grid">
                    <div class="content-item">
                        <h4><i class="fas fa-id-card"></i> Identitas Diri</h4>
                        <ul>
                            <li>KTP atau identitas resmi lainnya</li>
                            <li>Kartu Keluarga (KK)</li>
                            <li>Surat keterangan domisili</li>
                        </ul>
                    </div>
                </div>
            </div>
        `,
        'kompensasi-layanan': `
            <div class="content-item">
                <h3><i class="fas fa-hand-holding-heart"></i> Kompensasi Layanan</h3>
                <p>Informasi tentang kompensasi dan ganti rugi yang diberikan Puskesmas Modern.</p>
                <div class="content-grid">
                    <div class="content-item">
                        <h4><i class="fas fa-exclamation-triangle"></i> Ganti Rugi</h4>
                        <p>Kompensasi diberikan jika terjadi kelalaian dalam pelayanan kesehatan.</p>
                    </div>
                </div>
            </div>
        `,
        'produk-layanan': `
            <div class="content-item">
                <h3><i class="fas fa-medkit"></i> Produk Layanan</h3>
                <p>Berbagai produk dan layanan kesehatan yang disediakan oleh Puskesmas Modern.</p>
                <div class="content-grid">
                    <div class="content-item">
                        <h4><i class="fas fa-user-md"></i> Konsultasi Medis</h4>
                        <p>Konsultasi dengan dokter umum dan spesialis untuk diagnosis dan pengobatan.</p>
                    </div>
                </div>
            </div>
        `,
        'infografis': `
            <div class="content-item">
                <h3><i class="fas fa-chart-bar"></i> Infografis Kesehatan</h3>
                <p>Koleksi infografis kesehatan yang informatif dan mudah dipahami.</p>
                <div class="content-grid">
                    <div class="content-item">
                        <h4><i class="fas fa-heartbeat"></i> Tips Kesehatan Jantung</h4>
                        <p>Infografis tentang cara menjaga kesehatan jantung dengan pola hidup sehat.</p>
                    </div>
                </div>
            </div>
        `
    };
    
    if (defaultContent[pageId]) {
        contentElement.innerHTML = defaultContent[pageId];
    }
}

// Listen for admin data updates
window.addEventListener('storage', function(e) {
    if (e.key === 'adminContent') {
        loadAdminContent();
    }
});
