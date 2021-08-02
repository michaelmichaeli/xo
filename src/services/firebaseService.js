import firebase from "firebase";

const config = {
	apiKey: "AIzaSyASxXnbaJUXVhul4jHBW8m-Xq_k9KOx7mM",
	authDomain: "xo-game-f3a16.firebaseapp.com",
	databaseURL:
		"https://xo-game-f3a16-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "xo-game-f3a16",
	storageBucket: "xo-game-f3a16.appspot.com",
	messagingSenderId: "845770346317",
	appId: "1:845770346317:web:211d6ddd42f8055e3ff104",
};
firebase.initializeApp(config);

const db = firebase.firestore()

const auth = firebase.auth()

export { db, auth };
