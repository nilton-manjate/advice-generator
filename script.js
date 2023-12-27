"use strict";

/* Declaring variables */
const text = document.getElementsByTagName("p")[0];
const dice = document.getElementsByClassName("dice")[0];
const num = document.getElementsByTagName("span")[0];

dice.addEventListener("click", function () {
const firstText = `"It is easy to sit up and take notice, \
                   what's difficult is getting up and \
                   taking action."`;

  switch (num.textContent) {
    case "117":
      num.textContent = "118";
      text.textContent = `"All our dreams can come true, \
                         if we have the courage to pursue them."`;
      break;

    case "118":
      num.textContent = "119";
      text.textContent = `"The secret of getting \
      ahead is getting started." ― Mark Twain`;
      break;

    case "119":
      num.textContent = "120";
      text.textContent = `"The best time to plant a tree was 20 \
                         years ago. The second best time is now."`;
      break;

    case "120":
      num.textContent = "121";
      text.textContent = `"It’s hard to beat a person who \
                         never gives up". ― Babe Ruth`;
      break;

    case "121":
      num.textContent = "122";
      text.textContent = `"If people are doubting how far you can \
                         go, go so far that you can’t hear them \
                         anymore." ― Michele Ruiz`;
      break;

    case "122":
      num.textContent = "123";
      text.textContent = `"Everything you can imagine is real." \
                         ― Pablo Picasso`;
      break;

    case "123":
      num.textContent = "124";
      text.textContent = `"Do one thing every day that scares you." \
                         ― Eleanor Roosevelt`;
      break;

    case "124":
      num.textContent = "117";
      text.textContent = firstText;
      break;
  }

});