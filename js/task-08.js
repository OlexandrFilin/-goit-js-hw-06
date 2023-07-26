const formElm = document.querySelector(".login-form");

formElm.addEventListener("submit", onSubmit);
formElm.elements.email.value = "user@ukr.net";

function validationForm(emailOnFrm, pswOnForm) {
  if (emailOnFrm.value.length > 0 && pswOnForm.value.length > 0) {
    return true;
  }
  alert("Увага. Не заповнені данні форми.");
  return false;
}

function onSubmit(evt) {
  const frmElm = evt.currentTarget;
  evt.preventDefault();
  const { email, password } = formElm.elements;

  if (validationForm(email, password)) {
    const dataUser = {
      email: email.value,
      password: password.value,
    };
    console.log(dataUser);
    frmElm.reset();
    return dataUser;
  }
}
