# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [The challenge](#the-challenge)
- [Links](#links)
- [Built with](#built-with)
- [What I learned](#what-i-learned)
- [Author](#author)

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Links

- Solution URL: (https://www.frontendmentor.io/solutions/product-review-challenge-TiHmQ0GTlm)
- Live Site URL: (https://rennan20.github.io/product-preview/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Basic JavaScript

### What I learned

```javascript
rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    if (rating.innerHTML === "none") {
      rating.innerHTML = rate.innerHTML;
    } else {
      rating.innerHTML = "none";
    }
  });
});
```

## Author

- Website - [Rennan Silva](https://rennan20.github.io/meu-portfolio/)
