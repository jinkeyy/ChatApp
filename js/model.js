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
        firebase.auth().signInWithEmailAndPassword(email, password)
        alert("Đăng nhập thành công")
    } catch (error) {
        console.log(error)
        alert("Tài khoản hoặc mật khẩu sai\n vui lòng nhập lại !!!")
    }
}