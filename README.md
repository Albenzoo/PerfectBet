# PerfectBet

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
