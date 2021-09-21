
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBDSI6PrXYFYWP60UnaDgYgcxlNvOu_48o",
      authDomain: "kwitter-87d8d.firebaseapp.com",
      projectId: "kwitter-87d8d",
      storageBucket: "kwitter-87d8d.appspot.com",
      messagingSenderId: "893414532257",
      appId: "1:893414532257:web:2d66e4972d0dd84ed97ce0"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      
      //End code
      });});}
getData();
