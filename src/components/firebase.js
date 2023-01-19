import * as  e from './Note';
import {initializeApp} from "firebase/app";
import{GoogleAuthProvider, getAuth, signInWithPopup} from "firebase/auth";
import{getFirestore, collection, onSnapshot,
  addDoc, deleteDoc, doc,
  query, where,
  orderBy, serverTimestamp,
  getDoc,updateDoc} from "firebase/firestore";

const [getPropsValue]=e;

const firebaseConfig = {
    apiKey: "AIzaSyCsRlrJ4ZgWBeOCHRKImjCLKPxQx_0wSY4",
    authDomain: "test-14350.firebaseapp.com",
    projectId: "test-14350",
    storageBucket: "test-14350.appspot.com",
    messagingSenderId: "888883531033",
    appId: "1:888883531033:web:93dc2bdc19f4b72d44c988",
    measurementId: "G-4H1N1RFBZW"
  };

  //initializing firebase connection
  initializeApp(firebaseConfig);

  const provider= new GoogleAuthProvider();
  const auth =getAuth();

  export const signInWithGoogle = () =>{
    signInWithPopup(auth, provider)
  .then((result) => {
    const name=result.user.displayName;
    const email=result.user.email;
    const profilePic=result.user.photoURL;

    sessionStorage.setItem("name", name);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("profilePic", profilePic);

    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    const user = result.user;
    console.log(token);
    console.log(user);

  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    console.log(errorCode, errorMessage, email, credential);
  });
  };
//init services
  const db=getFirestore()
//collection reference
  const colRef = collection(db, 'userdata')

//queries
const q=query(colRef,where("email","==", "gautam.mudbhari16@gmail.com") );

//realtime collection data
  onSnapshot(q, (snapshot)=>{
    let userdata=[]
    snapshot.docs.forEach((doc) => {
        userdata.push({...doc.data(), id: doc.id})
    })
    console.log(userdata)
  })



//   function AnotherComponent(props) {
//     const [title, content] = Note().getPropsValue(props.title, props.content);
//     console.log(title, content);

// }


//    //adding notes
//    const addnoteForm =document.querySelector('.note');
//    function addnotForm() {
//            addDoc(colRef, {
//                email: sessionStorage.getItem("email"),
//                title: title ,
//                note:  content ,
//                createdAt:serverTimestamp()
//            })
//            .then(() =>{
//                addnoteForm.reset()
//            })

//    }



// function AnotherComponent({ titleName, contentName }) {
//     const [exportedTitle, exportedContent] = Note().getPropsValue(titleName, contentName);
//     console.log(exportedTitle, exportedContent);
//     return { title: exportedTitle, content: exportedContent }
// }

export const an = () => {
    // const addnoteForm = document.querySelector('.note');
    // const { title, content } = AnotherComponent({ title: "myTitle", content: "myContent" });
    addDoc(colRef, {
        email: sessionStorage.getItem("email"),
        title: e.titleName,
        note:  e.contentName,
        createdAt: serverTimestamp()
    })
}


  
