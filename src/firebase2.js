import firebase from 'firebase';	

const firebaseConfig = {	
    apiKey: "AIzaSyCxCogR3Wq9cp1hW34WV2_eOQn-xyGWI8w",
    authDomain: "treinazap-7a0bf.firebaseapp.com",
    projectId: "treinazap-7a0bf",
    storageBucket: "treinazap-7a0bf.appspot.com",
    messagingSenderId: "67704279408",
    appId: "1:67704279408:web:0305dab83c992af73affb5"
};	

const firebaseApp = firebase.initializeApp(firebaseConfig);	

const db = firebaseApp.firestore();	
const auth = firebase.auth();	
const provider = new firebase.auth.GoogleAuthProvider();	
const storage = firebase.storage();

export { auth, provider, storage, firebase };	
export default db;  
