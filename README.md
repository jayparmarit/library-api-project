# 📚 PR Library API

A RESTful backend API for managing a digital library system built using **Node.js**, **Express.js**, and **MongoDB**.
This project includes secure authentication, cloud image upload support, validation, and modern backend security practices.

---

## 🚀 Features

- ⚡ Express.js REST API
- 🗄️ MongoDB Database Integration
- 🔐 JWT Authentication
- 🔒 Password Hashing with Bcrypt
- ☁️ Cloudinary Image Upload
- 📦 Multer File Upload Support
- 🛡️ Helmet Security Middleware
- ✅ Joi Validation
- 🌍 Environment Variable Configuration
- 🔄 Nodemon for Development

---

## 🛠️ Tech Stack

### Backend

- Node.js
- Express.js

### Database

- MongoDB
- Mongoose

### Authentication & Security

- JWT (JSON Web Token)
- Bcrypt
- Helmet

### File Upload

- Multer
- Cloudinary
- Multer Storage Cloudinary

---

# 📂 Project Structure

```bash
pr_library_api/
│
├── config/
│   └── db.js
│
├── middleware/
│   └── HttpError.js
│
├── routes/
│
├── controllers/
│
├── models/
│
├── .env
├── app.js
├── package.json
└── README.md
```

---

# ⚙️ Installation

## 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/pr_library_api.git
```

---

## 2️⃣ Move to Project Folder

```bash
cd pr_library_api
```

---

## 3️⃣ Install Dependencies

```bash
npm install
```

---

## 4️⃣ Create `.env` File

Create a `.env` file in the root directory.

```env
PORT=5000
MONGO_URI=mongodb+srv://jayparmarit28_db_user:hMqpsoFDjQxuspiJ@libraryapi.2yv6p7o.mongodb.net/library

JWT_SECRET=jayparmar

CLOUD_NAME=dbqyll3zx
API_KEY=478286383225362
API_SECRET=WHdGMYVfB2rtIwCWV9QobBdDiGQ


```

Environment variables are configured using dotenv.

---

# ▶️ Run Project

## Development Mode

```bash
npm run dev
```

## Production Mode

```bash
npm start
```

Scripts are defined in package.json.

---

# 🌐 API Base URL

```bash
http://localhost:5000
```

---

# 📌 Default Route

## GET `/`

### Response

```json
"Hello from server 🚀start"
```

The root route is defined in the Express application.

---

# 🔒 Security Features

- Helmet middleware for securing HTTP headers
- JWT authentication support
- Password encryption using bcrypt
- Centralized error handling middleware

---

# 📦 Installed Dependencies

## Main Dependencies

```json
{
  "bcrypt": "^6.0.0",
  "cloudinary": "^1.41.3",
  "cors": "^2.8.6",
  "dotenv": "^17.4.2",
  "express": "^5.2.1",
  "helmet": "^8.1.0",
  "joi": "^18.2.1",
  "jsonwebtoken": "^9.0.3",
  "mongoose": "^9.6.2",
  "multer": "^2.1.1",
  "multer-storage-cloudinary": "^4.0.0"
}
```

Dependencies are listed in package.json.

---

# 🧪 Testing API

You can test APIs using:

- Postman
- Thunder Client
- Insomnia

---

# 📸 Add Postman Screenshots

<img width="1920" height="1080" alt="Screenshot 2026-05-15 130720" src="https://github.com/user-attachments/assets/4ea60b3d-ec47-4a92-910e-dff44ebb8d70" />

<img width="1920" height="1080" alt="Screenshot 2026-05-15 131617" src="https://github.com/user-attachments/assets/67e05dc5-4f20-40c7-ac62-fa6fb263e475" />

<img width="1920" height="1080" alt="Screenshot 2026-05-15 132031" src="https://github.com/user-attachments/assets/6272e58a-1428-4937-942f-6436b6ab8036" />

<img width="1920" height="1080" alt="Screenshot 2026-05-15 132332" src="https://github.com/user-attachments/assets/7314a482-3b42-4ad5-b821-3403c86548fc" />

<img width="1920" height="1080" alt="Screenshot 2026-05-15 133105" src="https://github.com/user-attachments/assets/40c2da8c-ba2a-4a08-bc2d-379cd61539ef" />




---

# 🚧 Future Improvements

- Role-Based Access Control
- Book Borrowing System
- Admin Dashboard
- Pagination & Filtering
- Swagger API Documentation
- Unit Testing

---

# 👨‍💻 Author

Developed by jay parmar

---

# 📄 License

This project is licensed under the ISC License.

---

# ⭐ Support

If you like this project:

- Give it a ⭐ on GitHub
- Fork the repository
- Contribute to improve it

---

# 📥 Package Information

The project uses ES Modules configuration with `"type": "module"` in package.json.
