//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyB6ekiA9jU3qTty8AM4reHXbHcMtM4VpIg",
      authDomain: "kwitter-6304b.firebaseapp.com",
      databaseURL: "https://kwitter-6304b-default-rtdb.firebaseio.com",
      projectId: "kwitter-6304b",
      storageBucket: "kwitter-6304b.appspot.com",
      messagingSenderId: "140656854937",
      appId: "1:140656854937:web:c85ecb0b15c72e1d7ab508",
      measurementId: "G-B310P9VFG1"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);



user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send()
{
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
  name:user_name,
  message:msg,
  like:0
 });

document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
       
//End code
    } });  }); }
getData();
