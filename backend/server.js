const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config();
const app = express();

// Middleware to handle CORS
app.use(cors());

console.log(process.env.EMAIL_USER,process.env.EMAIL_PASS)
// Middleware to parse JSON bodies
app.use(express.json());

// Set up storage for multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'application/pdf' || 
        file.mimetype === 'application/msword' || 
        file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type, only PDF and Word documents are allowed!'), false);
    }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

app.post('/submit-form', upload.single('file'), (req, res) => {
    console.log(process.env.EMAIL_USER,process.env.EMAIL_PASS)
    const formData = req.body;
    const file = req.file;

    console.log('Form data:', formData);
    console.log('Uploaded file:', file);

    // Create a transporter
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    // Set up email data
    const mailOptions = {
        from: formData.email,
        to: process.env.EMAIL_USER, // Use the email address from the form data
        subject: 'New Contact Form Submission',
        text: `
            Name: ${formData.name}
            Email: ${formData.email}
            Phone: ${formData.phone}
            Company: ${formData.company}
            Message: ${formData.message}
        `,
        attachments: file ? [{
            filename: file.originalname,
            path: file.path
        }] : []
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).json({ message: 'Error sending email', error });
        }
        console.log('Email sent: ' + info.response);
        res.status(200).json({ message: 'Form submitted successfully', formData, file });
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
