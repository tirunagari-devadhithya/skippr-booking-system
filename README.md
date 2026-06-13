# 🚀 Skippr Service Booking System

A full-stack service booking management platform built as part of the **Skippr Full Stack Development Internship Assignment**.

The application enables residents to book household services such as Car Cleaning, Washroom Cleaning, and Deep Cleaning. It also provides an Admin Dashboard to manage bookings, monitor service status, and view booking analytics.

---

## 🌐 Live Application

### Frontend (Vercel)
🔗 https://skippr-booking-system.vercel.app/

### Backend API (Render)
🔗 https://skippr-booking-system.onrender.com

---

## 📸 Project Preview

### Resident Portal
- Create a new service booking
- Select service type
- Choose preferred date and time slot
- Receive WhatsApp confirmation message

### Admin Dashboard
- View all service bookings
- View booking statistics
- Update booking status
- Delete completed or unnecessary bookings

---

# ✨ Features

## Resident Features

- 📝 User-friendly booking form
- 📱 Mobile number validation
- 🏠 Apartment/Villa number support
- 🧹 Multiple service selection
  - Car Cleaning
  - Washroom Cleaning
  - Deep Cleaning
- 📅 Future date restriction
- ⏳ Loading state during booking
- ✅ Success and error notifications
- 💬 WhatsApp confirmation message generation

---

## Admin Features

- 📊 Dashboard summary cards:
  - Total Bookings
  - Pending Bookings
  - Assigned Bookings
  - Completed Bookings

- 📋 Booking Management:
  - View Booking ID
  - View customer details
  - Update booking status
  - Delete bookings

---

# 🛠️ Technology Stack

## Frontend
- React.js
- Vite
- Axios
- CSS3

## Backend
- Node.js
- Express.js
- REST API Architecture

## Database
- MongoDB Atlas
- Mongoose ODM

## Development & Deployment
- Visual Studio Code
- Postman
- Git & GitHub
- Vercel (Frontend Hosting)
- Render (Backend Hosting)

---

# 📂 Project Architecture

```
skippr-booking-system
│
├── frontend
│   ├── src
│   │   ├── components
│   │   │   ├── BookingForm.jsx
│   │   │   ├── BookingTable.jsx
│   │   │   └── SummaryCards.jsx
│   │   │
│   │   ├── pages
│   │   │   ├── BookingPage.jsx
│   │   │   └── AdminDashboard.jsx
│   │   │
│   │   ├── services
│   │   │   └── api.js
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│
├── backend
│   ├── config
│   │   └── db.js
│   │
│   ├── models
│   │   └── Booking.js
│   │
│   ├── controllers
│   │   └── bookingController.js
│   │
│   ├── routes
│   │   └── bookingRoutes.js
│   │
│   └── server.js
│
└── README.md
```

---

# 🔗 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/bookings` | Create a new booking |
| GET | `/api/bookings` | Get all bookings |
| GET | `/api/bookings/summary` | Get dashboard statistics |
| PUT | `/api/bookings/:id` | Update booking status |
| DELETE | `/api/bookings/:id` | Delete a booking |

---

# ⚙️ Local Installation & Setup

## Clone Repository

```bash
git clone <your-github-repository-url>
```

---

## Backend Setup

```bash
cd backend

npm install
```

Create a `.env` file:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Start backend server:

```bash
npm start
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

---

# 🗄️ Database Schema

## Booking Model

```
{
 customerName: String,
 mobile: String,
 apartmentNumber: String,
 service: String,
 bookingDate: Date,
 timeSlot: String,
 status: "Pending | Assigned | Completed",
 createdAt: Date,
 updatedAt: Date
}
```

---

# 🧠 Assumptions Made

- All bookings are created with a default status of **Pending**
- Only admins can access booking management features
- Time slots are entered manually by users
- WhatsApp messages are generated as a pre-filled message and redirected to WhatsApp Web
- Authentication is not implemented as it was an optional bonus requirement

---

# 🤖 AI Assistance Declaration

AI tools were used to improve development productivity.

### Tools Used
- ChatGPT

### Usage
- Project planning and architecture
- Debugging backend and frontend issues
- API design guidance
- UI/UX improvement suggestions
- Code optimization and documentation assistance

All final implementation, testing, debugging, customization, and deployment were performed by the developer.

---

# 🚀 Future Improvements

- User and Admin authentication
- Progressive Web App (PWA) support
- Real-time booking notifications
- Payment gateway integration
- Service provider assignment system
- Customer ratings and feedback

---

# 👨‍💻 Developer

**Dev**

Built as part of the Skippr Full Stack Development Internship Assignment.

---

## ⭐ Thank You

Thank you for reviewing this project.
Feedback and suggestions are always welcome.