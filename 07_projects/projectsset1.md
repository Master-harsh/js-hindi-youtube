# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  document.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target); // it just tell you ki event kha se aa rha hai

    switch (e.target.id) {
      case 'grey':
        body.style.backgroundColor = 'grey';
        break;

      case 'white':
        body.style.backgroundColor = 'white';
        break;

      case 'yellow':
        body.style.backgroundColor = 'yellow';
        break;

      case 'purple':
        body.style.backgroundColor = 'purple';
        break;

      case 'green':
        body.style.backgroundColor = 'green';
        break;

      default:
        body.style.backgroundColor = 'grey';
    }
  });
});



```
