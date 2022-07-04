const form = document.querySelector('.login-form');

function onFormSubmit(event) {
    event.preventDefault();

    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;

   if (email === "" || password === "") {
        return alert('Bсi поля повинні бути заповнені')
   }


 else {
    const formData = {
        email,
        password
    }
    console.log(formData)
   }
   event.currentTarget.reset()

}

form.addEventListener('submit', onFormSubmit)






