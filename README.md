# MAGIC CUT ✨

**MAGIC CUT** is a MERN-based web app for fast and easy background removal. With just a few clicks, MAGIC CUT lets you upload any image and removes the background instantly, giving you a clean, focused result. Perfect for anyone who needs quick background removal without hassle!

Make image editing simple – try MAGIC CUT!

## Live Demo 🌐

Try out MAGIC CUT live:

- **Frontend**: [https://bg-removal-frontend-henna.vercel.app/](https://bg-removal-frontend-henna.vercel.app/)
- **Backend**: [https://bg-removal-ruby.vercel.app/](https://bg-removal-ruby.vercel.app/)

Experience fast, seamless background removal with just a click!

## Tech Stack 🛠️

MAGIC CUT is powered by the MERN stack and essential libraries to ensure efficient, seamless background removal.

### Frontend
- ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)  
  **React**: Builds responsive, dynamic interfaces.
  
- ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)  
  **React Router**: Streamlines app navigation.
  
- ![Clerk](https://img.shields.io/badge/Clerk-F5A623?style=for-the-badge&logo=clerk&logoColor=white)  
  **Clerk**: Manages authentication and user sessions.

- ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)  
  **Tailwind CSS**: Enables easy, responsive styling.

- ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)  
  **Axios**: Handles HTTP requests to the server.

### Backend
- ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)  
  **Node.js**: Provides a runtime for server-side JavaScript.

- ![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)  
  **Express.js**: Framework for building server-side APIs.

- ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)  
  **MongoDB**: NoSQL database for efficient data storage.

- ![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white)  
  **JWT**: Secures authentication with JSON Web Tokens.

- ![Multer](https://img.shields.io/badge/Multer-FF3E00?style=for-the-badge&logo=multer&logoColor=white)  
  **Multer**: Middleware for handling image uploads.

- ![Razorpay](https://img.shields.io/badge/Razorpay-0A0A0A?style=for-the-badge&logo=razorpay&logoColor=white)  
  **Razorpay**: Integrates secure payment processing.

Together, this tech stack powers MAGIC CUT to be fast, reliable, and user-friendly.

## Features 🌟

- **Instant Background Removal** 🎨: Quickly and accurately remove backgrounds from images, enhancing productivity.
  
- **User-Friendly Interface** 👥: Simple and intuitive design, making it accessible for users of all skill levels.

- **Secure Authentication** 🔒: Robust user authentication via Clerk ensures data privacy and security.

- **Payment Integration** 💳: Seamless payment processing through Razorpay for premium features.

## Screenshots 📸

Check out the visuals of MAGIC CUT in action:

1. **Homepage**
   ![Screenshot 2024-11-11 185235](https://github.com/user-attachments/assets/d90e92ac-3f53-4552-8ace-ed03b053a522)
   *Description: The main page where users can upload their images for background removal.*

2. **Image Upload Screen**
   ![Screenshot 2024-11-11 185418](https://github.com/user-attachments/assets/bda846c5-9d2c-4ee4-860d-c115efa9a614)
   *Description: Users can easily upload images to start the background removal process.*

3. **Buy Credits**
  ![Screenshot 2024-11-11 185446](https://github.com/user-attachments/assets/0ea9f79c-41e9-40f9-90c0-3eee16734843)
   *Description: Users can buy credits to access premium background removal features.*

4. **Payment Page**
   ![Screenshot 2024-11-11 185513](https://github.com/user-attachments/assets/f4d46343-0ced-4b09-8d79-9083b6d51105)
   *Description: The payment page for users to access premium features.*

## Video 🎥

Watch the demo of MAGIC CUT in action:

[![MAGIC CUT Demo](https://img.youtube.com/vi/6CQpN7tK-yI/0.jpg)](https://youtu.be/6CQpN7tK-yI)

*Click the image to watch the full demo on YouTube.*


## Run Locally 💻

Follow these steps to get MAGIC CUT running on your local machine:

2. **Install Frontend Dependencies**
   
   Navigate to the frontend directory and install the necessary dependencies:
   ```bash
   cd client
   npm install
   npm install react react-dom react-router-dom @clerk/clerk-react axios tailwindcss


3. **Install Backend Dependencies**

    Next, navigate to the backend directory and install the dependencies there:
    ```bash
    cd ../server
    npm install
    npm install express mongoose jsonwebtoken multer razorpay cors dotenv svix


4. **Environment Variables**

    Create .env files in the frontend, admin, and backend directories with the following variable names:
    - **CLIENT**
      
      In the client directory, create a .env file with:
      ```bash
      VITE_CLERK_PUBLISHABLE_KEY=''
      VITE_BACKEND_URL=''
      VITE_RAZORPAY_KEY_ID=''

    - **SERVER**
      
      In the backend directory, create a .env file with:
      ```bash
      MONGODB_URI=''
      CLERK_WEBHOOK_SECRET=''
      CLIPDROP_API=''
      RAZORPAY_KEY_ID=''
      RAZORPAY_SECRET_KEY=''
      CURRENCY='INR'
    Populate these variables with your own values.

5. **Start the Backend Server**

      In the backend directory, start the backend server with:
      ```bash
      npm run server.js

6. **Start the Frontend**
   
      In a new terminal window, navigate to the frontend directory and start the frontend application with:
      ```bash
      npm run dev

## 📞 **Contact Me:**

- **LinkedIn**: [Tanushree Kaushik](https://www.linkedin.com/in/tanushree-kaushik-855601221/) 🌐
- **GitHub**: [tanushree1810](https://github.com/tanushree1810) 💻

Feel free to tweak any details!




