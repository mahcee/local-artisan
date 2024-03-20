const input=document.querySelectorAll("#forms input");
const loginButton=document.querySelector(".sign-up");
console.log(loginButton)
const message=document.querySelector("#parag");

loginButton.addEventListener("click",(e)=>{
    e.preventDefault();
    let messages=[];
    validateInputs();
})

const validateInputs = () =>{
    input.forEach(function (input){
        const label=input.previousElementSibling;
        if(input.value === ""||input.value == null){
            message.textContent="Kindly fill all fields";
            message.style.color="red";
            input.style.border="1px solid red"
            return;
        }
// console.log(loginButton);
        else if(
            document.querySelector("input[name=password").value !==
            document.querySelector("input[name=confirm").value
        ){
            message.textContent="Kindly check password and try again";
            document.querySelector("input[name=pasword]").style.border ="1px solid red";
            document.querySelector("input[name=confirm]").style.border ="1px solid red";
            return;
        }else {
            if (input.name !=="confirm"){
                user[`${input.name}`]=input.value;
            }
            message.textContent="";
            input.style.border="none"
            label.style.color="black"
        }
    })
if(message.textContent.toLocaleLowerCase()===""){
    allValidated=true
 }

}









