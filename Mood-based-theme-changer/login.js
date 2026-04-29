// const loginbtn = document.addEventListener("DOMContentLoaded",//to render to login page//from page 1 to 2 //
//   function () {
//     const button = document.querySelector(".buttonLogin");
//     button.addEventListener("click", function () {
//       window.location.href = "login.html";
//     });
//   });
// const reverseLogin = document.addEventListener("DOMContentLoaded",//to render to home page//from page 2 to 1//
//   function () {
//     const button = document.querySelector(".reverse");
//     button.addEventListener("click", function () {
//       window.location.href = "project.html";
//     });
//   });
// const MainPage = document.addEventListener("DOMContentLoaded",//to render to main project page//
//   function () {
//     const button = document.querySelector(".subBtn");
//     button.addEventListener("click", function () {
//       window.location.href = "mainProject.html";
//     });
//   });
document.addEventListener("DOMContentLoaded", function () {

  const loginBtn = document.querySelector(".buttonLogin");
  if (loginBtn) {
    loginBtn.addEventListener("click", function () {
      window.location.href = "login.html";
    });
  }

  const reverseBtn = document.querySelector(".reverse");
  if (reverseBtn) {
    reverseBtn.addEventListener("click", function () {
      window.location.href = "project.html";
    });
  }

  const subBtn = document.querySelector(".subBtn");
  if (subBtn) {
    subBtn.addEventListener("click", function () {
      window.location.href = "mainProject.html";
    });
  }

});