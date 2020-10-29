# cookie-clicker

## Why this project ?

This project was designed as an exercise during my training at [BeCode](https://becode.org/). It is forked from a group project that you can find [here](https://github.com/FredericSanchezBeCode/cookie-clicker/blob/main/README.md)

## Progression

This project is a work in progress.

## Remaining issues

- Quand on achète un bonus en tout début de partie (multiplicateur = 1, autoclic = 0) puis qu'on achète un multiplicateur, il passe à 3. A la fin du bonus il repasse à 1.
  => Le multiplicateur devrait passer à 2 dès l'achat du bonus (c'est déjà le cas mais il ne l'affiche pas), puis à 4 après l'achat du multiplicateur (au lieu de 3), et redescendre à 2 à la fin du bonus (au lieu de 1). En fait il ne devrait pas être possible d'avoir un multiplicateur impair pendant le bonus x2.

- Quand on achète un bonus en tout début de partie (multiplicateur = 1, autoclic = 0) puis qu'on achète un autoclic, il passe à 1 (au lieu de 2). Il monte ensuite 1 à la fois (au lieu de 2).

## Github Page

[Here](https://massartval.github.io/cookie-clicker/)
