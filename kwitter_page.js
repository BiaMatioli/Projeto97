const firebaseConfig = {
      apiKey: "AIzaSyC7bnkYQwJkdsqws0UUDyJt98ZQKilKPTA",
      authDomain: "projeto95-8ae6a.firebaseapp.com",
      databaseURL: "https://projeto95-8ae6a-default-rtdb.firebaseio.com",
      projectId: "projeto95-8ae6a",
      storageBucket: "projeto95-8ae6a.appspot.com",
      messagingSenderId: "314606634502",
      appId: "1:314606634502:web:f2f6ab95959bbe67eca587"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

roomName = localStorage.getItem("roomName");
userName = localStorage.getItem("userName");

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(roomName).push({
            name: userName,
            message: msg,
            like: 0
      });

      document.getElementById("msg").value = "";
}

function getData() {
      firebase.database().ref("/" + roomName).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebaseMessageId = childKey;
                        messageData = childData;
                  }
            });
      });
}

getData();
