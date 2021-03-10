var mybutton = document.querySelector('.btn2');
var modal = document.querySelector('.bg');

mybutton.addEventListener('click', function() {
modal.classList.add('cardopen')

 })




modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('bg')) {
        modal.classList.remove('cardopen');
    }
});