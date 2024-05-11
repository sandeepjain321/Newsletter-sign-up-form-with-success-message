let container = document.querySelector(".container");
let signButton = document.querySelector(".sign-up");
let sucess = document.querySelector(".sucess");
let email = document.querySelector(".mail");
let p = document.querySelector(".sucess-para");
let dissmiss = document.querySelector(".sucess-button");

sucess.classList.add("hidden");

signButton.addEventListener("click", () => {
  container.classList.add("hidden");
  sucess.classList.remove("hidden");
  p.innerText = `A confirmation email has been sent to ${email.value}Please open
  it and click the button inside to confirm your subscription.`;
});

dissmiss.addEventListener("click", () => {
  container.classList.remove("hidden");
  sucess.classList.add("hidden");
});
