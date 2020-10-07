const init = () => {
  var firebaseConfig = {
    apiKey: "AIzaSyDfwl8heMOHJ74koqKhclI6Cy6tmSWBgsU",
    authDomain: "chat-app-ab339.firebaseapp.com",
    databaseURL: "https://chat-app-ab339.firebaseio.com",
    projectId: "chat-app-ab339",
    storageBucket: "chat-app-ab339.appspot.com",
    messagingSenderId: "523197512017",
    appId: "1:523197512017:web:1037911cf36c227aeffb70"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  view.setActiveScreen('loginPage')
  console.log(firebase.app().name)
}
window.onload = init
