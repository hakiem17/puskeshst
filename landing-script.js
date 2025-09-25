// Landing Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initializeLoadingScreen();
    initializeNavigation();
    initializeCarousel();
    initializeScrollEffects();
    initializeContactForm();
    loadContentFromAdmin();
    initializeBackToTop();
    initializeTestimonials();
    initializeFAQ();
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

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
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

// Carousel functionality
function initializeCarousel() {
    const carousel = document.getElementById('hero-carousel');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const indicators = document.getElementById('carousel-indicators');
    
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
}

function loadHeroContent() {
    // Load hero content from admin
    const heroData = localStorage.getItem('content_hero');
    if (heroData) {
        const data = JSON.parse(heroData);
        if (data.title) {
            document.getElementById('hero-title').textContent = data.title;
        }
        if (data.description) {
            document.getElementById('hero-subtitle').textContent = data.description;
        }
    }
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
    
    if (!loadingScreen) return;
    
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
