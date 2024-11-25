# Nirbhay Singh College CS Department Website  

### Description  
This is the official website for the **Computer Science Department** of **Nirbhay Singh College**, providing dynamic features for students, teachers, and administrators.  

---

### Repository Structure  

```plaintext  
repo-name/  
├── client/        # React.js frontend application  
├── server/        # Node.js + Express.js backend application  
└── README.md      # Project documentation  
```  

---

### Features  
- **Dynamic Slider:** Manage banner images for announcements and events.  
- **Teacher Management:** Add and manage faculty details with images and qualifications.  
- **Secure Authentication:** Admin login with JWT-based authentication.  
- **Mobile-Friendly Design:** Optimized for all devices.  

---

### Tech Stack  

**Frontend (client):**  
- React.js  

**Backend (server):**  
- Node.js  
- Express.js  
- MongoDB (with Mongoose)  

**Tools:**  
- Cloudinary for image uploads  
- Netlify for frontend hosting  
- Vercel for backend hosting  

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
   - Add environment variables in `.env` file:  
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
   - Deploy the server on **Vercel**:  
     - Push the server code to GitHub.  
     - Connect the GitHub repository to Vercel and follow their deployment steps.  
     - After deployment, note the server URL from Vercel (e.g., `https://your-backend.vercel.app`).  

3. **Setup Frontend (Client):**  
   ```bash  
   cd ../client  
   npm install  
   ```  
   - Update the API base URL in the frontend code to match the deployed backend URL (e.g., `https://your-backend.vercel.app`).  
   - Start the client locally:  
     ```bash  
     npm start  
     ```  
   - Deploy the frontend on **Netlify**:  
     - Push the client code to GitHub.  
     - Connect the GitHub repository to Netlify and follow their deployment steps.  
     - After deployment, note the frontend URL from Netlify (e.g., `https://your-frontend.netlify.app`).  

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
- Add a file upload system for assignments and resources.  

---

### Contributors  
- [Abhay](https://github.com/abhay395)  
- [Ankush Patidar](https://github.com/Ankush-84)  

---
