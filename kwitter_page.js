firebaseConfig = {
    apiKey: "AIzaSyAop54AbP_yiw4jDw-vzguUIemaTR3Zwac",
    authDomain: "lets-chat-web-app-c4c9d.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-c4c9d-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-c4c9d",
    storageBucket: "lets-chat-web-app-c4c9d.appspot.com",
    messagingSenderId: "342519371091",
    appId: "1:342519371091:web:c4369f8e773dc53040fda6"
  };
  firebase.initializeApp(firebaseConfig);
   user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    function send()
    {
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
      });
      document.getElementById("msg").value="";
    }