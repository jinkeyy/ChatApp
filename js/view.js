const view = {}
view.setActiveScreen = (screenName) => {
  switch(screenName) {
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
    case "chatPage":
      document.getElementById('app').innerHTML = components.chatPage
      const sendMessageForm = document.getElementById('send-message-form')
      sendMessageForm.addEventListener('submit',(e) => {
        e.preventDefault()  
        const message = sendMessageForm.message.value
        console.log(message)
        const messageSend = {
          owner: model.currentUser.email,
          content: message
        }
        if(messageSend.content.trim() != ""){
          view.addMessage(messageSend)
      }
      })
    break
  }
}
view.setErrorMessage=(ElementId,message) => {
  document.getElementById(ElementId).innerText = message
}
view.addMessage = (messageSend) => {
  const messageWrapper = document.createElement('div')
  messageWrapper.classList.add('message')
  if(model.currentUser.email === messageSend.owner ) {
    messageWrapper.classList.add('message-mine')
    messageWrapper.innerHTML = `
    <div class="message-content">${messageSend.content}</div>`
    document.querySelector(".message-text").value=""
    const date = new Date()
    const dataToAdd = {
      content: messageSend.content,
      owner: messageSend.owner,
      createAt: date.toISOString(),
    }
    console.log(dataToAdd)
    model.addToFireStore(dataToAdd)
  }else{
    messageWrapper.classList.add('message-other')
    messageWrapper.innerHTML = `<div class='name'>Other</div>
                                <div class='message-content'>${message.content}</div>`
                                document.querySelector(".message-text").value=""
  }
  document.querySelector('.list-messages').appendChild(messageWrapper)
}
// <div class="message message-mine "> 
//    <div class="message-content">ahihi</div>
// </div>