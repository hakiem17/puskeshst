# Puskesmas Modern Website

A modern, responsive website for Puskesmas (Community Health Center) with comprehensive admin dashboard for content management.

## 🚀 Features

### Main Website
- **Responsive Design**: Modern UI/UX that works on all devices
- **Multiple Pages**: Home, Gallery, Profile, Pengaduan, Pelayanan Publik
- **Dynamic Content**: Real-time content updates from admin panel
- **Image Management**: Upload and manage images for galleries
- **Local Storage**: Client-side data persistence

### Admin Dashboard
- **Content Management**: Full CRUD operations for all content
- **Hero Section**: Manage homepage slides and content
- **Gallery Management**: Organize Infografis, Video, and Berita
- **About & Contact**: Manage company information
- **Website Settings**: Logo, favicon, and meta settings
- **Pengaduan Content**: Manage complaint resolution content

### Technical Features
- **Express.js Backend**: RESTful API endpoints with middleware
- **MongoDB Integration**: Database connectivity with Mongoose ODM
- **JWT Authentication**: Secure admin login system
- **Password Security**: bcryptjs hashing for secure passwords
- **Input Validation**: express-validator for form validation
- **File Upload**: Image handling with base64 encoding
- **Real-time Updates**: Live content synchronization via localStorage
- **Responsive Design**: Mobile-first CSS approach
- **CORS Support**: Cross-origin resource sharing enabled

## 📁 Project Structure

```
puskes/
├── public/                 # Frontend files
│   ├── index.html         # Main website
│   ├── admin.html         # Admin dashboard
│   ├── login.html         # Login page
│   ├── berita.html        # News page
│   ├── infografis.html    # Infographics page
│   ├── video.html         # Video page
│   ├── visi-misi.html     # Vision & Mission
│   ├── struktur-organisasi.html
│   ├── maklumat-pelayanan.html
│   ├── kompensasi-pelayanan.html
│   ├── jangka-waktu-penyelesaian.html
│   ├── mekanisme-pengaduan.html
│   ├── pengelola-petugas.html
│   └── sarana-pengaduan.html
├── routes/
│   └── admin.js           # API routes
├── server.js              # Main server file
├── package.json           # Dependencies
└── README.md              # This file
```

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose ODM)
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Authentication**: JWT (JSON Web Tokens)
- **Security**: bcryptjs for password hashing
- **Validation**: express-validator
- **Development**: nodemon for auto-restart

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/hakiem17/puskeshst.git
   cd puskeshst
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup** (Optional)
   ```bash
   # Create .env file for MongoDB connection
   echo "MONGODB_URI=mongodb://localhost:27017/puskesmas" > .env
   ```

4. **Start the server**
   ```bash
   npm start
   # or for development
   npm run dev
   ```

5. **Access the application**
   - Main Website: `http://localhost:3001`
   - Admin Dashboard: `http://localhost:3001/admin`
   - Login: `http://localhost:3001/login`

## 📦 Dependencies

### Production Dependencies
- **express**: ^4.18.2 - Web framework for Node.js
- **mongoose**: ^8.0.3 - MongoDB object modeling tool
- **cors**: ^2.8.5 - Cross-origin resource sharing
- **bcryptjs**: ^2.4.3 - Password hashing library
- **jsonwebtoken**: ^9.0.2 - JWT implementation
- **dotenv**: ^16.3.1 - Environment variable loader
- **express-validator**: ^7.0.1 - Input validation middleware

### Development Dependencies
- **nodemon**: ^3.0.2 - Auto-restart development server

## 🔧 Configuration

### Environment Variables
- `PORT`: Server port (default: 3001)
- `MONGODB_URI`: MongoDB connection string (optional)
- `JWT_SECRET`: Secret key for JWT tokens (optional)

### Default Login Credentials
- **Username**: `admin`
- **Password**: `admin123`

## 📱 Pages Overview

### Main Website
- **Home**: Hero section, services, about, contact
- **Gallery**: Infografis, Video, Berita with filtering
- **Profile**: Vision & Mission, Organization Structure, Service Information
- **Pengaduan**: Complaint resolution information
- **Pelayanan Publik**: Public service information

### Admin Dashboard
- **Dashboard**: Overview and statistics
- **Hero Section**: Manage homepage slides
- **Services**: Manage service offerings
- **Gallery**: Manage Infografis, Video, Berita
- **About**: Manage about section content
- **Contact**: Manage contact information
- **Settings**: Website configuration
- **Konten Pengaduan**: Manage complaint content

## 🎨 Design Features

- **Modern UI**: Clean, professional design
- **Responsive**: Mobile-first approach
- **Interactive**: Smooth animations and transitions
- **Accessible**: User-friendly navigation
- **Fast Loading**: Optimized performance

## 🔒 Security

- **Admin Authentication**: Secure login system
- **Input Validation**: Form validation and sanitization
- **File Upload Security**: Image type and size validation
- **XSS Protection**: Content sanitization

## 🚀 Deployment

### Local Development
```bash
npm start
```

### Production Deployment
1. Set up environment variables
2. Configure MongoDB connection (optional)
3. Deploy to your preferred hosting platform
4. Set up SSL certificate for HTTPS

## 📝 API Endpoints

### Admin Routes
- `POST /api/admin/hero` - Save hero section
- `GET /api/admin/hero` - Get hero section
- `POST /api/admin/about` - Save about section
- `GET /api/admin/about` - Get about section
- `POST /api/admin/contact` - Save contact section
- `GET /api/admin/contact` - Get contact section
- `POST /api/admin/website` - Save website settings
- `GET /api/admin/website` - Get website settings

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 👥 Author

**Ahmad Hakim**
- GitHub: [@hakiem17](https://github.com/hakiem17)
- Repository: [puskeshst](https://github.com/hakiem17/puskeshst)

## 📞 Support

For support and questions, please open an issue on GitHub.

---

**Puskesmas Modern** - Modern Healthcare Website Solution