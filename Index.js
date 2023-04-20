/* Ver com o sor pq o formulario não funcionou e as estrelas não está pintando */

//* Star functionality */
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

/* Submit function */
function Submit(event) {
  form.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
  event.preventDefault();
}

const form = document.getElementById('form');
const name = document.getElementById('name');
const oponiao = document.getElementById('oponiao');
form.addEventListener('submit', 'name',  Submit); 