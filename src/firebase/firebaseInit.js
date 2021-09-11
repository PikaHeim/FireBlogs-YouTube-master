import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBnP_6wwED-YRNts1Z_BOhPOpkv3eBORsM",
  authDomain: "fireblogsyt-c4703.firebaseapp.com",
  projectId: "fireblogsyt-c4703",
  storageBucket: "fireblogsyt-c4703.appspot.com",
  messagingSenderId: "659952433771",
  appId: "1:659952433771:web:b16b93cb7a739438ab8f2e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
