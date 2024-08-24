const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    // this for prevent to avoid get and post method because we are  using form
    e.preventDefault()

    // to get value from form 
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');
    const weightGuide = document.querySelector('#weight-guide')
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (height === '' || height === 0 || isNaN(height)) {
        result.innerHTML = `please give valid height ${height}`;
    } else if (weight === '' || weight === 0 || isNaN(weight)) {
        result.innerHTML = `please give valid height ${weight}`;
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        //show the result
        results.innerHTML = `<span>${bmi}</span>`;
    }

    if (bmi <= 18.60) {
        weightGuide.innerHTML = 'Under weight'
    }
    else if (bmi > 18.60 || bmi < 24.90) {
        weightGuide.innerHTML = 'Your BMI is full on control'
    }
    if (bmi >= 24.90) {
        weightGuide.innerHTML = 'over weight'
    }

});
