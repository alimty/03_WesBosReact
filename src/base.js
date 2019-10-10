import Rebase from "re-base";
import firebase from "firebase";
// import { connect } from "react-firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAJwMSCaQreJ7a3q7LmlfvyGCia86VO638",
  authDomain: "wesbosreactj.firebaseapp.com",
  databaseURL: "https://wesbosreactj.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// Thsi is a named export
export { firebaseApp };

//this is a default export
export default base;
