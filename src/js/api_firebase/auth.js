import {
    getAuth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    setPersistence,
    browserSessionPersistence
} from "firebase/auth";
import { app } from "./apiFirebaseConf";
import { refs } from "../base/refs"


const auth = getAuth(app);
setPersistence(auth, browserSessionPersistence);


refs.form.addEventListener('submit', onSingIn);
refs.regBtb.addEventListener('click', onRegUser);


function onRegUser(e) {
    e.preventDefault();
    const email = refs.inputLogin.value;
    const password = refs.inputPass.value;
    
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    
        const user = userCredential.user;
        refs.form.reset();
            window.alert(`User ${email} Created`)
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });
}

function onSingIn(e) {
    e.preventDefault();
    const email = refs.inputLogin.value;
    const password = refs.inputPass.value;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log('Log In');
        refs.form.reset();
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });    
}
// onAuthStateChanged(auth, () => {});
