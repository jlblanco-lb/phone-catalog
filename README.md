Phone catalog
========================
An application Phone catalog that works with **Symfony** (backend) and **React** (frontend).

[Symfony][1] is a **PHP framework** for web and console applications.
The "Symfony Application" is a reference application created to show how
to develop applications following the [Symfony Best Practices][3].


[React][2] is a **JavaScript library** for building user interfaces.

## Requirements

* Docker version >= 20.10.5
* Docker-compose >= 1.25.5
* Npm version >= 6.14.4
* Yarn version >=1.22.10

## Setting up the application
Both applications are dockerized and can be separately launched, but also are orchestrated through docker-compose.

### Setup .env variables

Copy example environment file:  `cp .env.example .env`

This will copy and paste the file `.env.example` with `.env` name from the root folder. Leaving the file like that we are setting up MariaDB database, user and port and also we are defining React application port.

Same for Backend: `cp backend/.env.example backend/.env`

### Frontend
A basic frontend app developed with ReactJS. It has been made using libraries from ReactJS and MaterialUI basically.
This app consumes the Backend API.
E2E tests have been made by Cypress.

Go to the `./frontend` folder and launch `yarn install`

## Initiating the application

At this point you will be ready to go, but a database update it is necessary after awaking the app:
```docker-compose up --build```

### Backend
A Symfony backend application was made using the [API Platform][4] bundle, which means that this bundle provides every endpoint.
PHPUnit testing was made for this app.

Installing dependencies.
`docker exec -it phone-catalog_api composer install`

Before accessing into the frontend app, let's update the database for the first time.

`docker exec -it phone-catalog_api php bin/console d:d:d --force --no-interaction`

`docker exec -it phone-catalog_api php bin/console d:d:c --no-interaction`

`docker exec -it phone-catalog_api php bin/console d:s:u --force --no-interaction
`

With the schema of the database aligned, we are ready to GO!.

It will be possible to access by default through `http://localhost:3000` or by the port that was specified in the `.env` file.

## Tests
Testing were made through PHPUnit for the Backend App and Cypress regarding the Frontend App.

#### Launching PHPUnit testing in Symfony
  `docker exec -it phone-catalog_api php bin/phpunit`

In case that you need to populate the database with data, there is a function with **fixtures** that populates the database, you just need to specify the environment because there are two databases, MariaDB and SQLite for testing.

`docker exec -it phone-catalog_api php bin/console hautelook:fixtures:load --ENV=test --no-interaction`
If an environment is not specified, fixtures will be created into MariaDB.

#### Launching E2E Cypress testing for ReactJS
Knowing that Cypress is going to work with `http://localhost:3000` both port and domain should be the same for the website (ReactJS)

Got to the `./frontend` folder and launch `yarn cypress` and just run the five integration specs.

## Troubleshooting
After install yarn under the fronted folder you could get an error about the node engine, so that just launch `yarn install --ignore-engines` this is due to Cypress module.

Permission denied from `/vendor` or `/node_modules` folders. This can appear in case that the order of the commands were launched in a wrong way, so that just change permissions for those folders with `sudo chown -R ./folder`



[1]: https://symfony.com
[2]: https://reactjs.org/
[3]: https://symfony.com/doc/current/best_practices.html
[4]: https://api-platform.com/