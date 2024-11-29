# 🎓 **CampusBnB** 🏠  
A peer-to-peer rental marketplace designed specifically for college students! Simplify renting or listing rooms, discovering local perks, and connecting with others on campus.

---

## 🚀 **Project Overview**  

**CampusBnB** is a full-stack web application built with Django REST Framework (backend) and React (frontend), styled using Tailwind CSS. It streamlines the rental experience for college students, helping them find nearby rooms, book campus perks, and curate wishlists.  

---
### 📸 **Screenshots**

Take a glimpse of the key features and interface:
![Screenshot_20241129_161507](https://github.com/user-attachments/assets/94b6e606-7437-4e09-8b7a-32210af9cc3c)
![Screenshot_20241129_161533](https://github.com/user-attachments/assets/87e49bf5-732d-495e-8962-33cac926dab2)
![Screenshot_20241129_161555](https://github.com/user-attachments/assets/a5127269-d026-4383-b845-7536a8c2abbd)
![Screenshot_20241129_161736](https://github.com/user-attachments/assets/81803d5a-df52-48ca-ba53-df5944720e9c)

---

## 📋 **Features**

### 🔐 **Authentication**
- **JWT-based login and signup**  
  Securely authenticate users using JSON Web Tokens (JWT).
- Token refresh for session management.  

### 🏠 **Room Listings**
- **Near Campus Search:** Discover rooms close to your campus with location-based filtering.  
- **Detailed View:** Check room details, amenities, and availability.  
- **Photos:** Upload, view, or delete room photos.  
- **Reviews:** Leave and read reviews for rooms.  
- **Bookings:** Book rooms or check availability.  

### 🎉 **Perks and Experiences**
- Explore local campus perks and experiences, such as events, discounts, and activities.  

### 📍 **Nearby Recommendations**
- **Local Suggestions:** Get recommendations for rooms, experiences, and amenities near your campus.  

### 📷 **Photo Handling**
- Upload and manage photos related to rooms and perks.  

### ❤️ **Wishlists**
- Curate your favorite rooms and perks.  
- Toggle rooms in and out of wishlists.  

---

## 🛠️ **Tech Stack**

### **Frontend:**  
- **React**: Component-based UI development.  
- **Tailwind CSS**: Utility-first styling for modern, responsive design.  
- **Axios**: Handle API requests.  

### **Backend:**  
- **Django**: High-level Python framework for robust backend development.  
- **Django REST Framework (DRF)**: Create RESTful APIs.  
- **JWT Authentication**: Secure authentication and token management.  

### **Database:**  
- **SQLite** (or PostgreSQL for development).  

### **Media Management:**  
- AWS S3 / Local Storage.  

---

## 🛠️ **API Endpoints**

### **Authentication**
| Method | Endpoint            | Description                     |
|--------|----------------------|---------------------------------|
| POST   | `/signup/`           | Register a new user             |
| POST   | `/login/`            | Authenticate and login          |
| POST   | `/token/`            | Obtain JWT tokens               |
| POST   | `/token/refresh/`    | Refresh JWT token               |

### **Photo Management**
| Method | Endpoint                  | Description                     |
|--------|---------------------------|---------------------------------|
| GET    | `/photos/`                | List all photos                 |
| GET    | `/photos/get-photo/`      | Serve a specific photo          |
| POST   | `/photos/upload/`         | Get upload URL for new photos   |
| DELETE | `/photos/delete/<pk>/`    | Delete a photo by ID            |

### **Room Management**
| Method | Endpoint                         | Description                      |
|--------|----------------------------------|----------------------------------|
| GET    | `/rooms/`                        | List all available rooms         |
| GET    | `/rooms/<pk>/`                   | Retrieve details of a room       |
| GET    | `/rooms/near-campus/`            | Discover rooms near campus       |
| GET    | `/rooms/<pk>/reviews/`           | Get reviews for a specific room  |
| POST   | `/rooms/<pk>/bookings/`          | Create a booking for a room      |
| GET    | `/rooms/<pk>/bookings/check/`    | Check booking availability       |

### **Perks**
| Method | Endpoint                  | Description                     |
|--------|---------------------------|---------------------------------|
| GET    | `/perks/`                 | List all perks                  |
| GET    | `/perks/<pk>/`            | Retrieve details of a perk      |

### **Wishlists**
| Method | Endpoint                              | Description                     |
|--------|---------------------------------------|---------------------------------|
| GET    | `/wishlists/`                         | List all wishlists              |
| GET    | `/wishlists/<pk>/`                    | Retrieve a specific wishlist    |
| POST   | `/wishlists/<pk>/rooms/<room_pk>/`    | Toggle a room in/out of wishlist|

---

## 📦 **Setup and Installation**

### **Backend Setup:**  
1. **Clone the repository:**  
   ```bash
   git clone https://github.com/yourusername/CampusBnB.git
   cd campusbnb/backend
   ```
2. **Create and activate a virtual environment:**  
   ```bash
    python -m venv venv  
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```
3. **Install dependencies:**  
   ```bash
   pip install -r requirements.txt  
   ```
4. **Apply migrations:**  
   ```bash
   python manage.py migrate  
   ```
5. **Start the server:**  
   ```bash
   git clone https://github.com/yourusername/CampusBnB.git
   cd campusbnb/backend
   ```
6. **Clone the repository:**  
   ```bash
   python manage.py runserver 
   ```
### **Frontend Setup:**  
1. **Navigate to the frontend directory:**  
   ```bash
   cd ../frontend  
   ```
2. **Install dependencies:**  
   ```bash
    npm install  
   ```
3. **Start the React development server:**  
   ```bash
   npm run dev  
   ```
---

## **👥 Contributing**  

At **CampusBnB** We welcome contributions! Please fork this repository and submit a pull request with detailed changes. Ensure all new features are covered by tests.






