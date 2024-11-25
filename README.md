# Nirbhay Singh College CS Department Website  

### Description  
This is the official website for the **Computer Science Department** of **Nirbhay Singh College**, providing essential features for students, teachers, and administrators.  

---

### Repository Structure  

```plaintext  
repo-name/  
├── client/        # Frontend: HTML, CSS, and JavaScript  
├── server/        # Backend: Node.js + Express.js  
└── README.md      # Project documentation  
```  

---

### Features  
- **Dynamic Slider:** Add and manage banner images for announcements and events.  
- **Teacher Management:** Add and manage faculty details, including images and qualifications.  
- **Secure Authentication:** Admin login powered by JWT-based authentication for enhanced security.  
- **Mobile-Friendly Design:** Responsive layout using HTML and CSS.  

---

### Tech Stack  

**Frontend (client):**  
- HTML  
- CSS  
- JavaScript  

**Backend (server):**  
- Node.js  
- Express.js  
- MongoDB (with Mongoose)  

**Tools:**  
- **Cloudinary:** For image uploads.  
- **Netlify:** Deployed frontend application.  
- **Vercel:** Deployed backend application.  

---

### Setup  

1. **Clone the Repository:**  
   ```bash  
   git clone https://github.com/<your-username>/<repo-name>.git  
   cd repo-name  
   ```  

2. **Setup Backend (Server):**  
   ```bash  
   cd server  
   npm install  
   ```  
   - Add environment variables to a `.env` file in the **server** folder:  
     ```env  
     MONGO_URI=<your-mongodb-uri>  
     JWT_SECRET=<your-jwt-secret>  
     CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>  
     CLOUDINARY_API_KEY=<your-cloudinary-api-key>  
     CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>  
     ```  
   - Start the server locally:  
     ```bash  
     npm start  
     ```  
   - **Deploy the Backend on Vercel:**  
     - Push the **server** code to GitHub.  
     - Connect the repository to **Vercel** and follow their deployment process.  
     - Note down the deployed backend URL (e.g., `https://your-backend.vercel.app`).  

3. **Setup Frontend (Client):**  
   - Edit the JavaScript file in the **client** folder to use your backend API URL (e.g., `https://your-backend.vercel.app`).  
   - **Deploy the Frontend on Netlify:**  
     - Upload the entire **client** folder to **Netlify**.  
     - Note down the deployed frontend URL (e.g., `https://your-frontend.netlify.app`).  

---

### Deployment  

| Part     | Platform   | URL                                 |  
|----------|------------|-------------------------------------|  
| Frontend | Netlify    | [Frontend URL](https://gnspsc.netlify.app/) |  
| Backend  | Vercel     | [Backend URL](https://nirbhay-singh-cs-department-git-main-abhay395s-projects.vercel.app/) |  

---

### Future Enhancements  
- Add student login and profile management.  
- Implement notifications for events and updates.  
- Add a resource upload system for assignments and study materials.  

---

### Contributors  
- [Abhay](https://github.com/abhay395)  
- [Ankush Patidar](https://github.com/Ankush-84)  
