const chk = document.getElementById("chk");

chk.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

let btn = document.querySelector(".i");
window.onscroll = function () {
  if (scrollY >= 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

//===== Jquery ===========

$("#oiiuy").click(function () {
  $("#asdas").slideToggle(2000);
});

$("#asdas").css("display", "none");



