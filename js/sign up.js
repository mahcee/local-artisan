const input=document.querySelectorAll("#form input");
const signForms=document.getElementById("form")
const message=document.querySelector("#parag");
console.log(signForms);
signForms.addEventListener("submit",(e)=>{
    e.preventDefault();
    let message=[];
    validateInputs();
})
const validateInputs = () =>{
    input.forEach(function (input){
        const label=input.previousElementSibling;
        if(input.value === ""||input.value == null){
            message.textContent="Kindly fill all fields";
            input.style.border="1px solid red"
            return;
        }
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
// if(message.textContent.toLocaleLowerCase()===""){
//     allValidated=true
// }
//  if(allValidated === true){
//     if(localStorage.getItem("users")=== null){
//         users.push(user)
//         localStorage.setItem("users",JSON.stringify(users));
//     } else{
//         users=JSON.parse(localStorage.getItem("users"));
//         users.push(user);
//         localStorage.setItem("users",JSON.stringify(users))
//     }
//     window.location.href="http://127.0.0.1:5500/shop.html"
//  }
}









