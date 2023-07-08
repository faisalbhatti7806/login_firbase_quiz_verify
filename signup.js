// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import {getAuth ,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCx-XJnvZdLxYxXf-xBq917FfPDRsXRLNA",
  authDomain: "test-597c8.firebaseapp.com",
  projectId: "test-597c8",
  storageBucket: "test-597c8.appspot.com",
  messagingSenderId: "365867476207",
  appId: "1:365867476207:web:e4ed7704b0b4b221f2a71a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const btn = document.getElementById("btn")
btn.addEventListener('click', ()=>{
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
console.log(user);
window.location.href='./login.html'
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage);
  });
})