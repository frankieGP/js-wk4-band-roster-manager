# Band Roster Manager Website

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.26.

## Setup and Install
Run the following in your terminal:

        $ npm install -g angular-cli
        $ npm install -g typescript
        $ npm install bower -g
        $ bower init
        $ bower install bootstrap --save
        $ apm install atom-typescript

This project uses the Firebase cloud service to store data. You'll need a Firebase account to setup the app. Create an account at http://firebase.google.com, then you should be taken to a user dashboard area with an option to Create a New Project. Select this option, provide a name for your new project, and select your Country/region from the drop-down menu. You'll then be taken to an "Overview" area. Where you'll be offered three options:

        Add Firebase to your iOS app
        Add Firebase to your Android app
        Add Firebase to your web app
Select Add Firebase to your web app. Firebase should respond with a pop-up modal window. Create a new file called api-keys.ts in the src/app directory. Then, place the Firebase credentials from the modal window in it like this:

                  export var masterFirebaseConfig = {
                    apiKey: "xxxx",
                    authDomain: "xxxx.firebaseapp.com",
                    databaseURL: "https://xxxx.firebaseio.com",
                    storageBucket: "xxxx.appspot.com",
                    messagingSenderId: "xxxx"
                  };
Now, from the Firebase Console, select the Database option from the navbar on the left, then choose RULES from the blue navbar at the top of the page. Change both the ".read", and ".write" properties here to "true" like this:

          {
            "rules": {
              ".read": true,
              ".write": true
            }
          }

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
