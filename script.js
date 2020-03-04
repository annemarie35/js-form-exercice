const myForm = document.getElementById('myForm')
let errorMessage

myForm.addEventListener('submit', function(e) {
  errorMessage = "Message affiché"
  document.getElementById("error-message").innerHTML = errorMessage
  e.preventDefault()
})

myForm.addEventListener('reset', function(e) {
  e.preventDefault()
})
