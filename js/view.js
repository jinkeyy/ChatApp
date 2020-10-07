const view = {}
view.setActiveScreen = (screenName) => {
  switch(screenName) {
    case 'welcomeScreen':
      document.getElementById('app').innerHTML 
      = components.welcomPage
    break
    case 'registerPage':
      document.getElementById('app').innerHTML
      = components.registerPage
      document.getElementById('redirect-login')
      .addEventListener('click', () => {
        view.setActiveScreen('loginPage')
      })
      const registerForm = document.getElementById('register-form')
      registerForm.addEventListener('submit', (event) => {
        event.preventDefault()
        const dataRegister = {
          firstName: registerForm.firstName.value,
          lastName: registerForm.lastName.value,
          email:registerForm.email.value,
          password:registerForm.password.value,
          confirmPassword:registerForm.confirmPassword.value,

        }
        console.log(dataRegister);
        controller.register(dataRegister);
      })
    break
    case 'loginPage':
      document.getElementById('app').innerHTML
      = components.loginPage
      document.getElementById('redirect-register')
      .addEventListener('click', () => {
        view.setActiveScreen('registerPage')
      })
      const loginForm = document.getElementById("login-form")
    loginForm.addEventListener("submit",(event) =>{
      event.preventDefault()
      const dataFrom = {
        email: loginForm.email.value,
        password: loginForm.password.value
      }
      console.log(dataFrom)
      controller.login(dataFrom)
    })
    break
    break
  }
}
view.setErrorMessage=(ElementId,message) => {
  document.getElementById(ElementId).innerText = message
}
