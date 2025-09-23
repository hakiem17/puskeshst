const express = require('express');
const router = express.Router();

// Admin Dashboard
router.get('/dashboard', (req, res) => {
    res.json({
        success: true,
        message: 'Admin Dashboard',
        data: {
            totalPatients: 1250,
            totalAppointments: 89,
            totalDoctors: 15,
            todayAppointments: 12,
            recentActivities: [
                { id: 1, action: 'New patient registered', time: '10:30 AM', user: 'Dr. Sarah' },
                { id: 2, action: 'Appointment scheduled', time: '09:15 AM', user: 'Dr. John' },
                { id: 3, action: 'Medical record updated', time: '08:45 AM', user: 'Dr. Mike' }
            ]
        }
    });
});

// Get all patients
router.get('/patients', (req, res) => {
    res.json({
        success: true,
        message: 'Patients list retrieved',
        data: [
            { id: 1, name: 'Ahmad Hakim', email: 'ahmad@email.com', phone: '08123456789', lastVisit: '2024-01-15' },
            { id: 2, name: 'Siti Nurhaliza', email: 'siti@email.com', phone: '08123456790', lastVisit: '2024-01-14' },
            { id: 3, name: 'Budi Santoso', email: 'budi@email.com', phone: '08123456791', lastVisit: '2024-01-13' }
        ]
    });
});

// Get all appointments
router.get('/appointments', (req, res) => {
    res.json({
        success: true,
        message: 'Appointments list retrieved',
        data: [
            { id: 1, patient: 'Ahmad Hakim', doctor: 'Dr. Sarah', date: '2024-01-20', time: '09:00', status: 'scheduled' },
            { id: 2, patient: 'Siti Nurhaliza', doctor: 'Dr. John', date: '2024-01-20', time: '10:30', status: 'confirmed' },
            { id: 3, patient: 'Budi Santoso', doctor: 'Dr. Mike', date: '2024-01-21', time: '14:00', status: 'pending' }
        ]
    });
});

// Get all doctors
router.get('/doctors', (req, res) => {
    res.json({
        success: true,
        message: 'Doctors list retrieved',
        data: [
            { id: 1, name: 'Dr. Sarah Wilson', specialization: 'General Medicine', experience: '10 years', status: 'active' },
            { id: 2, name: 'Dr. John Smith', specialization: 'Cardiology', experience: '15 years', status: 'active' },
            { id: 3, name: 'Dr. Mike Johnson', specialization: 'Pediatrics', experience: '8 years', status: 'active' }
        ]
    });
});

// Create new patient
router.post('/patients', (req, res) => {
    const { name, email, phone, address } = req.body;
    res.json({
        success: true,
        message: 'Patient created successfully',
        data: { id: Date.now(), name, email, phone, address, createdAt: new Date() }
    });
});

// Create new appointment
router.post('/appointments', (req, res) => {
    const { patientId, doctorId, date, time, notes } = req.body;
    res.json({
        success: true,
        message: 'Appointment created successfully',
        data: { id: Date.now(), patientId, doctorId, date, time, notes, status: 'scheduled' }
    });
});

// Update appointment status
router.put('/appointments/:id', (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    res.json({
        success: true,
        message: 'Appointment updated successfully',
        data: { id: parseInt(id), status }
    });
});

// Delete patient
router.delete('/patients/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        success: true,
        message: 'Patient deleted successfully',
        data: { id: parseInt(id) }
    });
});

// Get system statistics
router.get('/stats', (req, res) => {
    res.json({
        success: true,
        message: 'System statistics retrieved',
        data: {
            totalPatients: 1250,
            totalAppointments: 89,
            totalDoctors: 15,
            totalRevenue: 12500000,
            monthlyGrowth: 12.5,
            chartData: {
                patients: [120, 135, 142, 138, 145, 150, 155],
                appointments: [45, 52, 48, 55, 60, 58, 62],
                revenue: [1800000, 1950000, 2100000, 2050000, 2200000, 2150000, 2300000]
            }
        }
    });
});

// Hero Section Management
router.post('/hero', (req, res) => {
    const { title, description, slides, timestamp } = req.body;
    
    // In a real application, you would save this to database
    // For now, we'll just return success
    console.log('Hero settings updated:', { title, description, slides, timestamp });
    
    res.json({
        success: true,
        message: 'Hero section updated successfully',
        data: {
            title,
            description,
            slides,
            timestamp
        }
    });
});

// Get hero settings
router.get('/hero', (req, res) => {
    res.json({
        success: true,
        message: 'Hero settings retrieved',
        data: {
            title: 'Pelayanan Kesehatan Modern & Terpercaya',
            description: 'Sistem manajemen kesehatan terintegrasi yang memudahkan akses pelayanan medis dengan teknologi terdepan untuk kesehatan masyarakat yang lebih baik.',
            slides: [
                'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1576091160550-2173dba0ef4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            ]
        }
    });
});

// Gallery Management
router.post('/gallery', (req, res) => {
    const { images, timestamp } = req.body;
    
    // In a real application, you would save this to database
    // For now, we'll just return success
    console.log('Gallery settings updated:', { images: images.length, timestamp });
    
    res.json({
        success: true,
        message: 'Gallery updated successfully',
        data: {
            images,
            timestamp
        }
    });
});

// Get gallery settings
router.get('/gallery', (req, res) => {
    res.json({
        success: true,
        message: 'Gallery settings retrieved',
        data: {
            images: [
                'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            ]
        }
    });
});

// About Section Management
router.post('/about', (req, res) => {
    const { title, description, vision, mission, timestamp } = req.body;
    
    // In a real application, you would save this to database
    // For now, we'll just return success
    console.log('About settings updated:', { title, description, vision, mission, timestamp });
    
    res.json({
        success: true,
        message: 'About section updated successfully',
        data: {
            title,
            description,
            vision,
            mission,
            timestamp
        }
    });
});

// Get about settings
router.get('/about', (req, res) => {
    res.json({
        success: true,
        message: 'About settings retrieved',
        data: {
            title: 'TENTANG KAMI',
            description: 'Puskesmas Modern adalah pusat pelayanan kesehatan terdepan yang menyediakan layanan medis berkualitas tinggi dengan teknologi modern dan tenaga medis profesional.',
            vision: 'Menjadi pusat pelayanan kesehatan terdepan yang memberikan pelayanan medis berkualitas tinggi untuk masyarakat.',
            mission: '1. Menyediakan pelayanan medis berkualitas tinggi\n2. Menggunakan teknologi modern dalam pelayanan\n3. Memberikan pelayanan yang ramah dan profesional\n4. Meningkatkan kesehatan masyarakat'
        }
    });
});

// Contact Section Management
router.post('/contact', (req, res) => {
    const { address, phone, email, hours, timestamp } = req.body;
    
    // In a real application, you would save this to database
    // For now, we'll just return success
    console.log('Contact settings updated:', { address, phone, email, hours, timestamp });
    
    res.json({
        success: true,
        message: 'Contact section updated successfully',
        data: {
            address,
            phone,
            email,
            hours,
            timestamp
        }
    });
});

// Get contact settings
router.get('/contact', (req, res) => {
    res.json({
        success: true,
        message: 'Contact settings retrieved',
        data: {
            address: 'Jl. Kesehatan No. 123, Jakarta Pusat 10110',
            phone: '(021) 1234-5678',
            email: 'info@puskesmasmodern.com',
            hours: 'Senin - Jumat: 08:00 - 17:00'
        }
    });
});

// Website Settings Management
router.post('/website', (req, res) => {
    const { name, logo, favicon, description, timestamp } = req.body;
    
    // In a real application, you would save this to database
    // For now, we'll just return success
    console.log('Website settings updated:', { name, logo, favicon, description, timestamp });
    
    res.json({
        success: true,
        message: 'Website settings updated successfully',
        data: {
            name,
            logo,
            favicon,
            description,
            timestamp
        }
    });
});

// Get website settings
router.get('/website', (req, res) => {
    res.json({
        success: true,
        message: 'Website settings retrieved',
        data: {
            name: 'Puskesmas Modern',
            logo: 'https://via.placeholder.com/150x50/3b82f6/ffffff?text=LOGO',
            favicon: 'https://via.placeholder.com/32x32/3b82f6/ffffff?text=P',
            description: 'Puskesmas Modern - Pelayanan kesehatan terdepan dengan teknologi modern dan tenaga medis profesional.'
        }
    });
});

module.exports = router;
