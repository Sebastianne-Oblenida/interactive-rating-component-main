const rateValues = document.querySelectorAll('label');
const form = document.querySelector('form');
for (let rateColor of rateValues) {
    rateColor.addEventListener('click', function(x) {
        for (let reset of rateValues) {
            reset.style.backgroundColor = 'hsl(213, 19%, 25%)';
            reset.style.color = 'hsl(216, 12%, 54%)';
        }
        rateColor.style.backgroundColor = 'rgb(123,123,123)';
        rateColor.style.color = 'hsl(0, 0%, 100%)';
    })
}

const rate = document.querySelector('#userRate')
form.addEventListener('submit', function(evt) {
    evt.preventDefault();
    rate.textContent = form.rate.value ? form.rate.value: '0'
    document.querySelector('#ratingStart').style.display = 'none'
    document.querySelector('#thankYouState').style.display = 'block'
})
