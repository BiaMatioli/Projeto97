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

userName = localStorage.getItem("userName");
document.getElementById("user_name").innerHTML = "Bem-vindo(a) " + userName + "!";

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      roomNames = childKey;
      console.log("Nome da sala: " + roomNames);
      row = "<div class='room_name' id='+roomName+' onclick='redirectToRoomName(this.id)'>#" + roomNames + "</div> <hr>"
      document.getElementById("output").innerHTML += row;
    });
  });
}

getData();

function addRoom() {
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose: ("adicionar sala")
  });

  localStorage.setItem("roomName", roomName);

  window.location = "kwitterPage.html";
}

function redirectToRoomName(name) {
  console.log(name);
  
  localStorage.setItem("roomName", name);

  window.location = "kwitterPage.html";
}

function logout() {
  localStorage.removeItem("userName");

  localStorage.removeItem("roomName");

  window.location = "index.html";
}
