🎨 FormCraft
FormCraft is an elegant, feature-rich resume builder platform that allows users to create, customize, and export professional resumes with ease. It combines a stylish frontend with a secure backend to deliver a seamless user experience for job seekers, students, and professionals.

🚀 Key Objectives
✔️ Build customizable resume templates with live preview
✔️ Enable user registration and authentication for secure resume storage
✔️ Allow exporting resumes to PDF directly from the browser
✔️ Track resume completion progress with animated visuals
✔️ Offer multiple resume templates using modern UI design

🛠️ Technologies Used
Technology	Purpose
React 19 + Vite	Fast, responsive frontend with component-based UI
Tailwind CSS	Utility-first styling framework
React Router v7	Navigation and routing
Lucide Icons	Icon library used across UI
Node.js + Express	Backend server and API management
MongoDB + Mongoose	NoSQL database with ODM
Axios	API requests from frontend to backend
html2pdf.js / jsPDF	Exporting resume sections to PDF
📁 Project Structure
RESUME-BUILDER/ ├── DJ-resumebuilderfront/ # Frontend (React + Tailwind + Vite) └── DJ-resumebuilderback/ # Backend (Node.js + Express + MongoDB)

🧩 Features
🖌️ Live Resume Editor with multiple sections (Profile, Work, Skills, etc.)
🎨 Template selection and instant preview
📄 Export to PDF with formatting preserved
🔐 JWT-based authentication system
📊 Animated progress bar (StepProgress) showing resume completion
💾 Resume auto-save and resume summary cards
🧪 Getting Started
⚙️ Backend Setup (DJ-resumebuilderback)
cd DJ-resumebuilderback npm start

⚙️ Backend Setup (DJ-resumebuilderfront)
cd DJ-resumebuilderfront npm run dev

Confidential file NOT ON GITHUB
LOCATION FOR .env -> DJ-resumebuilderback/.env IN -> .env

JWT_SECRET= "yours" MONGO_URL= yours STRING of cluster

📦 Frontend Setup (DJ-resumebuilderfront)
📦 Installation & Setup (Frontend) Make sure you're in the DJ-resumebuilderfront directory:

cd DJ-resumebuilderfront Then install all required dependencies: npm install

✅ Run this full installation command: npm install axios html2canvas html2pdf.js jspdf lucide-react moment react react-dom react-feather react-hot-toast react-icons react-router-dom react-toastify tailwindcss @tailwindcss/vite

And for dev dependencies: npm install -D @eslint/js @types/react @types/react-dom @vitejs/plugin-react eslint eslint-plugin-react-hooks eslint-plugin-react-refresh globals vite

📦 Frontend Setup (DJ-resumebuilderback)
📦 Installation & Setup (Backend) Make sure you're in the DJ-resumebuilderback directory:

cd DJ-resumebuilderfront Then install all required dependencies:

npm install bcrypt bcryptjs cors dotenv express jsonwebtoken mongoose multer nodemon
