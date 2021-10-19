import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification , sendPasswordResetEmail, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initAuth from "../pages/Login/Firebase/firebase.init";
 initAuth();
const useFirebase = () => {
   
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const [error, setError] = useState('')

    const [isLogIn, setIsLogIn] = useState(false)



    const [user, setUser] = useState({});

    
    const auth = getAuth();
    
    const handleEmail = e => {
        setEmail(e.target.value);
     } 
     const handlePassword = e => {
        setPass(e.target.value);
     } 
   
     const toggleLogIn = e =>{
          setIsLogIn(e.target.checked)
     }
   
     const handleReg = e =>{
      
       e.preventDefault();
       if(pass.length < 6) {
         setError('Password Must be atleast 6 Characters')
         return;
       }
       if(!/(?=.*[A-Z].*[A-Z])/.test(pass)){
           setError('Password Must be atleast 2 Uppercase')
           return;
       }
      isLogIn ? processLogIn(email, pass) : createNewUser(email, pass);
     }

     const createNewUser = (email, pass) =>{
        createUserWithEmailAndPassword(auth, email, pass)
        .then(result => {
          const user = result.user;
          console.log(user);
          setError('');
          verifyEmail();
        })
        .catch(error =>{
          setError(error.message);
        })
      }
    
      const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
        .then(result => {console.log(result); })
      }
    
      const processLogIn = (email, pass) => {
        signInWithEmailAndPassword(auth, email, pass)
        .then(result =>{
            
           
            
            setError('');
          })
          .catch(error =>{
            setError(error.message)
          })
      }
    
      const handleResetPass = () =>{
        sendPasswordResetEmail(auth, email)
        .then(result =>{
          console.log(result)
        })
      }





    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
    }
      
     useEffect( () =>{
       const unsubscribed=  onAuthStateChanged(auth, user =>{
             if(user){
                 setUser(user);
             }
             else{
                 setUser({})
             }
         });
         return () => unsubscribed;
     }, [])

    const logOut = () => {
        signOut(auth)
        .then(() =>{});
    }
    return {
        user,
        isLogIn,
        handleReg,
        handleEmail,
        handlePassword,
        toggleLogIn,
        handleResetPass,
        error,
        setError,
        signInUsingGoogle,
        logOut
    }
}
export default useFirebase;