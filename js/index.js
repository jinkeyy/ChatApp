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
  console.log(firebase.app().name)
  firebase.auth().onAuthStateChanged((res) => {
    console.log(res)
    if (res) {
      if (res.emailVerified) {
        model.currentUser = {
          displayName: res.displayName,
          email: res.email
        }
        console.log(model.currentUser)
        view.setActiveScreen('chatPage')
      } else {
        view.setActiveScreen('loginScreen')
        alert('Please verify your email')
      }
    } else {
      view.setActiveScreen('registerPage')
    }
  })
  firestoreQueries()
}
window.onload = init
firestoreQueries = async () =>{
  //get one document
          // const response = await  firebase.firestore().collection("Users").doc("j5HryNwfnErOCcqFE3u7").get()
          // const user = getDataFromDoc(response)
          // console.log(user)
  //get many document
          // const response = await firebase.firestore().collection("Users").where("age",">",18).get()
          // for(let i = 0 ; i<response.docs.length;i++){
          //   const user = getDataFromDoc(response.docs[i]);
          //   console.log(user)
          // }  
          // console.log(getDataFromDocs(response.docs))      
  //add new document
          // const dataToAdd = {
          //   name: "Nguyen Thi B",
          //   age:19
          // }
          // firebase.firestore().collection("Users").add(dataToAdd)
  //update document
          // const dataToUpdate = {
          //   name : "Nguyen Trach T",
          //   age:24,
          //   phone: firebase.firestore.FieldValue.arrayUnion("12345")
          // }
          // const ID = "lLUFm7s7WXMfi7aHhDZI"
          // firebase.firestore().collection("Users").doc(ID).update(dataToUpdate)
  //delete document
          // const docID = "lLUFm7s7WXMfi7aHhDZI"
          // firebase.firestore().collection("Users").doc(docID).delete()
}
// getDataFromDoc = (res) =>{
//   const data = res.data()
//   data.id = res.id
//   return data
// }
// getDataFromDocs = (response) => {
//   return response.map(getDataFromDoc)
//   // const arr = []
//   // for(let i = 0 ; i<response.length;i++){
//   //   const user = response[i].data();
//   //   user.id = response[i].id
//   //   arr.push(user)
//   // }    
//   // return arr
// }
