# 📝 BlogHub - Modern Blog Platform

<div align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white" />
</div>

<div align="center">
  <h3>✨ A modern, secure, and user-friendly blog platform built with cutting-edge technologies ✨</h3>
  <p><em>Share your stories, connect with readers, and manage your content effortlessly</em></p>
</div>

---

## 🚀 Live Demo

🌐 **[Try BlogHub Now](http://localhost:3000)** *(Run locally to experience)*

---

## 📋 Table of Contents

- [🎯 Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📦 Prerequisites](#-prerequisites)
- [⚡ Quick Start](#-quick-start)
- [🎮 Usage Guide](#-usage-guide)
- [🔌 API Reference](#-api-reference)
- [🔒 Security](#-security)
- [🤝 Contributing](#-contributing)
- [📞 Support](#-support)

---

## 🎯 Features

<table>
<tr>
<td width="50%">

### 👤 **User Management**
- 🔐 Secure registration & authentication
- 📸 Profile picture upload
- 🔑 JWT-based session management
- 🚪 Easy login/logout system

</td>
<td width="50%">

### 📚 **Content Management**
- ✍️ Create & publish blog posts
- ✏️ Edit existing content
- 🗑️ Delete unwanted posts
- 📊 Personal dashboard

</td>
</tr>
<tr>
<td width="50%">

### 🎨 **User Experience**
- 📱 Fully responsive design
- 🎯 Clean, intuitive interface
- ⚡ Fast loading times
- 🌟 Modern UI/UX

</td>
<td width="50%">

### 🛡️ **Security**
- 🔒 Password encryption
- 🍪 HTTP-only cookies
- 🛡️ Input validation
- 🔐 Protected routes

</td>
</tr>
</table>

---

## 🛠️ Tech Stack

### Backend Powerhouse
```
🚀 Node.js + Express.js    → Lightning-fast server
🗄️ MongoDB + Mongoose      → Flexible database
🔐 JWT + bcryptjs          → Rock-solid security
📁 Multer                  → File upload magic
🍪 Cookie Parser           → Session management
```

### Frontend Excellence
```
🎨 EJS Templates           → Dynamic rendering
💅 Custom CSS              → Beautiful styling
📱 Responsive Design       → Mobile-first approach
```

---

## 📦 Prerequisites

Before diving in, make sure you have these tools ready:

| Tool | Version | Download |
|------|---------|----------|
| 🟢 **Node.js** | v14+ | [Download](https://nodejs.org/) |
| 🍃 **MongoDB** | Latest | [Download](https://www.mongodb.com/try/download/community) |
| 📦 **npm/yarn** | Latest | Comes with Node.js |

---

## ⚡ Quick Start

### 1️⃣ Clone & Navigate
```bash
git clone https://github.com/RajSolanki09/blog-application.git
cd blog-application
```

### 2️⃣ Install Dependencies
```bash
npm install
# or
yarn install
```

### 3️⃣ Setup Environment
Create a `.env` file in your root directory:
```env
# 🗄️ Database Configuration
MONGODB_URI=mongodb://localhost:27017/blogapp

# 🔐 Security Keys
JWT_SECRET=your_super_secret_jwt_key_here

# 🌐 Server Configuration
PORT=3000
NODE_ENV=development
```

### 4️⃣ Create Upload Directory
```bash
mkdir uploads
```

### 5️⃣ Fire Up MongoDB
Make sure MongoDB is running on your system.

### 6️⃣ Launch the Application
```bash
# 🚀 Production mode
npm start

# 🔥 Development mode (with auto-reload)
npm run dev
```

### 7️⃣ Open Your Browser
Navigate to `http://localhost:3000` and start blogging! 🎉

---

## 🎮 Usage Guide

### 🔥 Getting Started in 3 Steps

<details>
<summary><strong>📝 Step 1: Create Your Account</strong></summary>

1. Click the **"Register"** button
2. Fill in your details:
   - 👤 Username
   - 📧 Email address
   - 🔒 Secure password
3. 📸 Upload your profile picture
4. 🎉 Welcome to BlogHub!

</details>

<details>
<summary><strong>🔑 Step 2: Sign In</strong></summary>

1. Click **"Login"**
2. Enter your email and password
3. 🚀 You're redirected to your personal dashboard

</details>

<details>
<summary><strong>✍️ Step 3: Start Writing</strong></summary>

1. 📊 From your dashboard, click **"Create Post"**
2. ✍️ Add an engaging title
3. 📝 Write your amazing content
4. 💾 Save and publish!

</details>

### 🎯 Pro Tips
- 📱 Access your blog from any device
- 🔄 Edit posts anytime from your dashboard
- 🗑️ Delete posts you no longer need
- 👀 View all your posts in one place

---

## 🔌 API Reference

### 🔐 Authentication Endpoints

| Method | Endpoint | Description | 
|--------|----------|-------------|
| `GET` | `/auth/register` | 📝 Registration form |
| `POST` | `/auth/register` | ✅ Create new account |
| `GET` | `/auth/login` | 🔑 Login form |
| `POST` | `/auth/login` | 🚪 User authentication |
| `GET` | `/auth/logout` | 👋 End session |

### 📚 Blog Post Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/posts/dashboard` | 📊 User dashboard |
| `POST` | `/posts/create` | ✍️ Create new post |
| `GET` | `/posts/:id` | 👀 View single post |
| `GET` | `/posts/:id/edit` | ✏️ Edit post form |
| `POST` | `/posts/:id/update` | 💾 Update existing post |
| `POST` | `/posts/:id/delete` | 🗑️ Remove post |

---

## 🔒 Security

We take security seriously! Here's what protects your BlogHub:

| Feature | Description |
|---------|-------------|
| 🔐 **Password Hashing** | bcryptjs encryption |
| 🎫 **JWT Authentication** | Secure token-based auth |
| 🍪 **HTTP-only Cookies** | XSS protection |
| 📁 **File Validation** | Safe upload handling |
| 🛡️ **Input Sanitization** | SQL injection prevention |
| 🚪 **Route Protection** | Authentication middleware |

---

## 📊 Dependencies

<details>
<summary><strong>📦 Core Dependencies</strong></summary>

```json
{
  "express": "^4.18.2",
  "mongoose": "^7.0.0",
  "bcryptjs": "^2.4.3",
  "jsonwebtoken": "^9.0.0",
  "multer": "^1.4.5",
  "cookie-parser": "^1.4.6",
  "ejs": "^3.1.9",
  "dotenv": "^16.0.3"
}
```

</details>

---

## 🤝 Contributing

We love contributions! Here's how you can help make BlogHub even better:

### 🚀 Quick Contribution Guide

1. **🍴 Fork** the repository
2. **🌿 Create** your feature branch
   ```bash
   git checkout -b feature/amazing-new-feature
   ```
3. **💾 Commit** your changes
   ```bash
   git commit -m '✨ Add some amazing feature'
   ```
4. **📤 Push** to the branch
   ```bash
   git push origin feature/amazing-new-feature
   ```
5. **🔀 Open** a Pull Request

### 💡 Ideas for Contributions
- 🎨 UI/UX improvements
- 🔧 New features
- 🐛 Bug fixes
- 📚 Documentation updates
- 🧪 Test coverage

---

## 🆘 Troubleshooting

<details>
<summary><strong>🔥 Common Issues & Solutions</strong></summary>

### 🗄️ MongoDB Connection Error
```bash
# ✅ Solutions:
• Ensure MongoDB is running: mongod
• Check connection string in .env
• Verify MongoDB service status
```

### 🔌 Port Already in Use
```bash
# ✅ Solutions:
• Change PORT in .env file
• Kill existing process: sudo lsof -ti:3000 | xargs kill -9
```

### 📁 File Upload Issues
```bash
# ✅ Solutions:
• Create uploads directory: mkdir uploads
• Check folder permissions: chmod 755 uploads
```

### 🔐 JWT Secret Error
```bash
# ✅ Solutions:
• Set JWT_SECRET in .env
• Use a strong, random key
• Restart the application
```

</details>

---

## 📞 Support

<div align="center">

### 👨‍💻 **Raj Solanki**

📧 **Email:** [solankiraj9642@gmail.com](mailto:solankiraj9642@gmail.com)

🔗 **GitHub:** [@RajSolanki09](https://github.com/RajSolanki09)

🌐 **Project:** [BlogHub Repository](https://github.com/RajSolanki09/blog-application)

---

### 🙏 **Acknowledgments**

Special thanks to the amazing communities and resources:

- 🚀 [Express.js Documentation](https://expressjs.com/)
- 🍃 [MongoDB Documentation](https://docs.mongodb.com/)
- 🟢 [Node.js Community](https://nodejs.org/en/community/)
- 💬 [Stack Overflow Community](https://stackoverflow.com/)

</div>

---

<div align="center">
  <h3>⭐ Star this repo if you found it helpful! ⭐</h3>
  <p><em>Happy Blogging! 📝✨</em></p>
</div>

---

<div align="center">
  <sub>Built with ❤️ by <a href="https://github.com/RajSolanki09">Raj Solanki</a></sub>
</div>
