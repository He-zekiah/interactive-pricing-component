const switchCtn = document.getElementById('light');
const switchBtn = document.getElementById('round');
const price = document.getElementById('price');
const price2 = document.getElementById('price2');

switchCtn.addEventListener('click', function() {
    switchCtn.classList.toggle('active');
    switchBtn.classList.toggle('active2');
    price.classList.toggle('hidden');
    price2.classList.toggle('show');
})