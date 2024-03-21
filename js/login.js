const input = document.querySelectorAll(".forms input");
const loginButton = document.querySelector(".login");
console.log(loginButton);
const message = document.querySelector("#parag");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  let messages = [];
  validateInputs();
});

const validateInputs = () => {
  const user = {};
  const users = JSON.parse(localStorage.getItem("users"));
  let allValidated;
  input.forEach(function (input) {
    const label = input.previousElementSibling;
    if (input.value === "" || input.value == null) {
      message.textContent = "Kindly fill all fields";
      message.style.color = "red";
      input.style.border = "1px solid red";
      return;
    }

    // console.log(loginButton);
    else {
      user[`${input.name}`] = input.value;

      message.textContent = "";
      input.style.border = "none";
      label.style.color = "black";
    }
  });

  if (message.textContent.toLocaleLowerCase() === "") {
    allValidated = true;
  }

  if (allValidated) {
    users.find((userItem) => {
      console.log(userItem);

      if (
        user.username === userItem.usermame &&
        user.password === userItem.password
      ) {
        message.textContent = "";
        localStorage.setItem("currentUser", user);
        location.href = "http://127.0.0.1:5500";
      } else {
        message.textContent = "Wrong Credentials";
        console.log("not logged in");
      }
    });
  }
};
