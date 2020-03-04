const myForm = document.getElementById('myForm')
let errorMessage

myForm.addEventListener('submit', function(e) {
  let value = document.getElementById("email").value
  errorMessage = value

  if (value.includes('@')) {
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
