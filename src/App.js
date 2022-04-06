import './App.css';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from './firebase.init'
import { useState } from 'react';


const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({})

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider ();

// For Google Authentication
const handleGoogleSignIn =()=>{
   signInWithPopup(auth, googleProvider )
   .then(result =>{
     const user =result.user;
     setUser(user)
     console.log(user);
   })
   .error(error =>{
     console.error('error', error);
   })
}

//For Github Authentication 

   const handleGithubSignIn =()=>{
     signInWithPopup(auth, githubProvider)
     .then(result =>{
       const user= result.user;
       setUser(user)
       console.log(result);
     })
     .catch( error => {
       console.log(error);
     })
   }

    const handleSignOut =()=>{
    signOut(auth)
    .then( () =>{
     setUser({});
    })
    .catch( error =>{
      setUser({});
    })

    }
  return (
    <div className="App">

      {
        user.email ?  <button onClick={handleSignOut}>Sign out</button>:
       
       
        <>
          <button  button onClick={handleGoogleSignIn}>Google Sign In  </button>
          <button onClick={handleGithubSignIn }> Github Sign In </button>
           </>
      }

      <h2>Name: {user.displayName}</h2>
      <p>Email: {user.email}</p>
        <p>{user.uid}</p>
       <div>
       <img src={user.photoURL} alt="" />
       </div>
    </div>
     
  );
}

export default App;
