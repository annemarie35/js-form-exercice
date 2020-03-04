const myForm = document.getElementById('myForm')
let errorMessage

myForm.addEventListener('submit', function(e) {
    // alert('Vous avez envoyé le formulaire !\n\nMais celui-ci a été bloqué pour que vous ne changiez pas de page.');
    e.preventDefault()
})

myForm.addEventListener('reset', function(e) {
    // alert('Vous avez réinitialisé le formulaire !')
    e.preventDefault()
})

errorMessage = "Message affiché"
document.getElementById("error-message").innerHTML = errorMessage
