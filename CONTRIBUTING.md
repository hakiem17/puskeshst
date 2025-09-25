# 🤝 Panduan Kontribusi

Terima kasih telah mempertimbangkan untuk berkontribusi pada **Puskesmas Modern**! 🏥

## 📋 Daftar Isi

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Cara Berkontribusi](#cara-berkontribusi)
- [Pull Request Process](#pull-request-process)
- [Style Guide](#style-guide)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Enhancements](#suggesting-enhancements)

## 📜 Code of Conduct

Dengan berpartisipasi dalam project ini, Anda setuju untuk menghormati kode etik kami. Harap baca [Code of Conduct](CODE_OF_CONDUCT.md) untuk detail lengkap.

## 🚀 Getting Started

### Prerequisites

- Git
- Web browser modern
- Text editor (VS Code recommended)
- Pengetahuan dasar HTML, CSS, JavaScript

### Setup Development Environment

1. **Fork repository**
   ```bash
   # Klik tombol "Fork" di GitHub
   ```

2. **Clone repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/puskesjshst.git
   cd puskesjshst
   ```

3. **Setup upstream**
   ```bash
   git remote add upstream https://github.com/hakiem17/puskesjshst.git
   ```

4. **Buat branch development**
   ```bash
   git checkout -b development
   ```

## 🔧 Cara Berkontribusi

### 1. Melaporkan Bug

Jika Anda menemukan bug, silakan buat issue dengan template berikut:

```markdown
**Deskripsi Bug**
Deskripsi singkat tentang bug yang ditemukan.

**Langkah Reproduksi**
1. Buka halaman '...'
2. Klik pada '...'
3. Scroll ke '...'
4. Lihat error

**Expected Behavior**
Apa yang seharusnya terjadi.

**Actual Behavior**
Apa yang benar-benar terjadi.

**Screenshots**
Jika ada, tambahkan screenshot.

**Environment:**
- OS: [e.g. Windows 10]
- Browser: [e.g. Chrome 91]
- Version: [e.g. 1.0.0]
```

### 2. Menyarankan Fitur Baru

Gunakan template berikut untuk fitur baru:

```markdown
**Apakah fitur ini terkait dengan masalah?**
Deskripsi masalah yang ingin diselesaikan.

**Deskripsi Solusi**
Deskripsi jelas tentang solusi yang diinginkan.

**Alternatif yang Dipertimbangkan**
Deskripsi alternatif solusi yang telah dipertimbangkan.

**Additional Context**
Konteks tambahan tentang permintaan fitur.
```

### 3. Pull Request Process

1. **Update README.md** jika diperlukan
2. **Update dokumentasi** untuk perubahan kode
3. **Test perubahan** di berbagai browser
4. **Commit message** yang jelas dan deskriptif
5. **Squash commits** jika diperlukan
6. **Update version** jika ada breaking changes

## 📝 Style Guide

### HTML
```html
<!-- Gunakan semantic HTML -->
<header>
    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
        </ul>
    </nav>
</header>

<!-- Gunakan proper indentation -->
<div class="container">
    <h1>Title</h1>
    <p>Content</p>
</div>
```

### CSS
```css
/* Gunakan BEM methodology */
.navbar {
    background: var(--primary-color);
}

.navbar__item {
    padding: 1rem;
}

.navbar__item--active {
    background: var(--accent-color);
}

/* Gunakan CSS variables */
:root {
    --primary-color: #2c5aa0;
    --secondary-color: #4a90e2;
}
```

### JavaScript
```javascript
// Gunakan ES6+ features
const initializeApp = () => {
    const elements = document.querySelectorAll('.nav-link');
    
    elements.forEach(element => {
        element.addEventListener('click', handleNavigation);
    });
};

// Gunakan arrow functions
const handleNavigation = (event) => {
    event.preventDefault();
    // Handle navigation
};

// Gunakan const/let instead of var
const API_URL = 'https://api.example.com';
let currentPage = 1;
```

### Commit Messages

Gunakan format berikut:

```
type(scope): description

feat: add new navigation menu
fix: resolve mobile menu toggle issue
docs: update README with new features
style: format code according to style guide
refactor: improve carousel functionality
test: add unit tests for admin panel
chore: update dependencies
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks

## 🧪 Testing

### Manual Testing
1. Test di berbagai browser (Chrome, Firefox, Safari, Edge)
2. Test responsive design di berbagai device
3. Test functionality admin panel
4. Test landing page performance

### Browser Support
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## 📚 Documentation

### Code Documentation
```javascript
/**
 * Initialize carousel functionality
 * @param {string} containerId - ID of carousel container
 * @param {Object} options - Configuration options
 * @returns {void}
 */
function initializeCarousel(containerId, options = {}) {
    // Implementation
}
```

### README Updates
- Update fitur baru di README
- Update screenshots jika ada perubahan UI
- Update installation instructions
- Update changelog

## 🐛 Reporting Bugs

### Before Reporting
1. Cek apakah bug sudah dilaporkan
2. Test di browser terbaru
3. Clear cache dan cookies
4. Test di incognito mode

### Bug Report Template
```markdown
**Bug Title**
Brief description of the bug

**Steps to Reproduce**
1. Step one
2. Step two
3. Step three

**Expected Result**
What should happen

**Actual Result**
What actually happens

**Environment**
- OS: [e.g. Windows 10]
- Browser: [e.g. Chrome 91.0.4472.124]
- Version: [e.g. 1.0.0]

**Additional Information**
Any other relevant information
```

## 💡 Suggesting Enhancements

### Enhancement Request Template
```markdown
**Enhancement Title**
Brief description of the enhancement

**Is your feature request related to a problem?**
A clear description of what the problem is.

**Describe the solution you'd like**
A clear description of what you want to happen.

**Describe alternatives you've considered**
A clear description of any alternative solutions.

**Additional context**
Add any other context or screenshots about the feature request.
```

## 📞 Getting Help

- **GitHub Issues**: Untuk bug reports dan feature requests
- **Discussions**: Untuk pertanyaan umum dan diskusi
- **Email**: hakiem17@example.com

## 🎉 Recognition

Kontributor akan diakui di:
- README.md contributors section
- Release notes
- Project documentation

## 📄 License

Dengan berkontribusi, Anda setuju bahwa kontribusi Anda akan dilisensikan di bawah [MIT License](LICENSE).

---

**Terima kasih telah berkontribusi pada Puskesmas Modern! 🏥✨**
