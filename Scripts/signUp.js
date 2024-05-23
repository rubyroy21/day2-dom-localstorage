document
  .getElementById("signUpForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const user = {
      fullname: document.getElementById("fullname").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      password: document.getElementById("password").value,
    };
    localStorage.setItem("userInfo", JSON.stringify(user));
    alert("Sign Up successful!");
    window.location.href = "login.html";
  });
