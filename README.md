Phone catalog
========================
An application Phone catalog that works with **Symfony** (backend) and **React** (frontend).

[Symfony][1] is a **PHP framework** for web and console applications.
The "Symfony Application" is a reference application created to show how
to develop applications following the [Symfony Best Practices][3].


[React][2] is a **JavaScript library** for building user interfaces.

Requirements
------------

* docker
* docker-compose

Running the application
------------
Both applications are dockerized and can be separately launched, but also are orchestrated through docker-compose.

For first the time (this will erase the whole data):

```INITIAL_DB=1 docker-compose up --build```

If it is not the first time:

```docker-compose up```

## Backend

## Frontend

## Tests



[1]: https://symfony.com
[2]: https://reactjs.org/
[3]: https://symfony.com/doc/current/best_practices.html