import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyCBL9sbnx9GMQ26BWZK25IFTCDUNFfKQIQ",
    authDomain: "beauty-box-f90bb.firebaseapp.com",
    databaseURL: "https://beauty-box-f90bb.firebaseio.com",
    projectId: "beauty-box-f90bb",
    storageBucket: "beauty-box-f90bb.appspot.com",
    messagingSenderId: "764036766413"
  };
  const fire=firebase.initializeApp(config);
  export default fire;