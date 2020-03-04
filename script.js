const checkEmailIsValid = (value) => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  return regex.test(value)
}

const myForm = document.getElementById('myForm')
let errorMessage

myForm.addEventListener('submit', function(e) {
  let value = document.getElementById("email").value
  const email = checkEmailIsValid(value)
  if (email) {
    errorMessage = 'Adresse email ajoutée !'
  } else {
    errorMessage = 'Veuillez entrer une adresse e-mail valide'
  }

  document.getElementById("error-message").innerHTML = errorMessage
  e.preventDefault()
})

myForm.addEventListener('reset', function(e) {
  e.preventDefault()
})


