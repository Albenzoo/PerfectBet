# PerfectBet

Angular web app for Football betting arbitrage, also known as surebet, is a betting technique that aims to make a profit regardless of the outcome of a match. This is done by betting on all available options through multiple bookmakers, exploiting the differences in odds between them.

For example, suppose there are three bookmakers offering the following odds for a football match:

Team A: 2.75
Team B: 5.4
Draw: 3.3
In this case, it is possible to bet on all options to guarantee a profit regardless of the outcome of the match.

How does football betting arbitrage work?

Football betting arbitrage works by betting on all available options through multiple bookmakers. This is done by exploiting the differences in odds between them, so that the amount of bets is balanced to ensure a profit regardless of the outcome of the match.

For example, if you want to bet €207 on the aforementioned football match, you could bet €100 on Team A, €60 on Team B, and €47 on the Draw. In this way, regardless of the outcome of the match, you would make a profit.


How do you calculate the amount to bet on each option?

To calculate the amount to bet on each option and ensure a profit regardless of the outcome of the match, you can use the arbitrage formula:

[(1/Odds Team A) + (1/Odds Team B) + (1/Odds Draw)] x 100 = Percentage of bets needed to ensure a profit

In the example above:
[(1/2.75) + (1/5.4) + (1/3.3)] x 100 = 85.17%

Thus, as long as the value you will get in total does not exceed 100%, this means that the options you are offered are worth your while.
Now, let’s assume that you have decided to wager as much as 100€. In order to estimate the size of your arbitrage bet with each of the bookmakers, you need to multiply your overall stake by the implied probability of each of the bookies. Then, you need to divide the value you have got by the value of the combined market margin. In other words, the formula you need to follow looks like this: (the amount which is intended for soccer betting x the implied probability of the bookie) / total market margin.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## deploy on github pages
Set gh-pages to be the brach to build from in repo settings:
🌹  git checkout -b gh-pages
🌹  git push origin gh-pages
🌹  npm install -g angular-cli-ghpages
🌹  ng build --prod --base-href https://[username].github.io/[repo]/
    ng build --prod --base-href https://albenzoo.github.io/PerfectBet/
🌹  ngh --dir=dist/[project-name]
    ngh --dir=dist/PerfectBet
It is only necessary to set the the--base-href flag once, next time you build the project you can simply run:
🌹  ng build --prod
In order to compile images correctly use path as following:
'./assets/images/image.png'

## try projecy inside dist folder
In order to try the project inside the 'dist' folder make sure you have installed http-serve globally -> 'npm install http-server -g', then inside the project directory (in the terminal) run
http-server dist/[your-project-name]. Now you can visit http://localhost:8080/index.html to view the application
