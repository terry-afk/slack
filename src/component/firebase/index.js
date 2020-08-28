import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDXop3grcXUymZ3T7sk6OIymSxGNXjVPw8",
    authDomain: "slack-clone-4622b.firebaseapp.com",
    databaseURL: "https://slack-clone-4622b.firebaseio.com",
    projectId: "slack-clone-4622b",
    storageBucket: "slack-clone-4622b.appspot.com",
    messagingSenderId: "410119972219",
    appId: "1:410119972219:web:36c918988f578702c889de",
    measurementId: "G-JZD8EZFNWS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;