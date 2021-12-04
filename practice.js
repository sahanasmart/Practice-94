
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDW0cIdb9vb0TSa9bfdzLPDyNd3F9pGVrk",
    authDomain: "kwitter-b9f9d.firebaseapp.com",
    databaseURL: "https://kwitter-b9f9d-default-rtdb.firebaseio.com",
    projectId: "kwitter-b9f9d",
    storageBucket: "kwitter-b9f9d.appspot.com",
    messagingSenderId: "926885240958",
    appId: "1:926885240958:web:e65637f5811a83b255b82f"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

  

  function adduser()
  {
      user_name = document.getElementById("user_name").Value;
      firebase.database().ref("/").child(user_name).uptated({
          
        purpose :" adding user"
      });


  }
  