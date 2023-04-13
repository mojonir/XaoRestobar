/* Take the inputs by Id */

/* const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const opiniao = document.getElementById("opiniao")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    checkInputs() 
})

function checkInputs() {

    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const opiniaoValue = opiniao.value

    if  (usernameValue.)
} */

var stars = document.querySelectorAll('.star-icon');
                  
document.addEventListener('click', function(e){
  var classStar = e.target.classList;
  if(!classStar.contains('ativo')){
    stars.forEach(function(star){
      star.classList.remove('ativo');
    });
    classStar.add('ativo');
    console.log(e.target.getAttribute('data-avaliacao'));
  }
});