FROM php:7.4-fpm

# PHP extensions needed for symfony.
RUN docker-php-ext-install pdo_mysql

RUN pecl install apcu

RUN apt-get update && \
apt-get install -y \
libzip-dev wget

RUN docker-php-ext-install zip
RUN docker-php-ext-enable apcu

# Installing composer
COPY --from=composer /usr/bin/composer /usr/bin/composer

# Installing symfony cli
RUN  wget https://get.symfony.com/cli/installer -O - | bash
RUN mv $HOME/.symfony/bin/symfony /usr/local/bin/symfony

WORKDIR /var/www/html
COPY . ./

CMD [ "symfony", "serve" ]
