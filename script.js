// Admin Panel JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Theme Management
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;
    
    // Load saved theme or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    body.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    
    // Theme toggle functionality
    themeToggle.addEventListener('click', function() {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
        
        showNotification(`Switched to ${newTheme} mode`, 'info');
    });
    
    function updateThemeIcon(theme) {
        if (theme === 'dark') {
            themeIcon.className = 'fas fa-moon';
        } else {
            themeIcon.className = 'fas fa-sun';
        }
    }
    
    // Mobile Menu Toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    mobileMenuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('open');
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            if (!sidebar.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                sidebar.classList.remove('open');
            }
        }
    });

    // User Dropdown Menu
    const userMenuToggle = document.getElementById('user-menu-toggle');
    const userMenu = document.getElementById('user-menu');
    const logoutBtn = document.getElementById('logout-btn');

    // Toggle user menu
    userMenuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        userMenu.classList.toggle('show');
    });

    // Close user menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!userMenuToggle.contains(e.target) && !userMenu.contains(e.target)) {
            userMenu.classList.remove('show');
        }
    });

    // User menu item functionality
    const userMenuItems = document.querySelectorAll('.user-menu-item');
    
    userMenuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            userMenu.classList.remove('show');
            
            if (this.classList.contains('logout-btn')) {
                // Logout functionality
                const confirmLogout = confirm('Apakah Anda yakin ingin logout?');
                
                if (confirmLogout) {
                    // Show logout animation
                    showNotification('Logging out...', 'info');
                    
                    // Simulate logout process
                    setTimeout(() => {
                        // Clear any stored data
                        localStorage.removeItem('theme');
                        localStorage.clear();
                        
                        // Show success message
                        showNotification('Berhasil logout!', 'success');
                        
                        // Simulate redirect to login page
                        setTimeout(() => {
                            // In a real application, you would redirect to login page
                            // window.location.href = 'login.html';
                            
                            // For demo purposes, show a message
                            alert('Anda telah logout. Dalam aplikasi nyata, Anda akan diarahkan ke halaman login.');
                            
                            // Reset the page (for demo purposes)
                            location.reload();
                        }, 1000);
                    }, 1500);
                }
            } else if (this.textContent.includes('Profil')) {
                showNotification('Membuka halaman profil...', 'info');
                // In a real application, you would navigate to profile page
            } else if (this.textContent.includes('Pengaturan')) {
                showNotification('Membuka pengaturan akun...', 'info');
                // In a real application, you would navigate to account settings
            }
        });
    });
    
    // Navigation functionality
    const navLinks = document.querySelectorAll('.nav-link');
    const contentSections = document.querySelectorAll('.content-section');
    const pageTitle = document.getElementById('page-title');

    // Navigation titles mapping
    const navTitles = {
        'dashboard': 'Dashboard',
        'hero': 'Hero Section',
        'profil': 'Profil',
        'visi-misi': 'Visi dan Misi',
        'motto-layanan': 'Motto Layanan',
        'struktur-organisasi': 'Struktur Organisasi',
        'maklumat-pelayanan': 'Maklumat Pelayanan',
        'kompensasi-layanan': 'Kompensasi Layanan',
        'pengaduan': 'Pengaduan',
        'jangka-waktu-pelayanan': 'Jangka Waktu Pelayanan',
        'mekanisme-pengaduan': 'Mekanisme Pengaduan',
        'pengelola-petugas': 'Pengelola Petugas',
        'sarana-pengaduan': 'Sarana Pengaduan',
        'layanan': 'Layanan',
        'persyaratan': 'Persyaratan',
        'alur-mekanisme': 'Alur Mekanisme',
        'biaya-layanan': 'Biaya Layanan',
        'survey-kepuasan': 'Survey Kepuasan',
        'produk-layanan': 'Produk Layanan',
        'gallery': 'Gallery',
        'berita': 'Berita',
        'infografis': 'Infografis',
        'tentang': 'Tentang Kami',
        'kontak': 'Kontak',
        'pengaturan-website': 'Pengaturan Website',
        'pengaturan': 'Pengaturan'
    };

    // Submenu toggle functionality
    const submenuToggles = document.querySelectorAll('.submenu-toggle');
    const hasSubmenus = document.querySelectorAll('.has-submenu');
    
    submenuToggles.forEach((toggle, index) => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Close other submenus and reset their arrows
            hasSubmenus.forEach((submenu, submenuIndex) => {
                if (submenuIndex !== index) {
                    submenu.classList.remove('active');
                    // Reset arrow rotation for other submenus
                    const otherToggle = submenu.querySelector('.submenu-toggle');
                    if (otherToggle) {
                        otherToggle.style.transform = 'rotate(0deg)';
                    }
                    // Remove active class from all submenu items in other submenus
                    const otherSubmenuItems = submenu.querySelectorAll('.submenu-link');
                    otherSubmenuItems.forEach(item => {
                        item.parentElement.classList.remove('active');
                    });
                }
            });
            
            // Toggle current submenu
            const isActive = hasSubmenus[index].classList.contains('active');
            hasSubmenus[index].classList.toggle('active');
            
            // Update arrow rotation based on submenu state
            if (hasSubmenus[index].classList.contains('active')) {
                toggle.style.transform = 'rotate(180deg)';
            } else {
                toggle.style.transform = 'rotate(0deg)';
            }
        });
    });

    // Handle navigation clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetSection = this.getAttribute('data-section');
            
            // Handle submenu toggle
            if (this.classList.contains('submenu-link')) {
                // Remove active class from all nav items
                document.querySelectorAll('.nav-item').forEach(item => {
                    item.classList.remove('active');
                });
                
                // Add active class to clicked submenu item
                this.parentElement.classList.add('active');
                
                // Maintain submenu state
                maintainSubmenuState(this);
            } else {
                // Check if this is a main nav item with submenu
                const parentItem = this.parentElement;
                const hasSubmenu = parentItem.classList.contains('has-submenu');
                
                if (hasSubmenu) {
                    // Toggle submenu for main nav items with submenus
                    const submenuToggle = parentItem.querySelector('.submenu-toggle');
                    const submenu = parentItem;
                    
                    // Close other submenus and reset their arrows
                    hasSubmenus.forEach((otherSubmenu, submenuIndex) => {
                        if (otherSubmenu !== submenu) {
                            otherSubmenu.classList.remove('active');
                            const otherToggle = otherSubmenu.querySelector('.submenu-toggle');
                            if (otherToggle) {
                                otherToggle.style.transform = 'rotate(0deg)';
                            }
                            // Remove active class from all submenu items in other submenus
                            const otherSubmenuItems = otherSubmenu.querySelectorAll('.submenu-link');
                            otherSubmenuItems.forEach(item => {
                                item.parentElement.classList.remove('active');
                            });
                        }
                    });
                    
                    // Toggle current submenu
                    submenu.classList.toggle('active');
                    
                    // Update arrow rotation
                    if (submenuToggle) {
                        if (submenu.classList.contains('active')) {
                            submenuToggle.style.transform = 'rotate(180deg)';
                        } else {
                            submenuToggle.style.transform = 'rotate(0deg)';
                        }
                    }
                    
                    // Don't close sidebar for main nav items with submenus
                    return;
                }
                
                // Remove active class from all nav items
                document.querySelectorAll('.nav-item').forEach(item => {
                    item.classList.remove('active');
                });
                
                // Add active class to clicked nav item
                this.parentElement.classList.add('active');
            }
            
            // Hide all content sections
            contentSections.forEach(section => {
                section.classList.remove('active');
            });
            
            // Show target section
            const targetElement = document.getElementById(targetSection);
            if (targetElement) {
                targetElement.classList.add('active');
            }
            
            // Update page title
            if (navTitles[targetSection]) {
                pageTitle.textContent = navTitles[targetSection];
            }
            
            // Close mobile sidebar if open (only on mobile and for submenu links)
            if (window.innerWidth <= 768 && this.classList.contains('submenu-link')) {
                sidebar.classList.remove('open');
            }
        });
    });

    // Initialize arrow states
    function initializeArrowStates() {
        hasSubmenus.forEach((submenu, index) => {
            const toggle = submenu.querySelector('.submenu-toggle');
            if (toggle) {
                if (submenu.classList.contains('active')) {
                    toggle.style.transform = 'rotate(180deg)';
                } else {
                    toggle.style.transform = 'rotate(0deg)';
                }
            }
        });
    }
    
    // Function to maintain submenu state when navigating
    function maintainSubmenuState(clickedLink) {
        if (clickedLink.classList.contains('submenu-link')) {
            const parentSubmenu = clickedLink.closest('.has-submenu');
            if (parentSubmenu) {
                // Keep parent submenu open
                parentSubmenu.classList.add('active');
                const parentToggle = parentSubmenu.querySelector('.submenu-toggle');
                if (parentToggle) {
                    parentToggle.style.transform = 'rotate(180deg)';
                }
            }
        }
    }
    
    // Initialize on page load
    initializeArrowStates();
    
    // Initialize image upload handlers
    initializeImageUploads();

    // Handle window resize for mobile menu
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            sidebar.classList.remove('open');
        }
    });

    // Form handling
    const handleFormSubmissions = () => {
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                showNotification('Data berhasil disimpan!', 'success');
            });
        });
    };

    // Button click handlers
    const handleButtonClicks = () => {
        // Edit buttons
        document.querySelectorAll('.btn-primary').forEach(btn => {
            if (btn.textContent.includes('Edit') || btn.textContent.includes('Tambah')) {
                btn.addEventListener('click', function() {
                    showNotification('Mode edit diaktifkan', 'info');
                });
            }
        });

        // Save buttons
        document.querySelectorAll('.btn-primary').forEach(btn => {
            if (btn.textContent.includes('Simpan')) {
                btn.addEventListener('click', function() {
                    showNotification('Perubahan berhasil disimpan!', 'success');
                });
            }
        });

        // Delete buttons
        document.querySelectorAll('.btn-danger').forEach(btn => {
            btn.addEventListener('click', function() {
                if (confirm('Apakah Anda yakin ingin menghapus item ini?')) {
                    showNotification('Item berhasil dihapus!', 'success');
                    this.closest('.gallery-item, tr').remove();
                }
            });
        });

        // View buttons
        document.querySelectorAll('.btn-sm').forEach(btn => {
            if (btn.textContent.includes('Lihat')) {
                btn.addEventListener('click', function() {
                    showNotification('Membuka detail item...', 'info');
                });
            }
        });

        // Complete buttons
        document.querySelectorAll('.btn-success').forEach(btn => {
            if (btn.textContent.includes('Selesai')) {
                btn.addEventListener('click', function() {
                    const row = this.closest('tr');
                    const statusBadge = row.querySelector('.badge');
                    statusBadge.textContent = 'Selesai';
                    statusBadge.className = 'badge badge-success';
                    showNotification('Status berhasil diupdate!', 'success');
                });
            }
        });
    };

    // Notification system
    const showNotification = (message, type = 'info') => {
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

        // Set background color based on type
        const colors = {
            success: '#28a745',
            error: '#dc3545',
            warning: '#ffc107',
            info: '#495057'
        };
        notification.style.backgroundColor = colors[type] || colors.info;

        document.body.appendChild(notification);

        // Auto remove after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    };

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

    // Initialize all functionality
    handleFormSubmissions();
    handleButtonClicks();

    // File upload handling
    const handleFileUploads = () => {
        const fileInputs = document.querySelectorAll('input[type="file"]');
        fileInputs.forEach(input => {
            input.addEventListener('change', function() {
                if (this.files.length > 0) {
                    showNotification(`File ${this.files[0].name} berhasil dipilih`, 'success');
                }
            });
        });
    };

    handleFileUploads();

    // Search functionality for tables
    const addSearchFunctionality = () => {
        const tables = document.querySelectorAll('.data-table');
        tables.forEach(table => {
            const searchInput = document.createElement('input');
            searchInput.type = 'text';
            searchInput.placeholder = 'Cari...';
            searchInput.className = 'form-control';
            searchInput.style.marginBottom = '1rem';
            searchInput.style.maxWidth = '300px';

            searchInput.addEventListener('input', function() {
                const searchTerm = this.value.toLowerCase();
                const rows = table.querySelectorAll('tbody tr');
                
                rows.forEach(row => {
                    const text = row.textContent.toLowerCase();
                    if (text.includes(searchTerm)) {
                        row.style.display = '';
                    } else {
                        row.style.display = 'none';
                    }
                });
            });

            table.parentNode.insertBefore(searchInput, table);
        });
    };

    addSearchFunctionality();

    // Dashboard statistics animation
    const animateStats = () => {
        const statNumbers = document.querySelectorAll('.stat-number');
        statNumbers.forEach(stat => {
            const finalValue = parseInt(stat.textContent.replace(/,/g, ''));
            let currentValue = 0;
            const increment = finalValue / 50;
            const timer = setInterval(() => {
                currentValue += increment;
                if (currentValue >= finalValue) {
                    stat.textContent = finalValue.toLocaleString();
                    clearInterval(timer);
                } else {
                    stat.textContent = Math.floor(currentValue).toLocaleString();
                }
            }, 30);
        });
    };

    // Animate stats when dashboard is first shown
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                const dashboard = document.getElementById('dashboard');
                if (dashboard.classList.contains('active')) {
                    animateStats();
                }
            }
        });
    });

    observer.observe(document.getElementById('dashboard'), {
        attributes: true,
        attributeFilter: ['class']
    });

    // Initialize dashboard animation if it's the default active section
    if (document.getElementById('dashboard').classList.contains('active')) {
        animateStats();
    }

    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Ctrl + S to save
        if (e.ctrlKey && e.key === 's') {
            e.preventDefault();
            showNotification('Data disimpan!', 'success');
        }
        
        // Escape to close mobile sidebar
        if (e.key === 'Escape') {
            document.querySelector('.sidebar').classList.remove('open');
        }
    });

    // Auto-save functionality for forms
    const autoSave = () => {
        const formInputs = document.querySelectorAll('.form-control');
        formInputs.forEach(input => {
            input.addEventListener('input', function() {
                // Save to localStorage
                const section = this.closest('.content-section').id;
                const key = `${section}_${this.name || this.previousElementSibling.textContent}`;
                localStorage.setItem(key, this.value);
            });
        });

        // Load saved data
        formInputs.forEach(input => {
            const section = input.closest('.content-section').id;
            const key = `${section}_${input.name || input.previousElementSibling.textContent}`;
            const savedValue = localStorage.getItem(key);
            if (savedValue) {
                input.value = savedValue;
            }
        });
    };

    autoSave();

    console.log('Admin Panel initialized successfully!');
});

// Global Notification Function
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

    // Set background color based on type
    const colors = {
        success: '#28a745',
        error: '#dc3545',
        warning: '#ffc107',
        info: '#495057'
    };
    notification.style.backgroundColor = colors[type] || colors.info;

    document.body.appendChild(notification);

    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Image Upload Functions
function initializeImageUploads() {
    const imageInputs = document.querySelectorAll('.image-upload-input');
    
    imageInputs.forEach(input => {
        input.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const preview = document.getElementById(input.id.replace('-image', '-preview'));
                    preview.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
                    preview.classList.add('show');
                };
                reader.readAsDataURL(file);
            }
        });
    });
}

// Save Content Function
function saveContent(sectionId) {
    const title = document.getElementById(`${sectionId}-title`);
    const image = document.getElementById(`${sectionId}-image`);
    const description = document.getElementById(`${sectionId}-description`);
    
    if (!title || !description) {
        showNotification('Form tidak lengkap!', 'error');
        return;
    }
    
    const data = {
        title: title.value,
        description: description.value,
        image: image ? image.files[0] : null,
        timestamp: new Date().toISOString()
    };
    
    // Save to localStorage
    localStorage.setItem(`content_${sectionId}`, JSON.stringify(data));
    
    showNotification(`Data ${sectionId} berhasil disimpan!`, 'success');
}

// Delete Content Function
function deleteContent(sectionId) {
    if (confirm(`Apakah Anda yakin ingin menghapus data ${sectionId}?`)) {
        // Clear form
        const title = document.getElementById(`${sectionId}-title`);
        const description = document.getElementById(`${sectionId}-description`);
        const image = document.getElementById(`${sectionId}-image`);
        const preview = document.getElementById(`${sectionId}-preview`);
        
        if (title) title.value = '';
        if (description) description.value = '';
        if (image) image.value = '';
        if (preview) {
            preview.innerHTML = '';
            preview.classList.remove('show');
        }
        
        // Remove from localStorage
        localStorage.removeItem(`content_${sectionId}`);
        
        showNotification(`Data ${sectionId} berhasil dihapus!`, 'success');
    }
}
