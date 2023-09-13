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
