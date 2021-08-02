import React from 'react'
// import google from '../assets/img/google.png'

import firebase from 'firebase/app'
// import { useAuthState } from 'react-firebase-hooks/auth'
// import { auth } from '../services/firebaseService'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const Login = () => {
    // const [user] = useAuthState(auth)

    const uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.GithubAuthProvider.PROVIDER_ID,
        ],
        callbacks: { signInSuccessWithAuthResult: () => false }
    }

    return <div className="login flex column align-center justify-center">
{/* 
        {!user &&
            <> */}
                <h2>Please Sign-In</h2>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            {/* </>} */}
    </div>
}

export default Login;