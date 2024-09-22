# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 2

```javascript
const form = document.querySelector('form');

// this usecase will give you empty value
// const hight = parseInt(document.querySelector('#hight').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
  // also print comment
  // const BMI = (results.innerHTML = `<span>${bmi}</span>`);
  // if (BMI < 18.6) {
  //   results.innerHTML = `You are Under weight ${BMI}`;
  // } else if (BMI > 18.6 && BMI < 24.9) {
  //   results.innerHTML = `You are Normal ${BMI}`;
  // } else {
  //   results.innerHTML = `You are Overweight ${BMI}`;
  // }
});




```

