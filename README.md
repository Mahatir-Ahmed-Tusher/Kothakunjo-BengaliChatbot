# Kothakunjo - কথাকুঞ্জ

Kothakunjo (কথাকুঞ্জ) is a Bengali AI chatbot designed as a client-side web application using Google's Generative AI (Gemini) API. This project aims to provide an interactive and domain-specific chat experience while preserving the richness of the Bengali language and culture.

![image](https://github.com/user-attachments/assets/e94ff4a6-f01a-4d60-a9f4-80a3a665c789)

## Live Links
This chatbot has been deployed to both vercel and netlify.
Netlify live link- [https://kothakunjo-bengali.netlify.app/](https://kothakunjo-bengali.netlify.app/) 
Vercel live link- [https://kothakunjo.vercel.app/](https://kothakunjo.vercel.app/)

# Table of Contents

1. [Kothakunjo - কথাকুঞ্জ](#kothakunjo---কথাকুঞ্জ)
   - [Live Links](#live-links)
2. [Technology Stack](#technology-stack)
   - [Frontend](#frontend)
   - [Backend](#backend)
   - [Database](#database)
3. [Project Structure](#project-structure)
4. [Key Features](#key-features)
   - [Multi-Domain Chat Interface](#multi-domain-chat-interface)
   - [Creative Writing Support](#creative-writing-support)
   - [Mental Health Support](#mental-health-support)
   - [Language and Cultural Features](#language-and-cultural-features)
   - [Features Connected to Day-to-Day Life](#features-connected-to-day-to-day-life)
   - [Hamburger Menu and More](#hamburger-menu-and-more)
   - [UI/UX Features](#uiux-features)
5. [How to Use?](#how-to-use)
   - [How to Get Started?](#how-to-get-started)
   - [Best Usage Tips](#best-usage-tips)
   - [Special Features](#special-features)
   - [Important Notes](#important-notes)
6. [Dependencies](#dependencies)
7. [Running Locally](#running-locally)
8. [GitHub Preparation](#github-preparation)
   - [Files to Include in `.gitignore`](#files-to-include-in-gitignore)
   - [Important Files for GitHub](#important-files-for-github)
   - [Repository Setup](#repository-setup)
9. [Architecture](#architecture)
10. [License](#license)
11. [Contact](#contact)
12. [Acknowledgements](#acknowledgements)

---

## 🚀 Technology Stack

### **Frontend:**
- React (v18.3.1) with TypeScript
- Vite as the build tool
- Tailwind CSS for styling
- React Router DOM for routing
- Lucide React for icons

### **Backend:**
- No traditional backend server
- Uses Google's Generative AI (Gemini) API directly from the frontend

### **Database:**
- No database is used (client-side only application)
- Stateless interactions handled via the Gemini API

Most of the icons have been taken from [Flaticon](https://www.flaticon.com/) and they were hosted on [Postimage](https://postimages.org/)

---

## 📂 Project Structure

```
project/
├── public/
│   └── _redirects              # Netlify redirects configuration
├── src/
│   ├── constants/
│   │   └── domains.ts          # Domain configurations and creative formats
│   ├── hooks/
│   │   └── useConversation.ts  # Custom hook for chat functionality
│   ├── pages/
│   │   ├── AboutPage.tsx
│   │   ├── BanglaOriginPage.tsx
│   │   ├── ChatPage.tsx
│   │   ├── DomainChatPage.tsx
│   │   ├── DomainsPage.tsx
│   │   ├── FoodAnalysisPage.tsx
│   │   ├── InstructionsPage.tsx
│   │   ├── LandingPage.tsx
│   │   ├── LanguageMovementPage.tsx
│   │   ├── MentalHealthPage.tsx
│   │   └── MiscellaneousPage.tsx
│   ├── types.ts                # TypeScript type definitions
│   ├── App.tsx                 # Main application component
│   ├── main.tsx                # Application entry point
│   ├── index.css               # Global styles
│   └── vite-env.d.ts           # Vite environment types
├── .env.local                 # Environment variables (use your own api key)
├── eslint.config.js           # ESLint configuration
├── package.json               # Project dependencies and scripts
├── postcss.config.js          # PostCSS configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
└── vite.config.ts             # Vite configuration
```

---

## 🎯 Key Features

### 🔹 **Multi-Domain Chat Interface**
- Supports various domains like literature, science, technology, etc.
- Domain-specific conversation handling
- Custom chat UI with typing indicators

  ![image](https://github.com/user-attachments/assets/4278e101-60d5-44a0-bea0-57a50cbddbb2)


### 📝 **Creative Writing Support**
- Multiple formats (stories, poems, screenplays)
- Genre selection
- Length options for stories

### 💚 **Mental Health Support**
- Dedicated mental health chat interface
- Emergency contact information
- Integration with Serene Mind platform

### 🇧🇩 **Language and Cultural Features**
- Full Bangla language support
- Cultural and historical information pages
- Language movement history

### **Features connected to Day to Day Life**
- Users will be able to discuss on sports, cinema, books, literature, science, mathematics, linguistic, food, philosophy. A proper place for the nerds
- Users will be able to find the possible recipe of a food uploading its photo on the খাবার দাবার section

![image](https://github.com/user-attachments/assets/617f5471-ed6b-49fb-91a9-25bf5252fb67)


### **Hamburgur Menu and More**
- In the hamburger menu, users will be able to know the motivation behind this chatbot
- History of the origin of bengali.
- History of the bengali language movement of 1952.
- About kothakunjo and the developer(s).
  
### 🎨 **UI/UX Features**
- Dark/Light mode toggle
- Responsive design
- Beautiful gradients and animations
- Message copying and downloading
- Loading states and error handling

## How to Use?

### **How to Get Started?**
1. First, select your preferred topic from the **"Choose a Topic"** page.
2. Start a conversation with **Kothakunjo** on your chosen topic.
3. Type your questions or queries in **Bengali**.
4. Press the **Enter** key or click the **Send** button to submit your message.

![image](https://github.com/user-attachments/assets/1932d2ce-1cf3-4aa5-ac86-260b374ffb88)


### **Best Usage Tips**
- Ask **specific and clear** questions.
- Focus on **one topic per question** for better responses.
- If an answer is unclear, feel free to **ask again**.
- Use different **domains** for various types of questions.
- When inquiring about **scientists, philosophers, poets, or other notable figures**, mention their **full name** to get accurate responses.

### **Special Features**
- **Dark Mode:** Click the **moon icon** at the top right corner to toggle dark mode.
- **Topic Switching:** Click the **"Go Back"** button anytime to select a new topic.

### **Important Notes**
- **Kothakunjo will always respond in Bengali**, even if you ask questions in English.
- Knowledge and expertise vary **across different topics**.
- For a **better conversation**, be patient and ask **clearly**.
- Avoid **irrelevant or inappropriate** questions.


---

## 📦 Dependencies

```json
{
  "dependencies": {
    "@google/generative-ai": "^0.2.1",
    "lucide-react": "^0.344.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.22.3"
  },
  "devDependencies": {
    "@eslint/js": "^9.9.1",
    "@types/react": "^18.3.5",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.18",
    "eslint": "^9.9.1",
    "eslint-plugin-react-hooks": "^5.1.0-rc.0",
    "eslint-plugin-react-refresh": "^0.4.11",
    "globals": "^15.9.0",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.5.3",
    "typescript-eslint": "^8.3.0",
    "vite": "^5.4.2"
  }
}
```

---

## 🛠️ Running Locally

### 1️⃣ Clone the repository
```sh
git clone https://github.com/Mahatir-Ahmed-Tusher/Kothakunjo-BengaliChatbot.git
cd kothakunjo
```

### 2️⃣ Create a `.env.local` file
```sh
echo "VITE_GEMINI_API_KEY=your_gemini_api_key" > .env.local
```

### 3️⃣ Install dependencies
```sh
npm install
```

### 4️⃣ Start the development server
```sh
npm run dev
```

### 5️⃣ Build for production
```sh
npm run build
```

---

## 📌 GitHub Preparation

### 📝 Files to include in `.gitignore`
```
node_modules/
dist/
.env.local
.DS_Store
```

### 📂 Important Files for GitHub
- `README.md` (this file, with setup instructions)
- `LICENSE`
- `.gitignore`
- All source code files

### 🔗 Repository Setup
```sh
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/Mahatir-Ahmed-Tusher/Kothakunjo-BengaliChatbot.git
git push origin master
```

---

## ⚙️ Architecture

- **Component-based architecture** for maintainability
- **Centralized routing** in `App.tsx`
- **Custom hooks** for business logic
- **Type-safe development** using TypeScript
- **Context-based state management**
- **Responsive design patterns**
- **Error boundary implementation** for resilience
- **Performance optimizations** through code splitting

The chat functionality is powered by the **Gemini API**, with conversation state managed through the `useConversation` hook. The project is optimized for easy deployment on platforms like **Netlify** with minimal configuration.

---

## 📜 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📫 Contact
For questions, feature requests, or collaboration opportunities, feel free to reach out!

- **GitHub**: [Mahatir-Ahmed-Tusher](https://github.com/Mahatir-Ahmed-Tusher)
- **LinkedIn**: [Mahatir Ahmed Tusher](https://in.linkedin.com/in/mahatir-ahmed-tusher-5a5524257)

---

## ⭐ Acknowledgements
Special thanks to Google for the **Gemini API**, and to the open-source community for their amazing tools! I would like to extend special thanks to my friend Tofsir Uddin Khan. This chatbot was built using the API key he provided. Although the API key might need to be changed in the future, since the initial start was made possible by his contribution, he certainly deserves a big thank you. Lastly, I am grateful to Sharaf Wasima. From the prototype of this chatbot to almost every stage of its development, she has been shown the progress, and her feedback has been sought. It is probably her belief in this project, along with her feedback and encouragement, that gave me the strength to complete this work fully

---

### **If you like this project, don't forget to ⭐ star the repository!** 🚀 
Enjoy using কথাকুঞ্জ (Kothakunjo)! Let’s make AI accessible to everyone in বাংলা. 🌟
