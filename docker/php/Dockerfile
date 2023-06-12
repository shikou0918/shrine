FROM php:8.1-apache

ENV TZ Asia/Tokyo

# COPY php.ini
COPY ./docker/php/php.ini /usr/local/etc/php/php.ini

# COPY httpd.conf
COPY ./docker/apache/httpd.conf /etc/apache2/sites-available/000-default.conf
ADD ./docker/apache/000-default.conf /etc/apache2/sites-enabled/

# Laravelで必要になるmodRewriteを有効化する
RUN mv /etc/apache2/mods-available/rewrite.load /etc/apache2/mods-enabled
RUN /bin/sh -c a2enmod rewrite

# Composer install
COPY --from=composer:2.5 /usr/bin/composer /usr/bin/composer

# install Node.js
COPY --from=node:16.19 /usr/local/bin /usr/local/bin
COPY --from=node:16.19 /usr/local/lib /usr/local/lib

RUN apt-get update && \
    apt-get -y install \
    git \
    zip \
    unzip \
    vim \
    && docker-php-ext-install pdo_mysql bcmath

RUN apt-get -y install libzip-dev
RUN docker-php-ext-install zip

WORKDIR /var/www/repos

RUN chmod 777 /var/www/html
RUN ln -s /var/www/repos/public /var/www/html/public
