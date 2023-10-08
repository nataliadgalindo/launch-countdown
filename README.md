# Frontend Mentor - Launch countdown timer solution

This is a solution to the [Launch countdown timer challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/launch-countdown-timer-N0XkGfyz-). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See hover states for all interactive elements on the page
- See a live countdown timer that ticks down every second (start the count at 14 days)
- **Bonus**: When a number changes, make the card flip from the middle

### Screenshot

![screenshot of my countdown timer solution](/public/assets/images/countdown-timer.jpeg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

Understand more about the ::before and ::after pseudo elements and positioning for the side semi-circles.

```css
.time::before,
.time::after {
  content: "";
  position: absolute;
  width: 8px;
  height: 4px;
  background-color: var(--very-dark-blue);
  top: 50%;
  transform: translateY(-50%) rotate(90deg);
}

.time::before {
  border-radius: 10px 10px 0 0;
  left: -3px;
}

.time::after {
  border-radius: 0 0 10px 10px;
  right: -3px;
}
```

### Useful resources

- [CSS box shadow property](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) - Helpful for understanding the different shorthands of the box-shadow property.
- [Javascript's Date object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) - Helped with the date aspects of the countdown and learning everything you do with Date.

## Author

- Frontend Mentor - [@nataliadgalindo](https://www.frontendmentor.io/profile/nataliadgalindo)
