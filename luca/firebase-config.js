// ─────────────────────────────────────────────────────────────────
// STEP 1: Go to https://console.firebase.google.com
//         Create a project → Add a web app → copy the config below
//
// STEP 2: Paste your values here, then paste this same config object
//         into luca-app.html AND admin.html where it says
//         "PASTE_YOUR_API_KEY" etc.
//
// STEP 3: In Firebase Console → Authentication → Sign-in method
//         Enable "Email/Password"
//
// STEP 4: In Firebase Console → Firestore Database → Create database
//         Start in production mode, then deploy firestore.rules:
//         Run: firebase deploy --only firestore:rules
//
// STEP 5: To make yourself admin, go to Firestore Console and
//         manually create a document at:
//         Collection: admins   Document ID: <your Firebase user UID>
//         Add any field, e.g.  role: "admin"
// ─────────────────────────────────────────────────────────────────

const firebaseConfig = {
  apiKey: "AIzaSyBXdJi-B71sVv5RIsc1jV5tNp8uPq-IJCk",
  authDomain: "luca-app-995f4.firebaseapp.com",
  projectId: "luca-app-995f4",
  storageBucket: "luca-app-995f4.firebasestorage.app",
  messagingSenderId: "8175326678",
  appId: "1:8175326678:web:82451ecc01f9e3800cc077",
};
