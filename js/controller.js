const controller = {  
}
controller.register = (dataRegister) => {
    if(dataRegister.firstName === ""){
        view.setErrorMessage("first-name-error","Please input first name")
    }else{
        view.setErrorMessage("first-name-error","")
    }

    if(dataRegister.lastName === ""){
        view.setErrorMessage("last-name-error","Please input last name")
    }else{
        view.setErrorMessage("last-name-error","")
    }
    if(dataRegister.email === ""){
        view.setErrorMessage("email-error","Please input email")
    }else{
        view.setErrorMessage("email-error","")
    }
    if(dataRegister.password === ""){
        view.setErrorMessage("password-error","Please input password")
    }else{
        view.setErrorMessage("password-error","")
    }
    if(dataRegister.confirmPassword === ""){
        view.setErrorMessage("confirm-password-error","Please input confirm password")
    }else if(dataRegister.password !== dataRegister.confirmPassword){
        view.setErrorMessage("confirm-password-error","Password didn't match")
    }else{
        view.setErrorMessage("confirm-password-error","")
    }
    if(dataRegister.firstName !== "" && dataRegister.lastName !== "" &&  dataRegister.email !== "" && dataRegister.password !== "" && dataRegister.password === dataRegister.confirmPassword){
        console.log(dataRegister)
        model.register(dataRegister)
        
    }
}
controller.login = (dataLogin) => {
    if(dataLogin.email === ""){
        view.setErrorMessage("email-error","Please input email")
    }else{
        view.setErrorMessage("email-error","")
    }
    if(dataLogin.password === ""){
        view.setErrorMessage("password-error","Please input password")
    }else{
        view.setErrorMessage("password-error","")
    }
    if(dataLogin.firstName !== "" && dataLogin.password !== ""){
        model.login(dataLogin)
    }
}