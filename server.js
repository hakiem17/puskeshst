const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ limit: '100mb', extended: true }));
app.use(express.static('public'));

// Database connection (optional - server will work without MongoDB)
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/puskesmas', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).catch(err => {
  console.log('MongoDB connection failed, but server will continue without database:', err.message);
});

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Puskesmas API is running',
    timestamp: new Date().toISOString()
  });
});

// Login Route
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Admin Dashboard Route
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});

// Berita Page Route
app.get('/berita', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'berita.html'));
});

// Infografis Page Route
app.get('/infografis', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'infografis.html'));
});

// Video Page Route
app.get('/video', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'video.html'));
});

// Profil pages
app.get('/visi-misi', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'visi-misi.html'));
});

app.get('/motto-layanan', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'motto-layanan.html'));
});

app.get('/struktur-organisasi', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'struktur-organisasi.html'));
});

app.get('/maklumat-pelayanan', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'maklumat-pelayanan.html'));
});

app.get('/kompensasi-pelayanan', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'kompensasi-pelayanan.html'));
});

// Pengaduan pages
app.get('/jangka-waktu-penyelesaian', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'jangka-waktu-penyelesaian.html'));
});

app.get('/mekanisme-pengaduan', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'mekanisme-pengaduan.html'));
});

app.get('/pengelola-petugas', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pengelola-petugas.html'));
});

app.get('/sarana-pengaduan', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'sarana-pengaduan.html'));
});

// Admin Routes
const adminRoutes = require('./routes/admin');
app.use('/api/admin', adminRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
