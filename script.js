/* FOR BURGER MENU */

const hamb = document.querySelector('#hamb');
const popup = document.querySelector('#popup');
const menu = document.querySelector('#menu').cloneNode(1);
const body = document.body


hamb.addEventListener('click', hambHandler);

function hambHandler (e) {
    e.preventDefault();
    popup.classList.toggle('open');
    body.classList.toggle('noscroll')
    renderPopup()
}

function renderPopup() {
    popup.appendChild(menu)
}

const links = Array.from(menu.children);

links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}

////////////////////////////////////////////////

/* FOR CONTACT-FORM */

let nameError = document.getElementById('name-error')
let phoneError = document.getElementById('phone-error')
let submitError = document.getElementById('submit-error')

function validateName() {
   let name = document.getElementById('contact-name').value;

   if(name.length == 0) {
     nameError.innerHTML = 'Name is required';
     return false;
   }
   else if(name.length < 3) {
    nameError.innerHTML = 'Name must be longer than 2 letters';
    return false;
   }
   else if(name.length > 15) {
    nameError.innerHTML = 'Name must be shorter than 16 letters';
    return false;
   }
   else if(!name.match(/^[A-Za-z]*$/)){
   nameError.innerHTML = 'Name must be written only in Latin letters';
   return false;
   }
   else {nameError.innerHTML =  '<span style="color: green">Success</span>'
   return true;
  } 
}

function validatePhone() {
  let phone = document.getElementById('contact-phone').value;

  if(phone.length == 0) {
    phoneError.innerHTML = 'Phone number is required';
    return false;
  }
  else if(phone.length < 10) {
    phoneError.innerHTML = 'Phone number cannot be less than 10 digits';
    return false;
  }
  else if(phone.length > 12) {
    phoneError.innerHTML = 'Phone number cannot be more than 12 digits';
    return false;
  }
  else if(!phone.match(/^[0-9]*$/)){
    phoneError.innerHTML = 'Only digits';
    return false;
  }
  else {phoneError.innerHTML =  '<span style="color: green">Success</span>'
  return true;
 } 

}

function validationForm() {
  if(!validateName() || !validatePhone()) {
    submitError.innerHTML = 'Please fix error to send';
    submitError.style.display = 'block';
    setTimeout(function() {submitError.style.display = 'none'}, 3000)
    return false;
  }
  if(validateName() && validatePhone()) { 
    Swal.fire(
      'Success!',
      'Thank you! Your data has been sent. The manager will contact within 60 minutes',
      'success'
    )
  }
}