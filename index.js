const modal = document.getElementById("myModal");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");
var img = document.querySelectorAll(".zoom-image");
for (var i = 0; i < img.length; i++) {
  img[i].onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
  };
}

// When the user clicks on <span> (x), close the

function closeModal() {
  for (var i = 0; i < img.length; i++) {
    img[i].className += " out";
    setTimeout(function () {
      modal.style.display = "none";
      img[i].className = "modal-content";
    }, 400);
  }
}
modal.onclick = function () {
  closeModal();
};
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});
function validate(email) {
  // let newEmail = email.trim();

  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}
// console.log(validate());
let loginForm = document.getElementById("form");
let showInfor = document.querySelectorAll(".show-infor");
showInfor.forEach((infor) => {
  infor.classList.add("hide");
});
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let email = document.getElementById("email").value;
  console.log(email);
  if (validate(email)) {
    // let a = document.getElementById("form");
    loginForm.classList.add("hide");
    showInfor.forEach((infor) => {
      infor.classList.remove("hide");
    });
  }
});
// function validateEmail() {
//   let email = document.getElementById("email");
//   console.log(email);
//   // let email = form.elements["email"];
//   // let emailAddress = email.value;
//   // let email = document.formValidateUser.email.value;
//   if (validate(email)) {
//     document.getElementsByClassName("form-check-user").classList.add("hide");
//     document.getElementsByClassName("show-infor").classList.remove("hide");
//     document.getElementsByClassName("show-infor").classList.remove("hide");
//   } else {
//   }
// }
