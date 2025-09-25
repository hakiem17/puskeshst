# 🏥 Puskesmas Modern - Sistem Manajemen Puskesmas

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Font Awesome](https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white)](https://fontawesome.com/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/hakiem17/puskesjshst)

## 📋 Deskripsi

**Puskesmas Modern** adalah sistem manajemen puskesmas yang komprehensif dengan admin panel modern dan landing page responsif. Sistem ini dirancang untuk memudahkan pengelolaan data puskesmas dan memberikan informasi yang akurat kepada masyarakat.

## ✨ Fitur Utama

### 🔧 Admin Panel
- **Dashboard Modern** dengan dark/light mode
- **Manajemen Konten** yang mudah digunakan
- **Upload Gambar** dengan preview
- **Auto-save** ke localStorage
- **Responsive Design** untuk semua device
- **Navigation** dengan submenu yang intuitif

### 🌐 Landing Page
- **Hero Carousel** dengan gambar bergerak
- **Responsive Design** untuk semua device
- **Konten Dinamis** dari admin panel
- **Contact Form** yang fungsional
- **Smooth Scrolling** navigation
- **Modern UI/UX** design

### 📱 Responsive Design
- Mobile-first approach
- Touch-friendly interface
- Optimized untuk semua screen size
- Fast loading performance

## 🚀 Teknologi yang Digunakan

| Teknologi | Deskripsi | Badge |
|-----------|-----------|-------|
| **HTML5** | Struktur semantic dan modern | ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) |
| **CSS3** | Styling modern dengan variables | ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) |
| **JavaScript ES6+** | Interaktivitas dan DOM manipulation | ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) |
| **Font Awesome** | Icon library yang lengkap | ![Font Awesome](https://img.shields.io/badge/Font_Awesome-339AF0?style=flat-square&logo=fontawesome&logoColor=white) |
| **LocalStorage** | Data persistence | ![LocalStorage](https://img.shields.io/badge/LocalStorage-FF6B6B?style=flat-square&logo=localstorage&logoColor=white) |

## 📁 Struktur Project

```
puskesjshst/
├── 📄 index.html                 # Landing page utama
├── 📄 dashboard-admin.html       # Admin panel
├── 🎨 styles.css                # Styling admin panel
├── 🎨 landing-styles.css         # Styling landing page
├── ⚡ script.js                 # JavaScript admin panel
├── ⚡ landing-script.js          # JavaScript landing page
├── 📄 test-functions.html        # Testing functions
├── 📄 README.md                 # Dokumentasi project
└── 📄 .gitignore               # Git ignore file
```

## 🛠️ Instalasi & Penggunaan

### Prerequisites
- Web browser modern (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code, Sublime Text, dll)
- Git (untuk version control)

### Setup Project

1. **Clone Repository**
```bash
git clone https://github.com/hakiem17/puskesjshst.git
cd puskesjshst
```

2. **Buka di Browser**
```bash
# Buka landing page
open index.html

# Buka admin panel
open dashboard-admin.html
```

3. **Atau gunakan Live Server (VS Code)**
```bash
# Install Live Server extension
# Klik kanan pada index.html > "Open with Live Server"
```

## 📖 Cara Penggunaan

### 🔐 Admin Panel
1. Buka `dashboard-admin.html`
2. Login dengan kredensial admin
3. Kelola konten melalui menu sidebar:
   - **Profil**: Visi & Misi, Struktur Organisasi, dll
   - **Pengaduan**: Mekanisme pengaduan, Jangka waktu
   - **Layanan**: Persyaratan, Alur mekanisme, Biaya
   - **Gallery**: Berita, Infografis
4. Upload gambar dan isi deskripsi
5. Klik **Simpan** untuk menyimpan perubahan

### 🌐 Landing Page
1. Buka `index.html`
2. Landing page akan menampilkan konten dari admin panel
3. Navigasi menggunakan menu header
4. Hero carousel akan menampilkan gambar yang diupload admin
5. Semua konten akan terupdate otomatis

## 🎯 Fitur Detail

### Admin Panel Features
- ✅ **Dark/Light Mode** toggle
- ✅ **Responsive Navigation** dengan submenu
- ✅ **Image Upload** dengan preview
- ✅ **Auto-save** ke localStorage
- ✅ **Form Validation**
- ✅ **Notification System**
- ✅ **Mobile-friendly** interface

### Landing Page Features
- ✅ **Hero Carousel** otomatis
- ✅ **Smooth Scrolling**
- ✅ **Animated Statistics**
- ✅ **Contact Form**
- ✅ **Responsive Gallery**
- ✅ **SEO Optimized**

## 🔧 Konfigurasi

### Mengubah Warna Theme
Edit file `styles.css`:
```css
:root {
    --primary-color: #2c5aa0;    /* Warna utama */
    --secondary-color: #4a90e2;   /* Warna sekunder */
    --accent-color: #ff6b6b;      /* Warna aksen */
}
```

### Menambah Menu Baru
Edit `dashboard-admin.html`:
```html
<li class="nav-item">
    <a href="#" class="nav-link" data-section="menu-baru">
        <i class="fas fa-icon"></i>
        <span>Menu Baru</span>
    </a>
</li>
```

## 📱 Screenshots

### Admin Panel
![Admin Panel](https://via.placeholder.com/800x400/2c5aa0/ffffff?text=Admin+Panel+Dashboard)

### Landing Page
![Landing Page](https://via.placeholder.com/800x400/4a90e2/ffffff?text=Landing+Page+Hero)

## 🤝 Kontribusi

Kontribusi sangat diterima! Untuk berkontribusi:

1. Fork repository ini
2. Buat feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📝 Changelog

### v1.0.0 (2024-01-01)
- ✅ Initial release
- ✅ Admin panel dengan CRUD operations
- ✅ Landing page responsif
- ✅ Dark/Light mode
- ✅ Image upload functionality
- ✅ LocalStorage integration

## 🐛 Bug Reports

Jika menemukan bug, silakan buat issue dengan detail:
- Browser yang digunakan
- Langkah reproduksi
- Screenshot jika ada
- Expected vs Actual behavior

## 📄 Lisensi

Distributed under the MIT License. See `LICENSE` for more information.

## 👨‍💻 Author

**Ahmad Hakim**
- GitHub: [@hakiem17](https://github.com/hakiem17)
- Email: hakiem17@example.com

## 🙏 Acknowledgments

- [Font Awesome](https://fontawesome.com/) untuk icon library
- [Unsplash](https://unsplash.com/) untuk sample images
- [GitHub](https://github.com/) untuk hosting repository

---

<div align="center">

### ⭐ Star this repository jika project ini membantu Anda!

[![GitHub stars](https://img.shields.io/github/stars/hakiem17/puskesjshst?style=social)](https://github.com/hakiem17/puskesjshst/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/hakiem17/puskesjshst?style=social)](https://github.com/hakiem17/puskesjshst/network/members)

**Dibuat dengan ❤️ untuk kemajuan teknologi kesehatan Indonesia**

</div>
