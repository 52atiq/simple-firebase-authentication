import './App.css';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from './firebase.init'
import { useState } from 'react';


const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({})

const provider = new GoogleAuthProvider();

const handleGoogleSignIn =()=>{
   signInWithPopup(auth, provider)
   .then(result =>{
     const user =result.user;
     setUser(user)
     console.log(user);
   })
   .error(error =>{
     console.error('error', error);
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
       
       
        <button  button onClick={handleGoogleSignIn}>Google Sign In  </button>
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
