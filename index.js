let errorIcon = document.querySelector('.submit-wrapper i')
    const errorP =  document.querySelector('.error-p')
    const input = document.getElementById('input1')
    const emailReg =  /^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/i
    let inputValue
const errorDisplay = () => {


    input.addEventListener('keyup', (e)=> {
        inputValue = e.target.value
        if(emailReg.test(inputValue) !== true){
            errorIcon.style.display = "block"
            input.style.borderColor = "red"
            errorP.style.display= "block"
        }else{
            errorIcon.style.display = "none"
            input.style.borderColor = "hsl(0, 36%, 70%)"
            errorP.style.display = "none"
        }
      
    })

}

const errorHide = () => {
    errorIcon.style.display = "none"
            input.style.borderColor = "hsl(0, 36%, 70%)"
            errorP.style.display = "none"
}

  


   
    

