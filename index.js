//function zoom image
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

//function validate email
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
  let emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailRegex.test(email)) {
    return true;
  }
  return false;
}
let loginForm = document.getElementById("form");
let showInfor = document.querySelectorAll(".show-infor");
let smallHelp = document.getElementById("emailHelp");
//hide infor by for each
showInfor.forEach((infor) => {
  infor.classList.add("hide");
});
//click submit email
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let email = document.getElementById("email").value;
  console.log(email);

  if (validate(email) == true) {
    // let a = document.getElementById("form");
    console.log(validate());
    loginForm.classList.add("hide");
    showInfor.forEach((infor) => {
      infor.classList.remove("hide");
    });
  } else {
    console.log(smallHelp);
    smallHelp.innerText = "Email không hợp lệ";
  }
});
//function show more, show less     padding-left: 25px;
let expInfor = document.querySelectorAll(".show-exp");
expInfor.forEach((expInfor) => {
  expInfor.classList.add("hide");
});
//hover exp
let listDataExpShowMore = document.querySelectorAll(".exp-show-more");
let listButtonShowMore = document.querySelectorAll(".button-show-more-exp");
let listButtonShowLess = document.querySelectorAll(".button-show-less-exp");
for (let i = 0; i < listDataExpShowMore.length; i++) {
  listDataExpShowMore[i].addEventListener("mouseover", mouseOver);
  function mouseOver() {
    if (expInfor[i].classList.contains("hide")) {
      listButtonShowMore[i].classList.remove("hide");
      listButtonShowLess[i].classList.add("hide");
    } else {
      listButtonShowMore[i].classList.add("hide");
      listButtonShowLess[i].classList.remove("hide");
    }
  }
  listDataExpShowMore[i].addEventListener("mouseout", mouseOut);
  function mouseOut() {
    listButtonShowMore[i].classList.add("hide");
  }
}

// abc.addEventListener("mouseover", mouseOver);
for (let i = 0; i < expInfor.length; i++) {
  listButtonShowMore[i].addEventListener("click", () => {
    expInfor[i].classList.remove("hide");
  });
  listButtonShowLess[i].addEventListener("click", () => {
    expInfor[i].classList.add("hide");
  });
}
let hocVan = document.getElementById("button-Hoc-Van");
let kinh = document.getElementById("kinh");
//check tablet
let sessionExp = document.getElementById("session-exp");
let x = window.matchMedia("screen and (max-width: 768px)");
let postionHocVan = document.getElementById("learning");
// .classList.add("postion-md-hoc-van");
let postionSoThich = document.getElementById("hobbies");
// .classList.add("postion-md-so-thich");
let postionHoatDong = document.getElementById("activities");
// .classList.add("postion-md-hoat-dong");
let postionKinhNghiem = document.getElementById("experience");
// .classList.add("postion-md-kinh-nghiem");
let postionNgonNgu = document.getElementById("language");
// .classList.add("postion-md-ngon-ngu");
let postionKyNang = document.getElementById("skill");
// .classList.add("postion-md-ky-nang");
if (x.matches) {
  console.log(window.innerWidth);
}
let projects = document.querySelectorAll(".project");
projects.forEach((project) => {
  project.addEventListener("click", function () {
    location.href = "digital-cv.html";
  });
});
