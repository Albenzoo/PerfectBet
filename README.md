# PerfectBet :soccer: :moneybag:
PerfectBet, an Angular web app designed to help users identify profitable football bet arbitrage opportunities, fetches odds from various bookmakers and compares them to find discrepancies that provide a risk-free way to bet on all possible outcomes of a match and still generate profit. This technique, commonly known as surebet, aims to make a profit regardless of the outcome of a match by betting on all available options through multiple bookmakers and exploiting the differences in odds between them.
It’s common knowledge in the industry that bookmakers always set the odds in their favour and earn money by taking a margin of the odds offered. To illustrate this, imagine a betting site views the chance of an outcome at 50%. They should display odds of 1/1 (2.00) but in order to guarantee money is made, 9/10 (1.90) will instead be put forward.

The betting site will then proceed to balance the investments on each side of a given bet by adjusting odds so they are always in the black.

Exactly the same principle applies to a Sure Bet, the only difference being it’s you in control of the margin and not the bookies.

By going between different bookmakers and coming across differing odds, you are able to set the margin in your favour.

Take a look at this example 

For example, suppose there are three bookmakers offering the following odds for a football match:

Team A: 2.75
Team B: 5.4
Draw: 3.3
In this case, it is possible to bet on all options to guarantee a profit regardless of the outcome of the match.

For example, if you want to bet €207 on the aforementioned football match, you could bet €100 on Team A, €60 on Team B, and €47 on the Draw. In this way, regardless of the outcome of the match, you would make a profit.


How do you calculate the amount to bet on each option?

To calculate the amount to bet on each option and ensure a profit regardless of the outcome of the match, you can use the arbitrage formula:

[(1/Odds Team A) + (1/Odds Team B) + (1/Odds Draw)] x 100 = Percentage of bets needed to ensure a profit

In the example above:
[(1/2.75) + (1/5.4) + (1/3.3)] x 100 = 85.17%

Thus, as long as the value you will get in total does not exceed 100%, this means that the options you are offered are worth your while.
Now, let’s assume that you have decided to wager as much as 100€. In order to estimate the size of your arbitrage bet with each of the bookmakers, you need to multiply your overall stake by the implied probability of each of the bookies. Then, you need to divide the value you have got by the value of the combined market margin. In other words, the formula you need to follow looks like this: (the amount which is intended for soccer betting x the implied probability of the bookie) / total market margin.


## Features :rocket: 
- :mag_right: Scan and compare odds from multiple bookmakers
- :chart_with_upwards_trend: Real-time updates for live matches and odds
- :wrench: Customizable filters for preferred leagues and bookmakers
- :desktop_computer: Mobile and desktop-friendly design

## Risks and problems
There are many risks that you need to know about:
- Betting restrictions and limitations
- Voided Bet/Bookmaker ‘Error’
- Changing Odds
The majority of betting sites have restrictions in place to control betting go above a certain amount. For instance, one betting site could have a limit of 500€, another 100€.

The issue with this is you’re only likely to be notified that you can’t bet the amount intended after you’ve commited.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Angular CLI](https://cli.angular.io/)

### Installation

1. Clone the repository:
git clone https://github.com/Albenzoo/PerfectBet.git


2. Navigate to the project directory:
cd PerfectBet


3. Install the required dependencies:
npm install


4. Start the development server:
ng serve


The app should now be running on `http://localhost:4200/`.

## Contributing

I welcome contributions to PerfectBet! If you'd like to contribute, please follow these steps:

1. Fork the repository
2. Create a new branch for your feature or bugfix (`git checkout -b feature/YourFeature` or `git checkout -b bugfix/YourBugfix`)
3. Commit your changes (`git commit -m 'Add your feature or bugfix description'`)
4. Push the branch to your fork (`git push origin feature/YourFeature` or `git push origin bugfix/YourBugfix`)
5. Open a pull request from your fork to the main repository

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
