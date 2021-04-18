var firebaseConfig = {
    apiKey: "AIzaSyDi0g5rg77LK2aM_nv_c_CagPWuA5NXVnQ",
    authDomain: "kwitter-1db83.firebaseapp.com",
    databaseURL: "https://kwitter-1db83-default-rtdb.firebaseio.com",
    projectId: "kwitter-1db83",
    storageBucket: "kwitter-1db83.appspot.com",
    messagingSenderId: "664233710369",
    appId: "1:664233710369:web:a012e76174bbd85829e460"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



//ADD YOUR FIREBASE LINKS

function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}