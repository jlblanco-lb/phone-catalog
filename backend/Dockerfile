FROM php:7.4-fpm

ARG username
ARG uid
ARG gid
ARG up_db

ENV up_db=$up_db

RUN (groupadd --gid $gid "$username" || groupadd "$username" || true) && (useradd  -l -m -s "/bin/bash" --gid "$username" --comment '' --uid $uid "$username" || useradd  -l -m -s "/bin/bash" --gid "$username" --comment '' "$username")

# PHP extensions needed for symfony.
RUN docker-php-ext-install pdo_mysql

RUN pecl install apcu

RUN apt-get update && \
apt-get install -y \
libzip-dev wget

RUN docker-php-ext-install zip
RUN docker-php-ext-enable apcu

# Installing composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Installing symfony cli
RUN  wget https://get.symfony.com/cli/installer -O - | bash
RUN mv $HOME/.symfony/bin/symfony /usr/local/bin/symfony

WORKDIR /var/www/html
COPY . ./

# Running a script to make migrations and update the symfony database schema.
RUN ["chmod", "+x", "data/bin/entrypoints-custom.sh"]

ENTRYPOINT [ "sh", "data/bin/entrypoints-custom.sh" ]

CMD [ "symfony", "serve" ]
