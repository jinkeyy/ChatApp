const model = {

}
model.register =  async ({firstName,lastName,email,password}) => {
    console.log("hello")
    try {
        await firebase.auth().createUserWithEmailAndPassword(email,password)


        firebase.auth().currentUser.updateProfile({
            displayName : firstName + "" +lastName
        })

       firebase.auth().currentUser.sendEmailVerification()
       alert("Đăng kí tài khoản thành công")
       view.setActiveScreen("loginPage")
        
    } catch (err) {
        console.log(err)
        alert(err.message)
    }
   
}
model.login = async({email,password}) => {
    console.log("Đăng nhập")
    try {
        const response = await firebase.auth().signInWithEmailAndPassword(email,password)
        alert("đăng nhập thành công")
        console.log(response)
    } catch (err) {
        alert("Tài khoản hoặc mật khẩu sai Vui lòng nhập lại !!!")
        console.log(err.message)
    }
}
model.addToFireStore = async (data) => {
     const ID = "0fMjl9jcFDCXmU4kIr5S"
     const dataToAdd = {
        messages:firebase.firestore.FieldValue.arrayUnion(data)
     }
     await firebase.firestore().collection("conversations").doc(ID).update(dataToAdd)
}