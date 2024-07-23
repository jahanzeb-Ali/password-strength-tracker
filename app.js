const eyeBtn = document.getElementById('btn');
const passWordField = document.getElementById("password-field");
const listItem = document.querySelectorAll('.list-item')
eyeBtn.addEventListener('click', ()=>{
    eyeBtn.classList.toggle("fa-eye")
    eyeBtn.classList.toggle("fa-eye-slash")
    passWordField.type = passWordField.type == "password"?"text":"password";
})

let validationRegex = [
    { regex: /[0-9]/ },
    { regex: /.{12,}/ }, 
    { regex: /[^A-Za-z0-9]/ }, 
    { regex: /[a-z]/ }, 
    { regex: /[A-Z]/ } 
];
passWordField.addEventListener("keyup", () =>{
    validationRegex.forEach((item,i) => {
        let isValid = item.regex.test(passWordField.value);
        if(isValid){
            listItem[i].classList.add("checked")
        }else{
            listItem[i].classList.remove("checked")
        }
    });
})