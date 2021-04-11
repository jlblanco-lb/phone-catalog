Phone catalog
========================
An application Phone catalog that works with **Symfony** (backend) and **React** (frontend).

[Symfony][1] is a **PHP framework** for web and console applications.
The "Symfony Application" is a reference application created to show how
to develop applications following the [Symfony Best Practices][3].


[React][2] is a **JavaScript library** for building user interfaces.

## Requirements

* docker
* docker-compose

## Running the application
Both applications are dockerized and can be separately launched, but also are orchestrated through docker-compose.

### Setting .env variables:

Launch:  `cp .env.example .env`

This will copy and paste the file `.env.example` with `.env` name from the root folder. Leaving the file like that we are setting up MariaDB database, user and port and also we are defining React application port.

Same for Backend.
Launch: `cp backend/.env.example backend/.env`

For the first time (this will erase the whole data):
```INITIAL_DB=1 docker-compose up --build```

If it is not the first time:
```docker-compose up```

## Backend

## Frontend

## Tests
Testing were made through PHPUnit for the Backend App and Cypress regarding the Frontend App.


[1]: https://symfony.com
[2]: https://reactjs.org/
[3]: https://symfony.com/doc/current/best_practices.html