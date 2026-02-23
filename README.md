
# Firebase Contact App

A modern, responsive contact management application built with React and Firebase Firestore. This app allows you to create, read, update, delete, and search contacts in real-time.

![Firebase Contact App](https://img.shields.io/badge/React-19.1.1-blue) ![Firebase](https://img.shields.io/badge/Firebase-12.8.0-orange) ![Vite](https://img.shields.io/badge/Vite-7.1.7-purple)

## ✨ Features

- **Add Contacts**: Create new contacts with name and email
- **Edit Contacts**: Update existing contact information
- **Delete Contacts**: Remove contacts from your list
- **Search Contacts**: Real-time search functionality to filter contacts by name
- **Real-time Updates**: Automatic synchronization with Firebase Firestore
- **Responsive Design**: Clean and modern UI with smooth user experience
- **Form Validation**: Form handling with Formik
- **Empty State**: User-friendly message when no contacts are found

## 🚀 Technologies Used

- **React 19.1.1** - UI library
- **Vite** - Build tool and dev server
- **Firebase Firestore** - Real-time database
- **Formik** - Form management library
- **React Icons** - Icon library
- **CSS3** - Styling

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Firebase Account** - You'll need to set up a Firebase project

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd yt_projects/Project_5
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Firebase**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or use an existing one
   - Enable Firestore Database
   - Copy your Firebase configuration

4. **Configure Firebase**
   - Open `src/assets/Config/firebaseConfig.js`
   - Replace the configuration object with your Firebase project credentials:
   ```javascript
   export const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID",
     measurementId: "YOUR_MEASUREMENT_ID"
   };
   ```

5. **Set up Firestore Database**
   - In Firebase Console, go to Firestore Database
   - Create a collection named `Contact` (case-sensitive)
   - Set up security rules (for development, you can use test mode)

## 🎯 Usage

1. **Start the development server**
   ```bash
   npm run dev
   ```

2. **Open your browser**
   - Navigate to `http://localhost:5173` (or the port shown in terminal)

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
Project_5/
├── src/
│   ├── assets/
│   │   ├── Components/
│   │   │   ├── list.jsx          # Main contact list component
│   │   │   └── list.css          # Component styles
│   │   ├── Config/
│   │   │   └── firebaseConfig.js # Firebase configuration
│   │   └── image/                # Image assets
│   ├── App.jsx                   # Root component
│   ├── App.css                   # App styles
│   ├── main.jsx                  # Entry point
│   └── index.css                 # Global styles
├── public/                       # Static assets
├── package.json                  # Dependencies
├── vite.config.js               # Vite configuration
└── README.md                    # This file
```

## 🔧 Key Features Implementation

### Add Contact
- Click the `+` icon to open the add contact form
- Enter name and email
- Submit to add contact to Firestore

### Edit Contact
- Click the edit icon on any contact
- Form opens with pre-filled contact information
- Update and save changes

### Delete Contact
- Click the delete icon on any contact
- Contact is removed from Firestore immediately

### Search Contacts
- Type in the search box to filter contacts by name
- Search is case-insensitive and works in real-time


## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Created as part of a React learning project.

## 🙏 Acknowledgments

- Firebase for providing an excellent backend service
- React team for the amazing framework
- Vite for the fast build tool

---

**Note**: Make sure to keep your Firebase configuration secure and never commit sensitive credentials to public repositories. Consider using environment variables for production deployments.
