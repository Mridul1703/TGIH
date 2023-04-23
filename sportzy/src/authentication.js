// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDqO3MjTU0fq6d-FlBiP76afyWauDRAcq0",
//   authDomain: "sportzy-auth.firebaseapp.com",
//   projectId: "sportzy-auth",
//   storageBucket: "sportzy-auth.appspot.com",
//   messagingSenderId: "991738387747",
//   appId: "1:991738387747:web:b16147895648eb1b428096",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);

// const provider = new GoogleAuthProvider();

// export const signInWithGoogle = () => {
//   signInWithPopup(auth, provider)
//     .then((result) => {
//     const name = result.user.displayName;
//     const email = result.user.email;
//     const photo = result.user.photoURL;
//     const user = { name, email, photo };
//     console.log(user);
//     localStorage.setItem("user", JSON.stringify(user));
//     document.getElementById("loginBtn").remove();
//     const profile = document.createElement("a");
//     profile.href = "/profile";
//     profile.innerHTML = "Profile";
//     // document.getElementById("loginBtn").appendChild(profile);
//     alert(user.name + " you are logged in successfully")
//     document.getElementById("loginBtn").onclick = "/profile";
//     // document.getElementById("loginBtn").removeEventListener("click", signInWithGoogle);
//     })
//     .catch((error) => {
//       console.log(error.message);
//     });
// };
